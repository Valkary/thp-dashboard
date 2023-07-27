import { Show, Suspense, createResource } from "solid-js";
import { fetchDerechoDescanso } from "../functions/fetch";
import Table from "./Table";

export default function DerechoDescanso() {
    const [derecho_resource] = createResource(fetchDerechoDescanso);

    return <Suspense fallback={<div>No data</div>}>
        <Show when={derecho_resource.state === "ready"}>
            <Table
                titles={["idTrabajador", "Nombres", "APaterno", "AMaterno"]}
                data={derecho_resource()!}
            />
        </Show>
    </Suspense>

}