// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useNavigate } from 'react-router-dom';

import './header.css'

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/logo.jpg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"></img>
          Вікторина
        </a>
        <div className='d-flex'>
          <button hidden={isAuthenticated()} onClick={handleLogout}>Вийти</button>
        </div>

      </div>
    </nav>
  );
};

export default Header;


