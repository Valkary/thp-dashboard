import { createEffect, createSignal, Switch, type JSXElement, Match, createResource } from "solid-js";
import Table from "./Table";
import { reestructure_obj } from "../functions/objects";

const today = new Date();
const weekday_today = today.getDay();
const last_thursday = new Date();

last_thursday.setDate(weekday_today < 4 ? today.getDate() - weekday_today - 3 : today.getDate() - weekday_today + 4);
const fechas = fillDates(last_thursday, today);

const INCIDENCIAS = {
    "A": "bg-green-50 text-green-600",
    "B": "bg-gray-50 text-gray-600",
    "P": "bg-green-50 text-green-600",
    "F": "bg-red-50 text-red-600",
    "V": "bg-gray-50 text-gray-600",
    "N": "bg-gray-50 text-gray-600",
    "I": "bg-yellow-50 text-yellow-600"
}

type INCIDENCIAS_KEYS = keyof typeof INCIDENCIAS;

type RecordIncidencia = {
    nombres: string;
    J?: INCIDENCIAS_KEYS,
    V?: INCIDENCIAS_KEYS,
    S?: INCIDENCIAS_KEYS,
    D?: INCIDENCIAS_KEYS,
    L?: INCIDENCIAS_KEYS,
    M?: INCIDENCIAS_KEYS,
    m?: INCIDENCIAS_KEYS,
}

function fillDates(start: Date, finish: Date): string[] {
    let dates = [];

    for (let date = start; date <= finish; date.setDate(date.getDate() + 1)) {
        const utc_str_arr = date.toUTCString().split(" ");
        dates.push(`${utc_str_arr[1]} ${utc_str_arr[2]}`);
    }

    return dates;
}

function fillReport(fechas: string[], incidencias: Record<string, any>, trabajadores: Record<string, any>): RecordIncidencia[] {
    const table: RecordIncidencia[] = new Array(trabajadores.length);

    const date_dict: Record<number, string> = {
        0: "J",
        1: "V",
        2: "S",
        3: "D",
        4: "L",
        5: "M",
        6: "m",
    }

    for (let i = 0; i < trabajadores.length; i++) {
        table[i] = {
            nombres: `${trabajadores[i].Nombres} ${trabajadores[i].APaterno}`.toUpperCase(),
        }

        for (let j = 0; j < fechas.length; j++) {
            // @ts-ignore
            table[i][date_dict[j]] = "A";
        }
    }

    for (let i = 0; i < incidencias.length; i++) {
        const incidencia = incidencias[i];
        const date = new Date(incidencia.Fecha);
        const utc_str_arr = date.toUTCString().split(" ");

        const fecha_str = `${utc_str_arr[1]} ${utc_str_arr[2]}`;

        const id_fecha: number = fechas.indexOf(fecha_str);
        let id_trab: number;

        let j = 0;
        while (j < trabajadores.length) {
            if (trabajadores[j].idTrabajador === incidencia.idTrabajador) {
                id_trab = j;
                break;
            }
            j++;
        }

        // @ts-ignore
        table[id_trab][date_dict[id_fecha]] = incidencia.idIncidencia;
    }

    return table;
}

function make_report(trabajadores: Record<string, any>, incidencias: Record<string, any>) {
    const trab_obj = reestructure_obj(trabajadores);
    const incidencias_obj = reestructure_obj(incidencias);

    return fillReport(fechas, incidencias_obj, trab_obj);
}

function incid_type(key: keyof RecordIncidencia, value: keyof typeof INCIDENCIAS): JSXElement {
    if (key === "nombres" || !INCIDENCIAS[value]) return <>{value}</>;

    return <span
        class={`inline-flex w-full h-full font-bold justify-center items-center text-lg ${INCIDENCIAS[value]}`}
    >
        {value}
    </span>
}

const col_conditions = {
    J: incid_type,
    V: incid_type,
    S: incid_type,
    D: incid_type,
    L: incid_type,
    M: incid_type,
    m: incid_type,
};

async function fetchTrabajadores() {
    return await (await fetch("http://127.0.0.1:5000/api/trabajadores")).json();
}

async function fetchIncidencias() {
    return await (await fetch("http://127.0.0.1:5000/api/trabajadores/asistencias")).json();
}

type State = {
    state: "ERROR" | "LOADING" | "READY",
    msg?: string
}

export default function ReporteASistencia() {
    const [table, setTable] = createSignal<RecordIncidencia[] | null>(null);
    const [state, setState] = createSignal<State>({ state: "LOADING" });

    const [trab_resource] = createResource(fetchTrabajadores);
    const [incid_resource] = createResource(fetchIncidencias);
    
    let titles = [<h3 class="text-xl font-bold">Trabajador</h3>];

    const days: Record<number, string> = {
        0: "Jueves",
        1: "Viernes",
        2: "Sábado",
        3: "Domingo",
        4: "Lunes",
        5: "Martes",
        6: "Miércoles",
    };

    titles = [titles, ...Object.values(days)];

    createEffect(async () => {
        if (trab_resource.state === "ready" && incid_resource.state === "ready") {
            setState({ state: "READY", msg: "" });
            const report = make_report(trab_resource.latest, incid_resource.latest);
            setTable(report);
        } else if (trab_resource.error || incid_resource.error) {
            setState({ state: "ERROR", msg: "Error de peticion de tablas" });
        } else if (trab_resource.loading || incid_resource.loading) {
            setState({ state: "LOADING", msg: "Cargando informacion..." });
        }
    });

    return <Switch>
        <Match when={state().state === "ERROR"}>
            {state().msg}
        </Match>
        <Match when={state().state === "LOADING"}>
            {state().msg}
        </Match>
        <Match when={state().state === "READY" && table() !== null}>
            <Table data={table()} titles={titles} col_conditions={col_conditions} />
        </Match>
    </Switch> 
    
}