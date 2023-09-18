"use client"

import Link from "next/link";
import Image from "next/image";
import DownloadOOButton from "@components/common/download-oo";
import { MdExpandMore } from "react-icons/md";


const Header = () => {
  return (
    <nav className="flex-between absolute py-4 px-5 lg:px-16 gap-5 lg:gap-20 border-b border-white w-full z-20">
      <Link href="/">
        <Image 
          src="/assets/images/project-seed-logo.png" 
          alt="Logo"
          width={236}
          height={40}
        />
      </Link>
      
 
      <ul className="sm:flex flex-grow hidden gap-14">
        { 
          ['Company','Products','Token','SEED: GROW'].map((item,index) => (
            <li key={index} className="text-white cursor-pointer flex-center gap-2">
              {item}
              <MdExpandMore color="white" />
            </li>
          ))
        }
      </ul>
     

      <DownloadOOButton/>
    </nav>
  )
}

export default Header