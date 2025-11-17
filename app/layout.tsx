import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LeadModalProvider } from "@/components/lead-modal-context";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achilles Virtual Agency - Your All-in-One Virtual Assistant Partner",
  description:
    "Connect with top-tier virtual assistants for social media management, content creation, project management, and bookkeeping. Scale your business efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeadModalProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <LeadCaptureModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}

