import React from 'react';
import Menu from '../../components/Menu/Menu.jsx';
import Header from '../../components/Header.jsx';
import MainContentHomepage from '../../components/HomepageUserComponents/MainContentHomepage.jsx';
import '../../index.css';

const HomepageUser = () => {

  return (
    <>
    <Header/>
    <Menu/>
      <MainContentHomepage/>
    </>
  );
}

export default HomepageUser;
