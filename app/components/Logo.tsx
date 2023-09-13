'use client';

import Image from "next/image";
import {useRouter} from 'next/navigation';

const Logo = () => {
    const router = useRouter();
  return (
    <div onClick={() => router.push('/')}>
        <Image
            src={'/images/logo.png'}
            alt="Logo"
            className="w-[200px] cursor-pointer"
            width={100}
            height={100}
        />
    </div>
  )
}

export default Logo