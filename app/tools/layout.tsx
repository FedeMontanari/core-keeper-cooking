export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <p className="absolute top-[3.7rem] w-full mx-auto z-50 text-lg flex items-center justify-center">
        You shouldn&#39;t be here!
      </p>
    </div>
  );
}
