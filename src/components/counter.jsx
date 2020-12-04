import React,{ Component} from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1'],
        imageUrl: 'https://i.picsum.photos/id/910/200/200.jpg?hmac=5y7FBcwrEQLaT1hO3VufjbQNxx_eg-znDlA1JclTpDQ'
    }
    style = {
        fontSize: 30
    }
    // RenderTags(){
    //     if(this.state.tags.length === 0) return <p>there are no tag</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }
    handleIncrement(arg){
        console.log("Button Clicked!",arg)
    }
    render(){
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt="images show"/>
                <span style={this.style} className={this.GetClass()}> { this.Change()}</span>
                <button onClick={() => {this.handleIncrement({id:1})}} className="btn btn-primary">Increment</button>
                {/* {this.RenderTags()} */}
                {this.state.tags.length === 0 ? 'there are no tag' : <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> }
               
            </React.Fragment>
        
        )
    }
    Change(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
    GetClass(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;
