import React from 'react';
import {connect} from 'dva';
import moment from 'moment';
import {Button, Icon, Menu, message, Popover, Select,Badge,Row,Tooltip} from 'antd';
import {Link} from 'dva/router';
import copy from 'copy-to-clipboard';
import TopNotification from './TopNotification';
import {locales} from '../common/config/data'
import intl from 'react-intl-universal';
import Notification from 'Loopr/Notification'
import UserAgent from '../common/utils/useragent.js'

function Navbar(props){
  let selectedKeys = []
  if(props.location && props.match){
    let route = props.match.path
    let url = props.location.pathname
    if(url.indexOf(route)>-1){
      selectedKeys.push(route)
    }
  }
  if(props.match){

  }
  const account = props.account;

  const localeChange = (value)=>{
    props.dispatch({
      type:'locales/setLocale',
      payload:{
        locale:value
      }
    });
    let currency = value.startsWith('en' ) ? 'USD' : 'CNY' || 'RON'
    props.dispatch({
      type:'settings/preferenceChange',
      payload:{
        language: value,
        currency: currency,
      }
    })
  }
  const showModal = (payload)=>{
    props.dispatch({
      type:'modals/modalChange',
      payload:{
        ...payload,
        visible:true
      }
    })
  }

  const quit = ()=>{
    props.dispatch({
      type:'account/deleteAccount',
      payload:{}
    })
  };

  const needUnlockCheck = (payload) => {
    const state = window.STORE.getState()
    if(state && state.account && state.account.walletType === 'Address') {
      props.dispatch({
        type:'modals/modalChange',
        payload:{
          id:'wallet/watchOnlyToUnlock',
          originalData:payload,
          pageFrom:'',
          visible:true
        }
      })
    } else {
      showModal(payload)
    }
  }

  const getFlagIcon = (name)=>{
    switch (name) {
      case "ro-RO":
        return (
          <img style={{height:'18px',width:'24px'}} src={require('../assets/images/flag-ro.jpg')} />
          )
        break;
      case "zh-CN":
        return (
          <img style={{height:'18px',width:'24px'}} src={require('../assets/images/flag-ch.png')} />
          )
        break;
      case "en-US":
        return <img style={{height:'18px',width:'24px'}} src={require('../assets/images/flag-en.png')} />
        break;
      default:
        return name
        break;
    }
  }
  const localesOptions = locales.map(locale =>
    <Select.Option className="fs16" value={locale.value} key={locale.value}>
      {getFlagIcon(locale.value)}
    </Select.Option>
  );
  function copyToClipboard() {

    if(account.isUnlocked ){
      copy(account.address) ? Notification.open({ message:intl.get('navbar.subs.copy_success'),
        type:'success',size:'small'}) :  Notification.open({message:intl.get('navbar.subs.copy_failed'),type:"error",size:'small'})

    }else{
      message.warning(intl.get('navbar.subs.copy'))
    }
  }
  const ua = new UserAgent()
  const getWalletType = ()=>{
    if(!window.WALLET_UNLOCK_TYPE){
      return intl.get(`wallet.type_lock`)
    }
    if(window.WALLET_UNLOCK_TYPE && window.WALLET_UNLOCK_TYPE.toLowerCase() !== 'address'){
      return intl.get(`wallet.type_${window.WALLET_UNLOCK_TYPE.toLowerCase()}`)
    }
    if(window.WALLET_UNLOCK_TYPE && window.WALLET_UNLOCK_TYPE.toLowerCase() === 'address' && window.IS_DEMO_WALLET){
      return intl.get(`wallet.type_demo`)
    }
    if(window.WALLET_UNLOCK_TYPE && window.WALLET_UNLOCK_TYPE.toLowerCase() === 'address' && !window.IS_DEMO_WALLET){
      return intl.get(`wallet.type_${window.WALLET_UNLOCK_TYPE.toLowerCase()}`)
    }
  }
  const subject = encodeURIComponent(intl.get('feedback.email_subject')).replace(/%2B/gi, '+')
  const body =  encodeURIComponent(intl.get('feedback.email_body',{
    wallet:getWalletType(),
    os:ua.getOS().name,
    browser:ua.getBrowser().full,
    address: account.isUnlocked ? account.address : getWalletType(),
  })).replace(/%2B/gi, '+')
  const emailUrl = `mailto:${intl.get('feedback.email_to')}?subject=${subject}&body=${body}`
  const accountMenus = (
    <div className="fs18" >
      {
        account.isUnlocked &&
        <div style={{width:'260px'}}>
          <div className="row align-items-center gutter-0 pl15 zb-b-b pr15">
            <div className="col pr10 pt10 pb10">
              <div className="fs14 color-black-2 text-wrap">{account.address}</div>
            </div>
            <div className="col-auto zb-b-l pl10 pt10 pb10 ">
              <a className="fs12 color-primary-1" type="primary" size="small" onClick={copyToClipboard}>{intl.get('navbar.subs.copy')}</a>
            </div>
          </div>
          <div className="row ml0 mr0 zb-b-b navbar-account-grids">
            <div className="col-sm-4 text-center pl0 pr0 zb-b-b">
              <div className="fs14 color-black-2 navbar-account-grid">
                <a onClick={showModal.bind(this,{id:'token/receive',symbol:null})}>
                  <i className="grid-icon icon-loopring icon-loopring-receive fs16 color-black-2 d-block"></i>
                  <div className="grid-title text-truncate text-nowrap">{intl.get('navbar.subs.receive')}</div>
                </a>
              </div>
            </div>

            <div className="col-sm-4 text-center pl0 pr0 zb-b-b">
              <div className="fs14 color-black-2 navbar-account-grid">
                <a onClick={needUnlockCheck.bind(this,{id:'token/transfer', item:''})}>
                  <i className="grid-icon icon-loopring icon-loopring-transfer fs16 color-black-2 d-block"></i>
                  <div className="grid-title text-truncate text-nowrap">{intl.get('navbar.subs.send')}</div>
                </a>
              </div>
            </div>

            {
              (account.walletType === 'KeyStore'|| account.walletType === 'Mnemonic' || account.walletType === 'PrivateKey') &&
              <div className="col-sm-4 text-center pl0 pr0 zb-b-b">
                  <div className="fs14 color-black-2 navbar-account-grid">
                    <a onClick={showModal.bind(this,{id:'wallet/export/keystore'})}>
                      <Icon type="export" className="d-block grid-icon" />
                      <div className="grid-title text-truncate text-nowrap">{intl.get('navbar.subs.export')}</div>
                    </a>
                  </div>
              </div>
            }
            <div className="col-sm-4 text-center pl0 pr0 zb-b-b">
              <div className="pointer fs14 color-black-2 navbar-account-grid" onClick={showModal.bind(this,{id:'settings'})}>
                <Icon type="setting" className="d-block grid-icon" />
                <div className="grid-title text-truncate text-nowrap">{intl.get('navbar.settings')}</div>
              </div>
            </div>
            <div className="col-sm-4 text-center pl0 pr0 zb-b-b">
            <a href="https://www.dcipher.io" target="_blank">
                <div className="fs14 color-black-2 navbar-account-grid cursor-pointer" onClick={() => window.open = ('this.href')}>
                    <Icon type="windows-o" className="d-block grid-icon" />
                    <div className="grid-title text-truncate text-nowrap">{intl.get('navbar.subs.website')}</div>
                </div>
            </a>
            </div>
            <div className="col-sm-4 text-center pl0 pr0 zb-b-b">
                <div className="fs14 color-black-2 navbar-account-grid cursor-pointer" onClick={quit}>
                    <Icon style={{color:'#FF0000'}} type="poweroff" className="d-block grid-icon" />
                    <div className="grid-title text-truncate text-nowrap">{intl.get('navbar.subs.quit')}</div>
                </div>
            </div>
          </div>
          {
            false &&
            <div className="zb-b-t bg-grey-50 fs14 p10 pl15 pr15" style={{borderRadius:'0 0 4px 4px'}}>
              <div className="row align-items-center ">
                <div className="col">

                </div>
              </div>
            </div>
          }

        </div>
      }
      {!account.isUnlocked &&
        <div>
          <div className="zb-b-b fs14 p10 pl15 pr15">
            <div className="row align-items-center">
              <div className="col-auto">
                <a  onClick={showModal.bind(this,{id:'wallet/unlock', pageFrom:'Portfolio',targetModalData: {}})} className="color-grey-900">
                <Icon type="unlock" className="mr5" />{intl.get('navbar.subs.unlock')}
                </a>
              </div>
            </div>
          </div>

          <div className="zb-b-b fs14 color-grey-900 p10 pl15 pr15">
            <a onClick={showModal.bind(this,{id:'wallet/generate'})} className="color-grey-900">
              <Icon type="plus" className="mr5" />{intl.get('navbar.subs.generate')}
            </a>
          </div>
          <div className="pointer zb-b-b fs14 color-grey-900 p10 pl15 pr15" onClick={showModal.bind(this,{id:'settings'})}>
            <Tooltip title={intl.get('global.comingsoon')}>
            <Icon type="setting" className="mr5" />{intl.get('navbar.settings')}
            </Tooltip>
          </div>
        </div>
      }
    </div>
  )
  const VersionTip = (
    <div className="" style={{maxWidth:'280px'}}>
      <div className="p15">
        <div className="fs16 color-primary-1">{intl.get('version.title')}</div>
        <div className="fs12 color-black-1 mt5">{intl.get('version.description')}</div>
      </div>
      <div className="zb-b-t">
        <div className="row pl10 pr10" style={{padding:'7px 0px'}}>
          <div className="col fs12 color-black-2">{intl.get('version.version')}</div>
          <div className="col-auto fs12 color-black-3">{intl.get('version.label')}</div>
        </div>
      </div>
      <div className="zb-b-t">
        <div className="row pl10 pr10" style={{padding:'7px 0px'}}>
          <div className="col fs12 color-black-2">{intl.get('version.update_time')}</div>
          <div className="col-auto fs12 color-black-3">{window.uiFormatter.getFormatTime(moment().format('x'),'YYYYMMDD')}</div>
        </div>
      </div>
      <div className="zb-b-t">
        <div className="row pl10 pr10" style={{padding:'7px 0px'}}>
          <div className="col fs12 color-black-2">{intl.get('version.feedback')}</div>
          <div className="col-auto fs12 ">
            <a href={emailUrl} className="color-primary-1">
              {intl.get('version.feedback_submit')}
              <Icon type="right" />
            </a>
          </div>
        </div>
      </div>
      <div className="zb-b-t">
        <div className="row pl10 pr10" style={{padding:'7px 0px'}}>
          <div className="col fs12 color-black-2">{intl.get('version.roadmap_label')}</div>
          <div className="col-auto fs12 color-black-3 cursor-not-allowed">
            {intl.get('version.roadmap_title')}
            <Icon type="right" />
          </div>
        </div>
      </div>

    </div>
  )
  // window.location.href.indexOf('/trade') >= 0
  const isTradingPage = window.location.href.indexOf('/trade')>-1 && window.location.href.indexOf('/trades')<0
  return (
    <div style={{backgroundColor: '#0c161e'}}>
      <div className="container">
        <div className="row align-items-stretch ml0 mr0 zb-b-l">
           <div className="col-auto pl25 pr10 zb-b-r pr" style={{width:'135px'}}>
              <Link to="/wallet" className="d-block" >
                {/*  <p style={{fontSize:'20px',marginBottom:'0px'}}>dCipher Wallet</p>! */}
				  <img src="src/assets/images/logo-blue.png" />
              </Link>
            </div>
          {
             isTradingPage&&
            <div className="col-auto pl20">
                <Link to="/wallet" className="d-block">
                  <i className="icon-loopring icon-loopring-coins fs18 color-balck-1"></i>
                  <span className="fs14 ml5">{intl.get('ticker.back_to_wallet')}</span>
                </Link>
            </div>
          }

          <div className="col"></div>
          <div className="col-auto">
            <Menu
              theme="light"
              className="bg-none border-0"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
              selectedKeys={selectedKeys}
            >
              {
                false && window.WALLET && window.WALLET.getAddress() &&
                <Menu.Item key="/wallet">
                  <Link className="fs16 color-black-1" to="/wallet">{intl.get('navbar.wallet')}</Link>
                </Menu.Item>
              }
              {
                false && window.WALLET && window.WALLET.getAddress() &&
                <Menu.Item key="/trade">
                  <Link to="/trade" className="fs16 color-black-1">{intl.get('navbar.trade')}</Link>
                </Menu.Item>
              }
            </Menu>
          </div>
          <div className="col zb-b-r"></div>
          {
            false &&
            <div className="col-auto pl20 pr20 zb-b-r">
              <div className="fs16 color-black-1 cursor-pointer">
                <Icon onClick={showModal.bind(this,{id:'userguide'})} type="question-circle-o" />
              </div>
            </div>
          }
          {
            false &&
            <div className="col-auto pl15 pr15 zb-b-r">
              <Tooltip title={intl.get('global.comingsoon')}>
                <div className="fs16 color-black-1 cursor-pointer">
                  <Icon type="question-circle-o" />
                </div>
              </Tooltip>
            </div>
          }

		  <div className="col-auto d-flex align-items-center zb-b-r">
            <Popover content={accountMenus} title={null} trigger="hover">
                {
                  account.address &&
                  <div className="fs16">
                      <div className="text-left" style={{lineHeight:'20px'}}>
                        <div className="fs14 color-green-1">
                          {window.uiFormatter.getShortAddress(account.address)}
                          &nbsp;
                          <Icon className="ml0 fs10" type="down" />
                        </div>
                        <div className="row gutter-0" style={{marginTop:'0px'}}>
                          <div className="col">
                            <Badge status="processing" className="" />
                            <span className="fs12 color-primary-1">{getWalletType()}</span>
                          </div>
                          <div className="col-auto d-none">
                            <span onClick={quit} className="fs12 ml5 color-black-1  cursor-pointer">解锁</span>
                          </div>
                        </div>
                      </div>
                  </div>
                }
                {
                  !account.address &&
                  <span className="fs16 color-green-1">                   
                    {intl.get('navbar.account')}
                    <Icon type="wallet" className="fs18 m15"/>
                  </span>
                }
            </Popover>
          </div>
          <div className="col-auto pl15 pr15 zb-b-r" style={{paddingTop:'31px'}}>
            <Select showArrow={false} dropdownMatchSelectWidth={false} value={props.locales.locale} onChange={localeChange} className="navbar-language fs16">
              {localesOptions}
            </Select>
          </div>
          

        </div>
      </div>

    </div>
  )
}

export default connect(({locales,account})=>({locales,account}))(Navbar)
