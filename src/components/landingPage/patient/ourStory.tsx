
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
    <div className="section-with-image section-with-image-new" id="our-story">
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
        <p className="medium-text">
          {t('OUR_STORY_PARA_ONE')}<br></br>
          {t('OUR_STORY_PARA_TWO')}<br></br>
          {t('OUR_STORY_PARA_THREE')}<br></br>
          {t('OUR_STORY_PARA_FOUR')}<br></br>
          {t('OUR_STORY_PARA_FIVE')}<br></br>
          {t('OUR_STORY_PARA_SIX')}
        </p>
      </div>
    </div>
  );
}
