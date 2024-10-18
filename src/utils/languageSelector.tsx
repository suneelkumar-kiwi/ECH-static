import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  // { value: 'ar', label: 'Arabic' },
  { value: 'es', label: 'Spanish' }
];

const LanguageSelector = () => {
  const [lang, setLang] = useState(() => sessionStorage.getItem('language') ?? 'en');

  const onLanguageChange = (selectedOption: { value: string; label: string }) => {
    setLang(selectedOption.value);
    if (selectedOption.value === 'ar') {
      document.body.classList.add('lang-ar');
    } else {
      document.body.classList.remove('lang-ar');
    }
    if (selectedOption.value === 'es') {
      document.body.classList.add('lang-es');
    } else {
      document.body.classList.remove('lang-es');
    }
  };

  useEffect(() => {
    sessionStorage.setItem('language', lang);
    i18next.changeLanguage(lang ?? 'en');
    if (sessionStorage.getItem('language') === 'ar') {
      document.body.classList.add('lang-ar');
    }
  }, [lang]);

  return (
    <div className="language-select">
      <Select
        options={LANGUAGE_OPTIONS}
        onChange={(selectedOption:any) => onLanguageChange(selectedOption)}
        value={LANGUAGE_OPTIONS.find((option: { value: string; label: string }) => option.value === lang)}
        className="custom-react-select"
        classNamePrefix="react-custom-select"
        menuPlacement="auto"
        isSearchable={false}
      />
      <ul className="choose-language-mobile d-none">
        {LANGUAGE_OPTIONS.map((item) => (
          <li className={`${lang === item.value ? 'active' : ''}`} onClick={() => onLanguageChange(item)} key={item.value}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
