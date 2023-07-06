import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/solid-query";
import TableFaltas from "./TableFaltas";
import { Match, Switch } from "solid-js";

type Props = {
    type: "semana" | "ayer"
}

export default function QueryFaltas(props: Props) {
    const queryClient = new QueryClient();

    return <QueryClientProvider client={queryClient}>
        <Switch>
            <Match when={props.type === "semana"}>
                <TableFaltas />
            </Match>
        </Switch>
    </QueryClientProvider>
}