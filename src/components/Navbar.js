import {Kaushan_Script} from "next/font/google";
import ButtonCard from "./ButtonCard";
import { getServerSession } from "next-auth";
import { options } from "../app/api/auth/[...nextauth]/options";
import Link from "next/link";
const ks=Kaushan_Script({subsets:["latin"],weight:"400"})

export default async function Navbar() {
  const session=await getServerSession(options)

  return (
    <div className="flex justify-between bg-white fixed w-full pb-4">{/* this is the Header/Navbar */}
        <div className={`mt-9 ml-10 text-3xl ${ks.className}`}>
          Personiphy
        </div>

        <div className="flex mt-10 ml-20">
          <div className="mx-8 text-xl">About Us</div>
          <div className="mx-8 text-xl" >Teams</div>
          <div className="mx-8 text-xl">Contact</div>
        </div>

        <div className="flex mt-8">
          {
          session ?
            <>
              <div className="mx-8 text-center py-3 font-bold text-lg">{session.user.name}</div>
              <Link href="/api/auth/signout"><ButtonCard content="Logout" color="#0DD299" w="6.5"/></Link>
            </>
            :
            <>
              {/* <div className="mx-8 text-center py-3 font-bold text-lg">Login</div> */}
              <Link href="/api/auth/signin"><ButtonCard content="Login" color="#0DD299" w="6.5"/></Link> 
              {/* <Link href="/api/auth/register"><ButtonCard content="Register" color="#0DD299" w="6.5"/></Link> */}
            </>
          }
      
        </div>

    </div>
  )
}

