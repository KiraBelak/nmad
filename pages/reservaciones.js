import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import SideBar from "@/components/layouts/Sidebar";
import axios from 'axios';


function Reserva() {
    const router = useRouter();
    const [reserva, setReservas] = useState(null);
    const { data: session, status } = useSession();
    const [load, setLoad] = useState(true);

    //hacer un fast refresh de la pagina cuando la reserva cambia


    useEffect(() => {
        //traer datos de la base de datos con el email del usuario
        const fetchReserva = async () => {
           const res = await axios.get(`/api/reserva?email=${session?.user?.email}`);
            const data = await res.data.data;
            // console.log(data);
            //traer los datos de la experiencia con el id de la reserva
            data.forEach(async (element, i) => {
                     // console.log(element);
                const res = await axios.get(`/api/exp?id=${element.experiencia}`);
                const data = await res.data.data;
                // element.img = data.img;
                // console.log("la imagen", data.img);
                //push de la img a la reserva
                element.img = data.img;
                element.nombre = data.titulo;

            }
            )




            //esperar a que se carguen los datos de un settimeout
            setTimeout(() => {
                setReservas(data);
                setLoad(false);
            }, 500);
             

        };


        if (session && status === 'authenticated' && reserva === null) {
            fetchReserva();
        }


    }, [session, reserva]);

    if (status === 'loading' || reserva === null ||  load === true) {
        return <div>Cargando...</div>;
    }



    //funcion para traer los datos de la base de datos de las experiencias
    const getExp = async (id) => {
        console.log(id);
        const res = await axios.get(`/api/exp?id=${id}`);
        const data = await res.data.data;
        console.log(data.img);
        return data.img;
    }




    return (
        <SideBar>
            <h1 className="text-2xl text-white text-center font-light">Reservas</h1>

            <div className="flex flex-col mt-10">
                {(reserva!= null) && reserva.map((res) => (
                        //traer los datos de la experiencia con el id de la reserva

                    <div key={res.id} className="shadow-md bg-gray-900 p-6 rounded-lg mb-6 flex justify-between items-center">

                            <img src={res.img} alt={res.fecha} className="w-20 h-20 sm:w-52 sm:h-52 rounded-full border-4 border-orange-600 mb-4 sm:mb-0-full sm:w-auto" />
                        <div className="flex items-center">
                            {/* <strong className="text-white text-2xl">{res.nombre}</strong> */}

                            <div className="ml-4">
                                <p className="text-lg sm:text-3xl text-orange-200 text-opacity-90 font-bold bg-gradient-to-r from-orange-600 mb-4 sm:mb-8">
                                    {res.nombre}
                                </p>
                                <p className="text-xs sm:text-base text-white px-2 py-1 sm:px-0">
                                    {res.descripcion}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-xs sm:text-base text-white px-2 py-1 sm:px-0">
                                {res.fecha}
                            </p>
                            <br />
                            <p className="text-xs sm:text-base text-white px-2 py-1 sm:px-0">
                                {res.hora}
                            </p>
                            <br />
                            <p className="text-xs sm:text-base text-white px-2 py-1 sm:px-0">
                            status:    {res.status}
                            </p>
                        </div>
                    </div>


                ))}
            </div>



        </SideBar>
    );
}

export default Reserva;
