import React from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import Main from '../../layout/main/Main';

const Home = () => {
  const dataform=useLocation()
  const username = dataform?.state?.data
  return (
    <div>
    <Header name={username?.email}></Header>
    <Main></Main>
    <Footer></Footer>
    </div>
  );
}

export default Home