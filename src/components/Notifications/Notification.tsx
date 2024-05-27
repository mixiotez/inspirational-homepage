import { useEffect, useState } from 'react';
import { Notification as NotificationType } from '../../NotificationsContext';
import { NotificationContainer } from './NotificationsContainers';

type NotificationProps = NotificationType & { onClose: () => void };

const Notification = ({
  id,
  description,
  isError,
  onClose,
}: NotificationProps) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(false);
    setTimeout(onClose, 7000);
  }, [onClose]);

  return (
    <NotificationContainer $isActive={isActive} $isError={isError} key={id}>
      <p>{description}</p>
      <button aria-label="Close notification" onClick={onClose}>
        X
      </button>
    </NotificationContainer>
  );
};

export default Notification;
