import { NavItems } from "../../components/nav-items";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <NavItems />
      {children}
    </div>
  );
}
