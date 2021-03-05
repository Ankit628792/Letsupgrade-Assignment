import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const hour = new Date().getHours();
let greet ='';

const cssStyle = {
  
}



  if (1<=hour && hour<12) {
     greet = "Good Morning";
      cssStyle.color="Green" ;
  }
  else if(12<=hour && hour<16){
     greet = "Good Afternoon"
     cssStyle.color="Orange" ;
  }
  
  else if(16<=hour && hour<19){
     greet = "Good Evening"
     cssStyle.color="Red" ;
  }
  else{
     greet = "Good Night"
     cssStyle.color="Black" ;
  }

  

ReactDOM.render(

  

  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
