import React from "react";
import { useRouter } from "next/router"

export default function LenguageSelector(){
    const router = useRouter();
    

        // e de evento
        const changeLang = (e) => {
            router.push(router.pathname, router.pathname, {
                locale: e.target.value,
            });
        }
    return (
        <select onChange={changeLang}>
            <option value="es">Español</option>
            <option value="en">Ingles</option>
            <option value="fr">Frances</option>
        </select>
    );
}