"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ResultPage = () => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    setScore(parseInt(sessionStorage.getItem("score"), 10));
  }, []);
  return (
    <div className="h-screen overflow-hidden flex flex-col items-center mt-20 ">
      <h1 className="mb-10 text-xl font-bold">Quiz Result</h1>
      <p className="mb-5 text-green-500">YOUR SCORE: {score} / 100</p>
      <Link className="btn" href={"/"}>
        Try again
      </Link>
      <p className="absolute bottom-20">
        Made by Jean. Follow me 👉
        <a target="_blank" href="https://www.instagram.com/jgigrec323">
          @jgigrec323
        </a>
      </p>
    </div>
  );
};

export default ResultPage;
