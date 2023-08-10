import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-roaring-renovations-yellow">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-2xl text-black font-semibold whitespace-nowrap dark:text-white">
                Roaring Renovations
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Working Hours
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <span>Mon-Fri: 7:00am-5:00pm</span>
                </li>
                <li className="mb-4">
                  <span>Saturday: 8:00am-3:00pm</span>
                </li>
                <li>
                  <span>Sunday: Closed</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact us
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <a href="tel:+18172234268" className="hover:underline ">
                    817-223-4268
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Roaring.Renovations7@gmail.com"
                    className="hover:underline whitespace-normal break-words"
                  >
                    Roaring.Renovations7@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-600">
            © {year}{" "}
            <Link href="/" className="hover:underline">
              Roaring Renovations™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/RoaringRenovations/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/roaring_renovations7/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Instagram />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
