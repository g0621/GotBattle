import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    fetchAllPlaces,
    fetchPlacesStartWith,
    emptyFilteredLocations,
} from "../../actions/autoCompleteActions";
import {fetchBattleByPlace} from "../../actions/presentActions";

import './autocomplete.styles.css'

const AutoCompleteServerComponent = (props) => {
    const [state, setState] = useState({
        activeOption: 0,
        showOptions: false,
        userInput: ''
    });

    useEffect(() => {
        props.fetchAllPlaces();
    }, []);


    const onChange2 = (e) => {
        const initials = e.currentTarget.value;
        setState({activeOption: 0, showOptions: true, userInput: initials})
        props.fetchPlacesStartWith(initials);
    }

    const onClick = (e) => {
        props.emptyFilteredLocations();
        props.fetchBattleByPlace(e.currentTarget.innerText);
        setState({
            activeOption: 0,
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
    };
    const onKeyDown = (e) => {
        const {activeOption} = state;
        const filteredOptions = props.filteredLocation;
        if (e.keyCode === 13) {
            props.fetchBattleByPlace(filteredOptions[activeOption]);
            setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            setState({...state, activeOption: activeOption - 1});
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            setState({...state, activeOption: activeOption + 1});
        }
    };

    const getOptionList2 = () => {
        const {activeOption, showOptions, userInput} = state;
        const filteredOptions = props.filteredLocation;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={optionName} onClick={onClick}>
                                    {optionName}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                optionList = (
                    <ul className={'options'}>
                        <li>No Options</li>
                    </ul>
                );
            }
        }
        return optionList;
    }


    return (
        <React.Fragment>
            <div className="search">
                <input
                    type="text"
                    className="search-box"
                    onChange={onChange2}
                    onKeyDown={onKeyDown}
                    value={state.userInput}
                />
                <input type="submit" value="" className="search-btn"/>
            </div>
            {getOptionList2()}
        </React.Fragment>
    );
}

const mapStateToProps = combinedReducers => ({
    allLocations: combinedReducers.auto_complete_reducer.allLocations,
    filteredLocation: combinedReducers.auto_complete_reducer.filteredLocation,
})

export default connect(mapStateToProps, {
    fetchAllPlaces,
    fetchPlacesStartWith,
    emptyFilteredLocations,
    fetchBattleByPlace
})(AutoCompleteServerComponent);
