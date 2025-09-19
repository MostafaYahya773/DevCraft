import { FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-grayLight text-sm mb-4">
            We build smart web & mobile solutions that turn ideas into reality.
             Not just development — we create digital advantages.
          </p>
          <div className="flex gap-4 text-grayLight">
            <FaFacebookF className="hover:text-primary cursor-pointer" />
            <FaTwitter className="hover:text-primary cursor-pointer" />
            <FaLinkedinIn className="hover:text-primary cursor-pointer" />
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-grayLight text-sm">
            <li className="hover:text-primary cursor-pointer">Our Projects</li>
            <li className="hover:text-primary cursor-pointer">Our Services</li>
            <li className="hover:text-primary cursor-pointer">Our Team</li>
            <li className="hover:text-primary cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-grayLight text-sm">
            <li className="hover:text-primary cursor-pointer">UI/UX Experience</li>
            <li className="hover:text-primary cursor-pointer">Web Development</li>
            <li className="hover:text-primary cursor-pointer">Product Design</li>
            <li className="hover:text-primary cursor-pointer">SEO Optimization</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-grayLight text-sm mb-4">
            Sign up to search weekly newsletter to get the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-3 py-2 rounded-l bg-gray-800 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-lime-400 px-4 rounded-r text-black font-bold"
            >
              ➤
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-900 text-gray-500 text-sm py-4 text-center">
        © All Copyright 2025 by{" "}
        <span className="text-primary">DevCraft</span>
      </div>
    </footer>
  );
}
