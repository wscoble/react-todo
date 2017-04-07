import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let lists = {
  todo: [
    {
      isEditable: true,
      title: "Item 1",
      subtitle: "the first item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
               "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi." +
               "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque."+
               "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
    },
    {
      isEditable: true,
      title: "Item 2",
      subtitle: "the second item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
               "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi." +
               "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque."+
               "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
    },
    {
      isEditable: true,
      title: "Item 3",
      subtitle: "the third item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
               "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi." +
               "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque."+
               "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
    },
  ],
  done: []
}

ReactDOM.render(
  <MuiThemeProvider><App lists={lists} /></MuiThemeProvider>,
  document.getElementById('root')
);
