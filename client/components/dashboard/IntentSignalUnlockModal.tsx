import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntentSignalUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewData: () => void;
  position?: {
    x: number;
    y: number;
  };
}

export default function IntentSignalUnlockModal({
  isOpen,
  onClose,
  onViewData,
  position,
}: IntentSignalUnlockModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed z-50 bg-white rounded-lg shadow-2xl p-6 border border-gray-200 max-w-sm",
          position && "pointer-events-auto",
        )}
        style={
          position
            ? {
                left: `${position.x}px`,
                top: `${position.y}px`,
              }
            : {
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }
        }
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Lock Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-valasys-orange to-orange-400">
            <Lock className="w-6 h-6 text-white" />
          </div>

          {/* Warning Text */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              Unlocking the signal will deduct credits
            </p>
          </div>

          {/* View Data Button */}
          <Button
            onClick={onViewData}
            className="w-full bg-gradient-to-r from-valasys-orange to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white font-medium transition-all duration-200"
          >
            View Data
          </Button>

          {/* Close button alternative */}
          <button
            onClick={onClose}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
