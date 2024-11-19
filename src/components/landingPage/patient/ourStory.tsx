
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { scrollToBottomOfSection } from '../../helpers/helper';
import { forwardArrow, landingStory } from '../../../utils/icons';
import { Image } from 'react-bootstrap';
import OurStoryModal from '../../ourStoryModal';
import { BOOLEAN } from '../../../constants/static';

export default function OurStory() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const { t } = useTranslation();
  const [ourStoryView, setOurStoryView] = useState(BOOLEAN.FALSE);
  const onOurStoryView = (status: boolean) => setOurStoryView(status);

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
          <span> {t('OUR_STORY_PARA_ONE')} </span>
        </p>
        <div className="btn-space mt-0">
          <button onClick={() => onOurStoryView(BOOLEAN.TRUE)} type="button" className="btn btn-primary btn-lg"> {t('READ_MORE')} <Image src={forwardArrow} width={20} height={20} alt="Arrow" /> </button>
        </div>
      </div>
      <OurStoryModal onShow={onOurStoryView}
        show={ourStoryView}
        t={t} />
    </div>
  );
}
