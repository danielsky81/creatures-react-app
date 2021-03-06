import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            creatures: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ creatures: users }))
    }

    handleChange = e => this.setState({searchField: e.target.value});

    render() {
        const { creatures, searchField } = this.state;
        const filterCreatures = creatures.filter(creature => creature.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
            <h1>Robots Universum</h1>
                <SearchBox
                    placeholder="search creatures"
                    handleChange={this.handleChange}
                >
                </SearchBox>
                <CardList creatures={filterCreatures}></CardList>    
            </div>
        );
    }
}

export default App;
