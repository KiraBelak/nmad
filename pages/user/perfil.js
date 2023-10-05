import axios from "axios";

export default function Perfil(){
//Se le asigna a nuevos usuarios puntos cero
const usuario = {
    correo: 'kekioivan0112@gmail.com',
    puntos: 0,
};  

const catalogos = {
    boton_uno: 'Playas Mexicanas',
    boton_dos: 'Pueblos Magicos',
    boton_tres: ' Zonas Arqueologicas',
    boton_cuatro: 'Turismo Comunitario',
    boton_cinco: 'Turismo Urbano',
    boton_seis: 'Ecoturismo'
};

//  Esta funcion es para agregar puntos al usuario
function agregarPuntos(usuario, cantidad) {
    usuario.puntos += cantidad;
}

//
function canjearPuntos(usuario, recompensa) {
    if (usuario.puntos >= recompensa) {
        usuario.puntos -= recompensa;
        console.log(`Has canjeado: ${recompensa} puntos por una recompensa y le quedan: ${usuario.puntos} puntos.`);
    } else {
        console.log(`No tienes suficientes puntos para canjear esta recompensa, usted tiene: ${usuario.puntos} puntos, necesita: ${recompensa} puntos.`);
    }
}


// const res = axios.post("/api/puntos", {
//     email: usuario.correo,
//     puntos: usuario.puntos,
    
// })
const getData = async()=>{
    const res = await axios.put("/api/puntos", {
        email: usuario.correo,
        puntos: usuario.puntos,
        
    })
        console.log(res)
    
    
    
}
getData()



    return(
        <>
        </>
    )
}