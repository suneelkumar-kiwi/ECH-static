import React from 'react';
import ModalWrapper from '../modalWrapper';
import OurStoryContent from './ourStoryContent';

function OurStoryModal(props: any) {
  const { show, onShow, t } = props;

  return (
    <ModalWrapper
      modalClassName="team-modal"
      show={show}
      onClose={onShow}
      title={`${t('OUR')} ${t('STORY')}`}
      noIcon={false}
      headerClassName="close-btn-absolute"
      closeButton={true}
    >
      <OurStoryContent closeButton={onShow} />
    </ModalWrapper>
  );
}

export default OurStoryModal;
