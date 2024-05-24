import TopNav from "./_components/topnav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans">
      <TopNav />
      <main>{children}</main>
    </div>
  );
}
