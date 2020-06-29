import React, { Component } from 'react'
import {PropTypes as SearchSting} from 'prop-types';
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox'
import './NavBar.css'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      onChange: SearchSting.string,
      onSearch: SearchSting.string,
    };
  }
  
  handleSearch = e => {
    console.log(e);    
  }

  TopBar = ({onChange, onSearch}) => (
      <div className="NavBar">
        <div className="logo ms-font-xl">
          <strong>J55 Country Dashboard</strong>
        </div>
        <div className="searchbox">
          <SearchBox labelText="Search"  onChange={this.handleSearch}/>
        </div>
      </div>
  )
      
    render() {
        return (
            <this.TopBar></this.TopBar>
            )
    }     
}
