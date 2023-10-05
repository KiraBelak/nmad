import SideBar from "@/components/layouts/Sidebar";



export default function Exp() {
   //logica js aqui
   
    return (
        <>
        <SideBar>


      
    
        <div className="relative">
        <img src="/imgExp/portadaExp.jpg" alt="" class="w-full h-96" />
        <div class="absolute bottom-14 left-[280PX]  w-52 h-72  bg-[#088022] rounded-3xl"></div>   
        <div class="absolute bottom-24 left-56  w-80 h-52 bg-white rounded-3xl">
        <p class="absolute top-4 left-4 right-0 bottom-0 pl-5 text-black text-3xl font-semibold">EXPERIENCIAS DE</p>
        <p class="absolute top-14 left-4 right-0 bottom-0 pl-9 text-black text-3xl font-semibold">VIAJES UNICAS</p>
        <div
         class="absolute none top-28  left-16 rounded-lg bg-gradient-to-tr from-green-200 to-green-500 py-4 px-24  font-sans text-[4px] font-bold uppercase text-white shadow-md shadow-lime-950/20 transition-all hover:shadow-lg hover:shadow-lime-950/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
         <button
         class="absolute none top-0 left-0 rounded-lg bg-transparente py-4  px-9 font-sans text-[4px] font-bold uppercas  ">
         <img src="/imgExp/busqueda.png" alt="busqueda" class="w-6 h-6 absolute top-1 left-2" />
         </button>
         </div>
        </div> 
    </div> 

    <div className="relative">
    <div class="w-full h-[600px] bg-white">  
    <div class="relative top-8 left-14 w-52 h-60 rounded-xl  bg-red-100">
    <img src="/imgExp/sanCarlos.jpg" alt="" class="w-full h-44 sm:h-60 rounded-xl" />
    <p class="absolute bottom-8 left-3 text-sm  text-white px-2 py-1 font-bold">
    <div id="linea" class="w-32 h-1 bg-white"></div>
     MIRADOR PARANOMICO SAN CARLOS</p>
    </div>

    <div class="relative bottom-52 left-72 w-52 h-60 rounded-xl   bg-red-100">
    <img src="/imgExp/Laguna.jpg" alt="" class="w-full h-44 sm:h-60 rounded-xl" />
    <p class="absolute bottom-12 left-3 text-sm  text-white px-2 py-1 font-bold">
    <div id="linea" class="w-32 h-1  bg-white"></div>
    LA LAGUNA DE NAINARI</p>   
    </div>

    <div class="relative bottom-[446px] left-2/3 w-52 h-60 rounded-xl   bg-red-100">
    <img src="/imgExp/coco.jpg" alt="" class="w-full h-44 sm:h-60 rounded-xl" />
    <p class="absolute bottom-12 left-3 text-sm  text-white px-2 py-1 font-bold">
    <div id="linea" class="w-32 h-1  bg-white"></div>
    COCORIT</p>  
    </div>

    <div class="relative bottom-[412px] left-2/3 w-52 h-60 rounded-xl  bg-red-100">
    <img src="/imgExp/ECO.jpg" alt="" class="w-full h-44 sm:h-60 rounded-xl" />
    <p class="absolute bottom-12 left-3 text-sm  text-white px-2 py-1 font-bold">
    <div id="linea" class="w-32 h-1  bg-white"></div>
    ECO CAMP INN</p>  
    </div>

    <div class="relative bottom-[655px] left-72 w-52 h-60 rounded-xl  bg-red-100">
    <img src="/imgExp/ESTADIO2.jpg" alt="" class="w-full h-44 sm:h-60 rounded-xl" />
    <p class="absolute bottom-12 left-3 text-sm  text-white px-2 py-1 font-bold">
    <div id="linea" class="w-32 h-1  bg-white"></div>
    ESTADIO DE LOS YAQUIS</p>  
    </div>

    <div class="relative bottom-[895px] left-14 w-52 h-60 rounded-xl  bg-red-100">
    <img src="/imgExp/GALICIA.jpg" alt="" class="w-full h-44 sm:h-60 rounded-xl" />
    <p class="absolute bottom-12 left-3 text-sm  text-white px-2 py-1 font-bold">
    <div id="linea" class="w-32 h-1  bg-white"></div>
    GALICIA OUTDOORS</p>
    </div>

    </div>
    </div>




















        </SideBar>

        </>
    )
}