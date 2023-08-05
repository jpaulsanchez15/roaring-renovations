import { cn } from "@/lib/utils";
import Link from "next/link";

// TODO: Do we need to add a UserProfile component here?
export const Navbar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn(
        "mx-auto mt-6 h-full flex  items-center justify-center space-x-4 lg:space-x-6",
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
