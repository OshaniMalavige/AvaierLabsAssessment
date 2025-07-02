"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import {
    formatCurrency,
    getStatusBadgeVariant,
    mockBorrowerDetails,
} from "@/utils/data/data";
import {
    AlertTriangle,
    CheckCircle,
    ChevronDown,
    ChevronRight,
    FileText,
    Send,
    Phone,
    XCircle,
    Mail,
    User,
} from "lucide-react";
import Button from "@/components/ui/Button";
import LoanSummaryCard from "@/components/LoanSummaryCard";
import { useAppContext } from "@/components/providers/AppProvider";
import notifications from "@/components/alerts/alerts";

const BorrowerDetail = () => {
    const { activeBorrower } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [aiExplainabilityOpen, setAiExplainabilityOpen] = useState(false);

    const borrowerDetail = activeBorrower
        ? mockBorrowerDetails[activeBorrower]
        : null;

    const handleRequestDocuments = async () => {
        setIsLoading(true);
        setTimeout(() => {
            notifications.success("Documents requested successfully");
            setIsLoading(false);
        }, 1000);
    };

    const handleSendToValuer = async () => {
        setIsLoading(true);
        setTimeout(() => {
            notifications.success("Valuer notified successfully");
            setIsLoading(false);
        }, 1000);
    };

    const handleApprove = async () => {
        setIsLoading(true);
        setTimeout(() => {
            notifications.success("Loan approved successfully");
            setIsLoading(false);
        }, 1000);
    };

    if (!activeBorrower || !borrowerDetail) {
        return (
            <Card className="h-auto flex items-center justify-center min-h-[300px]">
                <div className="flex flex-col items-center justify-center p-6 text-center text-gray-500">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <p className="text-lg">Select a Borrower to View Details</p>
                </div>
            </Card>
        );
    }

    return (
        <Card className="p-6" data-testid="borrower-detail-card">
            {/* Header */}
            <div className="mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            {borrowerDetail.name}
                        </h2>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                                <Mail className="w-4 h-4" />
                                <span>{borrowerDetail.email}</span>
                            </div>
                        </div>
                        <div className="mt-1 space-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                                <Phone className="w-4 h-4" />
                                <span>{borrowerDetail.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(borrowerDetail.loan_amount)}
                        </p>
                        <Badge
                            variant={getStatusBadgeVariant(borrowerDetail.status)}
                            data-testid="borrower-status-badge"
                        >
                            {borrowerDetail.status}
                        </Badge>
                    </div>
                </div>
            </div>

            {/* AI Explainability Section */}
            {borrowerDetail.ai_flags && borrowerDetail.ai_flags.length > 0 && (
                <div className="mb-6">
                    <button
                        data-testid="ai-explainability-button"
                        onClick={() => setAiExplainabilityOpen(!aiExplainabilityOpen)}
                        className="flex items-center justify-between w-full p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                        <div className="flex items-center">
                            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                            <span className="font-medium text-red-900">
                AI Explainability ({borrowerDetail.ai_flags.length})
              </span>
                        </div>
                        {aiExplainabilityOpen ? (
                            <ChevronDown className="w-4 h-4" />
                        ) : (
                            <ChevronRight className="w-4 h-4" />
                        )}
                    </button>

                    {aiExplainabilityOpen && (
                        <div className="mt-2" data-testid="ai-explainability-content">
                            {borrowerDetail.ai_flags.length > 0 ? (
                                <div className="space-y-2">
                                    {borrowerDetail.ai_flags.map((flag, index) => (
                                        <div
                                            key={index}
                                            data-testid="ai-flag-item"
                                            className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg"
                                        >
                                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                            <span className="text-sm text-red-800">{flag}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-sm text-green-800">
                    No issues detected
                  </span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Action Buttons */}
            <div className="mb-6 flex flex-wrap gap-2">
                <Button
                    data-testid="request-documents-button"
                    variant="outline"
                    size="sm"
                    onClick={handleRequestDocuments}
                    disabled={isLoading}
                >
                    <FileText className="w-4 h-4 mr-2" />
                    Request Documents
                </Button>
                <Button
                    data-testid="send-to-valuer-button"
                    variant="outline"
                    size="sm"
                    onClick={handleSendToValuer}
                    disabled={isLoading}
                >
                    <Send className="w-4 h-4 mr-2" />
                    Send to Valuer
                </Button>
                <Button
                    data-testid="approve-button"
                    variant="primary"
                    size="sm"
                    onClick={handleApprove}
                    disabled={isLoading}
                >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                </Button>
            </div>

            {/* Loan Summary */}
            <div data-testid="loan-summary">
                <LoanSummaryCard borrowerData={borrowerDetail} />
            </div>
        </Card>
    );
};

export default BorrowerDetail;
