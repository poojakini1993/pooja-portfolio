import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pooja Kini | Portfolio",
  description: "Researcher | Gender & Climate Justice | Urban Water",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
