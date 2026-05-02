"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-animals", label: "All Animals" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">QurbaniHat</h3>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4 items-center">
          {!user && (
            <ul className="flex items-center text-sm gap-5">
              <li><Link href="/login" className="hover:text-primary transition-colors">Login</Link></li>
              <li>
                <Link href="/register">
                  <Button size="sm" color="primary">Register</Button>
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-3 items-center">
              <Avatar
                size="sm"
                src={user?.image ?? undefined}
                name={user?.name}
                referrerPolicy="no-referrer"
              />
              <Button onPress={handleSignOut} size="sm" color="danger">LogOut</Button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t pt-3">
            {!user && (
              <div className="flex gap-3">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" variant="bordered">Login</Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" color="primary">Register</Button>
                </Link>
              </div>
            )}
            {user && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar
                    size="sm"
                    src={user?.image ?? undefined}
                    name={user?.name}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
                <Button onPress={handleSignOut} size="sm" color="danger">LogOut</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;