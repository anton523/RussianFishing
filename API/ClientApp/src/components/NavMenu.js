import React, { useContext, useEffect, useState } from 'react';
import { Collapse, Nav, NavbarBrand, Navbar, NavbarToggler, NavItem, NavLink, DropdownToggle, DropdownItem, DropdownMenu, Dropdown } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavMenu.css';
import { AuthContext } from '../contexts/Auth';
import { logout } from '../utils/UserApi';
import { Categories } from '../addons/Categories';
import MapsApi from '../utils/MapsApi';
import { UserContext } from '../contexts/User';

export function NavMenu({ args }) {
  const auth = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [openMaps, setOpenMaps] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    MapsApi.GetAll().then(maps => {
      setMaps(maps);
    });
  }, []);

  const profileToggle = () => setProfileOpen(prev => !prev);

  const toggle = () => setIsOpen(!isOpen);

  function handleLogout() {
    logout().then(() => {
      auth.logout();
      navigate('/');
    })
  }

  return (
    <header>
      <Navbar sm={{ padding: 0 }} {...args} style={{ padding: '0.5rem 2rem' }} expand='md' dark color='dark'>
        <NavbarBrand href="/">Russian Fishing 4</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ flexGrow: 1 }} navbar>
            <Dropdown
              nav
              inNavbar
              isOpen={openCategories}
              toggle={() => navigate('/pp4')}
              onMouseEnter={() => setOpenCategories(true)}
              onMouseLeave={() => setOpenCategories(false)}
            >
              <DropdownToggle nav caret>
                РР4
              </DropdownToggle>
              <DropdownMenu>
                {
                  Categories.map(category => {
                    return <DropdownItem onClick={() => setOpenCategories(false)} key={category.name} tag={Link} to={category.path}>{category.name}</DropdownItem>
                  })
                }
              </DropdownMenu>
            </Dropdown>
            <Dropdown
              nav
              inNavbar
              isOpen={openMaps}
              toggle={() => navigate('/maps')}
              onMouseEnter={() => setOpenMaps(true)}
              onMouseLeave={() => setOpenMaps(false)}
            >
              <DropdownToggle nav caret>
                Карты
              </DropdownToggle>
              <DropdownMenu>
                {
                  maps.map(map => {
                    return (
                      <DropdownItem
                        onClick={() => setOpenMaps(false)}
                        key={map.id}
                        tag={Link}
                        to={`/maps/${map.id}`}>
                        {map.name}
                      </DropdownItem>
                    );
                  })
                }
              </DropdownMenu>
            </Dropdown>
            <NavItem style={{ marginRight: 'auto' }}>
              <NavLink tag={Link} to="/forum">Форум</NavLink>
            </NavItem>
            <NavItem>
              {
                auth.authStatus
                  ? <Dropdown toggle={profileToggle} isOpen={profileOpen}>
                    <DropdownToggle nav caret>
                      Профиль
                    </DropdownToggle>
                    <DropdownMenu>
                      {
                        userContext.user && userContext.user.role !== 'Admin' ? <></> : <DropdownItem tag={Link} to='/admin'>Админка</DropdownItem>
                      }
                      <DropdownItem tag={Link} to='/profile'>Кабинет</DropdownItem>
                      <DropdownItem onClick={handleLogout} >Выйти</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  : <NavLink tag={Link} to="/login">Войти</NavLink>
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
