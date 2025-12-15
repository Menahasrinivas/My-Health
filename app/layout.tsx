import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Health Website",
  description: "Diet, Yoga, Workout, BMI Calculator & Health Tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <header
  style={{
    background: "#4caf50",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }}
>
  {/* LOGO */}
  <div style={{ fontSize: "22px", fontWeight: "700", color: "white" }}>
    MyHealth
  </div>

  {/* NAV LINKS */}
  <nav
    style={{
      display: "flex",
      gap: "25px",
      fontWeight: 600,
    }}
  >
    <Link href="/" style={{ color: "white" }}>Home</Link>
    <Link href="/about" style={{ color: "white" }}>About</Link>
    <Link href="/services" style={{ color: "white" }}>Services</Link>
    <Link href="/bmi-calculator" style={{ color: "white" }}>BMI</Link>
    <Link href="/health-tips" style={{ color: "white" }}>Health Tips</Link>
    <Link href="/contact" style={{ color: "white" }}>Contact</Link>
  </nav>
</header>

        {/* MAIN CONTENT */}
        <main style={{ padding: "25px" }}>
          {children}
        </main>

       <footer className="footer">
  <div className="footerContainer">

    {/* Column 1 */}
    <div className="footerSection">
      <h3>MyHealth</h3>
      <p>Your trusted partner for diet, workouts, yoga & healthy living.</p>
    </div>

    {/* Column 2 */}
    <div className="footerSection">
      <h4>Quick Links</h4>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div className="footerSection">
      <h4>Contact Us</h4>
      <p>Email: support@myhealth.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Chennai, Tamil Nadu, India</p>
    </div>

  </div>

  <hr className="footerLine" />

  <p className="footerBottom">© 2025 My Health Website. All Rights Reserved.</p>
</footer>


      </body>
    </html>
  );
}
