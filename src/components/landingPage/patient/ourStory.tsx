
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { scrollToBottomOfSection } from '../../helpers/helper';
import { landingStory } from '../../../utils/icons';
import { Image } from 'react-bootstrap';

export default function OurStory() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const { t } = useTranslation();

useEffect(() => {
  if (type) {
    scrollToBottomOfSection(type);
  }
}, [type]);

  return (
    <div className="section-with-image" id="our-story">
      <div className="image-container">
        <Image
          src={landingStory}
          width={444}
          height={444}
          alt="Brain"
          className="brain-image"
        />
      </div>
      <div className="content">
        <h2 className="section-title">
          {t('OUR')} <span>{t('STORY')}</span>
        </h2>
        <p className="large-text">
          {t('OUR_STORY_PARA_ONE')}
        </p>
        <p className="large-text">
          {t('OUR_STORY_PARA_TWO')}
        </p>
      </div>
    </div>
  );
}
