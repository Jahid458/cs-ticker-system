import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 mt-20">
      <footer className="footer sm:footer-horizontal max-w-7xl mx-auto p-10">
        <aside className="max-w-xs">
          <h2 className="text-white text-xl font-bold">CS — Ticket System</h2>
          <p className="mt-4 text-sm leading-relaxed">
            A smart support management solution that enables users to create and monitor tickets while allowing administrators to efficiently assign, prioritize, and resolve customer issues through a structured and transparent workflow
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Social Links</h6>
          <a className="flex items-center gap-2 link link-hover">
            <FaTwitter size={14} /> @CS — Ticket System
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <FaLinkedin size={14} /> @CS — Ticket System
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <FaFacebook size={14} /> @CS — Ticket System
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <MdEmail size={14} /> support@cst.com
          </a>
        </nav>
      </footer>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-500">
          © 2026 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
