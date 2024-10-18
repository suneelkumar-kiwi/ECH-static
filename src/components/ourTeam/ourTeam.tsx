'use client';

import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import OurTeamModal from './ourTeamModal';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { BOOLEAN, teamMembers } from '../../constants/static';
import { scrollToBottomOfSection } from '../helpers/helper';
import { forwardArrow } from '../../utils/icons';
import { NUMBER } from '../../constants/number';
import Input from '../input';
import Textarea from '../textarea';
import CustomTooltip from '../cutomTooltip';

export default function OurTeam() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const { t } = useTranslation();
  const [ourTeamView, setOurTeamView] = useState(BOOLEAN.FALSE);
  const ourTeamViewClick = (status: boolean) => setOurTeamView(status);
  const [selectedMember, setSelectedMember] = useState<any>();

  const handleShow = (member: any) => {
    setSelectedMember(member);
    ourTeamViewClick(BOOLEAN.TRUE);
  };

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    shouldFocusError: false,
  });

  const onSubmitHandler = handleSubmit(async () => {
    /* TODO:  Will be use in future implementation.
    const payload = {
      full_name: data.full_name,
      email: data.email,
      description: data?.description,
    };
    */
    toast.success('Thank you! Your message has been submitted successfully.');
    reset();
  });

  useEffect(() => {
    if (type) {
      scrollToBottomOfSection(type);
    }
  }, [type]);

  return (
    <>
      <section className="team-section">
        <Container>
          <h2 className="section-title">
            {t('MEET_OUR')} <span>{t('TEAM')}</span>
          </h2>
          <p className="sub-title">{t('SUB_TITLE_TEAM')}</p>
          <Row>
            {teamMembers.map((member: any) => (
              <Col md={4} key={member.name}>
                <div className="team-card">
                  <div className="card-image">
                    <Image
                      src={member.image}
                      width={222}
                      height={222}
                      className="user-image"
                      alt={member.name}
                    />
                    <Button
                      variant="primary"
                      onClick={() => handleShow(member)}
                    >
                      {t('DETAILS')}
                      <Image
                        className="arrow-icon"
                        src={forwardArrow}
                        height={14}
                        width={14}
                        alt="Arrow"
                      />
                    </Button>
                  </div>
                  <h4 className="title">{member.name}</h4>
                  <p className="text">{member.role}</p>
                  <p className="des">{t(member.description)}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="contact-us-section" id="contact-us">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="section-title">
                {t('CONTACT')} <span>{t('US')}</span>
              </h2>
              <p className="sub-title">{t('SUB_TITLE_CONTACT')}</p>
            </Col>
            <Col md={6} className="text-end" id="contact-us">
              <Form className="contact-form" onSubmit={onSubmitHandler}>
                <Row>
                  <Col md={6}>
                    <Input
                      placeholder={t('FULL_NAME_COMING_SOON')}
                      type="text"
                      name="full_name"
                      label=""
                      refValues={register}
                      error={errors?.full_name?.message}
                      clearErrors={clearErrors}
                      disabled
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      placeholder={t('EMAIL_ADDRESS_COMING_SOON')}
                      type="text"
                      name="email"
                      label=""
                      refValues={register}
                      setValue={setValue}
                      error={errors?.email?.message}
                      clearErrors={clearErrors}
                      disabled
                    />
                  </Col>
                  <Col md={12}>
                    <Textarea
                      placeholder={t('YOUR_MESSAGE_PLACEHOLDER_COMING_SOON')}
                      label=""
                      refValues={register}
                      error={errors.description?.message}
                      name="description"
                      rows={NUMBER.FOUR}
                      clearErrors={clearErrors}
                      disabled
                    />
                  </Col>
                  <Col md={12} className="text-end">
                    <CustomTooltip
                      placement="bottom"
                      value={t('UNDER_CONS_TEXT')}
                    >
                      <Button variant="primary" size="lg">
                        {t('SUBMIT')}
                      </Button>
                    </CustomTooltip>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Health Care Modal */}
      <OurTeamModal
        onShow={ourTeamViewClick}
        show={ourTeamView}
        t={t}
        handleClose={ourTeamViewClick}
        selectedMember={selectedMember}
      />
    </>
  );
}
