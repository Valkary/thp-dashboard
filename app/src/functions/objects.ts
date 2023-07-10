export function reestructure_obj(obj: Record<string, any>): Record<string, any>[] {
    const keys = Object.keys(obj);
    const len = Object.keys(obj[keys[0]]).length;

    let table: Record<string, any>[] = Array.from({ length: len }, () => ({}));

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < keys.length; j++) {
            table[i][keys[j]] = Object.values(obj[keys[j]])[i];
        }
    }

    return table;
}