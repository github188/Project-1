'use strict';
require('bootstrap');
import React from 'react';
import { connect } from 'react-redux';
var History = require('react-router').History;
import * as loginActions from '../../actions/login_action';
var Store = require('../../server/store');
var base64 = require('../../utils/base64.js');
var ReactRouter = require('react-router');
var Router = ReactRouter;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var StartForm = React.createClass({
  getInitialState: function() {
      return {
      };
  },
  componentWillMount: function(){
  	const {dispatch} = this.props;
  	dispatch(loginActions.setErrorMsg(""));
  },
  componentDidMount: function() {
      if(this.isMounted()){
            var localUser = {};
            localUser.username = Store.get('localUserName');
            if(Store.get('localUserPwd') == "" || Store.get('localUserPwd') == undefined){
                localUser.password ="";
            }else{
                //localUser.password = Store.get('localUserPwd');
                localUser.password = base64.base64decode(decodeURI(Store.get('localUserPwd')));
            }
            if(!localUser.username) {
                return;
            };
            if(Store.get('remember') == "" || Store.get('remember') == undefined){
                localUser.remember = 'no';
            }else{
                localUser.remember = Store.get('remember');
            };
            // this.setState({localUser: localUser});
            document.getElementById('usernameInput').value = localUser.username;
            document.getElementById('LoginPagePwd').value = localUser.password;
            if(localUser.remember == 'yes'){
                document.getElementById('rememberMe').checked = true;
            }
        }
  	},
  	handleLoginOnClick:function(){
  		const {dispatch} = this.props;
//    alert("开始执行的登录程序！");
      var loginid = React.findDOMNode(this.refs.usernameInput).value;
      //loginid = loginid.toLowerCase();//转成小写字符
//    alert(loginid);
      var user = {};
      user.username = loginid;
      user.password = React.findDOMNode(this.refs.LoginPagePwd).value;
      user.password = base64.base64encode(encodeURI(user.password));
//    alert(user.password);
      if(!user.username){
         dispatch(loginActions.setErrorMsg("请您输入用户名，用户名为必填项哦"));
          return;
      }else if(!user.password){
      	dispatch(loginActions.setErrorMsg("请您输入密码，密码为必填项哦"));
      }
      //登录程序接口
      dispatch(loginActions.getToken(user));
      if(React.findDOMNode(this.refs.rememberMe).checked) {
          Store.set('localUserPwd', user.password);
          Store.set('remember', 'yes');
      }else{
          Store.set('localUserPwd', "");
          Store.set('remember', 'no');
      };
      Store.set('localUserName', user.username);
    },
    showHidden: function() {
        var LoginPagePwd = this.refs.LoginPagePwd; 
        var LoginPagePwd_box = this.refs.LoginPagePwd_box;
        var LoginPageHid_Pwd_box =this.refs.LoginPageHid_Pwd_box;		     
        if(LoginPagePwd_box.style.display=='none'){
        	 LoginPagePwd_box.style.display=' block';
        	 LoginPageHid_Pwd_box.style.display='none';
        	 LoginPagePwd.type='text';
        }else{
        	LoginPagePwd_box.style.display='none';
        	LoginPageHid_Pwd_box.style.display='block'; 
        	LoginPagePwd.type='password';
        }
    },
    _handleOnKeyDown: function(e) {
        var keynum;
        if(window.event) // IE
        {
            keynum = e.keyCode
        }
        else if(e.which) // Netscape/Firefox/Opera
        {
            keynum = e.which
        }
        if(keynum == 13) {
            this.handleLoginOnClick();
        }
    },
    render : function(){
    	var errorMsg = this.props.errorMsg;
      return(
      	<div className="login-bg-1" onKeyDown={this._handleOnKeyDown}>
            		<div className="login-first">
            			<div className="logo-bg"></div>
            			<div className="login-main">
	            			<div className='top yangshi'>
			               		 <span className=''>账号登录</span> 
			               		 <Link to="/twoCodeLogin">
			               		   <img className='top-saoma-txt' src='img/images/erweima02_03.png' />
			               		  </Link>
		               		  	  <b className='login-tip'>{errorMsg}</b>
		               		 </div>
		               		<div className='biaodan yangshi' >
		               			<form action="" method="" onsubmit="">
		               			<p className="form_box">
									<label className="lab">用户名</label>
								    <input type="text" ref="usernameInput" id="usernameInput"  placeholder='请输入用户名' className='in-box'/>
								    <span id="user_box"></span>
								</p>
								<p className="form_btn">
									<input type="button" className="btn" value='登&nbsp;录' onClick={this.handleLoginOnClick} />		
								</p>
								<p className="form_box form_box_psd">
									<label className="lab">密码</label>
									<input type="password" ref="LoginPagePwd" id="LoginPagePwd" placeholder='请输入密码' className='in-box'/>
										<img className="pwd_box" ref='LoginPagePwd_box' onClick={this.showHidden} src='img/images/psd-shou_03.png' />
										<img className="hid_pwd_box" ref='LoginPageHid_Pwd_box' onClick={this.showHidden} src='img/images/psd-hid_03.png' />
								</p>							
								</form>	
		               		</div>	               		
		            <div className='bottom'> 
		              <div className="bottom-left">
					          <input className="" type="checkbox" ref="rememberMe" id="rememberMe"/>
										<span className='botton-left-txt'>记住密码</span>   											
									</div>
									<div className='bottom-right'>
										<a className='bottom-right-txt' href="">忘记密码</a>
										<span className='login-line'></span>
										<Link to="/register" className='bottom-right-txt'>注&nbsp;册</Link>
									</div>
		            </div>          	
            	</div>
            			<div className="login-footer">
            				<p>Copyright © 2006-2016北京思维实创科技股份有限公司</p>
                			<p>联系电话：<a>400-1046-146</a></p>
            			</div>
            		</div>
            </div>
      );
    }
});

function mapStateToProps(state) {
  const {errorMsg} = state.loginReducer;

  return {
  	errorMsg:errorMsg
  }
}
export default connect(mapStateToProps)(StartForm)
