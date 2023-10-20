import React from 'react'
import {buyIcreCream} from '../redux';
import {connect} from 'react-redux';

const IceCreamContainer = (props) => {
  return (
    <div>
       <h2>No of iceCream {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIcreCream}>Buy iceCream</button>
    </div>
  )
}


const mapStateToProps = (state)=>{
    return {
        numberOfIceCreams:state.iceCream.numberOfIceCreams
    }
    
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyIcreCream:()=>dispatch(buyIcreCream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
