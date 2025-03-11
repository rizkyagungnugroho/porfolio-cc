"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
const Jumbotron = () => {
  return (
    <section className="bg-[#222222] p-16 px-4 py-24 dark:bg-transparent">
      {" "}
      {/*py(padding atas bawah)*/}
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {" "}
          {/*membuat 2 grid colom */}
          {/*KOLOM1*/}
          <div className="flex items-center">
            {" "}
            {/*membuat ke tengah*/}
            <div className="space-y-8">
              {/*Y itu adalah atas bawah*/}
              <p className=" motion-preset-slide-right motion-duration-2000 font-semibold text-amber-400">
                Hey, <span className="text-white-800">I am Rizky Agung Nugroho</span>
              </p>
              <p className=" motion-preset-slide-right motion-duration-2000 text-5xl font-semibold text-[#D6D6D6]">
                {" "}
                <span className=" text-white-300">
                  Full-Stack Web Developer <br />
                </span>
                {""}
              </p>
              <p className="motion-preset-typewriter-[24] text-[#eeeeee]">Weclome to my Personal website</p>
              <Link href="https://api.whatsapp.com/send?phone=6282243969805">
                <Button className=" bg-white/10 text-amber-400 mt-6">Hire Me</Button>
              </Link>
            </div>
          </div>
          {/*KOLOM2!*/} 
          <div className="relative h-[300px] w-full">
            <Image
              src="/fp.png"
              alt="person-profile-picture"
              objectFit="contain"
              fill
            />
          </div>
          </div>
      </div>
    </section>
  );
};

export default Jumbotron;
