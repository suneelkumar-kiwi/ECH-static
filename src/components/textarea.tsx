import React from 'react';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NUMBER } from '../constants/number';

function Textarea({
  clearErrors,
  label,
  placeholder = '',
  disabled = false,
  maxLength = NUMBER.TWO_FIFTY,
  refValues = () => undefined,
  setValue = () => undefined,
  error,
  name,
  isOptional = false,
  rows = NUMBER.THREE,
  innerClass
}: any) {
  const { t } = useTranslation();
  const { onChange } = refValues(name);

  return (
    <Form.Group className={`form-group ${innerClass}`}>
      <Form.Label htmlFor={name}>
        {label}
        {' '}
        {isOptional && <span>(Optional)</span>}
      </Form.Label>
      <Form.Control
        as="textarea"
        rows={rows}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        {...refValues(name)}
        maxLength={maxLength.toString()}
        name={name}
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setValue(name, e.target.value.trimStart());
          onChange(e);
          if (clearErrors) {
            clearErrors(name);
          }
        }}
      />
      {error && <Form.Control.Feedback type="invalid">{t(error?.toString())}</Form.Control.Feedback>}
    </Form.Group>
  );
}

export default Textarea;
