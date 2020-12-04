Learning React From Udemy Note
===============================
 - Let's create an application called part1 and navigate to its directory.
 
    npx create-react-app part1
    
    cd part1
    
  - The application is run as follows
  
      npm start
      
  - By default, the application runs in browser localhost port 3000 with the address : 
  
      http://localhost:3000/
      
  - Boostrap install in project as follows
  
      npm i bootstrap
      
  - Import bootstrap in index.js of project as follows
  
      import 'bootstrap/dist/css/bootstrap.css';

----------------------------------------------
    - Create folder    
       - components
    - Create a file   
       - components/conter.jsx
       
 - Expression, Set Attributes, Styling Attributes, Loop, Conditional, Hnadling Event
   In counter.jsx
   ==============
   
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
     
   ---------------------------------------
     
   In  index.js
   ==============
     import React from 'react';
     
     import ReactDOM from 'react-dom';
     
     import './index.css';
     
     import 'bootstrap/dist/css/bootstrap.css';
     
     import App from './App';
     
     import reportWebVitals from './reportWebVitals';
     
     import Counter from './components/counter';

     ReactDOM.render(
     
         <Counter />,
         
       document.getElementById('root')
       
     );

     // If you want to start measuring performance in your app, pass a function
     
     // to log results (for example: reportWebVitals(console.log))
     
     // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
     
     reportWebVitals();
     
  ---------------------------------------






