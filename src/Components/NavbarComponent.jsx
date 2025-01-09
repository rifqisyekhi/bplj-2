import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavbarComponent() {
  return (
    <header className="bg-white">
      <div className="flex h-16 max-w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600 flex" href="#">
          <img className="h-8 w-auto" src="/logo-header-bm.png" alt="" />
        </a>

        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/profil"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/lobby"
                >
                  {" "}
                  Lobby{" "}
                </a>
              </li>
              {/* <li>
                <a
                  className="text-white py-2 px-4 bg-blue-950 rounded-lg transition hover:text-gray-500/75"
                  href="/lobby"
                >
                  {" "}
                  Profil{" "}
                </a>
              </li> */}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
