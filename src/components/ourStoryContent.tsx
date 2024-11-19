import React from 'react';
import { useTranslation } from 'react-i18next';

function OurStoryContent(props: any) {
  const { t } = useTranslation();
  const { closeButton } = props;
  const handleBack = () => {
    closeButton(false);
  };
  return (
    <>
      <div className="static-content text-start">
        <p> {t('OUR_STORY_PARA_ONE')} </p>
        <p>  {t('OUR_STORY_PARA_TWO')} </p>
        <p> {t('OUR_STORY_PARA_THREE')} </p>
        <p> {t('OUR_STORY_PARA_FOUR')} </p>
        <p> {t('OUR_STORY_PARA_FIVE')} </p>
        <p> {t('OUR_STORY_PARA_SIX')} </p>
        <p> {t('OUR_STORY_PARA_SEVEN')} </p>
      </div>
    </>
  );
}

export default OurStoryContent;
