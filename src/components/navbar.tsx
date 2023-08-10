import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn(
        "mx-auto flex p-6 font-semibold text-roaring-renovations-text bg-roaring-renovations-yellow items-center justify-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      <Link
        href="/"
        className="text-md font-semibold transition-colors hover:text-black"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-md font-semibold transition-colors hover:text-black"
      >
        About
      </Link>
      <Link
        href="/gallery"
        className="text-md font-semibold transition-colors hover:text-black"
      >
        Gallery
      </Link>
      <Link
        href="/contact"
        className="text-md font-semibold transition-colors hover:text-black"
      >
        Contact
      </Link>
      <Link
        href="/services"
        className="text-md font-semibold transition-colors hover:text-black"
      >
        Services
      </Link>
    </nav>
  );
};
