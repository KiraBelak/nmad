import SideBar from "@/components/layouts/Sidebar";

export default function Exp() {
  //logica js aqui

  return (
    <>
      <SideBar>
      <div className="relative flex flex-col items-center justify-center bg-[url('/imgExp/portadaExp.jpg')] no-repeat center center bg-cover w-full h-[500px]">
    {/* <img src="/imgExp/portadaExp.jpg" alt="" class="w-full h-96" /> */}
    <div class="relative flex items-center justify-center w-52 h-72 bg-[#088022] rounded-3xl z-10">
    </div>
    <div class="absolute flex items-center justify-center w-72 h-52 bg-[#ffffff] rounded-3xl z-20">
        {/* Contenido blanco */}
        <p class= "absolute bottom-28 left-4 text-3xl text-black px-2 py-1 text-center pr-2 font-bold ">EXPERIENCIAS DE VIAJE UNICAS </p>
        
    </div>
</div>


        <div className="relative">
          <div class="w-full h-[600px] bg-white">
            <a
              href="/tu-enlace3"
              class="relative top-8 left-14 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/sanCarlos.jpg"
                alt=""
                class="w-full h-44 sm:h-60 rounded-xl"
              />
              <p class="absolute bottom-8 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                MIRADOR PANORÁMICO SAN CARLOS
              </p>
            </a>

            <a
              href="/tu-enlace4"
              class="relative bottom-52 left-72 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/Laguna.jpg"
                alt=""
                class="w-full h-44 sm:h-60 rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                LA LAGUNA DE NAINARI
              </p>
            </a>

            <a
              href="/tu-enlace5"
              class="relative bottom-[446px] left-2/3 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/coco.jpg"
                alt=""
                class="w-full h-44 sm:h-60 rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                COCORIT
              </p>
            </a>

            <a
              href="/tu-enlace"
              class="relative bottom-[412px] left-2/3 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/ECO.jpg"
                alt=""
                class="w-full h-44 sm:h-60 rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                ECO CAMP INN
              </p>
            </a>

            <a
              href="/tu-enlace1"
              class="relative bottom-[655px] left-72 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/ESTADIO2.jpg"
                alt=""
                class="w-full h-44 sm:h-60 rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                ESTADIO DE LOS YAQUIS
              </p>
            </a>

            <a
              href="/tu-enlace2"
              class="relative bottom-[895px] left-14 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/GALICIA.jpg"
                alt=""
                class="w-full h-44 sm:h-60 rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                GALICIA OUTDOORS
              </p>
            </a>
          </div>
        </div>

        <div className="relative">
          <div class="w-full h-[600px] bg-[#088022]">
            <img
              src="/imgExp/portadaExp.jpg"
              alt=""
              class=" w-[700px] h-96 left-20"
            />
          </div>
        </div>
      </SideBar>
    </>
  );
}
