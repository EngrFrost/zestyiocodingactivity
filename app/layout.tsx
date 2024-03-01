import type { Metadata } from "next";

import "./globals.css";
import TopNav from "@/components/layout/topNav";

export const metadata: Metadata = {
  title: "Zesty.io",
  description: "Coding Activity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <TopNav />
          <div className="container mx-auto p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
