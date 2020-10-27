import React from 'react'
import './App.css';
import { CardList } from './components/card-list/CardList'
import { Search } from './components/search/Search'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { filter: '' }
  }

  componentDidMount() {
  }

  onChange(e) {
    this.setState({ filter: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder="search monster" onChange={e => this.onChange(e)} />
        <CardList filter={this.state.filter} />
        <div>
        </div>
      </div>
    )
  }
}
