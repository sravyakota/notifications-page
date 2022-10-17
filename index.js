const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, name } = props;
  return (
    <div className={`${className} notification`}>
      <img src={imageUrl} className="image" />
      <p className="paragraph">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notificationsPage">
    <h1 className="heading">Notifications</h1>
    <div className="notificationsContainer">
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        name="Information Message"
        className="notification1"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name="Success Message"
        className="notification2"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name="Warning Message"
        className="notification3"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name="Error Message"
        className="notification4"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
