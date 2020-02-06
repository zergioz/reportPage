import React, { Component } from 'react'
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar'
import { Selection, SelectionMode } from 'office-ui-fabric-react/lib/utilities/selection'
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection'
import './Content.css'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

let  breadcrumbs = [
  {key:1, text: 'Home>', onClick: console.log('here')},
  {key:2, text: 'Reports>', onClick: console.log('here')},
  {key:3, text: 'J3>', onClick: console.log('here')},
  {key:4, text: 'J33>', onClick: console.log('here')},
  {key:5, text: 'CCIR', onClick: 5},
]

let createListItems = [
  {
    key: 'newItem',
    text: 'New',
    iconProps: { IconButton: {iconName: 'Add'} },
    subMenuProps: {
      items: [
        { key: 'emailMessage', text: 'Email message',  iconProps: { iconName: 'Add' } },
        { key: 'calendarEvent', text: 'Calendar event', iconProps: { iconName: 'Calendar' } }
      ]
    }
  },
  { 
    key: 'upload', 
    text: 'Upload', 
    iconProps: { iconName: 'Upload' }, 
    href: 'https://dev.office.com/fabric' 
  },{ 
    key: 'share', 
    text: 'Share', 
    iconProps: { iconName: 'Share' }, 
    onClick: () => console.log('Share') 
  },{ 
    key: 'download', 
    text: 'Download', 
    iconProps: { iconName: 'Download' }, 
    onClick: () => console.log('Download') 
  }
];
  

export default class Content extends Component {
    constructor() {
        super()

          this.state = {
            items: createListItems,
            selection: new Selection({onSelectionChanged: this._onSelectionChanged}),
            selectionMode: SelectionMode.multiple,
            canSelect: 'all',
            overflowProps : {ariaLabel: 'More commands'}
        }
        this.state.selection.setItems(this.state.items, false)
    }
    
    Body = ({groups, expanded, collapsed}) => (
      <div className="container">
        <Breadcrumb className="breadcrumbs" 
          items={breadcrumbs} 
          maxDisplayedItems={5}
        />
        <CommandBar isSearchBoxVisible={true} 
          items = {breadcrumbs} 
          overflowItems={breadcrumbs} 
          overflowButtonProps={this.createListItems} 
          farItems={createListItems} 
          ariaLabel="Use left and right arrow keys to navigate between commands" />
        <div className="selection">
        <MarqueeSelection selection={this.state} isEnabled={this.state === SelectionMode.multiple}/>
        </div>
      </div>
    )

    render() {
      return (
        <this.Body/>
      )
    } 
}
