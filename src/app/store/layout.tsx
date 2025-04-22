import Link from "next/link";

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
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
