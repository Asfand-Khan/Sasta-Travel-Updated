'use client';

import Link from "next/link";
import Container from "../Container";
import {Facebook, Instagram} from 'lucide-react';

const UpperNavbar = () => {
  return (
    <div className="
        w-full
        bg-mainColor
        px-5
        py-2
    ">
        <Container>
            <div className="w-full flex justify-between items-center">
                <div className="
                    flex
                    flex-row
                    gap-4
                    text-white
                ">
                    <p>02134140422</p>
                    <p className="hidden sm:flex">info@sastatravel.pk</p>
                </div>
                <div className="flex flex-row gap-4 text-white">
                    <Link href={'https://www.facebook.com'} target="_blank">
                        <Facebook 
                            size={18} 
                            className="cursor-pointer hover:scale-125 transition"
                        />  
                    </Link>
                    <Link href={'https://www.instagram.com'} target="_blank">
                        <Instagram 
                            size={18} 
                            className="cursor-pointer hover:scale-125 transition"
                        />
                    </Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default UpperNavbar