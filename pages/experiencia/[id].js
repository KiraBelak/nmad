import SideBar from "@/components/layouts/Sidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//importar icono de avion
import { FaPlaneDeparture } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: "Durable",
    description:
      "The leather cover and machined steel disc binding stand up to daily use for years to come.",
  },
  {
    name: "Refillable",
    description:
      "Buy it once and refill as often as you need. Subscribe and save on routine refills.",
  },
  {
    name: "Thoughtfully designed",
    description:
      "The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.",
  },
  {
    name: "Locally made",
    description:
      "Responsibly and sustainably made real close to wherever you are, somehow.",
  },
];

export default function Example() {
  const [datitos, setDatitos] = useState(null);
  const [amigo, setAmigo] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const { data: session } = useSession();


  useEffect(() => {
    // console.log(datitos);
  }, [datitos]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const res = async () => {
      //si id es undefined, no hacer nada
      if (id === undefined || datitos != null) return;

      const response = await fetch(`/api/exp?id=${id}`);
      const data = await response.json();
      return data;
    };
    res().then((data) => {
      if (data === undefined) return;
      // console.log(data);
      setAmigo(data.user);
      setDatitos(data.data);
    });
  }),
    [id];

  if (datitos === null) {
    return (
      <SideBar>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
            {" "}
            <FaPlaneDeparture></FaPlaneDeparture>{" "}
          </div>
        </div>
      </SideBar>
    );
  }

  //funcion para cambiar la calidad de la imagen de drive cambiando el 96 por 1024 https://lh3.googleusercontent.com/a/ACg8ocImFvozZ7hEmfksWuDCsQ7Xnmwet1P4S25368867P-GUA=s1024-c
  const cambiarCalidad = (url) => {
    const url2 = url.split("=s96-c")[0];
    const url3 = url2 + "=s1024-c";
    return url3;
  };

    //handle submit de reservar

    const handleSubmit = async (e) => {
      e.preventDefault();
      toast.loading("Reservando...");
      //cuidar que no haya campos vacios
      if (date === null || time === null) {
        return toast.error("Selecciona una fecha y hora");
      }

        //armar el objeto de la reservacion
        const reservacion = {
            id: uuidv4(),
            fecha: date,
            hora: time,
            experiencia: datitos.id,
            usuario: session.user.email,
            status: "pendiente",
        }

        console.log(reservacion);

        //hacer el post
        const response = await fetch("/api/reserva", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reservacion),
        });

        const data = await response.json();
        if (data.success) {
          toast.dismiss();
            toast.success("Reservación exitosa");
            router.push("/reservaciones");
        } else {
          toast.dismiss();
            toast.error("Algo salió mal");
        }



    }



  return (
    <SideBar>
      <section
        aria-labelledby="features-heading"
        className="relative bg-gray-200"
      >
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src={datitos.img}
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              {datitos.titulo}
            </p>
            <p className="mt-4 text-gray-500">{datitos.descripcion}</p>
            <p className="text-black"> $ {datitos.precio ? (datitos.precio * 1.15).toFixed(2) : 800} MXN</p>
            <div className="mt-16 space-y-4">
              <div className="flex text-black flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-1">
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }
                    }
                  />
                </div>
                <div className="relative flex-1">
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }
                    }
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Selecciona una fecha y hora para reservar
              </p>

              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-8 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
              <div
                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src={cambiarCalidad(amigo.image)}
                  alt=""
                />
              </div>
            </div>

            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>&ldquo;{amigo.name}&rdquo;</p>
                </blockquote>
                {/* <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Judith Black</div>
                  <div className="mt-1 text-gray-400">CEO of Tuple</div>
                </figcaption> */}
              </figure>
            </div>
          </div>
        </div>
      </section>
    </SideBar>
  );
}
