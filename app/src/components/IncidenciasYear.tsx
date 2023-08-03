import { For, Show, Suspense, createEffect, createResource, createSignal } from "solid-js"
import { fetch_structured_incidencias } from "../functions/fetch";
import Table from "./Table";
import Spinner from "./Spinner";

export default function IncidenciasYear() {
    const [incidencia, setIncidencia] = createSignal("V");
    const [table, setTable] = createSignal<Record<string, any>[]>([]);
    const [incidencias_resource] = createResource(incidencia, fetch_structured_incidencias);

    createEffect(() => {
        console.log(incidencias_resource());
        if (incidencias_resource.state === "ready") {
            const tmp_table = [];
            let fechas = [];

            for (let i = 0; i < incidencias_resource().length; i++) {
                for (let j = 0; j < incidencias_resource()[i].fechas.length; j++) {
                    const fecha = incidencias_resource()[i].fechas[j].split(" ")
                    fechas.push(`${fecha[1]} ${fecha[2]}`)
                }

                const fechas_elem = <div class="flex flex-col gap-1 items-center justify-start">
                    <For each={fechas}>{
                        (fecha) => <p>{fecha}</p>
                    }</For>
                </div>

                tmp_table.push({
                    nombre: <div class="flex h-full justify-start items-start">{incidencias_resource()[i].nombre}</div>,
                    total: <div class="flex h-full justify-start items-start">{incidencias_resource()[i].total}</div>,
                    fechas: fechas_elem
                });
                
                fechas = [];
            }

            setTable(tmp_table);
        }
    })

    return <Suspense>
        <div class="w-full max-w-[800px] min-h-screen flex flex-col items-center gap-5 overflow-hidden px-5">
            <div class="w-full flex items-center justify-end">
                <p>Incidencia:</p>
                <select onChange={(e) => setIncidencia(e.target.value)}>
                    <option value={"V"}>Vacaciones</option>
                    <option value={"B"}>Baja</option>
                    <option value={"P"}>Permiso</option>
                    <option value={"F"}>Falta</option>
                    <option value={"N"}>No laborable</option>
                    <option value={"I"}>Incapacidad</option>
                </select>
            </div>

            <Show when={incidencias_resource.state === "ready"}>

                <Table titles={["NOMBRE", "TOTAL", "FECHAS"]} data={table()!} />
            </Show>

            <Show when={incidencias_resource.state === "refreshing" || incidencias_resource.loading}>
                <div class="flex flex-row items-center gap-4 text-xl font-bold">
                    <Spinner size={"lg"} />
                    <p>Cargando incidencias</p>
                </div>
            </Show>
        </div>
    </Suspense>
}