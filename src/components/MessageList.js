import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import App from '../App.css'

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    let app = this.props.db.database().ref('users');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let messagesVal = values;
    let users = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        messages: users
      });
  }

  
  render() {
    let messageNodes = this.state.messages.map((users) => {
      return (
        <div className="card">
          <div className="card-content">
            <div className="inline">
            <Message message = {users.soname} />&nbsp;
            <Message message = {users.name} />&nbsp;
            <Message message = {users.patronymic} />&nbsp;
            (<Message message = {users.phone} />)
            </div>
          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList