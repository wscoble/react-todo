import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Item extends Component {
  render() {
    let actions = this.props.isComplete ? '' : (
      <CardActions>
        <FlatButton label="Complete" onClick={this.props.onComplete} />
        <FlatButton label="Edit" />
      </CardActions>
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
