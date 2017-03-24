import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class EditableItem extends Component {
  render() {
    let modifyButton = this.props.isEditable ? (
      <FlatButton label="Save" onClick={this.props.onModify} />
    ) : (
      <FlatButton label="Edit" onClick={this.props.onModify} />
    )

    let actions = this.props.isComplete ? '' : (
      <CardActions>
        <FlatButton label="Complete" onClick={this.props.onComplete} />
        {modifyButton}
      </CardActions>
    )

    let cardText = this.props.isEditable ? (
      <div>
      <TextField hintText={this.props.title} />
      <TextField hintText={this.props.subtitle} />
      <TextField hintText={this.props.children} />
      </div>
    ) : (
      <div>{this.props.children}</div>
    )

    return (
      <Card className="Card">
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          actAsExpander={true}
          showExpandableButton={true}
        />
      {actions}
        <CardText expandable={true}>{this.props.children}</CardText>
      </Card>
    )
  }
}

export default Item
