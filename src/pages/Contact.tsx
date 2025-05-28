import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="py-20 bg-white">
        <div className="container flex flex-col items-stretch justify-center mx-auto">
          <div className="bg-gray-dark rounded">
            <div className="py-16 px-6">
              <h2 className="text-3xl font-bold text-center mb-6">문의하기</h2>
              <form
                action="mailto:your-email@example.com"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input rounded-lg bg-white mb-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input rounded-lg bg-white mb-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="form-input rounded-lg bg-white mb-2 w-full"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn cursor-pointer bg-[#4a6cf7] py-3 block w-full"
                >
                  전송하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
