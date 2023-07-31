import { useRecoilState } from 'recoil';
import { themeAtom } from '../../atoms';
import './style.css';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`wrapper ${theme}`}>
      <div className="container" onClick={toggleTheme}>
        <div className="circle">
          <div className="cloud"></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggleButton;
