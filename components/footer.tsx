import Link from "next/link";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="section-wrapper py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">About Us</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Achilles Virtual Agency connects businesses with top-tier virtual
              assistants, helping you scale efficiently and focus on what matters
              most.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <a
              href="mailto:achillesvirtualagency@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-achilles-blue transition-colors mb-2"
            >
              <Mail className="h-4 w-4" />
              achillesvirtualagency@gmail.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-600 hover:text-achilles-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-achilles-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-achilles-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-achilles-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-achilles-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-achilles-blue transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-achilles-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/book-a-call"
                  className="text-gray-600 hover:text-achilles-blue transition-colors"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Achilles Virtual Agency. All rights
            reserved.
          </p>
          <p className="mt-2">
            Built by{" "}
            <a
              href="#"
              className="text-achilles-blue hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codlinker Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

