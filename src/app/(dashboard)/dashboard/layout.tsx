import Sidebar from '@/components/shared/Sidebar';

export default function DashboardLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-dvh flex ">
      <Sidebar />
      <div className="flex-1 min-h-dvh overflow-y-auto  pt-16 md:pt-0">
        {children}
      </div>
    </main>
  );
}