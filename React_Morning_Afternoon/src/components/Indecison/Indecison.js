import React from 'react';
import './Indecison.module.css';
import Header from './../Header/Header';
import Option from './../Option/Option'
import AddOption from './../AddOption/AddOption';
import Subheader from './../Subheader/Subheader';

export default class Indecison extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    //LifeCycle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options)
                this.setState(() => ({ options }));
        }
        catch (e) {

        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {

    }
    //Lifecycle Methods-->Using local storage to keep items in the list
    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((value) => {
                return value != option;
            })
        }));
    }
    handleAddOption(option) {
        if (!option) {
            return "Please enter a valid text";
        }
        else if (this.state.options.indexOf(option) != -1) {
            return "Value Already present";
        }
        else {
            this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        }
    }

    handleEditOption = false;

    render() {
        const subtitle = `Add your list`;
        return (
            <div className="app-background">
                <Header
                    subtitle={subtitle}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <Subheader
                />
                <Option
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
