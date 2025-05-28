import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 mb-4">© 2025 ValueHub. 모든 권리 보유.</p>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            개인정보 처리방침
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            이용 약관
          </a>
        </div>
      </div>
    </footer>
  );
}
