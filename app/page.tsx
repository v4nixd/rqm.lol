import Image from "next/image";

import HeaderLight from "@/app/components/layout/HeaderLight";
import Text from "@/app/components/ui/text";
import Activities from "@/app/components/Activities";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeaderLight color={"bg-violet-600"} />
      <Image
        className="w-lg h-min mb-8"
        src="/Requiem-Logo-Plain.svg"
        alt="Full Requiem Logo"
        width={300}
        height={50}
      />
      <Text className="max-w-3xl text-center md:text-lg" color={"secondary"}>
        Requiem - небольшое, но растущее игровое коммьюнити в Discord. Сервер,
        ивенты и инфраструктура вокруг игр - всё, что нужно, чтобы было куда
        залететь поиграть и пообщаться
      </Text>
      <Activities />
    </div>
  );
}
