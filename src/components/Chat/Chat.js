import React from "react";

import './Chat.css';

import Message from "../Message"

class Chat extends React.Component{
    state = {
        messages:[],
        messageInput:''
    };


    changeInputMessage = (event) =>{
        this.setState({messageInput: event.target.value});
    }

    sendMessageOnEnter = (event) =>{
        
        if(event.key === 'Enter'){
            this.setState(({ messages, messageInput }) => ({
                messages: [...messages, { text: messageInput }],
                messageInput: ''
            }));
        }
        
    }

    render(){
        const { messages, messageInput } = this.state;

        return(
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {messages.map((item, index) => (
                            <Message 
                                key={`${index}`} 
                                text={item.text} 
                            />
                        ))}
                    </div>
                </div>
                <input 
                    className="input-message" 
                    type="text" 
                    
                    onChange={this.changeInputMessage} 
                    onKeyPress={this.sendMessageOnEnter} 
                    value={messageInput}
                />
            </div>
        )
    }
}

export default Chat;