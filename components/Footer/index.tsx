import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-purple-900">
      <footer className="py-10 container mx-auto">
        <div className="flex justify-around">
          <div className="text-center">
            <Image src="/logo.png" alt="Vercel Logo" width={110} height={45} />
            <div className="flex space-x-4 mt-7">
              <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
              <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
            </div>
          </div>
          <div className="w-1/2">
            <p className="font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🌳
              <br />
              Duis luctus elit ullamcorper nisl dapibus. 👀
              <br />
              Presale &amp; beta coming soon
            </p>
            <div className="flex space-x-4 mt-7 text-gray-200">
              <p>Terms and conditions of use</p>
              <p>Privacy Policy</p>
              <p>Copyright © 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
