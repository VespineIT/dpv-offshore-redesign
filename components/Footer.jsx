import { SITE } from "@/lib/siteData";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-light-muted bg-light-muted/50 p-8 dark:border-dark-muted dark:bg-dark-muted/50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-primary dark:text-white">
            DPV Offshore
          </h3>
          <p className="mt-2 text-sm text-light-text/80 dark:text-dark-text/80">
            {SITE.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-primary dark:text-white">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="/about"
                className="text-sm text-light-text/80 hover:text-accent dark:text-dark-text/80"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-sm text-light-text/80 hover:text-accent dark:text-dark-text/80"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-light-text/80 hover:text-accent dark:text-dark-text/80"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-primary dark:text-white">
            Contact Us
          </h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center text-sm text-light-text/80 dark:text-dark-text/80">
              <FaPhone className="mr-2 flex-shrink-0 text-accent" />
              {SITE.phoneSupport}
            </li>
            <li className="flex items-center text-sm text-light-text/80 dark:text-dark-text/80">
              <FaEnvelope className="mr-2 flex-shrink-0 text-accent" />
              {SITE.email}
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-light-text/70 hover:text-accent dark:text-dark-text/70"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-light-text/70 hover:text-accent dark:text-dark-text/70"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-light-text/70 hover:text-accent dark:text-dark-text/70"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-light-muted pt-6 text-center text-sm text-light-text/60 dark:border-dark-muted dark:text-dark-text/60">
        © {new Date().getFullYear()} DPV Offshore & Marine Services LLC. All
        Rights Reserved.
      </div>
    </footer>
  );
}