import Table from "./Table";
import { fetchNoReportoAyer } from "../functions/fetch";
import { Show, Suspense, createEffect, createResource, createSignal } from "solid-js";
import Spinner from "./Spinner";

function capitalizeEntries(estaciones: Record<string, any>[]) {
    let data: Record<string, any>[] = []; 
    const entries = Object.entries(estaciones);
    for (let i = 0; i < entries.length; i++) {
        !entries[i][1] && data.push({ estacion: entries[i][0].toUpperCase() });
    }

    return data;
}

export default function NoReportoAyer() {
    const [estaciones] = createResource(fetchNoReportoAyer);
    const [table, setTable] = createSignal<Record<string, any>[]>([]);

    createEffect(() => {
        if (estaciones.state === "ready") {
            const data = capitalizeEntries(estaciones());
            setTable(data);
        }
    });

    return <Suspense fallback={<div>Error</div>}>
        <Show when={estaciones.loading}>
            <div class="flex flex-row items-center gap-4 text-xl font-bold">
                <Spinner size={"lg"} />
                <p>Cargando información...</p>
            </div>
        </Show>

        <Show when={estaciones.error}>
            <p>Error de carga de información!</p>
        </Show>

        <Show when={estaciones.state === "ready"}>
            <Table titles={["Estaciones sin reportar"]} data={Object.values(table())} />
        </Show>
    </Suspense>
}