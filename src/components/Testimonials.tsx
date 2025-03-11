"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Joko",
    comment: "His Design is amazing! Highly recommended.",
    image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti",
    comment: "Application that he created is so great! Amazing Application",
    image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Budi",
    comment: "Very satisfied with my purchase. Worth every penny!",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Luna Maya",
    comment: "The Display of the application is astonishing, excellent!",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Luciana Smith",
    comment: "One word that describe everything, Wonderful!",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    rating: 5,
  },
];

export default function Testimony() {
  return (
    <div className="max-w-10xl mx-auto px-4 py-40 bg-[#222222]" id="testimony">
      <h2 className="text-center text-3xl font-bold mb-20  text-amber-300">Testimonials</h2>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-neutral-300 rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-gray-200 mb-4" />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{testimonial.comment}</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} fill={i < testimonial.rating ? "currentColor" : "none"} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
