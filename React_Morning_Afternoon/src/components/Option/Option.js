import React from 'react';
import OptionSingular from './../OptionSingular/OptionSingular';

const Option = (props) => {
    return (
        <div>
            {props.options.length == 0 && (<p>Please add data</p>)}

            {
                props.options.map((value) => (
                    <OptionSingular
                        key={value}
                        optionText={value}
                        handleDeleteOption={props.handleDeleteOption}
                        handleAddOption={props.handleAddOption}
                    />
                ))
            }
            <button
                onClick={props.handleRemoveAll} disabled={props.options.length == 0}>
                RemoveAll
        </button>
        </div>

    );
};

export default Option;