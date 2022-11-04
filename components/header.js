import Image from "next/image"

function Header() {
    return (
        //alinear elementos en el centro del header y en linea del box 
        <div className="flex items-center justify-center p-2 bg-gray-800">
            <Image src="/static/images/logo.png" width={36} height={36} alt="logo de la plataforma"></Image>
            <div className="flex justify-center m-4 space-x-0 text-center md:text-xl">
                <h1 className="p-1 font-bold text-red-400">Diego</h1>
                <h1 className="p-1 font-bold text-blue-400">Gamboa</h1>
            </div>
        </div>
    )
}

export default Header