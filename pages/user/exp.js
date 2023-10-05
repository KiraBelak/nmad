import SideBar from "@/components/layouts/Sidebar";

export default function Exp() {
  //logica js aqui

  return (
    <>
      <SideBar>
        <div className="relative flex flex-row items-center justify-center bg-[url('/imgExp/portadaExp.jpg')] no-repeat center center bg-cover w-full h-[500px]">
          {/* <img src="/imgExp/portadaExp.jpg" alt="" class="w-full h-96" /> */}
          <div class="relative flex items-center justify-center w-52 h-72 bottom-20 lg:bottom-8 bg-[#088022] rounded-3xl z-10"></div>
          <div class="absolute flex items-center justify-center w-72 h-52 bottom-56 lg:bottom-44 bg-[#ffffff] rounded-3xl z-20">
            {/* Contenido blanco */}
            <p class="absolute bottom-28 left-4 text-3xl text-black px-2 py-1 text-center pr-2 font-bold ">
              EXPERIENCIAS DE VIAJE UNICAS{" "}
            </p>
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="text pt-10"
                  placeholder="donde buscas la experiencia?"
                  className=" mt-16 py-2 px-4 rounded-l-lg border border-gray-300  text-black text-[10px] focus:outline-none"
                />
                <button className="bg-gradient-to-tr from-[#193300] to-[#33ff99] py-6 px-2 mt-16 rounded-r-lg font-sans text-[4px] font-bold uppercase text-black shadow-md shadow-green-950/40 transition-all hover:shadow-lg hover:shadow-green-950/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
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
          <div className="w-full h-[550px] bg-white">
            <div className="relative top-4 lg:top-7 left-[16px] lg:left-20 w-32 h-40 bg-red-200 left-9 lg:left-20 rounded-2xl ">
              <img
                src="/imgExp/sanCarlos.jpg"
                alt=""
                class="w-32 lg:w-72 h-40 lg:h-52 rounded-xl"
              />
              <p className="absolute bottom-8 lg:top-[130px] left-1 text-[8px] lg:text-[12px] text-white px-2 py-1 font-bold">
                MIRADOR PANORÁMICO SAN CARLOS
                <div className="w-20 h-1 bg-white"></div>
              </p>
            </div>

            <div className="relative bottom-40 lg:bottom-[134px] left-[170px] lg:left-72 w-32 h-40 bg-red-200 left-9 rounded-2xl ">
              <img
                src="/imgExp/Laguna.jpg"
                alt=""
                class="w-32 lg:w-72 h-40 lg:h-52 rounded-xl"
              />
              <p className="absolute bottom-8 lg:top-[150px] left-1 text-[8px] lg:text-[12px] text-white px-2 py-1 font-bold">
              LA LAGUNA DE NAINARIS
                <div className="w-20 h-1 bg-white"></div>
              </p>
            </div>


            <div className="relative bottom-32 lg:bottom-[295px]  left-[170px] lg:left-[480px] w-32 h-40 bg-red-200 left-9 rounded-2xl ">
              <img
                src="/imgExp/coco.jpg"
                alt=""
                class="w-32 lg:w-72 h-40 lg:h-52 rounded-xl"
              />
              <p className="absolute bottom-8 lg:top-40 left-1 text-[8px] lg:text-[17px] text-white px-2 py-1 font-bold">
              Cocorit
                <div className="w-20 h-1 bg-white"></div>
              </p>
            </div>


            <div className="relative bottom-72 lg:bottom-52 left-[20px] lg:left-[480px] w-32 h-40 bg-red-200 left-9 rounded-2xl ">
              <img
                src="/imgExp/ECO.jpg"
                alt=""
                class="w-32 lg:w-72 h-40 lg:h-52 rounded-xl"
              />
              <p className="absolute bottom-8 lg:top-40 left-1 text-[8px] lg:text-[17px] text-white px-2 py-1 font-bold">
              Eco camp inn
                <div className="w-20 h-1 bg-white"></div>
              </p>
            </div>


            <div className="relative bottom-[270px] lg:bottom-[370px] left-[20px] lg:left-[290px] w-32 h-40 bg-red-200 left-9 rounded-2xl ">
              <img
                src="/imgExp/ESTADIO2.jpg"
                alt=""
                class="w-32 lg:w-72 h-40 lg:h-52 rounded-xl"
              />
              <p className="absolute bottom-8 lg:top-32 left-1 text-[8px] lg:text-[14px] text-white px-2 py-1 font-bold">
              ESTADIO DE LOS YAQUIS
                <div className="w-20 h-1 bg-white"></div>
              </p>
            </div>



            <div className="relative bottom-[430px] lg:bottom-[530px] left-[20px] lg:left-[90px] w-32 h-40 bg-red-200 left-9 rounded-2xl ">
              <img
                src="/imgExp/GALICIA.jpg"
                alt=""
                class="w-32 lg:w-72 h-40 lg:h-52 rounded-xl"
              />
              <p className="absolute bottom-8 lg:top-32 left-1 text-[8px] lg:text-[14px] text-white px-2 py-1 font-bold">
              GALICIA OUTDOORS
                <div className="w-20 h-1 bg-white"></div>
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div class="w-full h-[203px] bg-[#088022]">
          <p class="absolute bottom-24 lg:bottom-32 left-2 lg:left-2 text-[5px] lg:text-[9px]  text-white font-bold">
          MUSEO SONORA REVOLUCION
                <div id="linea" class="w-12 h-1 bg-white"></div>
              </p>
              <p class="absolute bottom-16 lg:bottom-12 text-[6px] lg:text-[8px] pr-15 lg:pr-38 lg:pl-42  pl-20 text-white">
              Este museo te invita a explorar la apasionante historia de la Revolución Mexicana. A través de una valiosa colección de piezas históricas resguardadas por descendientes del General Álvaro Obregón, podrás sumergirte en este período crucial de la historia de México.

Cada objeto en exhibición cuenta una historia única, desde armas de la época hasta documentos originales y objetos personales de figuras destacadas. Estas piezas te llevarán al contexto histórico de la Revolución, permitiéndote comprender las luchas y los logros de quienes participaron en ella.

Descubre una experiencia enriquecedora que te conectará con el pasado y te permitirá apreciar la rica herencia cultural de la Revolución Mexicana a través de estas valiosas reliquias.
              </p>
          <img
              src="/imgExp/museo.webp"
              alt=""
              class=" w-full h-full"
            />
        </div>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div class="w-full h-[203px] bg-[#088022]">
          <p class="absolute bottom-40 lg:bottom-40 left-10 lg:left-52 text-[10px]  text-black px-1 bg-green-500 rounded">
     Nomadas que te pueden llevar a esta experiencia:
    </p>
    <img
        src="/imgExp/imagen2.jpg"
        alt=""
        class=" w-20 h-20 absolute left-10  lg:left-[450px] bottom-14 lg:bottom-14 rounded-full border-dashed border-2 border-green-900"   
            />
             <p class="absolute bottom-8 left-12 lg:left-[465px] text-[10px]  text-black px-1 bg-green-200 rounded">
     Jessica Diaz
    </p>

    <img
        src="/imgExp/imagen1.jpg"
        alt=""
        class=" w-20 h-20 absolute left-48 lg:left-32 bottom-14 rounded-full border-dashed border-2 border-green-900"   
            />
            <p class="absolute bottom-8 left-[200px] lg:left-[135px] text-[10px]  text-black px-1 bg-green-200 rounded">
     Jose luis Diaz
    </p>

          </div>
          </div>


      </SideBar>
    </>
  );
}
