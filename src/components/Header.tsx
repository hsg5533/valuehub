import React, { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import { isMobile } from "react-device-detect";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const headerEl = document.querySelector("header");
    const handleScroll = () => {
      if (headerEl) {
        if (window.scrollY > 50) {
          headerEl.style.backgroundColor = "rgba(74, 108, 247, .2)";
          headerEl.style.backdropFilter = "blur(15px)";
        } else {
          headerEl.style.backgroundColor = "transparent";
          headerEl.style.backdropFilter = "blur(0px)";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className=" flex items-center justify-between">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="/" className="text-2xl font-bold text-blue">
            ValueHub
          </a>
          <div className="navigation block">
            {isMobile ? (
              <>
                <MenuButton
                  open={menuOpen}
                  color="black"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                <Menu open={menuOpen} />
              </>
            ) : (
              <nav>
                <ul className="flex items-center justify-between">
                  <li className="px-6">
                    <a href="/#features" className="hover:text-blue-500">
                      주요 기능
                    </a>
                  </li>
                  <li className="px-6">
                    <a href="/calculator" className="hover:text-blue-500">
                      평가하기
                    </a>
                  </li>
                  <li className="px-6">
                    <a href="/contact" className="hover:text-blue-500">
                      문의하기
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <a
            href="/calculator"
            className="btn cursor-pointer bg-[#4a6cf7] py-3 hidden lg:block"
          >
            평가 시작
          </a>
        </nav>
      </div>
    </header>
  );
}
