import localFont from 'next/font/local';
import { ChildrenT } from '../../constants/types';

// FONT IMPORTS
const suicideSquadFont = localFont({ src: '../../../public/fonts/suicideSquadFont.ttf' });

export const SuicideSquadFontWrapper = ({ children }: ChildrenT) => (
  <main className={suicideSquadFont.className}>
    {children}
  </main>
);
