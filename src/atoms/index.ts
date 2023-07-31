import { theme } from 'antd';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
// theme
import LIGHT_THEME from '../../public/theme/light-theme.json';
import DARK_THEME from '../../public/theme/dark-theme.json';
// language
import type { Locale } from 'antd/es/locale';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import frFR from 'antd/locale/fr_FR';
import koKR from 'antd/locale/ko_KR';
import jaJP from 'antd/locale/ja_JP';
import esES from 'antd/locale/es_ES';

const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'mingjie-personal-space', // this key is using to store data in local storage
  storage: localStorage, // configure which storage will be used to store the data
  converter: JSON, // configure how values will be serialized/deserialized in storage
});

/**
 * Theme State
 */
export const themeAtom = atom<string>({
  key: 'theme',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
});
export const themeValue = selector({
  key: 'themeValue',
  get: ({ get }) => {
    const themeState = get(themeAtom);
    switch (themeState) {
      case 'light':
        return LIGHT_THEME;
      case 'dark':
        return {
          ...DARK_THEME,
          algorithm: theme.darkAlgorithm,
        };
      default:
        return LIGHT_THEME;
    }
  },
});

/**
 * Language State
 */
export const languageAtom = atom<string>({
  key: 'language',
  default: 'english',
  effects_UNSTABLE: [persistAtom],
});
export const languageValue = selector({
  key: 'languageValue',
  get: ({ get }): Locale => {
    const languageState = get(languageAtom);
    switch (languageState) {
      case 'english':
        return enUS;
      case 'chinese':
        return zhCN;
      case 'french':
        return frFR;
      case 'korean':
        return koKR;
      case 'japanese':
        return jaJP;
      case 'spanish':
        return esES;
      default:
        return enUS;
    }
  },
});
