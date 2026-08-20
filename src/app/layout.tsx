import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Mohammed Anzal — Full-Stack Developer & Designer",
  description:
    "Portfolio of Mohammed Anzal, a full-stack developer and UI/UX designer crafting beautiful, performant web experiences.",
  keywords: [
    "full-stack developer",
    "UI/UX designer",
    "React",
    "Next.js",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Mohammed Anzal" }],
  openGraph: {
    title: "Mohammed Anzal — Full-Stack Developer & Designer",
    description:
      "Crafting beautiful, performant web experiences with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="noise antialiased cursor-none">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
