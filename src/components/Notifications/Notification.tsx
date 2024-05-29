import { useEffect, useState } from 'react';
import { Notification as NotificationType } from '../../NotificationsContext';
import { NotificationContainer } from './NotificationsContainers';

type NotificationProps = NotificationType & { onClose: (id: number) => void };

const Notification = ({
  id,
  description,
  isError,
  onClose,
}: NotificationProps) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsActive(false), 100);
    setTimeout(() => onClose(id), 7000);
  }, [onClose, id]);

  return (
    <NotificationContainer $isActive={isActive} $isError={isError} key={id}>
      <p>{description}</p>
      <button aria-label="Close notification" onClick={() => onClose(id)}>
        X
      </button>
    </NotificationContainer>
  );
};

export default Notification;
