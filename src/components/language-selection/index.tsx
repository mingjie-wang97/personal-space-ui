import React from 'react';
import { Select } from 'antd';
import { useRecoilState } from 'recoil';
import { languageAtom } from '../../atoms';

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'french', label: 'French' },
  { value: 'korean', label: 'Korean' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'spanish', label: 'Spanish' },
];

const LanguageSelection = () => {
  const [language, setLanguage] = useRecoilState(languageAtom);

  const handleChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <Select
      defaultValue={language}
      onChange={handleChange}
      options={languageOptions}
    />
  );
};

export default LanguageSelection;
