import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
interface contact{
    name: string;
    email: string;
}
interface lista{
    contacts: contact[]
}
interface ListadoProps {
    left: boolean
}

 const Cliente:FunctionComponent<ListadoProps> =(count)=>{
    const [valid, setValid]= useState<contact | null>(null);
    const [list, setList]= useState<lista | null>(null);
    const left =count;
    return(
        <div class={"lower"}>
            <h1>Cliente</h1>
        </div>
    )
 
}

export default Cliente;