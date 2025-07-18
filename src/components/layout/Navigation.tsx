import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Frontend Dev", href: "/frontend" },
    { name: "UX/UI Design", href: "/uxui" },
    { name: "Art", href: "/art" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-space-between space-x-4">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={cn(
              "text-lg font-medium transition-colors hover:text-secondary-500",
              router.asPath === item.href && "text-secondary-500"
            )}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  );
}
