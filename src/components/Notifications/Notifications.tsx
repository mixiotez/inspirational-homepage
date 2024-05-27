import React from 'react';
import { NotificationsContainer } from './NotificationsContainers';
import Notification from './Notification';
import { useNotifications } from '../hooks/useNotifications';

const Notifications: React.FC = () => {
  const { notifications, setNotifications } = useNotifications();

  const deleteNotification = (idToDelete: number) => {
    setNotifications((previousNotifications) =>
      previousNotifications.filter(({ id }) => id !== idToDelete)
    );
  };

  return (
    <NotificationsContainer>
      {notifications.map(({ id, description, isError }) => {
        return (
          <Notification
            key={id}
            id={id}
            description={description}
            isError={isError}
            onClose={() => deleteNotification(id)}
          />
        );
      })}
    </NotificationsContainer>
  );
};

export default Notifications;
