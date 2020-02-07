import React, { Component } from 'react'
import { PropTypes as Menu } from 'prop-types';
import { Nav } from 'office-ui-fabric-react/lib/Nav'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import './SideBar.css'
initializeIcons(/* optional base url */);


export default class SideBar extends Component {
    
    constructor(props) {
        super(props);
        this.handleMenu = this.handleMenu.bind(this);
        this.state = { 
            groups:  [{
                links: [{
                    name: 'Home',
                    url: 'http://example.com',
                    className: 'linkBar',
                    links: [{
                        name: 'Activity',
                        url: 'http://domain.com',
                        icon: 'Fingerprint',
                    },{
                        name: 'Report',
                        url: 'http://domain.com',
                        icon: 'BarChartHorizontal',
                    }],
                isExpanded: false,
                },{
                    name: 'Documents',
                    url: 'http://domain.com',
                    isExpanded: true,
                    icon: 'DocumentSet',
                },{
                    name: 'Pages',
                    url: 'http://domain.com',
                    icon: 'Document',
                },{
                    name: 'Notebook',
                    url: 'http://domain.com',
                    icon: 'EditNote',
                },{
                    name: 'Other',
                    url: 'http://domain.com',
                    icon: 'SharepointAppIcon16',
                },{
                    name: 'Edit Link',
                    url: 'http://domain.com',
                    iconClassName: 'ms-Icon--Edit',
                    icon: 'Fingerprint',
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
