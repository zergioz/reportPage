import React, { Component } from 'react'
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar'
import { Selection, SelectionMode } from 'office-ui-fabric-react/lib/utilities/selection'
import './Content.css'
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Grid } from 'office-ui-fabric-react/lib/Grid';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';


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
      <div className="container" class="ms-Grid" dir="ltr">
        <Breadcrumb className="breadcrumbs" 
          items={breadcrumbs} 
          maxDisplayedItems={5}
        />
        <div style={{ boxShadow: Depths.depth8 }}>
          <CommandBar isSearchBoxVisible={true} 
            items = {breadcrumbs} 
            overflowItems={breadcrumbs} 
            overflowButtonProps={this.createListItems} 
            farItems={createListItems} 
            ariaLabel="Use left and right arrow keys to navigate between commands"/>
        </div>
        <DefaultButton
          text='See Button'
          primary={ true }
          href='#/components/button'
        />
        <div class="ms-Grid" dir="ltr">
          <div class="ms-Grid-row" style={{Grid}}>
            <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2"> <DatePicker /></div>
            <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10">B</div>
          </div>
        </div>
      </div>  
    )

    render() {
      return (
        <this.Body/>
      )
    } 
}
