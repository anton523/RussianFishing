import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Dropdown } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavMenu.css';
import { AuthContext } from '../contexts/Auth';
import { logout } from '../utils/UserApi';
import { Categories } from '../addons/Categories';
import { Maps } from '../addons/Maps';

export function NavMenu() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [openMaps, setOpenMaps] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  function handleLogout() {
    logout();
    auth.logout();
  }

  return (
    <header>
      <div style={{ width: '100%', height: '75px' }}>
        <img style={{ width: '100%', height: '100%' }} src="/imgs/water.jpg" alt='' />
      </div>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 d-flex navbar" container={false}>
        {/* <NavbarBrand tag={Link} to="/">Русская рыбалка 4</NavbarBrand> */}
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row" isOpen={collapsed} navbar>
          <ul className="navbar-nav flex-grow ul-navbar">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">Главная</NavLink>
            </NavItem>
            <Dropdown
              nav
              inNavbar
              isOpen={openCategories}
              toggle={() => navigate('/pp4')}
              onMouseEnter={() => setOpenCategories(true)}
              onMouseLeave={() => setOpenCategories(false)}
            >
              <DropdownToggle nav caret className='text-dark'>
                РР4
              </DropdownToggle>
              <DropdownMenu end>
                {
                  Categories.map(category => {
                    return <DropdownItem key={category.name} tag={Link} to={category.path}>{category.name}</DropdownItem>
                  })
                }
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              {/* <NavLink tag={Link} className="text-dark" to="/maps">Карты PP4</NavLink> */}
              <Dropdown
                nav
                inNavbar
                isOpen={openMaps}
                toggle={() => navigate('/maps')}
                onMouseEnter={() => setOpenMaps(true)}
                onMouseLeave={() => setOpenMaps(false)}
              >
                <DropdownToggle nav caret className='text-dark'>
                  Карты
                </DropdownToggle>
                <DropdownMenu>
                  {
                    Maps.map(map => {
                      return (
                        <DropdownItem key={map.name} tag={Link} to={map.path}>{map.name}</DropdownItem>
                      );
                    })
                  }
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/forum">Форум</NavLink>
            </NavItem>
            <NavItem>
              {
                auth.authStatus
                  ? <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='text-dark'>
                      Профиль
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag={Link} to='/profile' >Кабинет</DropdownItem>
                      <DropdownItem onClick={handleLogout} >Выйти</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  : <NavLink tag={Link} className="text-dark" to="/login">Войти</NavLink>
              }
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
}
