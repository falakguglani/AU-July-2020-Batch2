import React from 'react';

export default class OptionSingular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleEditOption: false
        }
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.optionText} disabled={!this.state.handleEditOption}>
                </input>
                <button
                    onClick={(e) => {
                        this.props.handleDeleteOption(this.props.optionText)
                    }
                    }
                >
                    Remove
            </button>
                <button
                    onClick={(e) => {
                        this.setState((prevState) => ({ handleEditOption: !prevState.handleEditOption }));
                    }
                    }
                >
                    {!this.state.handleEditOption?"Edit":"Done"}
            </button>
            </div>
        )
    };
}
