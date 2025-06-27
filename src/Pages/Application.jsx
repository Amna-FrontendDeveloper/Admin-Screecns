import React, {  } from "react";
import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
import ApplicationsList from "../components/ApplicationsList";
import PageBanner from "../components/PageBanner";

// Icons
// import Dashboard from "../assets/dashboard.png";
// import star from "../assets/star.png";
// import usersIcon from "../assets/users.png";
// import money from "../assets/tdesign_money.png";

const Application = () => {
  // const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showSubmenu={false}
        menuItems={[
          { id: "users", label: "Users", icon: usersIcon },
          { id: "applications", label: "Applications", icon: Dashboard },
          { id: "reviews", label: "Review Moderation", icon: star },
          { id: "payments", label: "Payment Disputes", icon: money },
        ]}
      /> */}

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-4">
          <PageBanner
            title="Applications For Approval"
            subtitle="Manage Your Chefs Applications"
          />
          <ApplicationsList />
        </main>
      </div>
    </div>
  );
};

export default Application;
