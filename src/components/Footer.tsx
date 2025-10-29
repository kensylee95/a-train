import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Logo and Social */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/vitalswap.png"
                alt="VitalSwap"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-vital-blue font-gilroy">
                VitalSwap
              </span>
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-vital-gray hover:text-vital-blue cursor-pointer" />
              <Instagram className="w-5 h-5 text-vital-gray hover:text-vital-blue cursor-pointer" />
              <Twitter className="w-5 h-5 text-vital-gray hover:text-vital-blue cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-vital-dark-gray mb-4 font-gilroy">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-vital-dark-gray mb-4 font-gilroy">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-vital-dark-gray mb-4 font-gilroy">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-vital-gray hover:text-vital-blue font-poppins"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-vital-dark-gray mb-4 font-gilroy">
                Follow Us
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
