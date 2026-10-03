"use client";

import { ReactNode } from "react";

export type DevNotificationType = "dom" | "build" | "theme" | "inspect" | "deploy";

export interface DevNotification {
  id: string;
  type: DevNotificationType;
  title: string;
  message: string;
  timestamp: string;
  codeSnippet?: string;
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useDevNotifications() {
  return {
    notifications: [] as DevNotification[],
    notify: (..._args: any[]) => {},
    removeNotification: (_id?: string) => {},
  };
}
