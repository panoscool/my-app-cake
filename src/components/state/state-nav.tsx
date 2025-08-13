import Link from "next/link";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "State", path: "/state" },
  { name: "Context", path: "/state/context" },
  { name: "Zustand", path: "/state/zustand" },
];

function StateNav() {
  return (
    <nav className="container flex justify-between items-center py-4 mx-auto relative">
      <span className="text-lg">💽</span>
      <ul className="flex gap-4 bg-white/90 rounded-md dark:bg-slate-900 dark:text-white">
        {NAV_ITEMS.map((item) => (
          <li key={item.path} className="p-2 hover:text-sky-600">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default StateNav;
