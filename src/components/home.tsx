import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Testimonials from './landingPage/patient/testimonials';
import OurPartners from './landingPage/ourPartners';
import Footer from './landingPage/footer';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import SectionOne from './landingPage/patient/sectionOne';
import OurStory from './landingPage/patient/ourStory';
import MiddleSection from './landingPage/patient/middleSection';
import BenefitsOfPlatform from './landingPage/benefitsOfPlatform';
import HcpSectionOne from './landingPage/hcp/hcpSectionOne';
import HcpMiddleSection from './landingPage/hcp/hcpMiddleSection';
import AuthHeader from './cutomHeader';

const Home: React.FC = () => {

  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('patient');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        document.body.classList.add('mobile-home');
      } else {
        document.body.classList.remove('mobile-home');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home-page">
      <AuthHeader setActiveTab={setActiveTab} />
      <div>
        <div className="animation-trigger" id="hasAnimation" />
        <div className="animation-bg fixed" />
        <div className="landing-container">
          <Container>
            <Tab.Container
              activeKey={activeTab}
              onSelect={(k: string | null) => setActiveTab(k ?? 'patient')}
            >
              <Row className="custom-tabs">
                <Col sm={12}>
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="patient">{t('PATIENTS')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="hcp">
                        {t('HEALTHCARE_PROVIDERS')}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="patient">
                      <SectionOne />
                      <OurStory />
                      <MiddleSection />
                      <BenefitsOfPlatform />
                    </Tab.Pane>
                    <Tab.Pane eventKey="hcp">
                      <HcpSectionOne />
                      <HcpMiddleSection />
                      <BenefitsOfPlatform />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </div>
      {activeTab === 'patient' && <Testimonials />}
      <OurPartners />
      <Footer />
    </div>
  );
};

export default Home;
