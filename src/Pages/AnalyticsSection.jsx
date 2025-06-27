import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

import PageBanner from '../components/PageBanner';



export default function DashboardLayout() {
  return (
   <>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />



        

        <PageBanner
 title="Booking Analytics"
 subtitle="Overview of your Booking performance "


/>
        <MainContent />
      </div>
    </div>
   </>
  );
}