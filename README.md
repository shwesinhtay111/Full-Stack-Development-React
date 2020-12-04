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






