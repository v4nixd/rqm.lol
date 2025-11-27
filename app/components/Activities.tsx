import Image from "next/image";

import { ActivityItem } from "../types/types";

const ACTIVITIES = [
  {
    color: "bg-purple-500",
    title: "Ивенты",
    description: "Кастомки, мини-турниры и сезонные ивенты по разным играм",
    imagePath: "/Requiem_Trophy9-ps.png",
  },
];

export default function Activities() {
  const activities: ActivityItem[] = ACTIVITIES;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-16 mb-8 max-w-6xl flex flex-col items-center gap-4 overflow-visible">
        <h1 className="text-2xl md:text-5xl font-semibold">Что здесь есть</h1>
        <p className="text-content-base-secondary">
          Коротко о том, чем мы тут занимаемся
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </div>
  );
}

function ActivityCard({ color, title, description, imagePath }: ActivityItem) {
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
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

{
  /* <>
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
    Роли, внутриигровые штуки, иногда Nitro/Telegram Premium и прочие бонусы
  </ActivityCard>
  <ActivityCard color="bg-pink-500" heading="Кино-ночи" imagePath="">
    Фильмы/сериалы в войсах в лучшем качестве
  </ActivityCard>
  <ActivityCard color="bg-cyan-500" heading="Сервера и бот" imagePath="">
    Игровые сервера Requiem, собственный бот и система поиска тиммейтов (в
    разработке)
  </ActivityCard>
</>; */
}
