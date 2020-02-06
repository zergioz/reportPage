import React, { Component } from 'react'
import { PropTypes as Menu } from 'prop-types';
import { Nav } from 'office-ui-fabric-react/lib/Nav'

export default class SideBar extends Component {
    
    constructor(props) {
        super(props);
        this.handleMenu = this.handleMenu.bind(this);
        this.state = { 
            groups:  [{
                links: [{
                    name: 'Home',
                    url: 'http://example.com',
                    links: [{
                        name: 'Activity',
                        url: 'http://msn.com',
                    },{
                        name: 'News',
                        url: 'http://msn.com',
                    }],
                isExpanded: true,
                },{
                    name: 'Documents',
                    url: 'http://example.com',
                    isExpanded: true,
                },{
                    name: 'Pages',
                    url: 'http://msn.com',
                },{
                    name: 'Notebook',
                    url: 'http://msn.com',
                },{
                    name: 'Long Name Test for elipsis. Longer than 12em!',
                    url: 'http://example.com',
                },{
                    name: 'Edit Link',
                    url: 'http://example.com',
                    iconClassName: 'ms-Icon--Edit',
                },{
                    name: 'Edit',
                    url: '#',
                    icon: 'Edit',
                    onClick: () => {},
              }]
            }],
            expanded: Menu.string,
            collapsed: Menu.string,
        }
    }

    handleMenu = e => {
        console.log(e);
    }

    SideMenu = () => (
        <div className='SidebarMenu'>
            <Nav groups={this.state.groups}
                expandedStateText={this.state.expanded}
                collapsedStateText={this.state.collapsed}
            />
        </div>
    )
      
    render() {
        return (
            <this.SideMenu></this.SideMenu>
            )
    }     
}
