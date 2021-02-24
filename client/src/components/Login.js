// import React from 'react'
// import Customer from './Customer';
// import CustomerAdd from './CustomerAdd';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Table from './Table';

// class Login extends React.Component{
 
 
 
//   Login=() => {
//     const url ='/api/login';
//     const formData = new FormData();
//     formData.append('userNum',this.state.userNum);
//     const config = {
//         headers:{
//             'content-type' : 'multipart/form-data'
//         }
//     }
//     return post(url,formData,config);

// }
//   LoginFormSubmit = (e) => {
//     e.preventDefault()
//     this.addCustomer()
//         .then((response) => {
//             console.log("!____________"+response.data);
//             // this.props.stateRefresh()
//         })
//         this.setState({
//             userNum:""
//         })
       
// }


// handleValueChange=(e) => {
//   let nextState = {};
//   nextState[e.target.name] = e.target.value;
//   this.setState(nextState);
// }





  
//   render()
//     {
//         return(
//             <div>
//               <form onSubmit={this.LoginFormSubmit} >
//               <input type='password' placeholder='회원번호' value="userNum" onChange={this.handleValueChange}></input>
//               </form>
//             </div>
//         );
//     }
// }

// export default Login;