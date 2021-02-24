import React,{Component} from 'react';
import Customer from './Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import HairCheck from './HairCheck'

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






class Predict extends Component{

  
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
      .catch(err=> console.log(err));
     
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
      <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>유저넘버</TableCell>
          <TableCell>깊이</TableCell>
          <TableCell>길이</TableCell>
          <TableCell>날짜</TableCell>
        </TableHead> <TableBody>
        {this.state.customers ? this.state.customers.map(customer=> {return (<Customer key = {customer.id} id = {customer.id} userNum = {customer.userNum} depth={customer.depth} distance={customer.distance} date={customer.date} >  </Customer>)
        }): 
        <TableRow><TableCell colSpan="5" align="center">
          <CircularProgress className={classes.progress} variant="determinate" value ={this.state.completed}>
          </CircularProgress> </TableCell> </TableRow>
        } </TableBody> </Table> </Paper>

      </div>
      
     
    );
  }
}


export default withStyles(styles)(Predict);
