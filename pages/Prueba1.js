import React from "react"
import LenguageSelector from "../components/LenguageSelector"

export default function contact(props){
    const { Prueba1 } = props;
    return (
        <div>
            <h1>{Prueba1.title}</h1>
            <LenguageSelector />
        </div>
    )
}

export async function getStaticProps({ locale }) {
    const response = await import(`../lang/${locale}.json`)
    // console.log(response.default.Prueba1);

    return {
        props: {
            Prueba1: response.default.Prueba1,
        }
    }
}