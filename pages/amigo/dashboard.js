import React from "react";
import SideBar from "@/components/layouts/Sidebar";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import SelectMap from "@/components/SelectMap";
import { set } from "date-fns";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [experiencias, setExperiencias] = useState([]);
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [load, setLoad] = useState(false);


  const { data: session, status } = useSession();

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    const getExp = async () => {
      const res = await axios
        .get("/api/exp")
        .then((res) => {
          const data = res.data.data;
          //tomar las experiencias del usuario
          const exp = data.filter((e) => e.email === session.user.email);

          console.log(exp);

          setExperiencias(exp);
        })
        .catch((err) => {
          // console.log(err);
          toast.error("Error al obtener las experiencias");
        });
    };

    getExp();
  }, []);

    const handleExp = async () => {
        try {
            //si no hay algun campo lleno no se puede crear la experiencia
            if (
                title.trim() === "" ||
                descripcion.trim() === "" ||
                categoria.trim() === "" ||
                ubicacion.trim() === ""
            ) {
                toast.error("Todos los campos son obligatorios");
                return;
            }

            await setLoad(true);
            // console.log("wenas")
            // console.log(title, descripcion, imagen, categoria, ubicacion);
            const res = await axios.post("/api/exp", {
                title,
                descripcion,
                imagen,
                categoria,
                ubicacion,
                email: session.user.email,
            }).then((res) => {
                toast.success("Experiencia creada");
                setOpen(false);
                //limpiar los campos
                setTitle("");
                setDescripcion("");
                setImagen("");
                setCategoria("");
                setUbicacion("");
                setLoad(false);


            }).catch((err) => {
                setLoad(false);
                toast.error("Error al crear la experiencia");
            });

        } catch (error) {
            toast.error("Error al crear la experiencia");
        }
    };

  const catalogos = {
    boton_uno: "Playas Mexicanas",
    boton_dos: "Pueblos Magicos",
    boton_tres: " Zonas Arqueologicas",
    boton_cuatro: "Turismo Comunitario",
    boton_cinco: "Turismo Urbano",
    boton_seis: "Ecoturismo",
  };

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  return (
    <SideBar>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 sm:mx-0 sm:h-10 sm:w-10">
                      <TrophyIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Una nueva manera de conseguir amigos
                      </Dialog.Title>
                      <div className="mt-2 text-black font-bold">
                        <label className="mb-2" htmlFor="titulo">
                          Como se llama tu experiencia?
                        </label>
                        <input
                          type="text"
                          name="titulo"
                          id="titulo"
                          onChange={(e) => setTitle(e.target.value)}
                          className="shadow-sm focus:ring-indigo-500 py-2 px-4 focus:border-indigo-500 block w-full sm:text-sm  border border-gray-500 rounded-md"
                        />
                      </div>
                      <div className="mt-2 text-black font-bold">
                        <label className="mb-2" htmlFor="descripcion">
                          Descripcion
                        </label>
                        <textarea
                          type="text"
                          name="descripcion"
                          id="descripcion"
                            onChange={(e) => setDescripcion(e.target.value)}
                          className="shadow-sm mb-2 px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  border border-gray-500 rounded-md"
                        />
                      </div>
                      {/* <div className="mt-2 text-black font-bold">
                        <label className="mb-2" htmlFor="imagen">
                          Imagen
                        </label>
                        <input
                          type="file"
                          name="imagen"
                          id="imagen"
                            onChange={(e) => setImagen(e.target.value)}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  border border-gray-500 rounded-md"
                        />
                      </div> */}
                      {/* ubicacion */}
                      <SelectMap setUbicacion={setUbicacion} />

                      <div className=" text-black font-bold">
                        <select
                          name="categoria"
                          id="categoria"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  border border-gray-500 rounded-md"
                            onChange={(e) => setCategoria(e.target.value)}
                       >
                          <option value="">Selecciona una categoria</option>
                          <option value="playas">Playas Mexicanas</option>
                          <option value="pueblos">Pueblos Magicos</option>
                          <option value="zonas">Zonas Arqueologicas</option>
                          <option value="comunitario">
                            Turismo Comunitario
                          </option>
                          <option value="urbano">Turismo Urbano</option>
                          <option value="ecoturismo">Ecoturismo</option>
                          <option value="otros">Otros</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <div>
      {load ? (
        <button
          className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
        >
          Subiendo...
        </button>
       
      ) : (
        <button
          className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
          onClick={() => handleExp()}
        >
          Subir Experiencia
        </button>
      )}
    </div>




                        
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <h1 className="text-2xl  font-light">Bienvenido {session.user.name}</h1>
      <h2 className="text-2xl  font-light">Amigo aqui esta tu inicio</h2>
      {/* boton para crear una nueva experiencia */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Crear nueva experiencia
      </button>
    </SideBar>
  );
}

export default Dashboard;
