import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globals';
import "./App.css";
// import SelectLanguage from "./components/SelectLanguage";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import CheckList from "./assets/checklist.png"
import TodoContextProvider from "./context/themeContext/TodoContextProvider";
import Header from "./components/Header";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        {/* <SelectLanguage/> */}
        <TodoContextProvider>
          <Container fluid>
            <h1 className="heading">
              <img src={CheckList} alt="checklist"/>
              <span>Todo list with Context API</span>
            </h1>        
            <TodoForm />
            <Todos/>
          </Container>
        </TodoContextProvider>
      </>
    </ThemeProvider>



  );
}

export default App;
