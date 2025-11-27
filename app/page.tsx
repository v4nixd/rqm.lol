import Image from "next/image";

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
      <div className="mt-16 max-w-6xl flex flex-col items-center gap-4 overflow-visible">
        <h1 className="text-2xl md:text-5xl font-semibold">Что здесь есть</h1>
        <p className="text-content-base-secondary">
          Коротко о том, чем мы тут занимаемся
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ActivityCard
            color="bg-purple-500"
            heading="Ивенты"
            imagePath="/Requiem_Trophy9-ps.png"
          >
            Кастомки, мини-турниры и сезонные ивенты по разным играм
          </ActivityCard>
          <ActivityCard
            color="bg-yellow-500"
            heading="Розыгрыши"
            imagePath="/Requiem_Giveaway.png"
          >
            Роли, внутриигровые штуки, иногда Nitro/Telegram Premium и прочие
            бонусы
          </ActivityCard>
          <ActivityCard color="bg-pink-500" heading="Кино-ночи" imagePath="">
            Фильмы/сериалы в войсах в лучшем качестве
          </ActivityCard>
          <ActivityCard
            color="bg-cyan-500"
            heading="Сервера и бот"
            imagePath=""
          >
            Игровые сервера Requiem, собственный бот и система поиска тиммейтов
            (в разработке)
          </ActivityCard>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({
  color,
  heading,
  imagePath,
  children,
}: {
  color: string;
  heading: string;
  imagePath?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex flex-col justify-end bg-linear-to-b ${color} to-neutral-2 w-48 md:w-64 h-60 md:h-80 rounded-4xl border-2 border-neutral-2 overflow-hidden`}
    >
      {imagePath && (
        <Image
          className="absolute"
          src={imagePath}
          alt=""
          width={256}
          height={320}
          unoptimized
        />
      )}
      <div className="block w-full h-min p-4 z-10">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
}

{
  /* <div className="text-start">
  <p className="text-xl font-semibold">Что здесь есть:</p>
  <ul className="list-disc list-inside space-y-1 max-w-xl text-content-base-secondary">
    <li>Ивенты и турниры - мини-турики, кастомки, сезонные ивенты</li>
    <li>
      Розыгрыши и плюшки - роли, внутриигровые штуки, иногда Nitro/Telegram
      Premium и т.п.
    </li>
    <li>Кино-ночи - смотрим фильмы/сериалы в войсах</li>
    <li>
      Сервера и бот - игровые сервера, свой бот и система поисков тиммейтов (в
      разработке)
    </li>
  </ul>
</div>; */
}
