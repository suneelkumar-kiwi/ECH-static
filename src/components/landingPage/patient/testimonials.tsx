import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

export default function Testimonials() {
  const { t } = useTranslation();
  const settings: any = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        // settings: 'unslick',
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section">
      <Container>
        <h2 className="section-title">
          {t('WHAT_OUR')} <span>{t('PATIENTS')}</span> {t('HAVE_TO_SAY')}
        </h2>
      </Container>
      <Slider {...settings}>
        <div className="testimonial-card">
          <div className="title">{t('JENNY_SMITH')}</div>
          <p>
            {t('JENNY_SMITH_TESTIMONIAL')}
          </p>
        </div>
        <div className="testimonial-card">
          <div className="title">{t('KIRA_S')}</div>
          <p>
            {t('KIRA_S_TESTIMONIAL')}
          </p>
        </div>
        <div className="testimonial-card">
          <div className="title">{t('WARREN_MCKINSEY')}</div>
          <p>
            {t('WARREN_MCKINSEY_TESTIMONIAL')}
          </p>
        </div>
      </Slider>
    </div>
  );
}
