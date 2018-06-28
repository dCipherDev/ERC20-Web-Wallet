import React from 'react'
import {connect} from 'react-redux'
class CurrencyContainer extends React.Component {
  shouldComponentUpdate(nextProps){
    return nextProps.currency !== this.props.currency;
  }
  render() {
    let currency = {};
    if(this.props.currency === 'USD'){
        currency = {
          symbol:'USD',
          icon:'$',
          title:'Dollar',
        };
        return '$'
    }else if(this.props.currency === 'RON'){
    currency = {
      symbol:'RON',
      icon:'RON',
      title:'RON',
    };
    return <span style={{marginRight:"-2px"}}>RON</span>
  }else{
    currency = {
      symbol:'CNY',
      icon:'￥',
      title:'Yuan',
    };
    return <span style={{marginRight:"-2px"}}>￥</span>
  }
 }
}

export default connect(({settings})=>({currency:settings.preference.currency}))(CurrencyContainer)