"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Pesquisar Produtos" />
        <Button
          variant="outline"
          type="submit"
          onClick={() => {
            toast("Pesquisando...");
          }}
        >
          Pesquisar
        </Button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <ModeToggle />
          </div>
          <div className="relative">
            <Bell className="cursor-pointer" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gra-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div>
              <Image
                src="https://github.com/moabdev.png"
                className="h-7 w-7 flex-shrink-0 rounded-full"
                width={50}
                height={50}
                alt="Avatar"
              />
            </div>
            <span className="font-semibold">Moab Macena</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings size={24} className="cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};
//https://assets.aceternity.com/manu.png
