import Table from "./Table";
import { fetchNoReportoAyer } from "../functions/fetch";

const estaciones = await fetchNoReportoAyer();

let data: Record<string, any>[] = [];

if (estaciones) {
    const entries = Object.entries(estaciones);
    for (let i = 0; i < entries.length; i++) {
        !entries[i][1] && data.push({ estacion: entries[i][0].toUpperCase() });
    }
}

export default function NoReportoAyer() {
    return <Table titles={["Estaciones sin reportar"]} data={Object.values(data)} />
}