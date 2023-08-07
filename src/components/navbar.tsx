import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn(
        "mx-auto flex p-6 font-bold text-black bg-roaring-renovations-yellow items-center justify-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      <Link
        href="/"
        className="text-md font-bold transition-colors hover:text-muted"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-md font-bold transition-colors hover:text-muted"
      >
        About
      </Link>
      <Link
        href="/gallery"
        className="text-md font-bold transition-colors hover:text-muted"
      >
        Gallery
      </Link>
      <Link
        href="/contact"
        className="text-md font-bold transition-colors hover:text-muted"
      >
        Contact
      </Link>
      <Link
        href="/services"
        className="text-md font-bold transition-colors hover:text-muted"
      >
        Services
      </Link>
    </nav>
  );
};
