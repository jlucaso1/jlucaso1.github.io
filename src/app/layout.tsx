import { Metadata } from "next";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "jlucaso",
  description: "jlucaso website",
}