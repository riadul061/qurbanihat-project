// components/Footer.jsx

import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { TbBrandInstagram } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative mt-24">

      {/* Top Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="QurbaniHat logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                QurbaniHat
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Bangladesh&apos;s trusted online platform for buying sacrificial
              animals during Eid ul-Adha. We connect verified sellers with
              buyers across the country.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/all-animals" className="hover:text-black dark:hover:text-white transition">
                  All Animals
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-black dark:hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-black dark:hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span>📍</span> Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+8801700000000" className="hover:text-black dark:hover:text-white transition">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:support@qurbanihat.com" className="hover:text-black dark:hover:text-white transition">
                  support@qurbanihat.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span> Sat – Thu: 9am – 6pm
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10">
          <p className="text-sm font-semibold text-black dark:text-white mb-4">
            Follow Us
          </p>
          <div className="flex gap-4">
             <FaFacebook />
             <TbBrandInstagram />
             <FaXTwitter />



          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          {/* ✅ Fix 2: Was "pixgen" — changed to QurbaniHat */}
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;