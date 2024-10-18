/**
 * The `ModalWrapper` function is a React component that renders a modal with a title, close button,
 * and content.
 * @param {ModalWrapperProps}  - - `show`: a boolean value indicating whether the modal should be shown
 * or not
 * @returns The ModalWrapper component is being returned.
 */
import React, { useEffect, useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import { t } from 'i18next';
import { closeWhiteIcon, forwardArrow } from './utils/icons';

function ModalWrapper(props: Readonly<any>) {
  const {
    show,
    onClose,
    title = '',
    subTitle = '',
    modalClassName = '',
    children,
    innerBodyClass = '',
    noIcon = true,
    isCentered = false,
    handleBack = () => {},
    showBackButton = false,
    size = 'lg',
    headerClassName,
    filterValue,
    titleClassName
  } = props;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Modal
      centered={isCentered}
      className={modalClassName}
      show={show}
      onHide={() => (noIcon || isMobile) && onClose(false)}
      backdrop={noIcon || isMobile ? true : 'static'}
      size={size}
    >
      <Modal.Header>
        <Image src={closeWhiteIcon} className={`custom-close ${headerClassName}`} onClick={() => onClose(false)} alt="close icon" />
        <span className="d-none modal-cancle-btn" onClick={() => onClose(false)}> {t('CANCEL')} </span>
        {showBackButton && (
          <Button className="back-modal-btn d-none-lg" onClick={() => handleBack()}>
            <Image src={forwardArrow} alt="Back Arrow Icon" />
          </Button>
        )}
        {subTitle && <span className="modal-sub-title">{subTitle}</span>}
        <Modal.Title className={titleClassName ?? ''}>{t(title) || ''} {filterValue && <span className="filter-value">{filterValue}</span>}
        </Modal.Title>

      </Modal.Header>
      <Modal.Body className={innerBodyClass}>{children}</Modal.Body>
    </Modal>
  );
}

export default ModalWrapper;
