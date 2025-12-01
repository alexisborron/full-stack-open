const Notification = ({ message, type }) => {
  if (!message) return null;

  const typeClass =
    type === "error" ? "error" : type === "success" ? "success" : "";

  return <div className={`notification ${typeClass}`}>{message}</div>;
};

export default Notification;
