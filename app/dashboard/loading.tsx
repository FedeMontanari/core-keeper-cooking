import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  );
}
