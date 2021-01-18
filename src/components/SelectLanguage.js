import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SelectLanguage = () => {

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="language">
            <DropdownToggle caret>
                Select Language
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Spanish</DropdownItem>
                <DropdownItem>French</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );

}

export default SelectLanguage;