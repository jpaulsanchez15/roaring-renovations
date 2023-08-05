import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-grow ">
      <footer className="m-4 w-full  mt-12  bg-roaring-renovations-yellow">
        <div className="mx-auto h-full w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-black font-bold  sm:text-center">
            © {year}{" "}
            <Link href="/" className="hover:underline">
              Roaring Renovations™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="mt-3 text-black font-bold flex flex-wrap items-center text-sm  sm:mt-0">
            <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
