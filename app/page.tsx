import { RequiemLogoPlain } from "@/app/assets/RequiemLogoPlain";
import Activities from "@/app/components/Activities";
import HeaderLight from "@/app/components/layout/HeaderLight";
import Text from "@/app/components/ui/text";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeaderLight color={"bg-violet-600"} />
      <RequiemLogoPlain className="w-lg h-min mb-8" />
      <Text className="max-w-3xl text-center md:text-lg" color={"secondary"}>
        Requiem - небольшое, но растущее игровое коммьюнити в Discord. Сервер,
        ивенты и инфраструктура вокруг игр - всё, что нужно, чтобы было куда
        залететь поиграть и пообщаться
      </Text>
      <Activities />
    </div>
  );
}
