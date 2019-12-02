import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});
const CountComponent = ({ count , dispatch}) => 
  <>
  <div>{count}</div>
    <button onClick={() => dispatch ({ type:'ADD'})} id="add">+</button>
    <button onClick={() => dispatch ({ type:'REMOVE'})}>-</button>
    <button onClick={() => dispatch ({ type:'REMOVETEN'})} id="addTen">+10</button>
    <button onClick={() => dispatch ({ type:'ADDTEN'})} id="removeTen">-10</button>
    <button  onClick={() => dispatch ({ type:'RESET'})}id="reset">reset</button>
  </>
export default connect(mapStateToProps)(CountComponent);