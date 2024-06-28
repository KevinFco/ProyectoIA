import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu/Menu.jsx';
import HomepageNoUser from './pages/homepageNoUser/HomepageNoUser.jsx'; 
import HomepageUser from './pages/homepageUser/HomepageUser.jsx'; 
import Calendar from './pages//Calendar/Calendar.jsx';
import EventsPage from './pages/EventsPage/EventsPage.jsx';
import Notifications from './pages/notifications/Notification.jsx';
import Profile from './pages/profile/Profile.jsx';
import EventView from './pages/EventView/EventView.jsx';
import LogIn from './pages/LogIn/LogIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import "./index.css";
import Header from './components/Header.jsx';

export function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomepageNoUser/>} />
        <Route path='/singup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path="/home" element={<HomepageUser/>}/>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:id" element={<EventView />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
