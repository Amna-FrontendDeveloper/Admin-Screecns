import Header from '../components/Header';
import MainContent from '../components/MainContent';
import PageBanner from '../components/PageBanner';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <PageBanner
          title="Booking Analytics"
          subtitle="Overview of your Booking performance"
        />
        <MainContent />
      </main>
    </div>
  );
}
