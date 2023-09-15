import Statistical from "@/components/components-user/components-dashboard/Statistical";
import TransactionHistory from "@/components/components-user/components-dashboard/TransactionHistory";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="w-full">
        <Statistical />
      </div>
      <div className="w-full">
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Dashboard;
