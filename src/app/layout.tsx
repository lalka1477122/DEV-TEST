import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Modal_local_win } from "@/app/modal_window/Modal_local_win";
import { Top_bar } from "./top_bar";
// import InteractiveDots from "./InteractiveDots";
import { Github } from "./githubuser/Githab";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "dev test",
  description: "Generated by create next app",
};







export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) 
  {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* <Github userg={`https://api.github.com/users/lalka1477122`} /> */}
      {/* <InteractiveDots/> */}
      <Top_bar/>
      {/* <Modal_local_win /> */}
      </body>
    </html>
  );
}
