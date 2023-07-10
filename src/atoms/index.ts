import { theme } from 'antd';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import LIGHT_THEME from '../../public/theme/light-theme.json';
import DARK_THEME from '../../public/theme/dark-theme.json';

const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'mingjie-personal-space', // this key is using to store data in local storage
  storage: localStorage, // configure which storage will be used to store the data
  converter: JSON, // configure how values will be serialized/deserialized in storage
});

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