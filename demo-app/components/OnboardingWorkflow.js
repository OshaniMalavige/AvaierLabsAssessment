import {Check} from "lucide-react";
import {mockWorkflowSteps} from "@/utils/data/data";

const OnboardingWorkflow = () => {
    return (
        <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Onboarding Workflow</h4>
            <div className="space-y-2">
                {mockWorkflowSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                            index < 3 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                            {index < 3 ? <Check className="w-3 h-3" /> : index + 1}
                        </div>
                        <span className={`text-sm ${index < 3 ? 'text-gray-900' : 'text-gray-600'}`}>
                  {step}
                </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnboardingWorkflow;