"use client";

import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#222222] px-8 py-16" id="about">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* KOLOM 1 - GAMBAR (KIRI) */}
        <div className="mx-auto">
          <div className="rounded-lg bg-purple-400"></div>
          <Image 
            src="/fp.png" 
            alt="Profile Picture" 
            width={200} 
            height={400} 
            className="object-cover rounded-lg" 
          />
        </div>

        {/* KOLOM 2 - TEKS (KANAN) */}
        <div className="w-[500px] text-left">
          <h2 className="text-5xl font-semibold text-amber-400">About Me</h2>
          <p className="text-white py-5">
            Hi Everyone! My name is Rizky Agung Nugroho. <br />
            I am a web developer from Yogyakarta, DIY, <br />
            with 1 year of experience in full-stack web development.
          </p>
          <p className="text-white mt-4">
            I specialize in building functional, user-friendly, and visually appealing websites. <br />
            My approach includes adding a personal touch to your product, <br />
            ensuring that your website stands out while remaining easy to use. <br />
            My goal is to help you communicate your message and brand identity <br />
            in the most creative way possible. <br /><br />
            If you're interested in working with me, please contact me using the provided details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
