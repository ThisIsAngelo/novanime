import { Michroma } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/Navbar";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Novanime",
  description: "Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={michroma.className}>
      <NavBar/>
      {children}
      </body>
    </html>
  );
}
