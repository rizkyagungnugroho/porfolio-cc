import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const contactMethods = [
    { icon: <MdLocationPin className="w-6 h-6" />, contact: "Yogyakarta, Indonesia" },
    { icon: <MdEmail className="w-6 h-6" />, contact: "rizkyagungnugroho.02@gmail.com" },
    { icon: <FaWhatsapp className="w-6 h-6" />, contact: "+62 857 2934 7347" },
  ];

  return (
    <section className="relative py-10 bg-gray-900 flex justify-center items-center " id="contact">
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-gray-400 md:px-12 text-center">
        <div className="max-w-lg mx-auto">
          <h3 className="text-amber-400 text-3xl font-semibold sm:text-4xl">Contact</h3>
          <p className="mt-3">For any inquiries, feel free to contact me through the following methods:</p>
        </div>
        <div className="mt-10">
          <ul className="flex flex-col gap-y-4 items-center text-white">
            {contactMethods.map((item, idx) => (
              <li key={idx} className="flex items-center gap-x-3">
                <div className="flex-none text-gray-400">{item.icon}</div>
                <p>{item.contact}</p>
              </li>
            ))}
          </ul>
        </div>
        <form className="mt-10 max-w-lg mx-auto">
          <label className="block text-sm text-gray-300">Email</label>
          <input
            type="email"
            className="w-full p-3 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
            placeholder="Enter your email"
          />
          <label className="block mt-4 text-sm text-gray-300">Message</label>
          <textarea
            className="w-full p-3 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
            placeholder="Write your message"
            rows={4}
          />
          <button type="submit" className="w-full mt-4 px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
