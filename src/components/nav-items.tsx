import Link from "next/link";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Client", path: "/client" },
  { name: "Server", path: "/server" },
  { name: "Actions", path: "/actions" },
  { name: "State", path: "/state" },
  { name: "Shop", path: "/shop" },
  { name: "Photos", path: "/photos" },
];

export const NavItems = () => {
  return (
    <nav>
      <ul className="flex gap-4 bg-white/90 mb-6 p-4 rounded-md dark:bg-slate-900 dark:text-white">
        {NAV_ITEMS.map((item) => (
          <li key={item.path} className="p-2 hover:text-sky-600">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
