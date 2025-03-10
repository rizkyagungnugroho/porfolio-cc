"use client";
import Image from "next/image";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Website iBex",
    description:
      "Using React for the front-end, I designed a responsive, intuitive UI focused on user engagement and easy navigation. On the back end, I developed RESTful APIs with Node.js and MongoDB for data management. Additionally, I integrated the platform with AWS to optimize loading times and set up a CI/CD pipeline for faster deployment and testing. I worked closely with designers and QA to address usability and accessibility standards..",
  },
  {
    title: "UI/UX",
    description:
      "Project: E-Commerce UI/UX DesignTools: Figma, Adobe XD, Tailwind CSS UI Improvements: Responsive design, on-brand color scheme, micro-interactions for buttons and navigation. UX Improvements: Simplicity in checkout flow, usability testing results showed 30% increase in conversions..",
  },
  {
    title: "Project 3",
    description: "An interactive dashboard for data visualization and analytics.",
  },
];

const images = ["/ibex.png", "/ui.avif", "/penggajian.png"];

const descriptions = [
  "My Personal website, I Created this website to display my profile , skill and project. As well my place to try new technology",
  "This UI/UX project includes wireframing, prototyping, and usability testing to create a seamless user experience.",
  "A dashboard for data visualization and analytics, designed to improve insights and decision-making.",
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center min-h-[75vh] p-6 motion-preset-slide-right motion-duration-2000 font-semibold bg-[#222222]" id="porfolio">
      <h2 className="text-3xl font-bold mb-6  text-amber-300">My Porfolio</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {components.map((component, index) => (
          <div key={component.title} className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl w-96">
            <div className="relative h-56 overflow-hidden rounded-xl">
              <Image src={images[index] || "/default-image.jpg"} alt="Portfolio Image" layout="fill" objectFit="cover" priority />
            </div>
            <div className="p-6">
              <h5 className="text-xl font-semibold text-blue-gray-900">{component.title}</h5>
              <p className="text-base font-light">{descriptions[index]}</p>
            </div>
            {/* Navigation Menu inside the card */}
            <div className="p-6 pt-0">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>View Details</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex gap-4 p-4 w-96 bg-white shadow-lg rounded-md">
                        <div className="w-full p-4">
                          <h5 className="text-lg font-semibold">{component.title}</h5>
                          <p className="text-sm text-gray-500">{component.description}</p>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
