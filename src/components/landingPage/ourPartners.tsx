import { partner1, partner2, partner3, partner4, partner5, partner6 } from '../../utils/icons';
import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Slider from 'react-slick';
import { scrollToBottomOfSection } from '../helpers/helper';

export default function OurPartners() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const { t } = useTranslation();

useEffect(() => {
  if (type) {
    scrollToBottomOfSection(type);
  }
}, [type]);

  const partnerSettings: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="partner-section" id="our-partner">
      <Container>
        <h2 className="section-title">
          {t('OUR')} <span>{t('PARTNERS')}</span>
        </h2>
        <Slider {...partnerSettings}>
          <div className="image-container">
            <Image src={partner1} height={40} alt="Partner" />
          </div>
          <div className="image-container">
            <Image src={partner2} height={40} alt="Partner" />
          </div>
          <div className="image-container">
            <Image src={partner3} height={40} alt="Partner" />
          </div>
          <div className="image-container">
            <Image src={partner4} height={40} alt="Partner" />
          </div>
          <div className="image-container">
            <Image src={partner5} height={30} alt="Partner" />
          </div>
          <div className="image-container">
            <Image src={partner6} height={30} alt="Partner" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}
