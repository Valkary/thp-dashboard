import { For, Show, Suspense, createEffect, createResource, createSignal } from "solid-js"
import { fetch_structured_full_trabajadores } from "../functions/fetch";

export default function Caratula() {
    const [trabajador, setTrabajador] = createSignal<number>();
    const [currTrabajador, setCurrTrabajador] = createSignal<Record<string, any>>();
    const [trabajadores] = createResource<Record<string, any>[number]>(fetch_structured_full_trabajadores);

    createEffect(() => {
        if (trabajador()) {
            setCurrTrabajador(trabajadores()[trabajador()!])
        }
        console.log(currTrabajador());
    });

    return <Suspense fallback={<div>Cargando informacion</div>}>
        <Show when={trabajadores.state === "ready"}>
            <article class="mx-8">
                <div class="flex w-full justify-end gap-4">
                    <Show when={!trabajador()}>
                        Trabajador no seleccionado
                    </Show>
                    <Show when={trabajador()}>
                        Trabajador seleccionado:
                    </Show>

                    {/* @ts-ignore */}
                    <select value={trabajador()} onChange={(e) => setTrabajador(e.currentTarget.value)}>
                        <For each={trabajadores()}>{
                            (trabajador, id) => <option
                                value={id()}
                            >
                                {trabajador.Nombres} {trabajador.APaterno}
                            </option>
                        }</For>
                    </select>
                </div>
                <Show when={trabajador() && currTrabajador()}>
                    <div class="w-full flex flex-row flex-wrap my-4 justify-center">
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">idTrabajador:</h5>
                            <p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center">{currTrabajador()!.idTrabajador}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Nombre completo:</h5>
                            <p class="w-1/3 border border-black rounded-sm bg-gray-200 text-center">{`${currTrabajador()!.Nombres} ${currTrabajador()!.APaterno} ${currTrabajador()!.AMaterno}`}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Foto:</h5>
                            <img
                                loading="lazy"
                                alt="Foto de trabajador"
                                src={currTrabajador()!.Foto}
                            />
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">idSexo:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.idSexo ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.idSexo ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">idSangre:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.idSangre ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.idSangre ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Fecha nacimiento:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.FecNacimiento ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.FecNacimiento ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Fecha alta:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.FecAlta ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.FecAlta ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Sueldo:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.SBC ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.SBC ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">NSS:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.Nss ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.Nss ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">CURP:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.CURP ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.CURP ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">RFC:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.Rfc ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.Rfc ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">INE:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.Ife ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.Ife ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Domicilio:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center`}>
                                {`${currTrabajador()!.DomCalle}, ${currTrabajador()!.DomNumExt},${currTrabajador()!.DomNumInt ? currTrabajador()!.DomNumInt + "," : ""} ${currTrabajador()!.DomColonia}, ${currTrabajador()!.DomCp}, ${currTrabajador()!.DomCiudad}, ${currTrabajador()!.DomEstado}`}
                            </p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Celular:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.Cel ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.Cel ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">idBanco:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.idBanco ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.idBanco ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Número de cuenta:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.CtaNum ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.CtaNum ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">CLABE:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.CtaClabe ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.CtaClabe ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.CalzMedida ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.CalzMedida ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.CalzCasquillo ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.CalzCasquillo ? "Si" : "No"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Calzado Medida:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.Contacto ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.Contacto ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Teléfono del contacto:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.TelContacto ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.TelContacto ?? "X"}</p>
                        </div>
                        <div class="w-1/2 flex flex-row justify-start items-center">
                            <h5 class="font-bold tracking-wide w-2/3">Beneficiario:</h5>
                            <p class={`w-1/3 border border-black rounded-sm bg-gray-200 text-center ${currTrabajador()!.Beneficiario ? "bg-gray-200" : "bg-red-400"}`}>{currTrabajador()!.Beneficiario ?? "X"}</p>
                        </div>
                    </div>
                </Show>
            </article>
        </Show>
        <Show when={trabajadores.state === "errored"}>
            Error
        </Show>
    </Suspense>
}