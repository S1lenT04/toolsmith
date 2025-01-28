import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-neutral-50 dark:bg-gray-800 mt-10 flex justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-[1584px]">
          <Image
            src={"/images/ToolSmith-icon.svg"}
            width={30}
            height={30}
            alt="Logo"
          />

          <div className="flex items-center gap-1 font-medium">
            <p>built by</p>
            <p className="text-slate-500 font-semibold">Ivo Cunha</p>
          </div>

          <Link href={"https://github.com/S1lenT04"}>
            <Github className="w-5 h-5 text-slate-500" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
