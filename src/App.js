import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            creatures: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ creatures: users }))
    }

    render() {
        return (
            <div className="App">
            <CardList>
                {this.state.creatures.map(creature => <h1 key={ creature.id }>{ creature.name }</h1>)}
            </CardList>    
            </div>
        );
    }
}

export default App;
