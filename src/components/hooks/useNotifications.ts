import { useContext } from 'react';
import { Context, NotificationsContext } from '../../NotificationsContext';

export const useNotifications = (): Context => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error('Use this hook within a NotificationsProvider');
  }
  return context;
};
