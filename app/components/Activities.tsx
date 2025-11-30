import Image from "next/image";

import { ActivityItem } from "@/app/types/types";

import Text from "@/app/components/ui/text";

const ACTIVITIES = [
  {
    color: "bg-purple-500",
    title: "Ивенты",
    description: "Кастомки, мини-турниры и сезонные ивенты",
    imagePath: "/Requiem_Trophy9-ps.png",
  },
];

export default function Activities() {
  const activities: ActivityItem[] = ACTIVITIES;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-16 mb-8 max-w-6xl flex flex-col items-center gap-4 overflow-visible">
        <Text variant={"h1"} weight={"semibold"} color={"heading"}>
          Что здесь есть
        </Text>
        <Text color={"secondary"}>Коротко о том, чем мы тут занимаемся</Text>
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
        <Text variant={"h3"} weight={"bold"}>
          {title}
        </Text>
        <Text variant={"small"}>{description}</Text>
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
