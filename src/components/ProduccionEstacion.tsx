import { For, Show, Suspense, createEffect, createResource, createSignal } from "solid-js";
import { fetch_structured_station_production_data } from "../functions/fetch";
import { Estacion, estaciones } from "../functions/estaciones";
import Table from "./Table";

export default function ProduccionEstacion() {
    const [station, setStation] = createSignal<Estacion>();
    const [resources] = createResource(station, fetch_structured_station_production_data);

    return <section>
        <For each={estaciones}>{
            (item) => <button
                class="px-5 py-2 rounded-md border border-black mx-5"
                onClick={() => setStation(item as Estacion)}
            >{item}</button>
        }</For>

        <em>Seleccionado: {station()}</em>

        <Suspense fallback={<p>Cargando producción...</p>}>
            <Show when={(station() === "MEZCLADO" || station() === "FORMULADO" || station() === "VULCANIZADO" || station() === "CARDADO") && resources() !== null}>
                <Table titles={["Fecha", "Nombres", "Formula", "Cargas"]} data={resources()!} />
            </Show>
            <Show when={station() === "LAMINADO" && resources() !== null}>
                <Table titles={["Trabajador", "Laminado", "Fecha"]} data={resources()!} />
            </Show>
        </Suspense>
    </section>
}