import {
  faPlay,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-purple-900 border-b border-black">
      <header className="py-3 container mx-auto">
        <div className="flex items-center px-2">
          <Image src="/logo.png" alt="Vercel Logo" width={100} height={40} />
          <nav className="flex flex-1 pl-20 space-x-10  font-bold">
            <p>About</p>
            <p>Whitepaper</p>
            <p>Shop</p>
            <p>Marketplace</p>
          </nav>
          <div className="flex space-x-2">
            <div className="bg-purple-500 p-3 rounded-full">
              <FontAwesomeIcon icon={faSearch} className="h- w-4" />
            </div>
            <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg flex items-center">
              <FontAwesomeIcon icon={faPlay} className="h-2 w-2 mr-1" />
              Play
            </button>
            <button className="bg-yellow-200 text-black font-bold py-2 px-4 rounded-lg flex items-center">
              <FontAwesomeIcon icon={faUserCircle} className="h-3 w-3 mr-1" />
              Dashboard
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
