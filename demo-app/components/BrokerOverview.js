"use client"
import {useState} from "react";
import Card from "@/components/ui/Card";
import OnboardingWorkflow from "@/components/OnboardingWorkflow";
import Button from "@/components/ui/Button";
import {formatCurrency} from "@/utils/data/data";
import {CheckCircle, User, TrendingUp, Clock, Phone, Mail, MessageSquare} from "lucide-react";

const BrokerOverview = ({ brokerData }) => {
    const [isAssistantEnabled, setIsAssistantEnabled] = useState(true);

    return (
        <Card className="p-6">
            {/* Broker Info */}
            <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">{brokerData.name}</h3>
                        <p className="text-sm text-gray-600">Broker</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <TrendingUp className="w-4 h-4 text-blue-600 mr-1" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{brokerData.deals}</p>
                        <p className="text-xs text-gray-600">Deals</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{brokerData.approval_rate}</p>
                        <p className="text-xs text-gray-600">Approval Rate</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <Clock className="w-4 h-4 text-orange-600 mr-1" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{formatCurrency(brokerData.pending)}</p>
                        <p className="text-xs text-gray-600">Pending</p>
                    </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 cursor-pointer"
                    >
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 cursor-pointer"
                    >
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 cursor-pointer"
                    >
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Chat
                    </Button>
                </div>
            </div>

            {/* Onboarding Workflow */}
            <OnboardingWorkflow />

            {/* AI Assistant Toggle */}
            <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">E Ardsassist</span>
                    <button
                        onClick={() => setIsAssistantEnabled(!isAssistantEnabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            isAssistantEnabled ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                    >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAssistantEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default BrokerOverview;