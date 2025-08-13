import Link from "next/link";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
];

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-neutral-100 relative">
      <div className="sticky top-0 bg-neutral-200 backdrop-filter backdrop-blur-lg bg-opacity-80">
        <div className="container flex justify-between items-center py-4 mx-auto">
          <span className="text-lg">🛍️</span>
          <ul className="flex gap-4 bg-white/90 rounded-md dark:bg-slate-900 dark:text-white">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="p-2 hover:text-sky-600">
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
