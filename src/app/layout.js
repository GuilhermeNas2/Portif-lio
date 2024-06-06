import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guilherme Nascimento Evangelista - Portifólio",
  description: "Portifólio pessoal mostrando um pouco mais sobre quem eu sou, minhas habilidades e conquistas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
