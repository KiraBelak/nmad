import SideBar from "@/components/layouts/Sidebar";

export default function Exp() {
  //logica js aqui

  return (
    <>
      <SideBar>


      <div className="relative flex flex-row items-center justify-center bg-[url('/imgExp/portadaExp.jpg')] no-repeat center center bg-cover w-full h-[500px]">
    {/* <img src="/imgExp/portadaExp.jpg" alt="" class="w-full h-96" /> */}
    <div class="relative flex items-center justify-center w-52 h-72 bg-[#088022] rounded-3xl z-10">
    </div>
    <div class="absolute flex items-center justify-center w-72 h-52 bg-[#ffffff] rounded-3xl z-20">
        {/* Contenido blanco */}
        <p class= "absolute bottom-28 left-4 text-3xl text-black px-2 py-1 text-center pr-2 font-bold ">EXPERIENCIAS DE VIAJE UNICAS </p>
        <div className="relative">
  <div className="flex items-center">
    <input
      type="text pt-10"
      placeholder="donde buscas la experiencia?"
      className=" mt-16 py-2 px-4 rounded-l-lg border border-gray-300  text-black text-[10px] focus:outline-none"
    />
    <button
      className="bg-gradient-to-tr from-[#193300] to-[#33ff99] py-6 px-2 mt-16 rounded-r-lg font-sans text-[4px] font-bold uppercase text-black shadow-md shadow-green-950/40 transition-all hover:shadow-lg hover:shadow-green-950/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      <div className="flex flex-col items-center justify-center">
      <img
                src="/imgExp/busqueda.png"
                alt=""
                class="w-4 h-4  rounded-xl"
              />
      </div>
    </button>
  </div>
</div>
    </div>
</div>


<div className="relative flex flex-col items-center justify-center bg-[url('/imgExp/portadaExp.jpg')] no-repeat center center bg-cover w-full h-[500px]">
  <div className="w-full h-[600px] bg-white">
    <a href="/tu-enlace3" className="relative top-8 left-14 sm:left-4 w-52 sm:w-38 h-60 rounded-xl bg-red-100 block no-underline">
      <img src="/imgExp/sanCarlos.jpg" alt="" className="w-full h-44 sm:h-60 rounded-xl" />
      <p className="absolute bottom-8 left-3 text-sm text-white px-2 py-1 font-bold">
        <div className="w-32 h-1 bg-white"></div>
        MIRADOR PANORÁMICO SAN CARLOS
      </p>
    </a>

            <a
              href="/tu-enlace4"
              class="relative bottom-52 left-[268px] w-52  h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/Laguna.jpg"
                alt=""
                class="w-full h-60 rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                LA LAGUNA DE NAINARI
              </p>
            </a>

            <a
              href="/tu-enlace5"
              class="relative bottom-[446px]  left-2/3 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/coco.jpg"
                alt=""
                class="w-full h-60  rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                COCORIT
              </p>
            </a>

            <a
              href="/tu-enlace"
              class="relative bottom-[412px]  left-2/3 w-52 h-60  rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/ECO.jpg"
                alt=""
                class="w-full h-60 rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                ECO CAMP INN
              </p>
            </a>

            <a
              href="/tu-enlace1"
              class="relative bottom-[655px] left-[270px] w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/ESTADIO2.jpg"
                alt=""
                class="w-full h-60  rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                ESTADIO DE LOS YAQUIS
              </p>
            </a>

            <a
              href="/tu-enlace2"
              class="relative bottom-[895px] left-4 w-52 h-60 rounded-xl bg-red-100 block no-underline"
            >
              <img
                src="/imgExp/GALICIA.jpg"
                alt=""
                class="w-full h-60  rounded-xl"
              />
              <p class="absolute bottom-12 left-3 text-sm text-white px-2 py-1 font-bold">
                <div id="linea" class="w-32 h-1 bg-white"></div>
                GALICIA OUTDOORS
              </p>
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div class="w-full h-[600px] bg-[#088022]">
          <p class="absolute bottom-72 left-16 text-1xl text-white px-2 py-1 font-bold">
          MUSEO SONORA REVOLUCION
                <div id="linea" class="w-60 h-1 bg-white"></div>
              </p>
              <p class="absolute bottom-[50px] left-[320px] text-lg text-white px-10 py-6">
              Este museo te invita a explorar la apasionante historia de la Revolución Mexicana. A través de una valiosa colección de piezas históricas resguardadas por descendientes del General Álvaro Obregón, podrás sumergirte en este período crucial de la historia de México.

Cada objeto en exhibición cuenta una historia única, desde armas de la época hasta documentos originales y objetos personales de figuras destacadas. Estas piezas te llevarán al contexto histórico de la Revolución, permitiéndote comprender las luchas y los logros de quienes participaron en ella.

Descubre una experiencia enriquecedora que te conectará con el pasado y te permitirá apreciar la rica herencia cultural de la Revolución Mexicana a través de estas valiosas reliquias.
              </p>
            <img
              src="/imgExp/museo.webp"
              alt=""
              class=" w-[745px] h-[580px] pt-6 pl-7"
            />
          </div>
        </div>
 
        <div className="relative flex flex-col items-center justify-center">

          <div class="w-full h-[600px] bg-[#ffffff] flex items-center justify-around pl-4 ">
          <div class=" w-80 h-96 bg-[#CCFFE5] ">
          <p class="absolute bottom-10 sm:bottom-72 left-16  text-1xl text-black px-2 py-1 font-bold">
      Nmados disponibles:
      <div id="linea" class="w-60 h-1 bg-white"></div>
    </p>
    <img
        src="/imgExp/imagen1.jpg"
        alt=""
        class=" w-24 h-24 absolute left-[550px] bottom-44 rounded-s-full"
            />
    <button class="absolute bottom-32 left-[540px]  text-lg  text-black px-1  py-2 bg-green-500 rounded">
     Jaime Sánchez
    </button>

    <img
        src="/imgExp/imagen2.jpg"
        alt=""
        class=" w-24 h-24 absolute left-[550px] bottom-[370px] rounded-s-full"
            />
    <button class="absolute bottom-[310px] left-[550px]  text-lg  text-black px-1  py-2 bg-green-500 rounded">
     Ana Garcia
    </button> 
          </div>
          <div class=" w-80 h-96 pl-10 bg-[#CCFFE5] ">
          </div>
          </div>
        </div>


      </SideBar>
    </>
  );
}
