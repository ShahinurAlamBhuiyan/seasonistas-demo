import clsx from "clsx";
import {
  IconButton,
  ListItem,
  ListItemSuffix,
  Spinner,
} from "@material-tailwind/react";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";

import { IconBellFilled, IconCircleFilled } from "@tabler/icons-react";
import { List } from "@material-tailwind/react";
import { repeatNode } from "~/app/utils/markup";
import { PropsWithChildren } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRoutes } from "~/app/api-routes";

function Notification({
  title,
  isRead = false,
  onClick = () => {},
}: {
  title: string;
  isRead?: boolean;
  onClick?: () => void;
}) {
  return (
    <ListItem onClick={onClick} ripple={false} className="py-3">
      <p className="max-w-72">{title}</p>
      {!isRead && (
        <ListItemSuffix>
          <IconCircleFilled size={12} color="#fcba03" className="ml-10" />
        </ListItemSuffix>
      )}
    </ListItem>
  );
}

function NotificationsList({
  children,
  isLoading = false,
}: PropsWithChildren & {
  isLoading?: boolean;
}) {
  return (
    <Menu>
      <MenuHandler>
        <IconButton variant="text">
          <IconBellFilled />
        </IconButton>
      </MenuHandler>
      <MenuList className="px-0">
        <h2 className="text-xl font-extrabold pl-4 pt-2">Notifications</h2>

        {isLoading ? (
          <div className="my-4 flex justify-center">
            <Spinner color="blue-gray" width={26} height={26} />
          </div>
        ) : (
          <List className="max-h-80 outline-none">{children}</List>
        )}
      </MenuList>
    </Menu>
  );
}


export function NotificationsBox() {
  // Fetch notifications
  const { data: notifications = [], isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => apiRoutes.getNotifications(),
  });

  // Mutation to mark notifications as read
  // const markAsReadMutation = useMutation({
  //   mutationFn: (notificationIds) =>
  //     apiRoutes.markNotificationsRead({ notificationIds }),
  //   onSuccess: () => {
  //     // @ts-ignore
  //     queryClient.invalidateQueries(["notifications"]);
  //   },
  // });

  // When the notifications box is opened, mark all unread notifications as read
  // const handleOpen = () => {
  //   const unreadNotifications = notifications.filter((n) => !n.isRead);
  //   if (unreadNotifications.length > 0) {
  //     const notificationIds = unreadNotifications.map((n) => n._id);
  //     markAsReadMutation.mutate(notificationIds);
  //   }
  // };

  return (
    <NotificationsList isLoading={isLoading}>
      {notifications.map((notif) => (
        <Notification
          key={notif._id}
          title={notif.message}
          isRead={notif.isRead}
        />
      ))}
    </NotificationsList>
  );
}
