import TopNav from "./_components/top-nav";

export default function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <main>
        {children}
        {modal}
      </main>
      <div id="modal-root" />
    </div>
  );
}
