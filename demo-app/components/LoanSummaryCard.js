import {formatCurrency} from "@/utils/data/data";
import {AlertTriangle, TrendingUp} from "lucide-react";
import Button from "@/components/ui/Button";
import {useState} from "react";
import notifications from "@/components/alerts/alerts";

const LoanSummaryCard = ({ borrowerData }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleEscalate = async () => {
        setIsLoading(true);
        // POST /api/borrowers/{id}/escalate
        setTimeout(() => {
            notifications.success('Escalated to Credit Committee successfully');
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Loan Summary</h3>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm font-medium text-gray-500">Employment</p>
                    <p className="text-sm text-gray-900">{borrowerData.employment}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Income</p>
                    <p className="text-sm text-gray-900">{formatCurrency(borrowerData.income)}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Existing Loan</p>
                    <p className="text-sm text-gray-900">{formatCurrency(borrowerData.existing_loan)}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Credit Score</p>
                    <p className="text-sm text-gray-900">{borrowerData.credit_score}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Source of Funds</p>
                    <p className="text-sm text-gray-900">{borrowerData.source_of_funds}</p>
                </div>
            </div>

            {/* Risk Signal */}
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2" />
                    <p className="text-sm text-yellow-800">{borrowerData.risk_signal}</p>
                </div>
            </div>

            {/* Escalate Button */}
            <Button
                variant="primary"
                className="w-full"
                disabled={borrowerData.ai_flags.length === 0 || isLoading}
                onClick={handleEscalate}
            >
                <TrendingUp className="w-4 h-4 mr-2" />
                Escalate to Credit Committee
            </Button>
            {borrowerData.ai_flags.length === 0 && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                    No escalation needed - no AI flags detected
                </p>
            )}
        </div>
    );
};

export default LoanSummaryCard;