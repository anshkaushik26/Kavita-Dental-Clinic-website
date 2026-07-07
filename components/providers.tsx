"use client";

/**
 * components/providers.tsx
 *
 * Client-side provider tree. This wraps the app with all necessary context providers.
 * Keep this lean — only add providers that genuinely need to be here.
 */

import { Toaster } from "@/components/ui/sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      {/* Sonner toast notifications — positioned bottom-right */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: "font-sans text-sm",
            success: "bg-green-50 border-green-200 text-green-900",
            error: "bg-red-50 border-red-200 text-red-900",
          },
        }}
      />
    </>
  );
}
