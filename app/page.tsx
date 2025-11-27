import Image from "next/image";

import Activities from "./components/Activities";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="w-lg h-min mb-8"
        src="/Requiem-Logo-Plain.svg"
        alt=""
        width={300}
        height={50}
      />
      <p className="max-w-3xl text-center text-content-base-secondary text-sm md:text-lg">
        Requiem - небольшое, но растущее игровое коммьюнити в Discord. Сервер,
        ивенты и инфраструктура вокруг игр - всё, что нужно, чтобы было куда
        залететь поиграть и пообщаться
      </p>
      <Activities />
    </div>
  );
}
