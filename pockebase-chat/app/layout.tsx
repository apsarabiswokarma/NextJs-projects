import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pocket base chatting app",
  description: "A chatting app for pocket base",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md px-5 py-3">
          <h1 className="font-bold text-lg">PocketBase Chat</h1>
        </header>

        {children}
      </body>
    </html>
  );
}
