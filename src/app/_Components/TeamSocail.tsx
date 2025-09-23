'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { TeamSocailProps } from '../interfaces/interfaces';
export default function TeamSocial({ socail }: { socail: TeamSocailProps }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md w-fit">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-600 transition"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-400 transition"
      >
        <FaFacebook size={20} />
      </a>

      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-400 transition"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}
