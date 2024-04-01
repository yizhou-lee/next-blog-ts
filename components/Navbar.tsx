import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";
import ModeToggleButton from "./ModeToggleButton";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 sm:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            YiziBlog
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl sm:text-4xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://space.bilibili.com/11438085?spm_id_from=333.999.0.0"
          >
            <FaBilibili />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/yizhou-lee"
          >
            <FaGithub />
          </Link>
          <ModeToggleButton />
        </div>
      </div>
    </nav>
  );
}
