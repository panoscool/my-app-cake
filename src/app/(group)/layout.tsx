import { NavItems } from "../_components/nav-items";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200 to-stone-400 dark:from-gray-400 dark:to-stone-800">
      <NavItems />
      {children}
    </div>
  );
}
