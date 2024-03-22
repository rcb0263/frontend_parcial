import Menu2 from "../islands/Menu2.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {

  return (
    <>   
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">

            <   Menu2 left={false}/>
            </div>
        </div>
        <div class="layout">
            <Component />
        </div>
    </>

  );
}
