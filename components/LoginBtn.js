//boton de login
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Link href="/user/dashboard" className="bg-gray-900 text-white text-xl hover:text-black hover:bg-gray-100 py-2 px-6 rounded-lg flex items-center space-x-2">
    Inicio
        </Link>
      </>
    )
  }
  return (
    <>
      <button className="bg-gray-900 text-white hover:text-black hover:bg-gray-100 py-2 px-4 rounded-lg flex items-center space-x-2" onClick={()=>signIn('google')}>
        <FcGoogle className="w-6 h-6" /> {/* Agrega el icono de Google */}
       <span>Ingresar con Google</span>
      </button> 
    </>
  )
}



// {session ? (
//     <Link href="/user/dashboard" className="text-sm scroll-smooth font-semibold leading-6 text-gray-900 hover:cursor-pointer">
//        Dashboard
//        </Link>
//        ) : ( <button className="bg-gray-900 text-white hover:text-black hover:bg-gray-100 py-2 px-4 rounded-lg flex items-center space-x-2" onClick={()=>signIn('google')}>
//        <FcGoogle className="w-6 h-6" /> {/* Agrega el icono de Google */}
//        <span>Ingresar con Google</span>
//      </button> 
//        )}