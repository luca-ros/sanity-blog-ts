import Link from "next/link"
import Image from 'next/image'
import { BeakerIcon} from '@heroicons/react/solid'
import { StarIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7-xl mx-auto">
            <div className="flex items-center space-x-5">
                {/* flex-shrink-0  (don't shrink the logo) */}
                <div className="relative h-10 w-10 flex-shrink-0">
                    <a href="/">
                        <Image
                            objectFit="contain"
                            src='https://i.ibb.co/85ZMRX0/android-chrome-512x512.png' 
                            layout='fill'
                            alt=""
                        />
                    </a>
                </div>
                <div className="hidden md:inline-flex items-center space-x-5">

                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>
            <div className="flex items-center space-x-5 text-green">
                <h3>Sign In</h3>
                <h3 className="border px-4 py-1 rounded-full border-green-600">Get Starter</h3>
            </div>
        </header>
    )
}

export default Header