import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Carter — Full-Stack Developer & Designer",
  description:
    "Portfolio of Alex Carter, a full-stack developer and UI/UX designer crafting beautiful, performant web experiences.",
  keywords: [
    "full-stack developer",
    "UI/UX designer",
    "React",
    "Next.js",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Alex Carter" }],
  openGraph: {
    title: "Alex Carter — Full-Stack Developer & Designer",
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
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
