import { Component } from "react";

interface TextTaskProps {
    
}

interface TextTaskState {
    text: Array<JSX.Element | string> | string ;
}   



export class TextTask extends Component<TextTaskProps, TextTaskState> {

    state: TextTaskState = {
        text: 'bob' 
    }

    componentDidMount(){
        const text ="Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32. is simply dummy text of the printing and typesetting industry. L centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".split("");
        // console.log(text);

        let content = [];
        for(let i = 0; i < text.length - 1; i++) {
         if(i % 300 === 0) {
            content.push(<div className="photo"><hr/><img src='https://wallpaperaccess.com/full/1959300.jpg'/><hr/></div>);              
         }else {
            content.push(text[i]);
         }; 
        }
        
        this.setState({
            text: content,
        });
    }

    render(){
        return (
            <div className="card">
                <div className="card-main">
                    {this.state.text}
                </div>  
            </div>
        )
    }
}