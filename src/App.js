import React from 'react';
import './App.css';
import { Component } from 'react';
import data from './Json/movies-list.json';
import { CardList } from './Components/Card-List/card-list.component';
import { SearchBox } from './Components/Search-box/search-box.component.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: (data),
      searchfield: '',
      nav_bar: 'block',
      nav_tab: 'none'
    };
  }

  HandleChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  shownav = () => {
    this.setState({nav_bar: 'none'})
    this.setState({nav_tab: 'block'})
  }

  hidenav = () => {
    this.setState({nav_bar: 'block'})
    this.setState({nav_tab: 'none'})
  }

  render () {
    const { movies, searchfield } = this.state;
    const filtered = movies.filter(
      movies => movies.title.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className='App'>
        <div className='tab' style={{ display: this.state.nav_tab}}>
          <img className='tab_logo' src="https://firebasestorage.googleapis.com/v0/b/web-practices-marvel-1.appspot.com/o/Marvel_Logo.jpg?alt=media&token=27218d3e-c111-44da-8edb-74746a985fb4" alt="Logo"/>

          <div className='tab-search-box'>
            <SearchBox
              search='search-2'
              placeholder='Search Movie'
              handlechange={this.HandleChange} 
            />

            <button className='search-btn' onClick={this.hidenav}>
              Search
            </button>
          </div>
        </div>

        <div className='screen' style={{ display: this.state.nav_bar}}>
          <div className='nav-bar'>
            <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/web-practices-marvel-1.appspot.com/o/Marvel_Logo.jpg?alt=media&token=27218d3e-c111-44da-8edb-74746a985fb4" alt="Logo"/>
              
            <SearchBox
              search='search'
              placeholder='Search Movie'
              handlechange={this.HandleChange} 
            />

            <button className='menu-icon' onClick={this.shownav}>
              <i className='fa fa-bars' />
            </button>

          </div>

          <CardList movies={filtered} />
        </div>
      </div>
    )
  } 
}

export default App;
