
import React, {Component} from "react";
import ChatForm from "./ChatForm";
import "./Chat.css"


class Chat extends Component{
    
    constructor(props){
        super(props)
        this.APIKEY=process.env.REACT_APP_APIKEY
        const { Configuration, OpenAIApi } = require("openai");
        this.configuration = new Configuration({
        apiKey: this.APIKEY,
        });
        this.openai = new OpenAIApi(this.configuration);
        this.state={input:"this is a test", res:"", loading:false}
        this.addMessage=this.addMessage.bind(this)
        this.callAPI=this.callAPI.bind(this)

    }
    componentDidMount(){
        this.callAPI(this.state.input);
    }
    async callAPI(input){
       
        this.setState({loading:true})
        const response = await this.openai.createCompletion({
            model: "text-davinci-003",
            prompt: input,
            temperature: 0.9,
            max_tokens: 500,
          }
        );
        let answer=response.data.choices[0].text
        console.log(answer)
        this.setState({res: answer, loading:false})
    }
    addMessage(input){
        this.setState({input:input})

    }
   
    

    render(){
        return (
            <div className="Chat">
              <h1>
                Chat with me 
                </h1>  
                <div class="imessage">
                    <p class="from-them">{this.state.input}</p>
                    <p class="from-me">{this.state.loading ? "..." : this.state.res}</p>
                    
                </div>
            <ChatForm addMessage={this.addMessage} getAnswer={this.callAPI}/>
            
                         
            </div>
          );
    }
  
}

export default Chat;