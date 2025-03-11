"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#222222] ">
      <nav className=" container mx-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Image src="/logo.png" alt="Logo" width={187} height={40} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-md text-amber-300 font-semibold">
            <p className="cursor-pointer">Home</p>
            <p>
              <a href="#portfolio" className="hover:text-white">
                Portfolio
              </a>
            </p>
            <p>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </p>
            <p>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </p>
            <p>
              <a href="#testimony" className="hover:text-white">
                Testimonials
              </a>
            </p>
          </div>

          {/* Contact Button */}
          <div>
            <Button
              variant="outline"
              className=" bg-white/10 hidden md:block  text-amber-400 hover:text-[#222222] mr-20"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="block md:hidden">
              <Menu className="text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#101010] text-white">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#home">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#portfolio">Portfolio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#about">About Me</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#testimony">Testimonials</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
