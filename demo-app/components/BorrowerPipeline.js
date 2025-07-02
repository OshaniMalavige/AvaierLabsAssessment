import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatCurrency, getStatusBadgeVariant, mockPipelineData } from "@/utils/data/data";
import CustomTabs from "@/components/ui/CustomTabs";
import { useAppContext } from "@/components/providers/AppProvider";

const BorrowerPipeline = () => {
    const { activeTab, setActiveTab, activeBorrower, setActiveBorrower, radioSelection, setRadioSelection } = useAppContext();
    const borrowers = mockPipelineData[activeTab] || [];

    const tabs = [
        { id: 'new', label: 'New', count: mockPipelineData.new.length },
        { id: 'in_review', label: 'In Review', count: mockPipelineData.in_review.length },
        { id: 'approved', label: 'Approved', count: mockPipelineData.approved.length }
    ];

    const onTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <Card className="p-6">
            <div className="mb-6">
                <CustomTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
            </div>

            <div className="space-y-4">
                {borrowers.map((borrower) => (
                    <div
                        key={borrower.id}
                        onClick={() => setActiveBorrower(borrower.id)}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            activeBorrower === borrower.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-gray-900">{borrower.name}</h3>
                            <Badge variant={getStatusBadgeVariant(borrower.status)}>
                                {borrower.status}
                            </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{borrower.loan_type}</span>
                            <span className="font-medium">{formatCurrency(borrower.amount)}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Radio Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    F-SANITISED ACTIVE
                </h4>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="filter"
                            className="mr-2"
                            checked={radioSelection === 'All Applications'}
                            onChange={() => setRadioSelection('All Applications')}
                        />
                        <span className="text-sm text-gray-700">All Applications</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="filter"
                            className="mr-2"
                            checked={radioSelection === 'High Priority'}
                            onChange={() => setRadioSelection('High Priority')}
                        />
                        <span className="text-sm text-gray-700">High Priority</span>
                    </label>
                </div>
            </div>
        </Card>
    );
};

export default BorrowerPipeline;