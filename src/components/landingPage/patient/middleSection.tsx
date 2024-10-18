import {
  forwardArrow,
  landingHCP,
  landingSession,
  starFilled,
  verified,
} from '../../../utils/icons';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CustomTooltip from '../../cutomTooltip';
import { doctorsList } from '../../../constants/static';
import { NUMBER } from '../../../constants/number';
import Slider from 'react-slick';

export default function MiddleSection() {
  const { t } = useTranslation();

  const doctorList = doctorsList;

  const signupButton = () => (
    <div className="btn-space">
      <CustomTooltip placement="bottom" value={t('UNDER_CONS_TEXT')}>
        <Button variant="primary" size="lg">
          {t('SIGNUP_AS_PATIENT')}
          <Image src={forwardArrow} width={20} height={20} alt="Arrow" />
        </Button>
      </CustomTooltip>
    </div>
  );

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
        breakpoint: 10000,
        settings: 'unslick',
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
    <>
      <div className="section-with-image">
        <div className="image-container large-image">
          <Image
            src={landingHCP}
            width={764}
            height={569}
            alt="HCP"
            className="hcp-image"
          />
        </div>
        <div className="content">
          <h5 className="section-sub-title">{t('SEARCH_FOR_BEST')}</h5>
          <h2 className="section-title">
            <span>{t('HEALTHCARE_PROVIDERS')}</span>
          </h2>
          <ul className="check-list">
            <li>{t('SEARCH_FOR_VERIFIED')}</li>
            <li>{t('SEARCH_FOR_MODERN')}</li>
            <li>{t('BOOK_ONLINE_CONSULTATION')}</li>
          </ul>
          {signupButton()}
        </div>
      </div>
      <div className="section-with-image">
        <div className="content">
          <h5 className="section-sub-title">{t('PATIENT_CAN_BOOK_FOR')}</h5>
          <h2 className="section-title">
            <span>{t('ONLINE_SESSIONS')}</span>
          </h2>
          <ul className="check-list">
            <li>{t('CREATE_VERIFIED_PROFILE')}</li>
            <li>{t('ENHANCED_COMMUNICATION')}</li>
            <li>{t('BOOK_ONLINE_CONSULTATION')}</li>
            <li>{t('SHARE_FILES_AND_MORE')}</li>
          </ul>
          {signupButton()}
        </div>
        <div className="image-container me-0 order-mob1">
          <Image
            src={landingSession}
            width={664}
            height={600}
            alt="Video Session"
            className="video-session"
          />
        </div>
      </div>
      <div className="section-with-list">
        <h2 className="section-title">
          {t('ACCESS_TO_WORLD_CLASS')} <span>{t('HEALTHCARE_PROVIDERS')}</span>
        </h2>
        <p>{t('WE_CONNECT_AND_PROVIDE_TEXT')}</p>
        <div className="slider-container doctors-list">
          <Slider {...settings}>
            {doctorList.map((item: any) => (
              <div className="slider-card" key={item.id + NUMBER.ZERO}>
                <div className="card-image">
                  <Image
                    className="user-image"
                    src={item?.image}
                    height={160}
                    width={160}
                    alt="User"
                  />
                  <div className="verify-image">
                    <Image src={verified} height={28} width={28} alt="Verify" />
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-title">{item?.name}</div>
                  <div className="card-text">
                    {item?.degination} | {item?.experience}
                  </div>
                  <div className="heading-with-btn">
                    <span className="rating">
                      <Image
                        className="icon"
                        src={starFilled}
                        height={16}
                        width={15}
                        alt="Star"
                      />{' '}
                      {item?.star}
                    </span>
                    <Image
                      src={forwardArrow}
                      height={20}
                      width={20}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="btn-space">
          <CustomTooltip placement="bottom" value={t('UNDER_CONS_TEXT')}>
            <Button variant="primary" size="lg">
              {t('BOOK_APPOINTMENT_NOW')}
              <Image src={forwardArrow} width={20} height={20} alt="Arrow" />
            </Button>
          </CustomTooltip>
        </div>
      </div>
    </>
  );
}
