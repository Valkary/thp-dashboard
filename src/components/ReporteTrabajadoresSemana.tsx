import { JSXElement, Show, Suspense, createEffect, createResource, createSignal } from "solid-js"
import { fetchRegistroSemanal, fetch_structured_trabajadores, } from "../functions/fetch";
import { Row, Trabjador, create_date_titles_curr_week, date_dict, fillDates, last_thursday, next_wednesday, week_table_fill, week_table_init } from "../functions/week_matrix";
import Table from "./Table";
import Spinner from "./Spinner";

function date_cond(key: string, value: boolean): JSXElement {
    if (Object.values(date_dict).indexOf(key) === -1) return <>{value}</>
    if (value === null) return <></>

    return <span
        class={`inline-flex w-full h-full font-bold justify-center items-center text-lg ${value ? "bg-green-300" : "bg-red-300"}`}
    >
        {value ? "✔️" : "✖️"}
    </span>
}

const col_conditions = {
    J: date_cond,
    V: date_cond,
    S: date_cond,
    D: date_cond,
    L: date_cond,
    M: date_cond,
    m: date_cond,
};

const fechas = fillDates(last_thursday, next_wednesday);

export default function ReporteTrabajadoresSemana() {
    const [registro_semana] = createResource(fetchRegistroSemanal);
    const [trabajadores] = createResource<Trabjador[]>(fetch_structured_trabajadores);
    const [table, setTable] = createSignal<Row<boolean>[] | null>(null);
    
    createEffect(() => {
        if(trabajadores.state === "ready" && registro_semana.state === "ready") {
            const week_table = week_table_init(trabajadores(), false);
            week_table_fill(week_table, fechas, registro_semana());
            setTable(week_table);
        }
    });

    const titles = ["Nombres", ...create_date_titles_curr_week()];

    return <Suspense fallback={<div>Error</div>}>
        <Show when={registro_semana.loading || trabajadores.loading}>
            <div class="flex flex-row items-center gap-4 text-xl font-bold">
                <Spinner size={"lg"}/>
                <p>Cargando información...</p>
            </div>
        </Show>

        <Show when={registro_semana.error || trabajadores.error}>
            Error de carga!
        </Show>

        <Show when={typeof table() !== "undefined" && table() !== null}>
            <Table data={table()!} titles={titles} col_conditions={col_conditions} ignore_cols={["id"]} />
        </Show>
    </Suspense>
}