import Link from "next/link";

export default function MainPage() {
  return (
    <main className="w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 animate-pulse flex flex-col items-center justify-center text-center">
        <h1 className="md:text-7xl text-6xl">Under Construction</h1>
        <p className="md:text-xl text-base">
          This page is under construction. Please come back later.
        </p>
      </div>
      <div className="absolute right-0 bottom-0">
        <Link
          href="https://github.com/jlucaso1/jlucaso1.github.io"
          target="_blank"
        >
          <button className="text-white">My github</button>
        </Link>
      </div>
    </main>
  );
}
