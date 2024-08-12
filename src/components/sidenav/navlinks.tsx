// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HomeIcon, AccountIcon } from "@/components/ui/icons";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Login from "@/components/google/Login";
import { RyuAuthenticator } from "@/lib/ryu-authentcator";

const links = [
  { name: "ホーム", href: "/", icon: HomeIcon },
  { name: "ホライズン", href: "/horizon", icon: SmartToyIcon },
];
export default function NavLinks() {
  const isRyu = RyuAuthenticator();
  const pathname = usePathname();
  const isActives = pathname === "/mypage";
  let isActive;
  return (
    <>
      {links.map((link) => {
        isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              isActive ? "bg-sky-100 text-blue-600" : "bg-gray-50"
            }`}
            href={link.href}
          >
            <link.icon />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      {isRyu ? (
        <Link
          href="/mypage"
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
            isActives ? "bg-sky-100 text-blue-600" : "bg-gray-50"
          }`}
        >
          <AccountIcon />
          <p className="hidden md:block">マイページ</p>
        </Link>
      ) : (
        <Login></Login>
      )}
    </>
  );
}
