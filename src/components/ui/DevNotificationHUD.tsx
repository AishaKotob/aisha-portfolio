"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Terminal, Sparkles, CheckCircle2, Info, X } from "lucide-react";

export type DevNotificationType = "dom" | "build" | "theme" | "inspect" | "deploy";

export interface DevNotification {
  id: string;
  type: DevNotificationType;
  title: string;
  message: string;
  timestamp: string;
  codeSnippet?: string;
}

interface NotificationContextType {
  notifications: DevNotification[];
  notify: (type: DevNotificationType, title: string, message: string, codeSnippet?: string) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<DevNotification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const notify = useCallback(
    (type: DevNotificationType, title: string, message: string, codeSnippet?: string) => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const id = Math.random().toString(36).substring(2, 9);
      const newNotif: DevNotification = { id, type, title, message, timestamp: timeStr, codeSnippet };

      setNotifications((prev) => [newNotif, ...prev.slice(0, 3)]);

      // Auto dismiss after 4.5 seconds
      setTimeout(() => {
        removeNotification(id);
      }, 4500);
    },
    [removeNotification]
  );

  return (
    <NotificationContext.Provider value={{ notifications, notify, removeNotification }}>
      {children}
      <NotificationHUD notifications={notifications} onClose={removeNotification} />
    </NotificationContext.Provider>
  );
}

export function useDevNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error("useDevNotifications must be used within NotificationProvider");
  }
  return ctx;
}

function NotificationHUD({
  notifications,
  onClose,
}: {
  notifications: DevNotification[];
  onClose: (id: string) => void;
}) {
  if (notifications.length === 0) return null;

  return (
    <aside
      aria-label="Frontend Engineer Console Notifications"
      className="fixed bottom-6 right-6 z-99999 flex flex-col gap-3 max-w-sm w-full pointer-events-none"
    >
      {notifications.map((n) => {
        return (
          <div
            key={n.id}
            role="status"
            className="pointer-events-auto transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-3 fade-in rounded-2xl bg-white/95 dark:bg-[#18131F]/95 backdrop-blur-xl border border-[#F06595]/30 shadow-[0_12px_36px_rgba(240,101,149,0.18)] p-3.5 flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-lg bg-[#FFF0F6] text-[#E8559D] flex items-center justify-center border border-[#F06595]/20">
                  {n.type === "dom" && <Terminal className="w-3.5 h-3.5" />}
                  {n.type === "build" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  {n.type === "theme" && <Sparkles className="w-3.5 h-3.5" />}
                  {(n.type === "inspect" || n.type === "deploy") && <Info className="w-3.5 h-3.5" />}
                </span>
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#4A4254] dark:text-[#EAE5EE]">
                  {n.title}
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-mono text-[#9D96A5]">{n.timestamp}</span>
                <button
                  onClick={() => onClose(n.id)}
                  aria-label="Close notification"
                  className="p-1 rounded-md text-[#9D96A5] hover:text-[#E8559D] hover:bg-[#FFF0F6] transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            <p className="text-xs text-[#5E5568] dark:text-[#C5BFCD] font-light leading-relaxed pl-8">
              {n.message}
            </p>

            {n.codeSnippet && (
              <div className="ml-8 mt-1 p-1.5 rounded-lg bg-[#FAF8FB] dark:bg-[#0E0C12] border border-[#F06595]/15 text-[10px] font-mono text-[#D84488] truncate">
                <code>{n.codeSnippet}</code>
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}
