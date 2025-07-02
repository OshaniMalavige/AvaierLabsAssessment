"use client"

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import BorrowerPipeline from "@/components/BorrowerPipeline";
import BorrowerDetail from "@/components/BorrowerDetail";
import BrokerOverview from "@/components/BrokerOverview";
import {mockBrokerInfo} from "@/utils/data/data";

export default function Home() {
  return (
    <LayoutWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BorrowerPipeline/>
          <BorrowerDetail/>
          <BrokerOverview
              brokerData={mockBrokerInfo}
          />
      </div>
    </LayoutWrapper>
  );
}
