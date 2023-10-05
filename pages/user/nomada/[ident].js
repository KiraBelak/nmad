import SideBar from "@/components/layouts/Sidebar";
import { useRouter } from "next/router";



export default function Nomadas() {
    //logica js aqui
    const router = useRouter();
    const { ident } = router.query;


    console.log(ident);

    //traer datos de la base de datos con el id del nomada

    


   
 return (
    <SideBar>
    <div>
    <div className="w-full flex flex-col items-center sm:flex-row bg-[url('/imgNomadas/tequila.jpg')] bg-center bg-cover bg-no-repeat h-[320px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
{/* <img src="/imgNomadas/tequila.jpg" alt="" className="w-full sm:w-auto" /> */}

<div className="w-full  bg-gradient-to-t pt-8 sm:bg-gradient-to-r from-transparent to-black sm:from-transparent sm:to-transparent px-2 py-1 sm:py-4 sm:pr-16">
<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
  <img
    src="/imgNomadas/edgar.jpg"
    alt=""
    className="w-20 h-20 sm:w-52 sm:h-52 rounded-full border-4 border-orange-600 mb-4 sm:mb-0"
  />

  <p className="text-2xl sm:text-4xl lg:text-5xl text-red-400 mb-2 sm:mb-4">
    Tequila Jalisco
  </p>

  <p className="text-lg sm:text-3xl text-orange-200 text-opacity-90 font-bold bg-gradient-to-r from-orange-600 mb-4 sm:mb-8">
    Edgar Robles
  </p>

  <p className="text-xs sm:text-base text-white px-2 py-1 sm:px-0">
    Descubre la esencia de México en Tequila, Jalisco, donde la cultura del
    tequila cobra vida entre majestuosos campos de agave azul. ¡Sumérgete en
    la destilación artesanal y degusta esta icónica bebida en un entorno
    pintoresco conmigo!.
  </p>
</div>
</div>
</div>

{/* segunda seccion */}
      <div class="w-full sm:w-full pb-2 px-4 bg-amber-50 box-border flex flex-col items-center sm:flex-row">
      <div className="w-full my-4 sm:w-1/2">
      <p class="w-full top-8 mb-2 sm:top-10 left-8 right-0 bottom-0   text-red-600 text-sm sm:text-1xl font-semibold">
        Edgar Robles
      </p>
      <p class=" w-full pr-10 ml-3 text-gray-600 text-[10px] sm:text-xs">
        Soy un nmado de jalisco,apasionado por la aventura, la adrenalina y
        los recorridos que involucren fiesta y buenos amigos, permiteme
        ayudarte a descubrir jalisco. mi mision *Jalisco es mi hogar, y mi
        pasión es compartir su belleza y cultura con el mundo*{" "}
      </p>
      </div>

      <div className="w-full sm:w-1/2">
      <p class="sm:top-16 w-full pr-10 sm:pr-16 ml-3 text-gray-600 text-[10px] sm:text-xs">

        Soy un nmado de jalisco,apasionado por la aventura, la adrenalina y
        los recorridos que involucren fiesta y buenos amigos, permiteme
        ayudarte a descubrir jalisco. mi mision *Jalisco es mi hogar, y mi
        pasión es compartir su belleza y cultura con el mundo*{" "}
        </p>
      </div>
    </div>


    {/* ante */}
    <div className="relative flex flex-col pt-3 items-center bg-orange-400 h-auto px-2">
<p className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-semibold mt-4 sm:mt-4 lg:mt-4">
¿Por qué viajar conmigo?
</p>
<p className="text-black text-sm sm:text-base lg:text-lg font-semibold mt-2 sm:mt-4 lg:mt-2 max-w-md text-center">
Además de mi amistad y de mi amplio conocimiento en los lugares de Jalisco, te ofrezco:
</p>
<div className="flex justify-center items-center space-x-4 mt-4 sm:mt-6 lg:mt-4">
<div className="flex flex-col items-center">
  <img
    src="/imgNomadas/ViajeSeguro.jpg"
    alt="viaje seguro"
    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
  />
  <p className="text-black text-sm sm:text-base lg:text-lg font-semibold mt-2">
    VIAJE SEGURO
  </p>
  <p className="mt-2 text-gray-500 text-sm sm:text-base lg:text-lg">
    Soy una persona de confianza, mis reseñas pueden ayudarte a darte una idea. Además, no hay tarifas elevadas por ser turista, a un amigo no le cobraría de más.
  </p>
</div>
<div className="flex flex-col items-center">
  <img
    src="/imgNomadas/des.png"
    alt="descubre"
    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
  />
  <p className="text-black text-sm sm:text-base lg:text-lg font-semibold mt-2">
    DESCUBRE
  </p>
  <p className="mt-2 text-gray-500 text-sm sm:text-base lg:text-lg">
    Soy una persona de confianza, mis reseñas pueden ayudarte a darte una idea. Además, no hay tarifas elevadas por ser turista, a un amigo no le cobraría de más.
  </p>
</div>
<div className="flex flex-col items-center">
  <img
    src="/imgNomadas/multiple.jpg"
    alt="descubre"
    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
  />
  <p className="text-black text-sm sm:text-base lg:text-lg font-semibold mt-2">
    MULTIPLE DESTINOS
  </p>
  <p className="mt-2 text-gray-500 text-sm sm:text-base lg:text-lg">
    Soy una persona que lleva muchos años viviendo en Jalisco, y puedo darte múltiples experiencias dependiendo del destino que te gustaría conocer.
  </p>
</div>
</div>
</div>




{/* penultima */}
    <div className="relative">
      <img
        src="/imgNomadas/resenas.webp"
        alt=""
        class="w-full h-44 sm:h-60"
      />
      <p class="absolute bottom-24 sm:bottom-32 left-3 text-sm sm:text-3xl text-black hover:text-red-400 px-2 py-1 font-bold">
        MIS AMIGOS HABLAN POR MI
      </p>
      <p class="absolute bottom-14 sm:bottom-10 left-0  sm:left-3 text-[8px] sm:text-lg text-white px-2 py-1 text-center pr-32 sm:pr-60">
        No me creas a mi, puedes checar las reseñas de mis amigos que me han
        venido a visitar y hemos dado una vueltas por la ciudad juntos.
      </p>
      <button class="absolute none top-20 sm:top-28 left-60 sm:left-3/4 rounded-lg bg-gradient-to-tr from-red-500 to-orange-500 py-2 sm:py-4 px-4 sm:px-8 font-sans text-[8px] sm:text-[10px] font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Reseñas
      </button>
    </div>


 {/* ultima seccion */}
 <div className="relative w-full">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
{/* Centro GDL */}
<div className="relative bg-amber-100 rounded-lg p-4">
  <p className="text-[5px] sm:text-[10px] text-orange-500 font-bold mb-1">
    CENTRO GDL
  </p>
  <img
    src="/imgNomadas/centroGDL.jpg"
    alt=""
    className="w-16 sm:w-44 h-14 sm:h-32 rounded-full mb-1"
  />
  <p className="text-[5px] sm:text-[10px] text-orange-500 text-center">
    Tomemos un recorrido por el centro de Guadalajara y aprendamos de su arquitectura y comida típica.
  </p>
  <button className="rounded-lg bg-gradient-to-tr from-red-500 to-orange-500 py-1 sm:py-2 px-2 sm:px-4 text-[4px] sm:text-[7px] font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85]">
    Mas info
  </button>
</div>

{/* Puerto Vallarta */}
<div className="relative bg-amber-100 rounded-lg p-4">
  <p className="text-[5px] sm:text-[10px] text-orange-500 font-bold mb-1">
    PUERTO VALLARTA
  </p>
  <img
    src="/imgNomadas/PlayaVallarta.jpg"
    alt=""
    className="w-16 sm:w-44 h-14 sm:h-32 rounded-full mb-1"
  />
  <p className="text-[5px] sm:text-[10px] text-orange-500 text-center">
    Puedo llevarte a conocer la refrescante y tropical costa de Puerto Vallarta como local.
  </p>
  <button className="rounded-lg bg-gradient-to-tr from-red-500 to-orange-500 py-1 sm:py-2 px-2 sm:px-4 text-[4px] sm:text-[7px] font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85]">
    Mas info
  </button>
</div>

{/* Tonala Ruta Alfarera */}
<div className="relative bg-amber-100 rounded-lg p-4">
  <p className="text-[4px] sm:text-[10px] text-orange-500 font-bold mb-1">
    TONALA RUTA ALFARERA
  </p>
  <img
    src="/imgNomadas/Tonala.png"
    alt=""
    className="w-16 sm:w-44 h-14 sm:h-32 rounded-full mb-1"
  />
  <p className="text-[5px] sm:text-[10px] text-orange-500 text-center">
    Demos una vuelta por Tonala y conozcamos su tianguis de artesanías y por qué es la capital alfarera.
  </p>
  <button className="rounded-lg bg-gradient-to-tr from-red-500 to-orange-500 py-1 sm:py-2 px-2 sm:px-4 text-[4px] sm:text-[7px] font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85]">
    Mas info
  </button>
</div>
</div>
</div>

        </div>

  </SideBar>
    )
}