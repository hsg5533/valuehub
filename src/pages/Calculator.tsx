import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 요청 바디 타입 정의
interface CalculateRequest {
  employees: number;
  career: number;
  capital: number;
  investment: string;
  competitor: string;
}

// Scorecard Method 가중치
const WEIGHTS = {
  team: 30,
  opportunity: 25,
  product: 15,
  competition: 10,
  marketing: 10,
  investment: 5,
  others: 5,
};

// Berkus Method 각 항목별 최대 가치 (단위: 원)
const BERKUS_VALUES = {
  idea: 500_000_000,
  prototype: 500_000_000,
  team: 500_000_000,
  relationship: 500_000_000,
  sales: 500_000_000,
};

/**
 * 스타트업 valuation 계산 (Scorecard & Berkus 평균)
 * @param params CalculateRequest
 * @returns 계산된 valuation (원 단위)
 */
function calculateValuation({
  employees,
  career,
  capital,
  investment,
  competitor,
}: CalculateRequest) {
  // Scorecard Method 계산
  const teamRating = (employees / 10 + career / 5) * 50;
  const productRating = investment.toLowerCase() === "yes" ? 100 : 50;
  const competitionRating = competitor.toLowerCase() === "no" ? 100 : 50;
  const investmentRating = investment.toLowerCase() === "no" ? 100 : 50;
  const marketingRating = capital / 1_000_000_000;
  const opportunityRating = 70;
  const othersRating = 50;

  const totalScore =
    (teamRating * WEIGHTS.team +
      productRating * WEIGHTS.product +
      competitionRating * WEIGHTS.competition +
      opportunityRating * WEIGHTS.opportunity +
      investmentRating * WEIGHTS.investment +
      marketingRating * WEIGHTS.marketing +
      othersRating * WEIGHTS.others) /
    100;

  const scorecardValue = 2_000_000_000 * (totalScore / 100);

  // Berkus Method 계산
  let berkusValue = BERKUS_VALUES.idea;
  if (employees >= 5 && career >= 3) {
    berkusValue += BERKUS_VALUES.team;
  }
  if (competitor.toLowerCase() === "no") {
    berkusValue += BERKUS_VALUES.relationship;
  }
  if (investment.toLowerCase() === "yes") {
    berkusValue += BERKUS_VALUES.sales;
  }

  // 최종 Valuation: Scorecard와 Berkus 평균
  return Math.floor((scorecardValue + berkusValue) / 2);
}

export default function Calculator() {
  const [employees, setEmployees] = useState("");
  const [career, setCareer] = useState("");
  const [capital, setCapital] = useState("");
  const [investment, setInvestment] = useState("no");
  const [competitor, setCompetitor] = useState("no");
  const [result, setResult] = useState(0);

  return (
    <>
      <Header />
      <div className="py-20 bg-white">
        <div className="container flex flex-col items-stretch justify-center mx-auto">
          <div className="bg-gray-dark rounded">
            <div className="py-16 px-6">
              <h2 className="heading text-2xl text-3xl font-bold">
                기업가치 평가하기
              </h2>
              <label htmlFor="employees" className="block mb-2">
                임직원 수:
              </label>
              <input
                type="number"
                value={employees}
                onChange={(event) => setEmployees(event.target.value)}
                placeholder="예: 50"
                required
                className="form-input mb-2 w-full text-gray"
              />
              <label htmlFor="career" className="block mb-2">
                업력 (숫자, 예: "15"):
              </label>
              <input
                type="number"
                placeholder="예: 15"
                required
                className="form-input bg-white mb-2 w-full"
                value={career}
                onChange={(event) => setCareer(event.target.value)}
              />
              <label htmlFor="capital" className="block mb-2">
                자본금:
              </label>
              <div className="relative mb-2">
                <input
                  type="text"
                  placeholder="예: 200000000"
                  required
                  className="form-input bg-white w-full"
                  value={
                    capital ? parseInt(capital).toLocaleString("ko-KR") : ""
                  }
                  onChange={(event) => {
                    // 입력에서 숫자만 추출하여 상태에 저장
                    const digits = event.target.value.replace(/\D/g, "");
                    setCapital(digits);
                  }}
                />
                <span className="absolute bottom-4 right-4 flex items-center pr-3 pointer-events-none">
                  원
                </span>
              </div>
              <label className="block mb-2">투자유치 여부:</label>
              <div className="radio-group">
                <input
                  type="radio"
                  value="yes"
                  className="form-input py-2 mr-1 bg-white mb-2"
                  checked={investment === "yes"}
                  onChange={(event) => setInvestment(event.target.value)}
                />
                <label htmlFor="investment_yes">예</label>
                <input
                  type="radio"
                  value="no"
                  className="form-input py-2 ml-2 mr-1 bg-white mb-2"
                  checked={investment === "no"}
                  onChange={(event) => setInvestment(event.target.value)}
                />
                <label htmlFor="investment_no">아니오</label>
              </div>
              <label className="block mb-2">경쟁사 유무:</label>
              <div className="radio-group">
                <input
                  type="radio"
                  value="yes"
                  className="form-input py-2 mr-1 bg-white mb-2"
                  checked={competitor === "yes"}
                  onChange={(event) => setCompetitor(event.target.value)}
                />
                <label htmlFor="competitor_yes">예</label>
                <input
                  type="radio"
                  value="no"
                  className="form-input py-2 ml-2 mr-1 bg-white mb-2"
                  checked={competitor === "no"}
                  onChange={(event) => setCompetitor(event.target.value)}
                />
                <label htmlFor="competitor_no">아니오</label>
              </div>

              <button
                type="button"
                className="btn cursor-pointer bg-[#4a6cf7] py-3 ml-0 w-full"
                onClick={() => {
                  if (result !== 0) {
                    setResult(0);
                  }
                  if (
                    employees &&
                    career &&
                    capital &&
                    investment &&
                    competitor
                  ) {
                    const value = calculateValuation({
                      employees: parseInt(employees, 10),
                      career: parseInt(career, 10),
                      capital: parseInt(capital, 10),
                      investment,
                      competitor,
                    });
                    setResult(value);
                  }
                }}
              >
                {result === 0 ? "평가하기" : "다시 평가하기"}
              </button>
              {result !== 0 && (
                <input
                  type="text"
                  placeholder="예: 200000000"
                  required
                  className="form-input mt-6 bg-white w-full"
                  value={result.toLocaleString("ko-KR")}
                  readOnly
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
