import SideBar from "@/components/layouts/Sidebar";



export default function Exp() {
   //logica js aqui
   
    return (
        <>
        <SideBar>


      
    
        <div className="relative">
        <img src="/imgNomadas/tequila.jpg" alt="" class="w-full" />
        <img src="/imgNomadas/edgar.jpg" alt="" class=" w-28 h-28 sm: w-52 sm:h-52  absolute top-10 sm:top-28 left-52 sm:left-2/3 lg:left-[440px] rounded-md" />
        <p class="absolute bottom-24 sm:bottom-52 lg:bottom-38 left-5 sm:left-12 lg:left-8 text-2xl sm:text-5xl lg:text-5xl text-red-400  px-2 py-1">Tequila Jalisco</p>    
        <p class="absolute bottom-4 sm:bottom-10 lg:bottom-6 left-52 sm:left-2/3 lg:left-[440px] text-base sm:text-3xl text-orange-200 bg-gradient-to-r from-orange-600  px-2 py-1 font-bold">Edgar Robles</p>   
         <p class= "absolute bottom-12 sm:bottom-24 lg:bottom-14 left-3 text-[7px] sm:text-base text-white  px-2 py-1 pr-32 sm:pr-64 ">Descubre la esencia de México en Tequila, Jalisco,
          donde la cultura del tequila cobra vida entre majestuosos campos de agave azul.
          
           ¡Sumérgete en la destilación artesanal y degusta esta icónica bebida en un entorno pintoresco conmigo!.</p>
    </div> 





















        </SideBar>

        </>
    )
}