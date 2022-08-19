import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { InputContainer, Input,Icon } from "./search-bar.styles";


const defaultValue = ''

const SearchBar = () => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { value } = event.target;
        setInputValue(value)
        console.log()
    }

    const navigateHandler = () => {
        if(inputValue)
        navigate({
            pathname: "search",
            search: `name=${inputValue}`,
        })
        setInputValue('')
    }
        ;

    return (
        
        <InputContainer>
                <Icon icon={faMagnifyingGlass} onClick={navigateHandler} />
                <Input type="text" value={inputValue} onChange={handleChange} placeholder="Search"/> 
    </InputContainer>
        
    );
}
 
export default SearchBar;