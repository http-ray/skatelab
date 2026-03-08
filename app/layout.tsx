import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skatelab - Trick Visualizer",
  description: "Explore and visualize skateboarding tricks in 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
