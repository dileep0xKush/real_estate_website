import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50">
      {/* Sidebar (fixed) */}
      <Sidebar />

      {/* Right Panel */}
      <div className="ml-0 flex flex-col min-h-screen">
        <Header />

        {/* Scrollable Content Area */}
        <main className="ml-64 flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
