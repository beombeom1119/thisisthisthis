import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {
   
    constructor(props){   
    super(props);
    this.state={
        id:"",
        userNum:"",
        distance:"",
        depth:"",

}





    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    // this.handleFileChange = this.handleFileChange.bind(this)

    this.handleValueChange = this.handleValueChange.bind(this)

    this.addCustomer = this.addCustomer.bind(this)

    }

    stateRefresh= () => {           //state 초기화 
        this.setState(
          {
            customers:'',
            completed:0
          });
          this.callApi().then(res=> this.setState({customers:res})) 
          .catch(err=> console.log(err));
    
      }
    
 handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log("!____________"+response.data);
                // this.props.stateRefresh()
            })
            this.setState({
                id:"",
                userNum:"",
                distance:"",
                depth:"",
          
            })
           
    }

// handleFileChange=(e) => {
//          this.setState({
//             file : e.target.files[0],
//             filename : e.target.value
//         })
//     }

handleValueChange=(e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }




addCustomer=() => {
        const url ='/api/customers';
        const formData = new FormData();
        formData.append('userNum',this.state.userNum);
        formData.append('distance',this.state.distance);
        formData.append('depth',this.state.depth);
        const config = {
            headers:{
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url,formData,config);

    }













    render(){
        return(
            <form onSubmit={this.handleFormSubmit} >
                <h1>고객 추가</h1>
                {/* 프로필이미지 : <input type ="file"  name="file" file={this.state.filename} onChange={this.handleFileChange}/><br/>  */}
                이름 : <input type = "text" name = "userNum" value={this.state.userNum} onChange={this.handleValueChange}></input><br/>
                생년월일 : <input type = "text" name="depth" value={this.state.depth}   onChange={this.handleValueChange}/><br/>
                성별 : <input type = "text" name="distance" value={this.state.distance}   onChange={this.handleValueChange}/><br/>
                <button type ="submit">추가하기</button>
            </form>
        )
    }


}


export default CustomerAdd