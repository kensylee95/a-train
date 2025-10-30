"use client";

import Image from "next/image";

const appStoreLinks = [
  {
    alt: "Download on the App Store",
    href: "https://app.vitalswap.com?r=KING3750",
    img: "/images/appstore.webp",
    label: "App Store",
  },
  {
    alt: "Get it on Google Play",
    href: "https://app.vitalswap.com?r=TOBI9169",
    img: "/images/googleplay.webp",
    label: "Google Play",
  },
];

export default function CallToAction() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 sm:px-6 md:px-8 py-8 md:py-10 items-center gap-6 relative min-h-[230px] md:min-h-[330px]">
        {/* Left content */}
        <div className="flex-1 w-full md:max-w-xl z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-vital-dark-gray font-gilroy mb-2 md:mb-3 leading-tight">
            Carry your wallet
            <span className="text-vital-blue"> everywhere.</span>
          </h2>
          <p className="text-base md:text-lg text-vital-gray mb-3 md:mb-5 font-poppins max-w-md">
            Swap, spend, and settle across borders in seconds. One app for
            everyday money moves—faster, clearer, and built for real life.
          </p>
          <div className="flex gap-3 flex-wrap">
            {appStoreLinks.map((badge) => (
              <a
                key={badge.label}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={badge.img}
                  alt={badge.alt}
                  width={130}
                  height={40}
                  className="h-10 w-auto object-contain drop-shadow"
                />
              </a>
            ))}
          </div>
        </div>
        {/* Right: phone mockup fully contained */}
        <div className="flex-1 w-full flex items-end justify-center relative min-h-[250px] md:min-h-[435px] overflow-hidden">
          {/* BG yellow circle accent */}
          <div className="absolute right-0 md:right-10 top-0 md:top-10 left-auto md:left-auto z-0 max-w-full overflow-hidden">
            <div
              className="bg-vital-yellow rounded-full max-w-full"
              style={{
                width: 430,
                height: 430,
                filter: "blur(1.5px)",
                opacity: 0.92,
                maxWidth: "100%",
              }}
            />
          </div>
          <div className="relative z-10 flex items-end justify-center w-full md:w-[360px] h-[260px] md:h-[495px] max-w-full">
            <Image
              src="/images/iphone-mockup.png"
              alt="VitalSwap app screenshot"
              width={440}
              height={680}
              className="md:w-[440px] md:h-[680px] w-[320px] h-auto object-contain drop-shadow-2xl rounded-3xl max-w-none md:translate-y-10 translate-y-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
