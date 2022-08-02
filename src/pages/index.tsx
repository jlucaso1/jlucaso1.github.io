import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useDebounce, useThrottleFn, useWindowSize } from "react-use";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const { width, height } = useWindowSize();
  const dropsRef = useRef<number[]>([]);
  const drops = dropsRef.current;

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    //Our first draw
    if (!ctx) return;
    var letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const splittedLetters = letters.split("");

    var fontSize = 10,
      columns = canvas.width / fontSize;

    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text =
          splittedLetters[Math.floor(Math.random() * splittedLetters.length)] ||
          "";
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, (drops[i] || 0) * fontSize);
        drops[i]++;
        if (
          (drops[i] || 0) * fontSize > canvas.height &&
          Math.random() > 0.95
        ) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    const cancel = setInterval(draw, 33);

    return () => {
      clearInterval(cancel);
    };
  }, [canvas?.width]);

  useDebounce(
    () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    80,
    [width, height]
  );

  return (
    <>
      <Head>
        <title>jlucaso</title>
        <meta name="description" content="jlucaso website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 animate-pulse flex flex-col items-center justify-center text-center">
          <h1 className="md:text-7xl text-6xl">Under Construction</h1>
          <p className="md:text-xl text-base">
            This page is under construction. Please come back later.
          </p>
        </div>
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
        <div className="absolute right-0 bottom-0">
          <button
            className="text-white"
            onClick={() => {
              window.open("https://github.com/jlucaso1");
            }}
          >
            jlucaso1
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
