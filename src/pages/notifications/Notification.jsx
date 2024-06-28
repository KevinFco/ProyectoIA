import React from 'react';
import Menu from '../../components/Menu/Menu.jsx';
import Header from '../../components/Header.jsx';
import Message  from '../../components/Message.jsx';
import '../../index.css';
// Notification.jsx


const Notification = () => {

  return (
    <>
      <Header/>
      <Menu/>
      <div>
        <Message />
      </div>
    </>

  );
}

export default Notification;

