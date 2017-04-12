import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
injectTapEventPlugin();

const iconStyles = {
  mediumIcon: {
    width: 48,
    height: 48,
  }
};

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
      isEditing: false,
      title: this.props.title,
      subtitle: this.props.subtitle,
      content: this.props.children
    }
  }

  onEdit() {
    this.setState({isExpanded: true, isEditing: true})
  }

  onSave() {
    this.setState({isEditing: false})
    this.props.onModify({
      title: this.state.title,
      subtitle: this.state.subtitle,
      content: this.state.content
    })
  }

  onCancel() {
    this.setState({isEditing: false})
  }

  render() {
    let modifyButton = ''
    if (this.props.isEditable) {
      modifyButton = this.state.isEditing ? ([
        <FlatButton key={0} label="Save" onClick={() => this.onSave()} />,
        <FlatButton key={1} label="Cancel" onClick={() => this.onCancel()} />
      ]) : (
        <FlatButton label="Edit" onClick={() => this.onEdit()} />
      )
    }

    let completeButton = this.state.isEditing ? '' : (
      <FlatButton label="Complete" onClick={this.props.onComplete} />
    )

    let actions = this.props.isComplete ? '' : (
      <CardActions>
        {completeButton}
        {modifyButton}
        <IconButton style={iconStyles} onClick={this.props.onDelete}><Delete /></IconButton>
      </CardActions>
    )

    let cardText = this.state.isEditing ? (
      <div>
        <TextField
          name={'Title'}
          value={this.state.title}
          onChange={(e, v) => this.setState({title: v})}
          fullWidth={true} />

        <TextField
          name={'Subtitle'}
          value={this.state.subtitle}
          onChange={(e, v) => this.setState({subtitle: v})}
          fullWidth={true} />

        <TextField
          name={'Content'}
          value={this.state.content}
          onChange={(e, v) => this.setState({content: v})}
          fullWidth={true} />
      </div>
    ) : (
      <div>{this.props.children}</div>
    )

    return (
      <Card
        className="Card"
        expanded={this.state.isExpanded}
        onExpandChange={s => this.setState({isExpanded: s})}>
          <CardHeader
            title={this.props.title}
            subtitle={this.props.subtitle}
            actAsExpander={true}
            showExpandableButton={true}
          />
          {actions}
          <CardText expandable={true}>{cardText}</CardText>
      </Card>
    )
  }
}

export default Item
