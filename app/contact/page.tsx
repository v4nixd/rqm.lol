"use client";

import { Mail } from "lucide-react";

import HeaderLight from "@/app/components/layout/HeaderLight";
import Text from "@/app/components/ui/text";
import Badge from "@/app/components/ui/badge";
import Divider from "@/app/components/layout/Divider";
import Link from "next/link";
import Button from "@/app/components/ui/button";
import TelegramIcon from "@/app/components/icons/Telegram";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <HeaderLight color={"bg-green-600"} />
      <Badge icon={Mail} color="green" className="mt-24 mb-4">
        Связаться с нами
      </Badge>
      <Text
        variant={"h1"}
        color={"heading"}
        weight={"semibold"}
        className="mb-4"
      >
        Есть вопрос или проблема?
      </Text>
      <Text
        variant={"h4"}
        color={"secondary"}
        className="max-w-3xl text-center mb-12"
      >
        Свяжитесь с нами удобным способом. Для оперативной поддержки советуем
        использовать телеграм. (В будущем встроенный онлайн-чат)
      </Text>
      <Button
        size={"lg"}
        className="bg-[#0088CC] text-content-base-primary mb-12"
        onClick={() =>
          window.open(
            "https://t.me/rqm_support_bot",
            "_blank",
            "noopener noreferrer"
          )
        }
      >
        <TelegramIcon className="size-6 mr-2 text-content-base-primary" />
        <Text weight={"semibold"} variant={"h4"}>
          Telegram
        </Text>
      </Button>
      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <Text variant={"h4"} weight={"semibold"}>
              Сотрудничество и деловые предложения
            </Text>
            <Text>
              Все ваши предложения и запросы о партнёрстве
              <br /> направляйте на указанную электронную почту
            </Text>
            <Text weight={"medium"} color={"secondary"} className="select-all">
              business@rqm.lol
            </Text>
          </div>
        </div>
        <Divider className="flex-none" />
        <div className="max-w-xl flex-1 flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <Text>Email</Text>
              <div>
                <Text
                  weight={"medium"}
                  color={"secondary"}
                  className="select-all"
                >
                  contact@rqm.lol
                </Text>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <Text>Telegram</Text>
              <Link
                href="https://t.me/rqm_support_bot"
                className="text-brand-primary-9 underline underline-offset-2"
              >
                t.me/rqm_support_bot
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* TODO:  */}
    </div>
  );
}
