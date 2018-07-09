import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss'

import SearchBar from './search-bar.jsx';
import CatTable from './cat-table.jsx';


const kitties = [
    {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
    {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
    {category: "male", age: "2", likesKids: false, name: "Grumpy"},
    {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
    {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
    {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            likesKids: false
        }
    }

    handleNameSearch = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }

    handleLikesKids = () => {
        this.setState({
            likesKids: !this.state.likesKids
        })
    }


    render() {
        return <div >
            <h1>Cat Shelter App</h1>
            <SearchBar input={this.handleNameSearch}
                       checkbox={this.handleLikesKids}/>
            <CatTable kitties={this.props.kitties}
                      filterText={this.state.filterText}
                      likesKids={this.state.likesKids}/>
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('app')
    );
});