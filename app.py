from flask import (Flask, render_template)
from flask_cors import CORS
import pandas as pd
from datetime import date, timedelta, datetime
from dateutil.relativedelta import relativedelta

app = Flask(__name__,
            static_url_path='',
            static_folder='web/static',
            template_folder='web/templates')

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


def get_last_thursday():
    now = date.today()
    closest_thursday = now + timedelta(days=(3 - now.weekday()))
    return (closest_thursday if closest_thursday < now
            else closest_thursday - timedelta(days=7))


@app.route("/")
def view_menu():
    return render_template('index.html')


@app.route("/reportes/caratula_exp")
def view_caratula():
    return render_template('/reportes/caratula_exp/index.html')


@app.route("/reportes/asistencia")
def view_asistencia():
    return render_template('/reportes/asistencia/index.html')


@app.route("/reportes/no_reporto")
def view_no_reporto():
    return render_template('/reportes/no_reporto/index.html')


@app.route("/reportes/derecho_descanso")
def view_derecho_descanso():
    return render_template('/reportes/derecho_descanso/index.html')


@app.route("/reportes/produccion_semana")
def view_produccion_semana():
    return render_template('/reportes/produccion_semana/index.html')


@app.route("/reportes/no_reporto")
def view_produccion_ayer():
    return render_template('/reportes/no_reporto/index.html')


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

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] == 5]
    CATTRAB = CATTRAB.sort_values(
        by=["idNivel"], ascending=False).loc[CATTRAB['idActivo'] == True]

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

            if id_trabajador_01 in formulado_indices:
                formulado_indices[int(id_trabajador_01)].append(fecha)
            else:
                formulado_indices[int(id_trabajador_01)] = [fecha]

            # Add the index to the list of indices for 'idTrabajador02'
            for id in id_trabajador_02.split(','):
                formulado_indices[int(id)] = fecha

                if pd.notna(id_trabajador_02) and id_trabajador_02 in formulado_indices:
                    formulado_indices[int(id_trabajador_02)].append(fecha)
                elif pd.notna(id_trabajador_02):
                    formulado_indices[int(id_trabajador_02)] = [fecha]

    FILTERED_MEZCLADO = MEZCLADO[MEZCLADO["Fecha"].isin(
        pd.date_range(last_thursday, today))]

    MERGED_MEZCLADO = FILTERED_MEZCLADO.merge(
        CATTRAB, on=["idTrabajador"], how="right")

    mezclado_indices = {}

    for _, row in MERGED_MEZCLADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row['idTrabajador']
            fecha = row['Fecha']
            
            if id_trabajador_01 in mezclado_indices:
                mezclado_indices[int(id_trabajador_01)].append(fecha)
            else:
                mezclado_indices[int(id_trabajador_01)] = [fecha]

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

    for _, row in MERGED_LAMINADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row["idTrabajador"]
            id_trabajador_02 = row['IdTrabajador02']
            fecha = row['Fecha']

            if id_trabajador_01 in laminado_indices:
                laminado_indices[int(id_trabajador_01)].append(fecha)
            else:
                laminado_indices[int(id_trabajador_01)] = [fecha]

            if pd.notna(id_trabajador_02) and id_trabajador_02 in laminado_indices:
                laminado_indices[int(id_trabajador_02)].append(fecha)
            elif pd.notna(id_trabajador_02):
                laminado_indices[int(id_trabajador_02)] = [fecha]

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

    for _, row in MERGED_VULCANIZADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row["idTrabajador"]
            id_trabajador_02 = row['idTrabajador02']
            fecha = row['Fecha']

            if id_trabajador_01 in vulcanizado_indices:
                vulcanizado_indices[int(id_trabajador_01)].append(fecha)
            else:
                vulcanizado_indices[int(id_trabajador_01)] = [fecha]

            if pd.notna(id_trabajador_02) and id_trabajador_02 in vulcanizado_indices:
                vulcanizado_indices[int(id_trabajador_02)].append(fecha)
            elif pd.notna(id_trabajador_02):
                vulcanizado_indices[int(id_trabajador_02)] = [fecha]

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

    for _, row in MERGED_CARDADO.iterrows():
        if pd.notna(row['Fecha']):
            id_trabajador_01 = row["idTrabajador"]
            id_trabajador_02 = row['idTrabajador02']
            fecha = row['Fecha']

            if id_trabajador_01 in cardado_indices:
                cardado_indices[int(id_trabajador_01)].append(fecha)
            else:
                cardado_indices[int(id_trabajador_01)] = [fecha]

            if pd.notna(id_trabajador_02) and id_trabajador_02 in cardado_indices:
                cardado_indices[int(id_trabajador_02)].append(fecha)
            elif pd.notna(id_trabajador_02):
                cardado_indices[int(id_trabajador_02)] = [fecha]

    # Combine all dictionaries
    combined_dict = {}
    dictionaries = [vulcanizado_indices, laminado_indices,
                    mezclado_indices, formulado_indices, cardado_indices]

    # Merge dictionaries
    for dictionary in dictionaries:
        for key, value in dictionary.items():
            for d in set(value):
                if key in combined_dict:
                    combined_dict[key].append(d)
                else:
                    combined_dict[key] = [d]

    for key, value in combined_dict.items():
        combined_dict[key] = set(value)

    converted_data = {
        key: [str(ts) for ts in value]
        for key, value in combined_dict.items()
    }

    return converted_data


@app.route("/api/trabajadores")
def get_trabajadores():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    CATTRAB = pd.read_csv(urlCatTRAB)

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] == 5]
    SORTED_TRAB = CATTRAB.sort_values(by=["idNivel"], ascending=False)

    return SORTED_TRAB[["idTrabajador", "idNivel", "Nombres", "APaterno"]].loc[CATTRAB['idActivo'] == True].to_json()


@app.route("/api/trabajadores_full")
def get_full_trabajadores():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    CATTRAB = pd.read_csv(urlCatTRAB)

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] > 1]
    SORTED_TRAB = CATTRAB.sort_values(by=["idNivel"], ascending=False)

    return SORTED_TRAB.loc[CATTRAB['idActivo'] == True].to_json()


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

    MERGED_INCIDENCIAS = INCIDENCIAS_SEMANA.merge(
        CATTRAB, on=["idTrabajador"], how="left")

    return MERGED_INCIDENCIAS[["Fecha", "idTrabajador", "idIncidencia"]].to_json()


@app.route("/api/produccion/ultima_semana/FORMULADO")
def get_formulado_week():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlFORMULADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=FORMULADO"

    CATTRAB = pd.read_csv(urlCatTRAB)
    FORMULADO = pd.read_csv(urlFORMULADO)

    last_thursday = get_last_thursday().strftime("%Y/%m/%d")

    FORMULADO["Fecha"] = pd.to_datetime(FORMULADO["Fecha"], dayfirst=True)
    FORMULADO_SEMANA = FORMULADO.loc[FORMULADO['Fecha'] >= last_thursday]

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] > 1]

    MERGED_FORMULADO = FORMULADO_SEMANA.merge(
        CATTRAB, on=["idTrabajador"], how="left")

    return MERGED_FORMULADO[["Fecha", "Nombres", "idFormula", "Cargas"]].to_json()


@app.route("/api/produccion/ultima_semana/MEZCLADO")
def get_mezclado_week():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlMEZCLADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=MEZCLADO"

    CATTRAB = pd.read_csv(urlCatTRAB)
    MEZCLADO = pd.read_csv(urlMEZCLADO)

    last_thursday = get_last_thursday().strftime("%Y/%m/%d")

    MEZCLADO["Fecha"] = pd.to_datetime(MEZCLADO["Fecha"], dayfirst=True)
    MEZCLADO_SEMANA = MEZCLADO.loc[MEZCLADO['Fecha'] >= last_thursday]

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] > 1]

    MERGED_MEZCLADO = MEZCLADO_SEMANA.merge(
        CATTRAB, on=["idTrabajador"], how="left")
    return MERGED_MEZCLADO[["Fecha", "Nombres", "idFormula", "Cargas_MEZC"]].to_json()


@app.route("/api/produccion/ultima_semana/LAMINADO")
def get_laminado_week():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlLAMINADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=LAMINADO"

    CATTRAB = pd.read_csv(urlCatTRAB)
    LAMINADO = pd.read_csv(urlLAMINADO)

    last_thursday = get_last_thursday().strftime("%Y/%m/%d")

    LAMINADO["Fecha"] = pd.to_datetime(LAMINADO["Fecha"], dayfirst=True)
    LAMINADO_SEMANA = LAMINADO.loc[LAMINADO['Fecha'] >= last_thursday]

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] > 1]

    MERGED_LAMINADO = LAMINADO_SEMANA.merge(
        CATTRAB, on=["idTrabajador"], how="left")
    return MERGED_LAMINADO[["Fecha", "Nombres"]].to_json()


@app.route("/api/produccion/ultima_semana/VULCANIZADO")
def get_vulcanizado_week():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlVULCANIZADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=VULCANIZADO"

    CATTRAB = pd.read_csv(urlCatTRAB)
    VULCANIZADO = pd.read_csv(urlVULCANIZADO)

    last_thursday = get_last_thursday().strftime("%Y/%m/%d")

    VULCANIZADO["Fecha"] = pd.to_datetime(VULCANIZADO["Fecha"], dayfirst=True)
    VULCANIZADO_SEMANA = VULCANIZADO.loc[VULCANIZADO['Fecha'] >= last_thursday]

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] > 1]

    MERGED_VULCANIZADO = VULCANIZADO_SEMANA.merge(
        CATTRAB, on=["idTrabajador"], how="left")
    return MERGED_VULCANIZADO[["Fecha", "Nombres", "idPT", "cantPT"]].to_json()


@app.route("/api/produccion/ultima_semana/CARDADO")
def get_cardado_week():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlCARDADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=CARDADO"

    CATTRAB = pd.read_csv(urlCatTRAB)
    CARDADO = pd.read_csv(urlCARDADO)

    last_thursday = get_last_thursday().strftime("%Y/%m/%d")

    CARDADO["Fecha"] = pd.to_datetime(CARDADO["Fecha"], dayfirst=True)
    CARDADO_SEMANA = CARDADO.loc[CARDADO['Fecha'] >= last_thursday]

    CATTRAB = CATTRAB.loc[CATTRAB["idNivel"] > 1]

    MERGED_CARDADO = CARDADO_SEMANA.merge(
        CATTRAB, on=["idTrabajador"], how="left")
    return MERGED_CARDADO[["Fecha", "Nombres", "idPT", "Laminas"]].to_json()


@app.route("/api/produccion/ayer/ESTACIONES")
def get_all_stations_yesterday():
    urlMEZCLADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=MEZCLADO"
    urlLAMINADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=LAMINADO"
    urlFORMULADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=FORMULADO"
    urlVULCANIZADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=VULCANIZADO"
    urlCARDADO = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=CARDADO"

    MEZCLADO = pd.read_csv(urlMEZCLADO)
    LAMINADO = pd.read_csv(urlLAMINADO)
    FORMULADO = pd.read_csv(urlFORMULADO)
    VULCANIZADO = pd.read_csv(urlVULCANIZADO)
    CARDADO = pd.read_csv(urlCARDADO)

    yesterday = (date.today() - timedelta(days=1)).strftime("%Y/%m/%d")

    FORMULADO["Fecha"] = pd.to_datetime(FORMULADO["Fecha"], dayfirst=True)
    MEZCLADO["Fecha"] = pd.to_datetime(MEZCLADO["Fecha"], dayfirst=True)
    LAMINADO["Fecha"] = pd.to_datetime(LAMINADO["Fecha"], dayfirst=True)
    VULCANIZADO["Fecha"] = pd.to_datetime(VULCANIZADO["Fecha"], dayfirst=True)
    CARDADO["Fecha"] = pd.to_datetime(CARDADO["Fecha"], dayfirst=True)

    FILTERED_FORMULADO = FORMULADO.loc[FORMULADO['Fecha'] >= yesterday]
    FILTERED_MEZCLADO = MEZCLADO.loc[MEZCLADO['Fecha'] >= yesterday]
    FILTERED_LAMINADO = LAMINADO.loc[LAMINADO['Fecha'] >= yesterday]
    FILTERED_VULCANIZADO = VULCANIZADO.loc[VULCANIZADO['Fecha'] >= yesterday]
    FILTERED_CARDADO = CARDADO.loc[CARDADO['Fecha'] >= yesterday]

    return {
        "formulado": FILTERED_FORMULADO.shape[0] > 0,
        "mezclado": FILTERED_MEZCLADO.shape[0] > 0,
        "laminado": FILTERED_LAMINADO.shape[0] > 0,
        "vulcanizado": FILTERED_VULCANIZADO.shape[0] > 0,
        "cardado": FILTERED_CARDADO.shape[0] > 0
    }


@app.route("/api/reportes/derecho_descanso/")
def get_derecho_descanso():
    urlCatTRAB = "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0/gviz/tq?tqx=out:csv&sheet=catTRAB"
    urlINCIDENCIAS = "https://docs.google.com/spreadsheets/d/1fzy0h-g0-LbRxNcURZJqyGuIZOoJHLFkQDZ5vpAb4zc/gviz/tq?tqx=out:csv&sheet=INCIDENCIAS"

    CATTRAB = pd.read_csv(urlCatTRAB)
    INCIDENCIAS = pd.read_csv(urlINCIDENCIAS)

    INCIDENCIAS["Fecha"] = pd.to_datetime(INCIDENCIAS["Fecha"], dayfirst=True)
    INCIDENCIAS["Fecha"] = pd.to_datetime(INCIDENCIAS["Fecha"], unit="ms")
    CATTRAB["FecAlta"] = pd.to_datetime(CATTRAB["FecAlta"], dayfirst=True)
    CATTRAB["FecAlta"] = pd.to_datetime(CATTRAB["FecAlta"], unit="ms")

    today = date.today()
    pivote = datetime(today.year, 6, 30).date()

    inicio = None
    fin = None

    if today >= pivote:
        inicio = datetime(today.year, 1, 1)
        fin = datetime(today.year, 6, 30)
    else:
        inicio = datetime(today.year - 1, 7, 1)
        fin = datetime(today.year - 1, 12, 31)

    six_months = inicio - relativedelta(months=+6)
    CATTRAB = CATTRAB.loc[(CATTRAB["idNivel"] == 5) & (
        CATTRAB['idActivo'] == True) & (CATTRAB['FecAlta'] <= six_months)]

    INCIDENCIAS_PERIODO = INCIDENCIAS[INCIDENCIAS["Fecha"].isin(
        pd.date_range(inicio, fin))]
    INCIDENCIAS_PERIODO = INCIDENCIAS_PERIODO.loc[(
        INCIDENCIAS_PERIODO["idIncidencia"] != "V") & (INCIDENCIAS_PERIODO["idIncidencia"] != "I")]
    
    DERECHO_DESCANSO = CATTRAB.merge(INCIDENCIAS_PERIODO, how="left", on=["idTrabajador"])
    DERECHO_DESCANSO = DERECHO_DESCANSO.loc[DERECHO_DESCANSO["idIncidencia"].isna()]
    return DERECHO_DESCANSO[["idTrabajador", "Nombres", "APaterno", "AMaterno"]].to_json()


if __name__ == "__main__":
    app.run()
