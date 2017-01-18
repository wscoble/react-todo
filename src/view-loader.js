import FormWidget from './views/form'
import ListWidget from './views/list'

let formElement = document.getElementById('form-widget')
if (formElement) {
  ReactDOM.render(React.createElement(FormWidget, {}), formElement)
}

let listElement = document.getElementById('list-widget')
if (listElement) {
  ReactDOM.render(React.createElement(ListWidget, {}), listElement)
}
