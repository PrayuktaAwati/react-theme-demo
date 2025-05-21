import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import './App.css';

const Content = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container`}>
      <button onClick={toggleTheme} className="toggle-button">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
	  <div className={`text-content ${theme}`}>
        <h1>Theming Example</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
	  </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Content />
  </ThemeProvider>
);

export default App;
