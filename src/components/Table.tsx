import { For, JSXElement } from "solid-js"

type Props = {
    titles: JSXElement[],
    data: Record<string, any>[],
    col_conditions?: Record<string, (key: any, value: any) => JSXElement>
}

export default function Table(props: Props) {
    const data_keys = () => Object.keys(props.data[0]);

    return <table>
        <thead class="bg-white border-b">
            <tr>
                <For each={props.titles}>
                    {title => (
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 text-center">{title}</th>
                    )}
                </For>
            </tr>
        </thead>
        <tbody>
            <For each={props.data} fallback={<div>No data</div>}>
                {(record, index) => (
                    <tr class={`${index() % 2 ? "bg-white" : "bg-gray-100"} border-b`}>
                        <For each={data_keys()}>
                            {(key, count) => (
                                <td class={`border-2 border-black whitespace-nowrap text-sm font-medium text-gray-900 ${count() === 0 ? "font-medium text-left" : "font-light text-center"}`}>
                                    {(props.col_conditions && props.col_conditions[key]) ?
                                        props.col_conditions[key](key, record[key]) :
                                        record[key]
                                    }
                                </td>
                            )}
                        </For>
                    </tr>
                )}
            </For>
        </tbody>
    </table>
}