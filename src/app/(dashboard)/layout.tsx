import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>
        <SidebarTrigger className="-ml-1" />
        </div>
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
      </ SidebarInset>
    </SidebarProvider>
  );
}
