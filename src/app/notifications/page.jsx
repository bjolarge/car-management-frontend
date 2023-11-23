"use client";
import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
});

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const channel = pusher.subscribe('xactwear');
    // const channel = pusher.subscribe(YOUR_CHANNEL_NAME);

    channel.bind('car-management', data => {
    // channel.bind(YOUR_EVENT_NAME, data => {
      setNotifications([...notifications, data]);
    });

    return () => {
      pusher.unsubscribe('xactwear');
    //   pusher.unsubscribe(YOUR_CHANNEL_NAME);
    };
  }, [notifications]);

  return (
    <div>
      <h2 className='text-bold flex justify-center pt-10'>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>

      {/* <table border={1}>
        <thead>
            <tr>
              <th>Channel</th>
              <th>Event</th>
              <th>Data</th>
            </tr>
            </thead>

            {notifications.map((notification) => (
            <tbody>
              <tr key={notification.id}>
                <td>{notification.message}</td>
                <td>Orange Juice</td>
                <p>Foreign Bread</p>
              </tr>

              <tr>
                <td>French Fires</td>
              </tr>
              </tbody>
            ))}
          </table> */}
    </div>
  );
};

export default Notifications;