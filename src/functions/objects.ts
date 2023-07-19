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

export function sort_obj_array(arr: Record<string, any>[], key: string, ascending: boolean) {
    let swapped = true;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (ascending) {
                if (arr[i][key] > arr[i + 1][key]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    swapped = true;
                }
            } else {
                if (arr[i][key] < arr[i + 1][key]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    swapped = true;
                }
            }
        }
    } while (swapped);

    return arr;
}