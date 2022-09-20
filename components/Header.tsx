import Link from "next/link"

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7-xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img className="w-20 obect-contain cursor-pointer" src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg" alt="logo lukiluk" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
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