"use client";

import ExpenseSummary from "@/components/dashboard/cards/ExpenseSummaryCard";
import PopularProductsCard from "@/components/dashboard/cards/PopularProductsCard";
import PurchaseSummaryCard from "@/components/dashboard/cards/PurchaseSummaryCard";
import SalesSummaryCard from "@/components/dashboard/cards/SalesSummaryCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <PopularProductsCard />
      <SalesSummaryCard />
      <PurchaseSummaryCard />
      <ExpenseSummary />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>
    </div>
  );
};

export default Dashboard;
