import { Notification } from '../../NotificationsContext';

export const CAROUSEL_ERROR: Notification = {
  id: 1,
  description: 'Error loading images',
  isError: true,
};

export const QUOTE_ERROR: Notification = {
  id: 2,
  description: 'Error loading quote',
  isError: true,
};

export const WEATHER_ERROR: Notification = {
  id: 3,
  description: 'Error getting forecast',
  isError: true,
};

export const IPINFO_ERROR: Notification = {
  id: 4,
  description: 'Error getting IP address coordinates',
  isError: true,
};
