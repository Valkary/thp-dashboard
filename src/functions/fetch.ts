import type { Estacion } from "./estaciones";
import { reestructure_obj } from "./objects";

const host = "192.168.100.7:5000";

export async function fetchTrabajadores() {
    return await (await fetch(`http://${host}/api/trabajadores`)).json();
}

export async function fetchIncidencias() {
    return await (await fetch(`http://${host}/api/trabajadores/asistencias`)).json();
}

export async function fetchAndSerialize(fn: () => Promise<Record<string, any>>): Promise<Record<string, any>[]> {
    const data = await fn();
    return reestructure_obj(data);
}

export async function fetch_structured_station_production_data(station: Estacion) {
    try {
        const data = await (await fetch(`http://${host}/api/produccion/ultima_semana/${station}`)).json();
        return reestructure_obj(data);
    } catch (err) {
        console.error(err);
        return [];
    }
}