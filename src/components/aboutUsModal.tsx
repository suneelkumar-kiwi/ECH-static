import React from 'react';
import AboutUsContent from './aboutUsContent';
import ModalWrapper from '../modalWrapper';

function AboutUsModal(props: any) {
  const { show, onShow, t } = props;

  return (
    <ModalWrapper
      modalClassName="extra-large-modal terms-service"
      show={show}
      onClose={onShow}
      title={t('ABOUT_US')}
      noIcon={false}
      closeButton={true}
    >
      <AboutUsContent closeButton={onShow} />
    </ModalWrapper>
  );
}

export default AboutUsModal;
