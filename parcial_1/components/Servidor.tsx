import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "preact";
interface ListadoProps {
    left: boolean
}

 const Servidor:FunctionComponent<ListadoProps> =(count)=>{
    const left =count;
    return(
        <>
            <div class={"lower"}>
                <h2>Not implemented</h2>
            </div>
        </>


    )
 
}

export default Servidor;