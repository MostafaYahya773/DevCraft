'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SERVICES', href: '#services' },
  { label: 'TEAM', href: '#team' },
  { label: 'GALLERY', href: '#gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark text-white py-6 px-8 flex justify-between items-center z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center ms-12 gap-2">
        <span className="text-primary text-2xl font-bold">x</span>
        <span className="font-heading text-xl">DevCraft</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 me-20 uppercase font-body text-sm">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-primary transition">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-dark flex flex-col gap-8 p-6 uppercase font-body text-sm md:hidden z-50">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-primary transition"
              onClick={() => setOpen(false)}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
