import { Show, Suspense, createResource } from "solid-js";
import { fetchDerechoDescanso } from "../functions/fetch";
import Table from "./Table";
import Spinner from "./Spinner";

export default function DerechoDescanso() {
    const [derecho_resource] = createResource(fetchDerechoDescanso);

    return <Suspense fallback={<div>No data</div>}>
        <Show when={derecho_resource.loading}>
            <div class="flex flex-row items-center gap-4 text-xl font-bold">
                <Spinner size={"lg"} />
                <p>Cargando información...</p>
            </div>
        </Show>
        <Show when={derecho_resource.state === "ready"}>
            <Table
                titles={["idTrabajador", "Nombres", "APaterno", "AMaterno"]}
                data={derecho_resource()!}
            />
        </Show>
    </Suspense>

}