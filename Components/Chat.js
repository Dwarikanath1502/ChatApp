import React, { Component } from 'react'
import {GiftedChat} from 'react-native-gifted-chat';
import Firebase from '../Firebase';

export default class Chat extends Component {

    state={
        messages: []
    }

    get user() {
        return{
            // name: this.props.navigation.state.params.name ,
            name: this.props.route.params.name,
            _id: Firebase.shared.uid
        };
    }


    componentDidMount(){
        Firebase.shared.on(message =>
            this.setState(previousState =>({
                messages: GiftedChat.append(previousState.messages , message)
            }))    
        );
    }

    render() {
        return (
           <GiftedChat  
                messages={this.state.messages}
                user = {this.user}
                onSend = {Firebase.shared.send}
           />
        )
    }
}
