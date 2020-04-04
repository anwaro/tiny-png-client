export type NotificationObject = {
  open: boolean;
  type: "success" | "error" | "warning";
  message: string;
};

export const initNotification: NotificationObject = {
  open: false,
  type: "success",
  message: "",
};
