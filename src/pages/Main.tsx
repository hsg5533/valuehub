import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bubble from "../assets/img/bubble.svg";
import wind from "../assets/img/wind.svg";
import grass from "../assets/img/grass.svg";
import dashboard from "../assets/img/dashboard.svg";
import layer from "../assets/img/layer.svg";
import apps from "../assets/img/apps.svg";
import update from "../assets/img/update.svg";
import copy from "../assets/img/copy.svg";
import refresh from "../assets/img/refresh.svg";
import check from "../assets/img/check.svg";

export default function Main() {
  return (
    <>
      <Header />
      <main className="main" id="main">
        <div
          className="relative flex items-center h-screen px-6 lg:px-0 bg-white dark:bg-dark"
          id="slider"
        >
          <div className="z-10 w-full lg:w-2/5 2xl:w-1/2 mx-auto text-center mt-20">
            <h1 className="heading text-3xl lg:text-5xl !leading-normal">
              {"스타트업 가치를 한눈에, "}
              <span className="text-blue-600">ValueHub</span>
            </h1>
            <p className="text-neutral-600 text-lg lg:text-xl font-medium leading-normal my-4">
              정확하고 신뢰할 수 있는 기업가치 평가 툴로, 당신의 스타트업을 성장
              궤도에 올려보세요.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 p-6">
              <a
                href="/calculator"
                className="btn cursor-pointer bg-[#4a6cf7] py-3 block"
              >
                지금 시작하기
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <img src={bubble} />
          </div>
          <div className="absolute bottom-0 left-0">
            <img src={wind} />
          </div>
        </div>
        <div
          className="py-20 md:py-24 bg-[#efefef] dark:bg-[#0b113a]"
          id="features"
        >
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">주요 기능</h2>
            <div className="mt-10">
              <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap">
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6 ">
                      <img src={dashboard} className="mx-auto svg-fill" />
                    </div>
                    <div className="text-center">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        스타트업을 위한 맞춤 설계
                      </h3>
                      <p className="text-base text-gray-500 opacity-90">
                        스타트업의 요구사항을 반영하여 특별히 설계되었습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <img src={layer} className="mx-auto svg-fill" />
                    </div>
                    <div className="text-center">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        고품질 디자인
                      </h3>
                      <p className="text-base text-gray-500 opacity-90">
                        세련되고 직관적인 디자인으로 시각적 완성도를 높였습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <img src={apps} className="mx-auto svg-fill" />
                    </div>
                    <div className="text-center">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        필수 구성 요소 제공
                      </h3>
                      <p className="text-base text-gray-500 opacity-90">
                        프로젝트에 필요한 모든 UI 컴포넌트를 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <img src={update} className="mx-auto svg-fill" />
                    </div>
                    <div className="text-center">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        속도 최적화
                      </h3>
                      <p className="text-base text-gray-500 opacity-90">
                        빠른 로딩과 원활한 성능을 보장합니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <img src={copy} className="mx-auto svg-fill" />
                    </div>
                    <div className="text-center">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        완전한 맞춤 설정
                      </h3>
                      <p className="text-base text-gray-500 opacity-90">
                        다양한 설정을 통해 원하는 대로 커스터마이징할 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <img src={refresh} className="mx-auto svg-fill" />
                    </div>
                    <div className="text-center">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        정기 업데이트
                      </h3>
                      <p className="text-base text-gray-500 opacity-90">
                        정기적인 업데이트로 항상 최신 상태를 유지합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white py-20 bg-[url('/img/bg-help.svg')] bg-no-repeat bg-left-bottom bg-contain lg:bg-auto 2xl:bg-cover"
          id="pricing"
        >
          <div className="container px-4 md:px-10 lg:px-0 mx-auto">
            <div className="lg:w-1/2 2xl:w-1/2 mb-16 text-center mx-auto">
              <h2 className="heading !leading-normal text-3xl lg:text-4xl">
                간단하고 합리적인 가격
              </h2>
              <p className="text-gray-500 opacity-90 text-lg">
                Lorem Ipsum 문구의 다양한 변형이 존재하지만, 대부분은 어떠한
                형태로든 변경되었습니다.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:px-6 mt-8">
              <div className="price-table ml-0 lg:ml-8">
                <div className="price-title">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-neutral-900 font-bold text-3xl">
                      $40 <span className="text-gray-500">/mo</span>
                    </h3>
                    <h4 className="text-right text-neutral-900 font-medium text-2xl">
                      Lite
                    </h4>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img src={grass} />
                  </div>
                  <button
                    type="submit"
                    className="btn cursor-pointer bg-[#4a6cf7] py-3 hidden lg:block"
                  >
                    무료 체험 시작
                  </button>
                  <hr className="my-10 bg-gray-600 text-gray-600 w-full opacity-30" />
                </div>
                <div className="price-description">
                  <ul>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      모든 UI 컴포넌트
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      무제한 사용 가능한 모든 UI 컴포넌트
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      상업적 사용
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      이메일 지원
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      평생 액세스
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      무료 평생 업데이트
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price-table">
                <div className="price-title">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-neutral-900 font-bold text-3xl">
                      $40 <span className="text-gray-500">/mo</span>
                    </h3>
                    <h4 className="text-right text-neutral-900 font-medium text-2xl">
                      Lite
                    </h4>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img src={grass} />
                  </div>
                  <button
                    type="submit"
                    className="btn cursor-pointer bg-[#4a6cf7] py-3 hidden lg:block"
                  >
                    무료 체험 시작
                  </button>
                  <hr className="my-10 bg-gray-600 text-gray-600 w-full opacity-30" />
                </div>
                <div className="price-description">
                  <ul>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      모든 UI 컴포넌트
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      무제한 사용 가능한 모든 UI 컴포넌트
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      상업적 사용
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      이메일 지원
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      평생 액세스
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      무료 평생 업데이트
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price-table">
                <div className="price-title">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-neutral-900 font-bold text-3xl">
                      $40 <span className="text-gray-500">/mo</span>
                    </h3>
                    <h4 className="text-right text-neutral-900 font-medium text-2xl">
                      Lite
                    </h4>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img src={grass} />
                  </div>
                  <button
                    type="submit"
                    className="btn cursor-pointer bg-[#4a6cf7] py-3 hidden lg:block"
                  >
                    무료 체험 시작
                  </button>
                  <hr className="my-10 bg-gray-600 text-gray-600 w-full opacity-30" />
                </div>
                <div className="price-description">
                  <ul>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      모든 UI 컴포넌트
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      무제한 사용 가능한 모든 UI 컴포넌트
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      상업적 사용
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      이메일 지원
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      평생 액세스
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <img src={check} />
                      </span>
                      무료 평생 업데이트
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="container flex flex-col items-stretch justify-center mx-auto">
            <div className=" bg-gray-dark rounded">
              <div className="py-16 px-6 lg:px-12">
                <div className="form-title">
                  <h2 className="heading text-2xl lg:text-3xl font-bold">
                    향후 업데이트를 받기 위해 구독하세요
                  </h2>
                  <p className="text-gray-500 text-opacity-90 text-base font-bold">
                    지원팀이 이메일로 신속하게 답장드립니다.
                  </p>
                </div>
                <div className="form-contact mt-10">
                  <div className="flex flex-col lg:flex-row justify-center items-center mt-2 mb-6">
                    <div className="flex flex-col basis-full w-full lg:basis-1/2 mr-0 lg:mr-3 my-3 lg:my-0">
                      <label htmlFor="name" className="form-label mb-2">
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-input py-2 rounded-lg bg-white"
                        required
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    <div className="flex flex-col basis-full w-full lg:basis-1/2 ml-0 lg:ml-3 my-3 lg:my-0">
                      <label htmlFor="email" className="form-label mb-2">
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-input py-2 rounded-lg bg-white"
                        required
                        placeholder="이메일을 입력하세요"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col my-4">
                    <label htmlFor="message" className="form-label mb-2">
                      메시지
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={5}
                      placeholder="메시지를 입력하세요"
                      className="form-input py-2 rounded-lg  bg-white"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn cursor-pointer bg-[#4a6cf7] py-3 block w-full"
                    >
                      구독하기
                    </button>
                  </div>
                  <p className="text-gray-400 text-opacity-90 text-base font-bold mt-6 text-center">
                    No spam guaranteed, So please don’t send any spam mail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
