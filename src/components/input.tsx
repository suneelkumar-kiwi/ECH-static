import React, { memo, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import EYEOPEN from '../assets/images/eye-open.svg';
import EYECLOSED from '../assets/images/eye-close.svg';
import { NUMBER } from '../constants/number';

function Input({
  fieldName,
  label,
  type,
  placeholder = '',
  disabled = false,
  maxLength = NUMBER.THIRTY,
  refValues = () => undefined,
  setValue = () => undefined,
  error,
  name,
  value,
  isLeftIcon = false,
  valuePattern = /^/,
  isOptional = false,
  iconType = '',
  icon = '',
  wrapperClass = '',
  innerClass = '',
  iconHeight = undefined,
  iconWidth = undefined,
  isPasswordError = false,
  clearErrors,
  ...rest
}: any) {
  const { t } = useTranslation();
  const [inputType, setInputType] = useState(type);

  const changeInputType = () => {
    setInputType((prevType: any) => (prevType === 'password' ? 'text' : 'password'));
  };

   const handleKeyDown = (e: any) => {
    if (
      e.key === 'Backspace'
      || e.key === 'Delete'
      || e.key === 'Tab'
      || e.key === 'Escape'
      || e.key === 'Enter'
      || e.key === 'ArrowLeft'
      || e.key === 'ArrowRight'
      || e.key === 'ArrowUp'
      || e.key === 'ArrowDown'
    ) {
      return false;
    }
    return true;
    // Any additional logic that you might want to add in the future
  };

  return (
    <Form.Group className={`form-group ${wrapperClass}`}>
      <Form.Label htmlFor={name}>
        {t(label)}
        {' '}
        {isOptional && <span>({t('OPTIONAL')})</span>}
      </Form.Label>
      {isPasswordError && (
      <div className={`passowrd-warning ${error?.toString() === 'MATCH' ? 'invalid' : ''}`}>
        {t('PASSWORD_HINT')}
      </div>
)}
      <Form.Control
        type={inputType}
        className={`${innerClass} form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        {...refValues(name)}
        {...rest}
        maxLength={maxLength.toString()}
        name={name}
        autoComplete="off"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(
            name,
            e.target.value.trimStart().replace(valuePattern, ''),
          );

          if (clearErrors) {
            clearErrors(fieldName ?? name);
          }
        }}
      />
      {type === 'password' && (
        <Image
          src={inputType === 'password' ? EYECLOSED : EYEOPEN}
          height={20}
          width={20}
          alt={inputType === 'password' ? 'Show' : 'Hide'}
          className="suffix-icon"
          onClick={changeInputType}
        />
      )}
      {icon && (
        <Image
          src={icon}
          height={iconHeight}
          width={iconWidth}
          alt="Location"
          className={iconType === 'prefix' ? 'prefix-icon' : 'suffix-icon'}
        />
      )}
      {error && error !== 'MATCH' && <Form.Control.Feedback type="invalid">{t(error?.toString())}</Form.Control.Feedback>}
    </Form.Group>
  );
}

export default memo(Input);
