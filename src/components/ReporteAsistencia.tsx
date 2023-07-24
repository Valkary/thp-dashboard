import { createEffect, createSignal, Switch, type JSXElement, Match, createResource } from "solid-js";
import { reestructure_obj, sort_obj_array } from "../functions/objects";
import { fetchIncidencias, fetchTrabajadores } from "../functions/fetch";
import Table from "./Table";

const today = new Date();
const year_start = new Date(today.getFullYear(), 0, 1);

// @ts-ignore
const week_num = Math.ceil(Math.floor((today - year_start) / (24 * 60 * 60 * 1000)) / 7);

const weekday_today = today.getDay();
const last_thursday = new Date();
const next_wednesday = new Date();

last_thursday.setDate(weekday_today < 4 ? today.getDate() - weekday_today - 3 : today.getDate() - weekday_today + 4);
next_wednesday.setDate(weekday_today < 4 ? today.getDate() - weekday_today + 3 : today.getDate() - weekday_today + 10);
const fechas = fillDates(last_thursday, next_wednesday);

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
    let i_date = new Date(start.getTime());

    for (let date = i_date; date <= finish; date.setDate(date.getDate() + 1)) {
        const utc_str_arr = date.toUTCString().split(" ");
        dates.push(`${utc_str_arr[1]} ${utc_str_arr[2]}`);
    }

    return dates;
}

function fillReport(fechas: string[], incidencias: Record<string, any>, trabajadores: Record<string, any>): RecordIncidencia[] {
    const table: RecordIncidencia[] = new Array(trabajadores.length);
    const date_diff = today.getDate() - last_thursday.getDate() + 1;

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

        for (let j = 0; j < date_diff; j++) {
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

    sort_obj_array(trab_obj, "idNivel", false);

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

type State = {
    state: "ERROR" | "LOADING" | "READY",
    msg?: string
}

export default function ReporteASistencia() {
    const [table, setTable] = createSignal<RecordIncidencia[] | null>(null);
    const [state, setState] = createSignal<State>({ state: "LOADING" });

    const [trab_resource] = createResource(fetchTrabajadores);
    const [incid_resource] = createResource(fetchIncidencias);

    const days: Record<number, string> = {
        0: "J",
        1: "V",
        2: "S",
        3: "D",
        4: "L",
        5: "M",
        6: "m",
    };

    const months: Record<number, string> = {
        0: "ENERO",
        1: "FEBRERO",
        2: "MARZO",
        3: "ABRIL",
        4: "MAYO",
        5: "JUNIO",
        6: "JULIO",
        7: "AGOSTO",
        8: "SEPTIEMBRE",
        9: "OCTUBRE",
        10: "NOVIEMBRE",
        11: "DICIEMBRE"
    }

    let titles: Record<string, JSXElement> = { 0: <h3 class="text-xl font-bold">Trabajador</h3> };

    for (let i = 0; i < 7; i++) {
        titles[i + 1] = `${days[i]} ${fechas[i].split(" ")[0]}`;
    }

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
        <Match when={state().state === "READY" && table() !== null && typeof table()?.length !== "undefined"}>
            <div class="w-full max-w-[800px] h-screen flex flex-col items-center gap-5 max-h-screen overflow-hidden px-5">
                <h1 class="uppercase tracking-wide font-bold underline">José Salcedo Nuñez</h1>

                <div class="flex justify-around uppercase w-full max-w-7xl">
                    <h2>Nómina periodo {week_num}</h2>
                    <h2>{months[today.getMonth()]}</h2>
                    <h2 class="font-bold underline">{today.getFullYear()}</h2>
                </div>

                <div class="max-w-7xl">
                    <Table data={table()!} titles={Object.values(titles)} col_conditions={col_conditions} />
                </div>

                <div class="text-xs w-full">
                    <h3 class="font-bold uppercase">Trabajadores: {table()!.length}</h3>
                    <h3 class="font-bold uppercase underline">Clave</h3>

                    <ul class="ml-5">
                        <li>A = ASISTENCIA</li>
                        <li>B = BAJA</li>
                        <li>P = PERMISO (FALTA INJUSTIFICADA, NO AMERITA ACTA ADMINISTRATIVA)</li>
                        <li>F = FALTA INJUSTIFICADA (AMERITA ACTA ADMINISTRATIVA)</li>
                        <li>V = VACACIONES</li>
                        <li>N = NO LABORABLE</li>
                        <li>I = INCAPACIDAD</li>
                    </ul>
                </div>

                <div class="w-full flex flex-col items-center mt-5">
                    <div class="w-1/4 h-[4px] bg-black" />
                    <p>JEFE DE PRODUCCIÓN</p>
                </div>
            </div>
        </Match>
    </Switch>

}