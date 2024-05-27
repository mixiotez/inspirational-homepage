import { createContext, useState } from 'react';

export type Notification = {
  id: number;
  description: string;
  isError: boolean;
};

export type Context = {
  notifications: Notification[];
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
};

export const NotificationsContext = createContext<null | Context>(null);

const NotificationsProvider = ({ children }: React.PropsWithChildren) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
