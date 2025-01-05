import "./gloabls.css";
import React from "react";
import { ThemeProvider } from "./utils/theme-context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corbin Lazarone | Software Engineer",
  description:
    "Corbin Lazarone is soon to be Computer Science Graduate with a concentration in Software Engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
