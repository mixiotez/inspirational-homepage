import { createContext, useState, useCallback } from 'react';

export type Notification = {
  id: number;
  description: string;
  isError: boolean;
};

export type Context = {
  notifications: Notification[];
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
  addNotification: (notification: Notification) => void;
};

export const NotificationsContext = createContext<null | Context>(null);

const NotificationsProvider = ({ children }: React.PropsWithChildren) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const addNotification = useCallback((notification: Notification) => {
    setNotifications((previousNotifications) => {
      return [...previousNotifications, notification];
    });
  }, []);

  return (
    <NotificationsContext.Provider
      value={{ notifications, setNotifications, addNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
