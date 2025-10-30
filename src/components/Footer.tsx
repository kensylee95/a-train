import Image from "next/image";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const navSections = [
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "https://blog.vitalswap.com/faq/" },
      { name: "FAQ", href: "https://blog.vitalswap.com/faq/" },
      { name: "Contact Us", href: "https://vitalswap.com/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "How it works", href: "https://blog.vitalswap.com/how-it-works" },
      { name: "Our Rates", href: "https://blog.vitalswap.com/vitalswap-rate/" },
      { name: "Blog", href: "https://blog.vitalswap.com/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "https://app.vitalswap.com/privacy" },
      { name: "Terms of Service", href: "https://app.vitalswap.com/terms" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com/vitalswap", icon: Facebook },
  {
    label: "Instagram",
    href: "https://instagram.com/vitalswap",
    icon: Instagram,
  },
  { label: "Twitter", href: "https://x.com/vitalswap", icon: X },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vitalswap/",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-vital-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0">
          {/* Logo and description */}
          <div className="flex flex-col space-y-4 md:max-w-[410px] shrink-0 w-full">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/vitalswap.png"
                alt="VitalSwap"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-vital-blue font-gilroy">
                VitalSwap
              </span>
            </div>
            <p className="text-vital-gray font-poppins leading-relaxed text-base max-w-[410px]">
              VitalSwap is a global financial technology platform that offers a
              convenient and secure way to transfer, and make payments locally
              and internationally. Vitalswap Payment Technologies, Inc. is a
              registered MSB. Financial services are provided by processor
              partners to our users.
            </p>
            <div className="flex space-x-4 mt-1">
              {socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  className="hover:text-vital-blue text-vital-gray transition-colors"
                  aria-label={soc.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <soc.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Navigation columns */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 md:mt-0 md:w-auto">
            {navSections.map((col) => (
              <div key={col.title}>
                <h3 className="font-semibold text-vital-dark-gray mb-4 font-gilroy">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <a
                        href={l.href}
                        className="text-vital-gray hover:text-vital-blue font-poppins"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
