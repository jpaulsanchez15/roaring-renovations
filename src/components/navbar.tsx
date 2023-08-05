import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn(
        "mx-auto border-b-2 border-black h-full flex p-4 bg-roaring-renovations-yellow  items-center justify-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      <Link
        href="/"
        className="text-md font-medium transition-colors hover:text-muted"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-md font-medium transition-colors hover:text-muted"
      >
        About
      </Link>
      <Link
        href="/services"
        className="text-md font-medium transition-colors hover:text-muted"
      >
        Services
      </Link>
      <Link
        href="/gallery"
        className="text-md font-medium transition-colors hover:text-muted"
      >
        Gallery
      </Link>
      <Link
        href="/contact"
        className="text-md font-medium transition-colors hover:text-muted"
      >
        Contact
      </Link>
    </nav>
  );
};
