import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "PowerGaze",
  description: "Monitor and Control your energy consumption",
  viewport: "width=device-width, initial-scale=1.0"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
        </body>
    </html>
  );
}
