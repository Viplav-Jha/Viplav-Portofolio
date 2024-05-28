import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";
import Image from "next/image";
import me from "../assets/me.jpg";
import { Bot } from "lucide-react";
import { H2 } from "@/components/ui/H2";

export const metadata: Metadata = {
  title: "Viplav Jha - My Smart Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid-col-1 grid items-center gap-8 sm:grid-cols-2 ">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Viplav👋 </H1>
          <p className="text-center sm:text-start">
            I&apos;m full-stack developer from India who builds cool projects
            and writes articles on Medium.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover dark:border-foreground "
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me </H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar
          to active the AI chat. You can ask the chatbot any question about me
          and it will find the relevant info on this website. The bot can even
          provide links to pages you&apos; re looking for.
        </p>
      </section>
    </section>
  );
}