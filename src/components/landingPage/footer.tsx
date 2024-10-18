import { scrollToBottomOfSection, scrollToTopOfPage } from '../helpers/helper';
import { facebook, gotoTop, instagram, linkedin, logo, twitter } from '../../utils/icons';
import React, { useEffect, useState } from 'react';
import { Button, Form, Image, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import CustomTooltip from '../cutomTooltip';
import { NUMBER } from '../../constants/number';
import { BOOLEAN } from '../../constants/static';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../constants/routes';
import TermServiceModal from '../termServiceModal';
import PrivacyPolicyModal from '../privacyPolicyModal';

export default function Footer() {
  const {pathname: pathName} = useLocation();
  const router = useNavigate();
  const [isVisible, setIsVisible] = useState(BOOLEAN.FALSE);
  const { t } = useTranslation();
  const [termServiceView, setTermServiceView] = useState(BOOLEAN.FALSE);
  const onTermServiceView = (status: boolean) => setTermServiceView(status);
  const [privacyPolicyView, setPrivacyPolicyView] = useState(BOOLEAN.FALSE);
  const onPrivacyPolicyView = (status: boolean) => setPrivacyPolicyView(status);

  const toggleVisibility = () => {
    if (window.pageYOffset > NUMBER.FIVE_HUNDRED) {
      setIsVisible(BOOLEAN.TRUE);
    } else {
      setIsVisible(BOOLEAN.FALSE);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: NUMBER.ZERO,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleNavClick = (id: any, routePath: string) => {
    if (pathName !== routePath) {
      router(`${routePath}?type=${id}`);
    } else {
      scrollToBottomOfSection(id);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="logo-container">
          <Image src={logo} width={160} height={54} alt="Evolved Human Care" />
        </div>
        <div className="footer-container">
          <div className="footer-col">
            <div className="content-box">
              <div className="title">{t('FIND_US_TITLE')}</div>
              <div className="text">{t('FIND_US_TEXT')}</div>
            </div>
            <div className="content-box">
              <div className="title">{t('EMAIL_ADDRESS_TITLE')}</div>
              <a
                href="mailto:hello@evolvedhumancare.io"
                title="Email us"
                className="text"
              >
                {t('EMAIL_ADDRESS_TEXT')}
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100086562451750"
                title="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={facebook} width={45} height={45} alt="Facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/evolved-human-care/"
                title="Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={linkedin} width={45} height={45} alt="Linkedin" />
              </a>
              <a
                href="https://www.instagram.com/evolvedhumancare/?igshid=YmMyMTA2M2Y%3D"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={instagram} width={45} height={45} alt="Instagram" />
              </a>
              <a
                href="https://twitter.com/EvolvedHC?t=S2xF4GB_LO16x3ovPdqJHw&s=09"
                title="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={twitter} width={45} height={45} alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <div className="nav-title">{t('OTHER_LINKS_TITLE')}</div>
            <Nav className="flex-column">
              <Nav.Link onClick={() => {
                router('/');
                scrollToTopOfPage();
              }}>
                {t('NAV_LINK_HOME')}
              </Nav.Link>
              <Nav.Link onClick={() => {router(ROUTE_PATH.OUR_TEAM); scrollToTopOfPage();}}>{t('NAV_LINK_OUR_TEAM')}</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('our-partner', '/')}>{t('OUR_PARTNERS')}</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('contact-us', ROUTE_PATH.OUR_TEAM)}>{t('NAV_LINK_CONTACT_US')}</Nav.Link>
            </Nav>
          </div>
          <div className="footer-col">
            <div className="subscribe-container">
              <div className="title">
                <span>{t('SUBSCRIBE')}</span> {t('FOR_UPDATES')}
              </div>
              <div className="text">
                {t('SUBSCRIBE_TEXT')}
              </div>
              <Form className="subs-form">
                <Form.Group className="form-group">
                  <Form.Control disabled type="email" placeholder={t('EMAIL_ADDRESS_COMING_SOON')} />
                </Form.Group>
                <Form.Group className="form-group">
                  <CustomTooltip value={t('UNDER_CONS_TEXT')}>
                    <Button variant="primary" size="lg">
                      {t('SUBSCRIBE')}
                    </Button>
                  </CustomTooltip>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy-text">&copy; {t('COPYRIGHT_TEXT', { year: moment().format('YYYY') })}</div>
          <div className="link-container">
            <Nav.Link
              title="Terms of Service"
              onClick={() => onTermServiceView(BOOLEAN.TRUE)}
            >
              {t('TERMS_OF_SERVICE_LINK')}
            </Nav.Link>
            <span className="divider">/</span>
            <Nav.Link
              title="Privacy Policy"
              onClick={() => onPrivacyPolicyView(BOOLEAN.TRUE)}
            >
              {t('PRIVACY_POLICY_LINK')}
            </Nav.Link>
          </div>
        </div>
      </footer>
      <span className={`back-to-top-btn  ${isVisible ? 'after-scroll' : 'without-after-scroll'}`} onClick={scrollToTop}>
        <Image src={gotoTop} width={22} height={22} alt="Arrow up" />
      </span>
      <TermServiceModal
        onShow={onTermServiceView}
        show={termServiceView}
        t={t}
      />
      <PrivacyPolicyModal
        onShow={onPrivacyPolicyView}
        show={privacyPolicyView}
        t={t}
      />
    </>
  );
}
