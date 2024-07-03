import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 3600 * 24;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="m-auto max-w-screen-lg">{children}</div>
      <Footer />
    </>
  );
}
