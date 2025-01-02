import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-[#111827] text-white">
        {/* Main content */}
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Let's work together.
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-muted-foreground">
              Get in touch.
            </h2>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full p-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#8f38eb] rounded-full" />
              <span className="text-sm">
                © Amork {new Date().getFullYear()}
              </span>
            </div>

            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-muted-foreground transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-muted-foreground transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-muted-foreground transition-colors"
                  >
                    Mail
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
