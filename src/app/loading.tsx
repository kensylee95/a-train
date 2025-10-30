import Image from "next/image";
import logo from "@public/images/vitalswap.png";

export default function Loading() {
  return (
    <div className="min-h-dvh w-full grid place-items-center bg-linear-to-b from-vital-blue/5 via-white to-vital-blue/10">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-vital-blue animate-pulse" />
          <Image
            src={logo}
            alt="Loading VitalSwap"
            priority
            className="relative z-10 h-24 w-24 md:h-28 md:w-28 animate-spin [animation-duration:2.2s] drop-shadow-sm"
          />
        </div>
        <p className="text-vital-dark-gray font-poppins text-sm md:text-base opacity-80">
          Loading experience…
        </p>
      </div>
    </div>
  );
}
