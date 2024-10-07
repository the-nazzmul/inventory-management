"use client";
import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const PurchaseSummaryCard = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-gray-500">
      PurchaseSummaryCard
    </div>
  );
};

export default PurchaseSummaryCard;
