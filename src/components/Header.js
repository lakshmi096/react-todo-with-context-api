import React from 'react';
import { Container } from "reactstrap";

import ToggleTheme from './ToggleTheme';
// import SelectLanguage from "./SelectLanguage";

const Header = ({theme, toggleTheme }) => {
    return(
        <Container fluid>
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            {/* <SelectLanguage/> */}
        </Container>
    )

}

export default Header;
