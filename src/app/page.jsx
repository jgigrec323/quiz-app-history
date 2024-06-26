"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/app/utils/Data";

function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex flex-col items-center mt-20 ">
      <h1 className="mb-10 text-xl font-bold">
        Welcome to the history quiz app
      </h1>
      <p className="mb-5">Please, choose the number of questions</p>
      <div className="flex gap-2 justify-center flex-wrap">
        <button
          onClick={() => {
            sessionStorage.setItem("numberOfQuestions", 5);
            router.push("/quiz");
          }}
          className="btn"
        >
          5
        </button>
        <button
          onClick={() => {
            sessionStorage.setItem("numberOfQuestions", 10);
            router.push("/quiz");
          }}
          className="btn"
        >
          10
        </button>
        <button
          onClick={() => {
            sessionStorage.setItem("numberOfQuestions", 20);
            router.push("/quiz");
          }}
          className="btn"
        >
          20
        </button>
        <button
          onClick={() => {
            sessionStorage.setItem("numberOfQuestions", 30);
            router.push("/quiz");
          }}
          className="btn"
        >
          30
        </button>
        <button
          onClick={() => {
            sessionStorage.setItem("numberOfQuestions", 40);
            router.push("/quiz");
          }}
          className="btn"
        >
          40
        </button>
        <button
          onClick={() => {
            sessionStorage.setItem("numberOfQuestions", questions.length);
            router.push("/quiz");
          }}
          className="btn"
        >
          All({questions.length})
        </button>
      </div>
    </div>
  );
}

export default Home;
