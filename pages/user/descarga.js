
import SideBar from "@/components/layouts/Sidebar";
import OfflineButton from "@/components/OfflineButton";

export default function Descarga() {
    //logica js aqui
    
     return (
          <>
        <SideBar>
  <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-[#B8F6FF] to-gray-600 text-white">
    <h1 className="text-4xl font-extrabold mb-4">Descarga Nuestra App</h1>
    <p className="text-lg text-gray-200 mb-8">
      Descubre una nueva forma de viajar
    </p>
    <OfflineButton />
  </div>
</SideBar>


            </>
        )
}


