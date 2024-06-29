import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 3600 * 24;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="m-auto max-w-screen-sm">
        <header className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Kronos Realm</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="m-auto max-w-screen-sm">{children}</div>
    </>
  );
}
