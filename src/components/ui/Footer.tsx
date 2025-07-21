import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-dark-300 mb-2">
              Ready to bring your project to life?
            </p>
            <p className="text-dark-300 mb-2">Email: alex.morgan@example.com</p>
            <p className="text-dark-300">Phone: +44 7123 456 789</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/frontend"
                  className="text-dark-300 hover:text-white transition-colors"
                >
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/uxui"
                  className="text-dark-300 hover:text-white transition-colors"
                >
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link
                  href="/art"
                  className="text-dark-300 hover:text-white transition-colors"
                >
                  Art
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-dark-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-300 hover:text-white transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8 text-center">
          <p className="text-dark-300">
            &copy; 2025 Cruz Jurado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
