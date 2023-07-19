export const estaciones = ["FORMULADO", "MEZCLADO", "LAMINADO", "VULCANIZADO", "CARDADO"] as const;
export type Estacion = typeof estaciones[number];