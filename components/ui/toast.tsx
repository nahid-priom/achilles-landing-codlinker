import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: "success" | "error";
}

export function Toast({ message, onClose, type = "success" }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center gap-4 rounded-lg border p-4 shadow-lg animate-in slide-in-from-bottom-5",
        type === "success"
          ? "bg-green-50 border-green-200 text-green-900"
          : "bg-red-50 border-red-200 text-red-900"
      )}
      role="alert"
    >
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="rounded-md p-1 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

