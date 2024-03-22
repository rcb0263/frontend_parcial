import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { useState } from "preact/hooks";
import Cliente from "../components/Cliente.tsx";
import Servidor from "../components/Servidor.tsx";

interface MenuProps {
  left:boolean;
}

export default function Menu2(props: MenuProps, props2: MenuProps) {
    const val = props.left;
    props.left=true
    props2.left=false
    const [selected, setSelected]= useState<MenuProps | null>(null);
  return (
    <>
        <div class="flex gap-8 py-6">
        <Button onClick={() => setSelected(props)}>client</Button>
        <Button onClick={() => setSelected(props2)}>server</Button>
        </div>
        <div>
        <h2>My Agenda</h2>
        </div>
        <div>
        {selected==undefined && <div>Welcome to my Agenda</div>}
        {selected?.left==true && <Cliente {...props}/>}
        {selected?.left==false && <Servidor {...props}/>}
        </div>
    </>
  );
}