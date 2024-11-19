import React from 'react';
import { Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../utils/languageSelector';
import { backBtn, logo } from '../utils/icons';
import { useNavigate } from 'react-router-dom';

interface RoadmapProps {
    closeRoadmapModal: () => void;
}

function Roadmap({ closeRoadmapModal }: RoadmapProps) {
    const { t } = useTranslation();
    const router = useNavigate();
    const roadmapData = t("roadmap.years", { returnObjects: true });
    const milestones = t("roadmap.milestones", { returnObjects: true });

    return (
        <div className="roadmap-modal">
            <div className="header">
                <Navbar>
                    <Container fluid>
                        <button className="back-to-home" type="button" onClick={closeRoadmapModal}><Image src={backBtn} alt="Back button" /> Back </button>
                        <LanguageSelector />
                    </Container>
                </Navbar>
            </div>
            <div className="roadmap-wrapper">
                <Image
                    onClick={closeRoadmapModal}
                    src={logo}
                    height={70}
                    width={200}
                    alt="Evolved logo"
                    className="logo-center"
                />
                <h1> <span> 5-Year </span> Roadmap </h1>
                <div className="timeline-wrap">
                    <Row className='row-reverse'>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> 2021 </h2>
                                <p> Laying the Foundation </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> Q3 </span>
                                    <ul>
                                        <li> Conceptualization of the Evolved Human Care model.</li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q4 </span>
                                    <ul>
                                        <li> Development of the physical model concept. </li>
                                        <li> Comprehensive market research initiated. </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> 2022 </h2>
                                <p> Building the Virtual Framework </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> Q1 </span>
                                    <ul>
                                        <li> Virtual model ideation begins.</li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q2 </span>
                                    <ul>
                                        <li> Continued virtual model development. </li>
                                        <li> Founders team formation completed. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q3 </span>
                                    <ul>
                                        <li> MVP (Minimum Viable Product) modeling initiated. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q4 </span>
                                    <ul>
                                        <li> Market research and partner scoping. </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row className='row-reverse'>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> 2023 </h2>
                                <p> Structuring the Business </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> Q1 </span>
                                    <ul>
                                        <li> Official incorporation in Canada.</li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q2 </span>
                                    <ul>
                                        <li> First company valuation completed. </li>
                                        <li> Investor Round 1 initiated. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q3 </span>
                                    <ul>
                                        <li> Dubai market entry initiated. </li>
                                        <li> Investor Round 2, engaging with key partners. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q4 </span>
                                    <ul>
                                        <li> Participated in several pitching events with Venture Capitalists (VCs). </li>
                                        <li> Market research and partner scoping.  </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> 2024 </h2>
                                <p> Expanding Operations </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> Q1 </span>
                                    <ul>
                                        <li> Core team expansion.</li>
                                        <li> UAE corporation creation.</li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q2 </span>
                                    <ul>
                                        <li> Investor Round 3. </li>
                                        <li> Finalization of partnerships. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q3 </span>
                                    <ul>
                                        <li> Integration of Fiat to Cryptocurrency On and Off Ramp through partnership. </li>
                                        <li> Integration of Blockchain-based Hot Storage Solution through partner.</li>
                                        <li> Integration of KYC Verification company into the app. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q4 </span>
                                    <ul>
                                        <li> MVP Beta Launch and Testing. </li>
                                        <li> 500 practitioners by December. </li>
                                        <li> 2,000 users by December. </li>
                                        <li> Token Launch Strategy Discussions. </li>
                                        <li> Launch of the Deluxe App Service Suite Subscription (PHR & legacy health record features). </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-wrap">
                    <Row className='row-reverse'>
                        <Col md={6}>
                            <div className="year-title">
                                <h2> 2025 </h2>
                                <p> Scaling and Milestones </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="year-target">
                                <div className="quater-target-box">
                                    <span> Q1 </span>
                                    <ul>
                                        <li> Finalization of partnerships for physical clinic locations in Mexico and Canada.</li>
                                        <li> 1,500 practitioners by January. </li>
                                        <li> 10,000 paid users by February. </li>
                                        <li> Token Launch Strategy Discussions. </li>
                                        <li> Estimated 60,000+ overall users for mid year. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q2 </span>
                                    <ul>
                                        <li> Official incorporation in Mexico. </li>
                                        <li> Entry into the LATAM market.  </li>
                                        <li> Token Launch Strategy Discussions. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q3 </span>
                                    <ul>
                                        <li> Full integration of the Al Assistant. </li>
                                    </ul>
                                </div>
                                <div className="quater-target-box">
                                    <span> Q4 </span>
                                    <ul>
                                        <li> Launch of physical clinics in Mexico and Canada. </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="milestone-wrp">
                    <Row>
                        <Col>
                            <div className="goals">
                                <h3> 2025 Milestones Goals </h3>
                                <ul>
                                    <li> 5,000 practitioners by December. </li>
                                    <li> 500,000 paid users by December. </li>
                                    <li> Estimated 1+ million overall users. </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="flex-end">
                            <div className="goals">
                                <h3> Key Offerings </h3>
                                <ul>
                                    <li> Deluxe App Service Suite Subscription.  </li>
                                    <li> Personal Health Record (PHR), library access, and legacy health record features with premium subscription. </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="popup-footer">
                    <Image
                        onClick={closeRoadmapModal}
                        src={logo}
                        height={37}
                        width={103}
                        alt="Evolved logo"
                        className="logo-center"
                    />
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
