import React, { useEffect, useState } from 'react';
import {
  Button, Container, Image, Nav, Navbar, NavbarBrand,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { logo } from '../utils/icons';
import CustomTooltip from './cutomTooltip';
import LanguageSelector from '../utils/languageSelector';
import { scrollToBottomOfSection, scrollToTopOfPage } from './helpers/helper';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../constants/routes';

function AuthHeader(props: { setActiveTab?: (val: string) => void}) {
  const { setActiveTab } = props;
  const { t } = useTranslation();
  const router = useNavigate();

  const [headerBg, setHeaderBg] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { pathname: pathName } = useLocation();
  const handleNavClick = (id: string) => {
    if (pathName !== '/') {
      router(`${ROUTE_PATH.HOME}?type=${id}`);
    } else {
      scrollToBottomOfSection(id);
    }
  };

  const onStoryClick = () => {
    setActiveTab?.('patient');
    setTimeout(() => {
      if (pathName !== '/') {
        router(`${ROUTE_PATH.HOME}?type=our-story`);
      } else {
        scrollToBottomOfSection('our-story');
      }
    }, 100);
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  return (
    <>
      <header className={`header ${headerBg ? 'header-bg' : ''}`}>
        <Navbar>
          <Container fluid>
            <NavbarBrand  onClick={() => { router('/'); scrollToTopOfPage(); }}>
              <Image
                src={logo}
                height={70}
                width={200}
                alt="Evolved logo"
              />
            </NavbarBrand>
            <div  className={`mobile-nav ${showMenu ? 'display' : ''}`}>
              <Nav>
                <Container>
                  <Nav className="me-auto">
                  <Nav.Link onClick={() => { router('/'); handleMenu(); scrollToTopOfPage(); }}>{t('HOME')}</Nav.Link>
                    <Nav.Link onClick={() => {onStoryClick(); handleMenu();}}>
                      {t('OUR_STORY')}
                    </Nav.Link>
                    <Nav.Link onClick={() => {router(ROUTE_PATH.OUR_TEAM); scrollToTopOfPage(); handleMenu();}}>{t('OUR_TEAM')}</Nav.Link>
                    <Nav.Link onClick={() => {handleNavClick('our-partner'); handleMenu();}}>{t('OUR_PARTNERS')}</Nav.Link>
                  </Nav>
                </Container>
              </Nav>

              <Nav className="align-items-center">
                <CustomTooltip placement="bottom" value={t('UNDER_CONS_TEXT')}>
                  <Button
                    variant="primary"
                  >
                    {t('SIGN_IN')}
                  </Button>
                </CustomTooltip>
                <CustomTooltip placement="bottom" value={t('UNDER_CONS_TEXT')}>
                  <Button variant="light" className="text-blue">{t('SIGNUP')}</Button>
                </CustomTooltip>
              </Nav>
            </div>
            <LanguageSelector />
            <span className={`mobile-toggle ${showMenu ? 'cross' : ''}`} onClick={() => handleMenu()}> <span></span> </span>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default AuthHeader;
