import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import AdvancedThemeCustomizer from "@/components/AdvancedThemeCustomizer";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="sticky top-0 z-40 flex items-center gap-2 bg-white px-4 border-b shadow-sm backdrop-blur-sm bg-opacity-95">
          <SidebarTrigger className="-ml-2" />
          <div className="flex-1">
            <Navbar />
          </div>
        </div>
        <main className="flex-1 bg-dashboard-bg p-4 md:p-6 overflow-auto min-h-screen">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
        <AdvancedThemeCustomizer />
      </SidebarInset>
    </SidebarProvider>
  );
}
