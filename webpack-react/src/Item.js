import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Item extends Component {
  render() {
    return (
      <Card className="Card">
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Complete" onClick={this.props.onComplete} />
          <FlatButton label="Edit" />
        </CardActions>
        <CardText expandable={true}>{this.props.children}</CardText>
      </Card>
    )
  }
}

export default Item
