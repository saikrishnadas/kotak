"use client"
import React from 'react';
import UserActivity from '@/components/dashboard/UserActivity/UserActivity';
import UserUsageOverview from '@/components/dashboard/UserUsageOverview/UserUsageOverview';
import TopReviewer from '@/components/dashboard/TopReviewer/TopReviewer';
import "@/app/dashboard/dashboard.css";
import CardPieChart from '@/components/dashboard/PieChartData/CardPieChart';
import TokenBar from '@/components/dashboard/TokenBarChart/TokenBar';
import FeedbackOverview from '@/components/dashboard/FeedbackOverview/FeedbackOverview';

function Page() {
  return (
    <main className="dashboard-wrapper">
      <section className="grid-container-1">
        <div className="fixed-width">
          <CardPieChart />
        </div>
        <div className="responsive-width">
          <TokenBar />
        </div>
      </section>
      
      <section className="grid-container-2">
        <div className="responsive-width">
          <FeedbackOverview />
        </div>
        <div className="card fixed-width">
          <UserActivity />
        </div>
      </section>
      
      <section className="grid-container-3">
        <div className="responsive-width">
          <UserUsageOverview />
        </div>
        <div className="card fixed-width">
          <TopReviewer />
        </div>
      </section>
    </main>
  )
}

export default Page;
