import { createEffect, createSignal, type JSXElement } from "solid-js";
import Table from "./Table";

const today = new Date();
const weekday_today = today.getDay();
const last_thursday = new Date();
const next_wednesday = new Date();

last_thursday.setDate(today.getDate() - weekday_today - 3);
next_wednesday.setDate(today.getDate() + (3 - weekday_today));
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
    J: INCIDENCIAS_KEYS,
    V: INCIDENCIAS_KEYS,
    S: INCIDENCIAS_KEYS,
    D: INCIDENCIAS_KEYS,
    L: INCIDENCIAS_KEYS,
    M: INCIDENCIAS_KEYS,
    m: INCIDENCIAS_KEYS,
}

function reestructure_obj(obj: Record<string, any>): Record<string, any>[] {
    const keys = Object.keys(obj);
    const len = Object.keys(obj[keys[0]]).length;

    let table: Record<string, any>[] = Array.from({ length: len }, () => ({}));

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < keys.length; j++) {
            table[i][keys[j]] = Object.values(obj[keys[j]])[i];
        }
    }

    return table;
}

function fillDates(start: Date, finish: Date): string[] {
    let dates = [];

    for (let date = start; date <= finish; date.setDate(date.getDate() + 1)) {
        dates.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    }

    return dates;
}

function fillReport(fechas: string[], incidencias: Record<string, any>, trabajadores: Record<string, any>): RecordIncidencia[] {
    const table: RecordIncidencia[] = new Array(trabajadores.length);

    for (let i = 0; i < trabajadores.length; i++) {
        table[i] = {
            nombres: `${trabajadores[i].Nombres} ${trabajadores[i].APaterno}`.toUpperCase(),
            J: "A",
            V: "A",
            S: "A",
            D: "A",
            L: "A",
            M: "A",
            m: "A",
        }
    }

    const date_dict = {
        0: "J",
        1: "V",
        2: "S",
        3: "D",
        4: "L",
        5: "M",
        6: "m",
    }

    for (let i = 0; i < incidencias.length; i++) {
        const incidencia = incidencias[i];
        const fecha = new Date(incidencia.Fecha).toUTCString();

        const fecha_str = fecha;

        console.log(fecha_str, incidencia.idIncidencia);

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

async function make_report() {
    const trabajadores = await (await fetch("http://127.0.0.1:5000/api/trabajadores")).json();
    const incidencias = await (await fetch("http://127.0.0.1:5000/api/trabajadores/asistencias")).json();

    const trab_obj = reestructure_obj(trabajadores);
    const incidencias_obj = reestructure_obj(incidencias);

    console.log(incidencias_obj)

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

export default function ReporteASistencia() {
    const [table, setTable] = createSignal<RecordIncidencia[]>([]);
    let titles = [<h3 class="text-xl font-bold">Trabajador</h3>];

    const days = {
        0: "Jueves",
        1: "Viernes",
        2: "Sábado",
        3: "Domingo",
        4: "Lunes",
        5: "Martes",
        6: "Miércoles",
    };

    for (let i = 0; i < fechas.length; i++) {
        titles.push(<div class="text-xl font-bold w-full h-full">
            <h3>{days[i]}</h3>
            <h3>{fechas[i]}</h3>
        </div>)
    }

    createEffect(async () => {
        const report = await make_report();

        setTable(report);
    })

    return <Table data={table()} titles={titles} col_conditions={col_conditions} />
}