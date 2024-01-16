import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { PhoneOutgoing } from "lucide-react";
import { team } from "@/constants";
import Avatar from "./avatar";

export default function Sidebar() {
  return (
    <aside className="absolute lg:static px-6 py-8 w-full sm:max-w-[337px] h-[100svh] border-r bg-white">
      <article>
        <h2 className="font-bold">Callmate</h2>
        <h3 className="font-medium text-dark-gray">Conversio & Salecto</h3>
      </article>

      <Link
        href="/"
        className={buttonVariants({
          size: "default",
          variant: "ghost",
          className: "w-full justify-start mt-15",
        })}
      >
        <PhoneOutgoing className="w-4 h-4 mr-2" />
        Opkald
      </Link>
      <hr className="my-8" />
      <h2 className="text-med-gray font-medium text-[14px] mb-4">Teamet</h2>
      {team.map((member) => (
        <Link
          href={"/"}
          className={buttonVariants({
            size: "default",
            variant: "ghost",
            className: "w-full justify-start",
          })}
        >
          <Avatar name={member.name} className="mr-2" />
          {member.name}
        </Link>
      ))}
    </aside>
  );
}
