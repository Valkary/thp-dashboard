from flask import Flask
import pandas as pd
from datetime import date, timedelta
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

def get_last_thursday():
    now = date.today()
    closest_thursday = now + timedelta(days=(3 - now.weekday()))
    return (closest_thursday if closest_thursday < now
            else closest_thursday - timedelta(days=7))


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/api/incidencias/semana")
def faltas_semana():
    past_week = (date.today() - timedelta(days=9)).strftime("%Y/%m/%d")

    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlCatINCID = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catINCID"
    urlINCIDENCIAS = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=INCIDENCIAS"

    CATTRAB = pd.read_csv(urlCatTRAB)
    CATINCID = pd.read_csv(urlCatINCID)
    INCIDENCIAS = pd.read_csv(urlINCIDENCIAS)

    INCIDENCIAS["Fecha"] = pd.to_datetime(INCIDENCIAS["Fecha"], dayfirst=True)
    MERGED_INCIDENCIAS = INCIDENCIAS.merge(
        CATTRAB, on=["idTrabajador"], how="right")
    MERGED_INCIDENCIAS = MERGED_INCIDENCIAS.merge(
        CATINCID, on=["idIncidencia"], how="right")

    cols = ["Fecha", "Nombres", "Descripcion"]

    INCIDENCIAS_SEMANA = MERGED_INCIDENCIAS.loc[MERGED_INCIDENCIAS['Fecha'] >= past_week]
    INCIDENCIAS_SEMANA = INCIDENCIAS_SEMANA.loc[(MERGED_INCIDENCIAS['idIncidencia'] != "I") & (
        MERGED_INCIDENCIAS['idIncidencia'] != "B") & (MERGED_INCIDENCIAS['idIncidencia'] != "N")]

    return INCIDENCIAS_SEMANA[cols].to_json()


@app.route("/api/reportes/registro")
def reporte_registro_produccion():
    from datetime import date
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlMEZCLADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=MEZCLADO"
    urlLAMINADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=LAMINADO"
    urlFORMULADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=FORMULADO"
    urlVULCANIZADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=VULCANIZADO"
    urlCARDADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=CARDADO"

    CATTRAB = pd.read_csv(urlCatTRAB)
    MEZCLADO = pd.read_csv(urlMEZCLADO)
    LAMINADO = pd.read_csv(urlLAMINADO)
    FORMULADO = pd.read_csv(urlFORMULADO)
    VULCANIZADO = pd.read_csv(urlVULCANIZADO)
    CARDADO = pd.read_csv(urlCARDADO)

    last_thursday = get_last_thursday()
    today = date.today()

    today = today.strftime("%Y/%m/%d")
    last_thursday = last_thursday.strftime("%Y/%m/%d")

    MEZCLADO["Fecha"] = pd.to_datetime(MEZCLADO["Fecha"], dayfirst=True)
    LAMINADO["Fecha"] = pd.to_datetime(LAMINADO["Fecha"], dayfirst=True)
    FORMULADO["Fecha"] = pd.to_datetime(FORMULADO["Fecha"], dayfirst=True)
    VULCANIZADO["Fecha"] = pd.to_datetime(VULCANIZADO["Fecha"], dayfirst=True)
    CARDADO["Fecha"] = pd.to_datetime(CARDADO["Fecha"], dayfirst=True)
    LAMINADO["IdTrabajador02"] = LAMINADO["IdTrabajador02"].astype(int)
    FORMULADO["idTrabajador02"] = pd.array(FORMULADO["idTrabajador02"])

    FILTERED_FORMULADO = FORMULADO[FORMULADO["Fecha"].isin(
        pd.date_range(last_thursday, today))]
    MERGED_FORMULADO = FILTERED_FORMULADO.merge(
        CATTRAB, on=["idTrabajador"], how="right")

    # Create a dictionary to store the indices for each 'idTrabajador02'
    formulado_indices = {}

    # Iterate over the rows of 'MERGED_FORMULADO' and populate the indices_dict
    for index, row in MERGED_FORMULADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row["idTrabajador"]
            id_trabajador_02 = row['idTrabajador02']
            fecha = row['Fecha']

            formulado_indices[int(id_trabajador_01)] = fecha

            # Skip if 'idTrabajador02' is NaN
            if pd.isna(id_trabajador_02):
                continue

            # Add the index to the list of indices for 'idTrabajador02'
            for id in id_trabajador_02.split(','):
                formulado_indices[int(id)] = fecha

    FILTERED_MEZCLADO = MEZCLADO[MEZCLADO["Fecha"].isin(
        pd.date_range(last_thursday, today))]

    MERGED_MEZCLADO = FILTERED_MEZCLADO.merge(
        CATTRAB, on=["idTrabajador"], how="right")

    mezclado_indices = {}

    for index, row in MERGED_MEZCLADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row['idTrabajador']
            fecha = row['Fecha']
            mezclado_indices[int(id_trabajador_01)] = fecha

    FILTERED_LAMINADO = LAMINADO[LAMINADO["Fecha"].isin(
        pd.date_range(last_thursday, today))]
    data = FILTERED_LAMINADO.merge(CATTRAB, on=["idTrabajador"], how="right")

    ayudantes = data[data['IdTrabajador02'].notna()]
    ayudantes = ayudantes[['IdTrabajador02', 'Fecha']].copy()
    ayudantes.columns = ['idTrabajador', 'Fecha_Ayudante']
    MERGED_LAMINADO = pd.merge(
        data, ayudantes, how='left', left_on='idTrabajador', right_on='idTrabajador')
    MERGED_LAMINADO.loc[MERGED_LAMINADO['Fecha_Ayudante'].notna(
    ), 'Fecha'] = MERGED_LAMINADO['Fecha_Ayudante']

    laminado_indices = {}

    for index, row in MERGED_LAMINADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row["idTrabajador"]
            id_trabajador_02 = row['IdTrabajador02']
            fecha = row['Fecha']

            laminado_indices[int(id_trabajador_01)] = fecha

    FILTERED_VULCANIZADO = VULCANIZADO[VULCANIZADO["Fecha"].isin(
        pd.date_range(last_thursday, today))]
    data = FILTERED_VULCANIZADO.merge(
        CATTRAB, on=["idTrabajador"], how="right")

    ayudantes = data[data['idTrabajador02'].notna()]
    ayudantes = ayudantes[['idTrabajador02', 'Fecha']].copy()
    ayudantes.columns = ['idTrabajador', 'Fecha_Ayudante']
    MERGED_VULCANIZADO = pd.merge(
        data, ayudantes, how='left', left_on='idTrabajador', right_on='idTrabajador')
    MERGED_VULCANIZADO.loc[MERGED_VULCANIZADO['Fecha_Ayudante'].notna(
    ), 'Fecha'] = MERGED_VULCANIZADO['Fecha_Ayudante']

    vulcanizado_indices = {}

    for index, row in MERGED_VULCANIZADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row["idTrabajador"]
            id_trabajador_02 = row['idTrabajador02']
            fecha = row['Fecha']

            vulcanizado_indices[int(id_trabajador_01)] = fecha

    FILTERED_CARDADO = CARDADO[CARDADO["Fecha"].isin(
        pd.date_range(last_thursday, today))]
    data = FILTERED_CARDADO.merge(CATTRAB, on=["idTrabajador"], how="right")

    ayudantes = data[data['idTrabajador02'].notna()]
    ayudantes = ayudantes[['idTrabajador02', 'Fecha']].copy()
    ayudantes.columns = ['idTrabajador', 'Fecha_Ayudante']
    MERGED_CARDADO = pd.merge(
        data, ayudantes, how='left', left_on='idTrabajador', right_on='idTrabajador')
    MERGED_CARDADO.loc[MERGED_CARDADO['Fecha_Ayudante'].notna(
    ), 'Fecha'] = MERGED_CARDADO['Fecha_Ayudante']

    cardado_indices = {}

    for index, row in MERGED_CARDADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row["idTrabajador"]
            id_trabajador_02 = row['idTrabajador02']
            fecha = row['Fecha']

            cardado_indices[int(id_trabajador_01)] = fecha

    # Combine all dictionaries
    dictionaries = [vulcanizado_indices, laminado_indices,
                    mezclado_indices, formulado_indices, cardado_indices]
    combined_dict = {}

    def get_latest_timestamp(timestamp1, timestamp2):
        if timestamp1 > timestamp2:
            return timestamp1
        else:
            return timestamp2

    # Merge dictionaries
    for dictionary in dictionaries:
        for key, value in dictionary.items():
            if key in combined_dict:
                combined_dict[key] = get_latest_timestamp(
                    combined_dict[key], value)
            else:
                combined_dict[key] = value

    filtered_data = CATTRAB[(CATTRAB['idNivel'] > 3) & (
        CATTRAB['idNivel'] <= 5) & (CATTRAB['idActivo'])]

    for index, date in combined_dict.items():
        filtered_data.loc[filtered_data['idTrabajador']
                          == index, "Fecha"] = date

    cols = ["idTrabajador", "Nombres", "Fecha"]
    return filtered_data[cols].groupby(['idTrabajador']).max().to_json()

@app.route("/api/trabajadores")
def get_trabajadores():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    CATTRAB = pd.read_csv(urlCatTRAB)

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] > 1]

    return CATTRAB[["idTrabajador", "Nombres", "APaterno"]].loc[CATTRAB['idActivo'] == True].to_json()

@app.route("/api/trabajadores/asistencias")
def get_asistencias():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlINCIDENCIAS = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=INCIDENCIAS"

    CATTRAB = pd.read_csv(urlCatTRAB)
    INCIDENCIAS = pd.read_csv(urlINCIDENCIAS)

    last_thursday = get_last_thursday().strftime("%Y/%m/%d")

    INCIDENCIAS["Fecha"] = pd.to_datetime(INCIDENCIAS["Fecha"], dayfirst=True)
    INCIDENCIAS_SEMANA = INCIDENCIAS.loc[INCIDENCIAS['Fecha'] >= last_thursday]
    INCIDENCIAS["Fecha"] = pd.to_datetime(INCIDENCIAS["Fecha"], unit="ms")

    MERGED_INCIDENCIAS = INCIDENCIAS_SEMANA.merge(CATTRAB, on=["idTrabajador"], how="left")

    return MERGED_INCIDENCIAS[["Fecha", "idTrabajador", "idIncidencia"]].to_json()
