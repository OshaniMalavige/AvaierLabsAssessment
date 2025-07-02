'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CustomTabs = ({ tabs, activeTab, onTabChange }) => {
    return (
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="w-full justify-start gap-2 border-b bg-transparent p-0">
                {tabs.map((tab) => (
                    <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className="relative px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        {tab.label}
                        {tab.count > 0 && (
                            <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                {tab.count}
              </span>
                        )}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};

export default CustomTabs;
