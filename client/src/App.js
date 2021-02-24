import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import {withStyles} from '@material-ui/core/styles';



const styles = theme => ({
  root : {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:"auto"
  },
    table:{
      minWidth:1080
    },
    progress:{
      margin : theme.spacing.unit*2
    }
})






class App extends Component{



  constructor(props)     
  {
    super(props);
    this.state={
      customers:'',
      completed:0
    }
  }

  stateRefresh= () => {           //state 초기화 
    this.setState(
      {
        customers:'',
        completed:0
      });
      this.callApi().then(res=> this.setState({customers:res})) 
      .catch(err=> console.log(err+"에러"));

  }


  
  componentDidMount() {
    this.timer = setInterval(this.progress,20);
    this.callApi().then(res=> this.setState({customers:res})) 
    .catch(err=> console.log(err));    // 가져온 JSON값을 customers에 저장
  }
  
  callApi = async() =>{
    const response = await fetch('/api/customers');  //server.js 에 있는 /api/customers JSON값을 가져온다
    const body = await response.json();
    return body;
  }
  

  progress = () => {
    const {completed} =this.state;
    this.setState({ completed: completed>=100? 0 : completed+1});
  }

  
  render()
  
  {
    const {classes} =this.props;
    return(
      <div>
        <Header/>
        {/* <Predict></Predict> */}
      {/* <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>유저넘버</TableCell>
          <TableCell>깊이</TableCell>
          <TableCell>길이</TableCell>
        </TableHead> <TableBody>
        {this.state.customers ? this.state.customers.map(customer=> {return (<Customer key = {customer.id} id = {customer.id} userNum = {customer.userNum} depth={customer.depth} distance={customer.distance} >  </Customer>)
        }): 
        <TableRow><TableCell colSpan="4" align="center">
          <CircularProgress className={classes.progress} variant="determinate" value ={this.state.completed}>
          </CircularProgress> </TableCell> </TableRow>
        } </TableBody> </Table> </Paper> */}
      {/* <CustomerAdd stateRefresh = {this.stateRefresh}></CustomerAdd> */}
      
      </div>
      
     
    );
  }
}


export default withStyles(styles)(App);
