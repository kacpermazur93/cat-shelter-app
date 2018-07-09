import React from 'react';

class SearchBar extends React.Component {

    handleInput = (e) => {
        if (typeof this.props.input === 'function') {
            this.props.input(e);
        }
    }

    handleCheckbox = () => {
        if (typeof this.props.checkbox === 'function') {
            this.props.checkbox();
        }
    }

    render() {
        return <form>
            <p>
                <input type='text'
                       className='text'
                       placeholder='Search...'
                       onChange={e => this.handleInput(e)}/>
            </p>
            <p>
                <label>
                <input type='checkbox'
                       className='checkbox'
                       onChange={this.handleCheckbox}/>
                Only show cats that likes kids</label>
            </p>
        </form>
    }
}


export default SearchBar;