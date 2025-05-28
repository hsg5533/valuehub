import React from "react";

export default function Menu({ open }: { open: boolean }) {
  if (open) {
    return (
      <div className="m-overlay">
        <div className="all-gnb">
          <div className="all-navi-inner">
            <div className="all-in">
              <ul>
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
