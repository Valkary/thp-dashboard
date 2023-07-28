import { For, Show, Suspense, createResource, createSignal } from "solid-js";
import { fetch_structured_station_production_data } from "../functions/fetch";
import { Estacion, estaciones } from "../functions/estaciones";
import Table from "./Table";
import Spinner from "./Spinner";

export default function ProduccionEstacion() {
    const [station, setStation] = createSignal<Estacion>();
    const [resources] = createResource(station, fetch_structured_station_production_data);

    return <section class="w-full max-w-[800px] h-screen flex flex-col items-center gap-5 max-h-screen overflow-hidden px-5">
        <div class="flex flex-wrap gap-4 justify-center">
            <For each={estaciones}>{
                (item) => <button
                    class={`${station() === item ? "bg-black text-white font-bold" : ""} px-5 py-2 rounded-md border border-black`}
                    onClick={() => setStation(item as Estacion)}
                >{item}</button>
            }</For>
        </div>

        <Suspense fallback={<p>Error</p>}>
            <Show when={resources.loading}>
                <div class="flex flex-row items-center gap-4 text-xl font-bold">
                    <Spinner size={"lg"}/>
                    <p>Cargando información...</p>
                </div>
            </Show>

            <Show when={resources.error}>
                <p>Error de carga</p>
            </Show>

            <Show when={resources.state === "ready"}>
                <Show when={(station() === "MEZCLADO" || station() === "FORMULADO" || station() === "CARDADO") && resources() !== null}>
                    <Table titles={["FECHA", "NOMBRES", "FÓRMULA", "CARGAS"]} data={resources()!} />
                </Show>
                <Show when={station() === "VULCANIZADO" && resources() !== null}>
                    <Table titles={["FECHA", "NOMBRES", "FÓRMULA", "CANTIDAD"]} data={resources()!} />
                </Show>

                <Show when={station() === "LAMINADO" && resources() !== null}>
                    <Table titles={["FECHA", "TRABAJADOR"]} data={resources()!} />
                </Show>
            </Show>
        </Suspense>
    </section>
}