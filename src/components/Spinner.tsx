import { createSignal, onCleanup } from "solid-js";

type Props = {
    size: "sm" | "md" | "lg"
}

const sizes = {
    "sm": "h-8 w-8",
    "md": "h-12 w-12",
    "lg": "h-16 w-16"
}

export default function Spinner(props: Props) {
    let ref: HTMLDivElement | undefined;
    const [deg, setDeg] = createSignal(0);

    const timer = setInterval(() => {
        setDeg(deg() + 5);
        if (ref) ref.style.transform = `rotate(${deg()}deg)`
    }, 20);

    onCleanup(() => clearInterval(timer));

    return <div class={`${sizes[props.size] ?? "h-24 w-24"} border-2 border-blue rounded-full p-0 m-0`}>
        <div class="h-full w-full border-4 border-t-blue-500 rounded-full" ref={ref} />
    </div>
}