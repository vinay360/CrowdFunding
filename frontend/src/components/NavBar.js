import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toogleDrawer, setToggleDrawer] = useState(false);
  return <div>NavBar</div>;
};

export default NavBar;
