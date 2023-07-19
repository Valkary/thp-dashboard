import { JSXElement, Match, Switch, createEffect, createSignal } from "solid-js";
import { createQuery } from "@tanstack/solid-query";
import Table from "./Table";

async function fetchData() {
    const res = await (await fetch("http://127.0.0.1:5000/api/incidencias/semana")).json();
    return res;
}

// TODO: Este objeto puede que sea mucho mas grande dentro de cada uno de los apartados
type ResFaltas = {
    Fecha: {}
    Nombres: {}
    Descripcion: {}
}

const INCIDENCIAS = {
    "ASISTENCIA": "bg-green-50 text-green-600",
    "BAJA": "bg-gray-50 text-gray-600",
    "PERMISO (FALTA JUSTIFICADA)": "bg-green-50 text-green-600",
    "FALTA INJUSTIFICADA": "bg-red-50 text-red-600",
    "VACACIONES": "bg-gray-50 text-gray-600",
    "NO LABORABLE": "bg-gray-50 text-gray-600",
    "INCAPACIDAD": "bg-yellow-50 text-yellow-600"
}

type RecordFaltas = {
    Fecha: string,
    Nombres: string,
    Descripcion: keyof typeof INCIDENCIAS,
}

type TablaFaltas = RecordFaltas[];

function reestructureObj(obj: ResFaltas): TablaFaltas {
    const fechas: string[] = Object.values(obj.Fecha);
    const nombres: string[] = Object.values(obj.Nombres);
    const descripciones: (keyof typeof INCIDENCIAS)[] = Object.values(obj.Descripcion);

    let tabla: TablaFaltas = Array(fechas.length);

    for (let i = 0; i < fechas.length; i++) {
        const fecha = new Date(fechas[i]);

        tabla[i] = {
            Fecha: `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`,
            Nombres: nombres[i]?.toUpperCase(),
            Descripcion: descripciones[i]
        };
    }

    return tabla;
}

export default function TableFaltas() {
    const [table, setTable] = createSignal<TablaFaltas>([]);
    const query = createQuery(() => ['faltas'], fetchData);

    createEffect(() => {
        if (query.status === "success") {
            const structured_data = reestructureObj(query.data);
            setTable(structured_data);
        }
    });

    function incid_type(key: keyof RecordFaltas, value: keyof typeof INCIDENCIAS): JSXElement {
        if (key !== "Descripcion" || !INCIDENCIAS[value]) return <>{value}</>;

        return <span
            class={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold ${INCIDENCIAS[value]}`}
        >
            {value}
        </span>
    }

    return <Switch>
        <Match when={query.isLoading}>Cargando...</Match>
        <Match when={query.isError}>Error!</Match>
        <Match when={query.isSuccess && typeof table() !== 'undefined'}>
            <Table titles={["Fecha", "Nombre", "Tipo de Falta"]} data={table()} col_conditions={{"Descripcion": incid_type}} />
        </Match>
    </Switch>
}