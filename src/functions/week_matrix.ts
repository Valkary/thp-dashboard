import type { JSXElement } from "solid-js";

export type Trabjador = {
    idTrabajador: number,
    idNivel: number,
    Nombres: string,
    APaterno: string
}

export const today = new Date();
const year_start = new Date(today.getFullYear(), 0, 1);

// @ts-ignore
const week_num = Math.ceil(Math.floor((today - year_start) / (24 * 60 * 60 * 1000)) / 7);

const weekday_today = today.getDay();
export const last_thursday = new Date();
export const next_wednesday = new Date();

export const date_diff = today.getDate() - last_thursday.getDate() + 1;

last_thursday.setDate(weekday_today < 4 ? today.getDate() - weekday_today - 3 : today.getDate() - weekday_today + 4);
next_wednesday.setDate(weekday_today < 4 ? today.getDate() - weekday_today + 3 : today.getDate() - weekday_today + 10);

export function fillDates(start: Date, finish: Date): string[] {
    let dates = [];
    let i_date = new Date(start.getTime());

    for (let date = i_date; date <= finish; date.setDate(date.getDate() + 1)) {
        const utc_str_arr = date.toUTCString().split(" ");
        dates.push(`${utc_str_arr[1]} ${utc_str_arr[2]}`);
    }

    return dates;
}

export type Row<T> = {
    id: number,
    nombres: string,
    J: T,
    V: T,
    S: T,
    D: T,
    L: T,
    M: T,
    m: T
}

export const date_dict: Record<number, string> = {
    0: "J",
    1: "V",
    2: "S",
    3: "D",
    4: "L",
    5: "M",
    6: "m",
};

export function create_date_titles_curr_week(): JSXElement[] {
    const dates = fillDates(last_thursday, next_wednesday);
    let titles = [];

    for (let i = 0; i < dates.length; i++) {
        titles.push(`${date_dict[i]} - ${dates[i].split(" ")[0]}`)
    }

    return titles;
}

export function week_table_init(trabajadores: Trabjador[], default_val: any) {
    const table: Row<typeof default_val>[] = new Array(trabajadores.length);

    for (let i = 0; i < trabajadores.length; i++) {
        table[i] = {
            id: trabajadores[i].idTrabajador,
            nombres: `${trabajadores[i].Nombres} ${trabajadores[i].APaterno}`.toUpperCase(),
            J: default_val,
            V: default_val,
            S: default_val,
            D: default_val,
            L: default_val,
            M: default_val,
            m: default_val
        }
    }

    return table;
}

export function week_table_fill(table: Row<boolean>[], date_strs: string[], events: Record<string, any>[]) {
    const trab_id_dict: Record<number, number> = {};

    for (let i = 0; i < table.length; i++) {
        trab_id_dict[table[i].id] = i;
    }

    for (const key in events) {
        const values = events[key];

        for (let i = 0; i < values.length; i++) {
            const date = new Date(values[i]).toUTCString().split(" ");
            const date_str = `${date[1]} ${date[2]}`;
            const day_of_week = date_dict[date_strs.indexOf(date_str)];

            if (day_of_week === undefined) continue;
            // @ts-ignore
            table[trab_id_dict[key]][day_of_week] = true;
        }
    }

    for (let i = 0; i < table.length; i++) {
        for (let j = date_diff; j < 7; j++) {
            // @ts-ignore
            table[i][date_dict[j]] = null;
        }
    }

    console.log(table);
}