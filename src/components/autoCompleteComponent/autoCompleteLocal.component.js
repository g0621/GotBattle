import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchAllPlaces} from "../../actions/autoCompleteActions";
import {fetchBattleByPlace} from "../../actions/presentActions";

import './autocomplete.styles.css'

const AutoCompleteLocal = (props) => {
    const [state, setState] = useState({
        activeOption: 0,
        showOptions: false,
        userInput: '',
        filteredOptions: []
    });

    useEffect(() => {
        props.fetchAllPlaces();
    }, []);


    const onChange = (e) => {
        const initials = e.currentTarget.value;
        let options = props.allLocations;
        options = options.filter((option) =>
            option.toLowerCase().startsWith(initials.toLowerCase())
        )
        setState({
            activeOption: 0,
            showOptions: true,
            userInput: initials,
            filteredOptions: options
        })
    }

    const onClick = (e) => {
        props.fetchBattleByPlace(e.currentTarget.innerText);
        setState({
            activeOption: 0,
            showOptions: false,
            userInput: e.currentTarget.innerText,
            filteredOptions: []
        });
    };
    const onKeyDown = (e) => {
        const {activeOption, filteredOptions} = state;
        if (e.keyCode === 13) {
            props.fetchBattleByPlace(filteredOptions[activeOption]);
            setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption],
                filteredOptions: []
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

    const getOptionList = () => {
        const {activeOption, showOptions, userInput, filteredOptions} = state;
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
                    placeholder={'Search by location'}
                    className="search-box"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={state.userInput}
                />
                <input type="submit" value="" className="search-btn"/>
            </div>
            {getOptionList()}
        </React.Fragment>
    );
}

const mapStateToProps = combinedReducers => ({
    allLocations: combinedReducers.auto_complete_reducer.allLocations,
    filteredLocation: combinedReducers.auto_complete_reducer.filteredLocation,
})

export default connect(mapStateToProps, {
    fetchAllPlaces,
    fetchBattleByPlace
})(AutoCompleteLocal);
