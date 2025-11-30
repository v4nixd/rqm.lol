"use client";

import Text from "@/app/components/ui/text";
import Button from "@/app/components/ui/button";
import { redirect } from "next/navigation";

export default function NotFound() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center mb-12">
        <Text weight={"bold"} className={"text-9xl"}>
          404
        </Text>
        <Text
          variant={"h1"}
          color={"heading"}
          weight={"bold"}
          className={"mt-8"}
        >
          Упс! Страница не найдена
        </Text>
        <Text variant={"p"} color={"secondary"} className={"mt-4"}>
          Страница, которую вы ищете, не найдена. Нажмите кнопку ниже, чтобы
          перейти на главную.
        </Text>
        <Button size={"lg"} className="mt-12" onClick={() => redirect("/")}>
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
}
