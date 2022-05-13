import { Notification } from 'node-notifier/notifiers/notificationcenter'

export const sendNotification = (notification: Notification) => {
  window.Main.sendNotification({
    wait: false,
    icon: 'assets/icon.ico',
    ...notification,
  })
}
