import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux"
import $ from 'jquery';
var ReactWidgets = require('react-widgets');
import * as loginAction from '../../actions/login_action';
import * as dataDictAction from '../../actions/dataDict_action';
let _this;
var Register = React.createClass({
	
getInitialState: function () {
	_this = this;
        return {
        	content: [],
        	data:{}
        }
},
componentDidMount:function(){
	//将用户信息放入缓存中
	loginAction.getUserInfo();
},
handlePassword1Click:function (e){
	e.preventDefault();
	const { dispatch } = this.props
	$(document).ready(function(){
		$("#password_r").focus(function() {  
			$("#password1Error").css("display", "none");
			$("#password1Right").css("display", "none");
			$(".help-inline").show();
	    });  
	    $("#password_r").blur(function(){
		    var upassword = $("#password").val();  
		    var upassword1 = $("#password_r").val();
		    if (upassword1 !== upassword||upassword1 =="") {  
			    $("#password1Right").hide();  
			    $("#password1Error").show();  
		    } else {  
		    	$("#password_r").css("border", "1px solid #d0d0d0");
			    $("#password1Right").show();  
			    $("#password1Error").hide();  
		    }  
	    });
	});
},
handleUserClick:function (e){
	e.preventDefault();
	const { dispatch } = this.props
	$(document).ready(function(){
        $("#username").focus(function() {  
        	$("#usernameError").css("display", "none");
        	$("#usernameRight").css("display", "none");
        	$("#usernameRepeat").css("display", "none");
            $(".help-inline").show();
        });  
        $("#username").blur(function() {  
            var regtitle = /^[a-zA-Z][a-zA-Z0-9_]*$/;  
            var uname = $.trim($("#username").val()); 
            if (uname.length < 5||uname.length >14|| !regtitle.test(uname)) {  
                $("#usernameRight").hide();  
                $("#usernameError").show();  
                $("#usernameRepeat").hide();
            }  
            if(uname.length >= 5 ){
            	if(uname.length <=14){
            		var flag = loginAction.isExitUser(uname);
            		if(flag == "0"){
            			$("#usernameRepeat").show();
            			$("#usernameRight").hide();  
                		$("#usernameError").hide();
            		}else{
            			$("#username").css("border", "1px solid #d0d0d0");
            			$("#usernameRight").show();  
	                	$("#usernameError").hide();  
	                	$("#usernameRepeat").hide();
            		}
            	}else{
            		$("#username").css("border", "1px solid #d0d0d0");
            		$("#usernameError").show();  
                	$("#usernameRight").hide(); 
                	$("#usernameRepeat").hide();
            	}
            }
        });
	});
},
handlePassWordClick:function(e){
	e.preventDefault();
	const { dispatch } = this.props
	$(document).ready(function(){
        $("#password").focus(function() {  
        	$("#passwordError").css("display", "none");
        	$("#passwordRight").css("display", "none");
            $(".help-inline").show();
        });
        $("#password").blur(function() {  
            var regPassWord = /^[a-zA-Z0-9]{5,14}$/;  
            var uPassWord = $("#password").val();  
            if ( !regPassWord.test(uPassWord)) {  
                $("#passwordRight").hide();  
                $("#passwordError").show();  
            }else{
            	$("#password").css("border", "1px solid #d0d0d0");
            	$("#passwordRight").show();
            	$("#passwordError").hide(); 
            }
        });
    });    
},
handleManager:function(e){
	e.preventDefault();
	const { dispatch } = this.props
		$(document).ready(function(){
        $("#title").focus(function() {  
        	$("#titleError").css("display", "none");
        	$("#titleRight").css("display", "none");
            $("#userHelp").show();
        });  
        $("#title").blur(function() {  
            var uname = $("#title").val();  
            if (uname.length <= 0) {  
                $("#titleRight").hide();  
                $("#titleError").show();  
                $("#userHelp").hide();
            } else {  
            	$("#title").css("border", "1px solid #d0d0d0");
                $("#titleRight").show();  
                $("#titleError").hide();  
                $("#userHelp").hide();
            }  
        });
	});
},
handleEmailClick:function(e){
	var value = e.target.value;
	$(document).ready(function(){
		$("#email").focus(function() {  
        	$("#emailError").css("display", "none");
        	$("#emailRight").css("display", "none");
            $(".help-inline").show();
        });
        $("#email").blur(function(){
        	//var length = value.length;
    		var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            var uemail = $("#email").val();
        	if (!regEmail.test(uemail)){
      		//error = '请输入正确的Email';
      			$("#emailError").show(); 
            	$("#emailRight").hide();
  			}else{
  				$("#email").css("border", "1px solid #d0d0d0");
            	$("#emailRight").show();  
                $("#emailError").hide();
  			}
        })
    });    
},
handleChange:function(name,event){
	var newState={};
	newState[name]=event.target.value;
	this.setState(newState);
	if(name == "company"){
		const {dispatch} = this.props;
		let companyVal = $("#employer").val();
		dispatch(dataDictAction.get_registerOrganizationData(companyVal));
		$(".ulGroup").show(200);
	}
},
handleLiClick:function (e){
	const {registerOrganizationData} = this.props;
	console.log(registerOrganizationData);
	let content = null;
	$("#employer").val(e.target.innerHTML);
	for (let i = 0;i<registerOrganizationData.length;i++){
		if(e.target.innerHTML == registerOrganizationData[i].ORANIZATION_NAME){
			content = registerOrganizationData[i].ROLE_NAME.split(",");
			console.log("111111111111111"+content);
		}
	}
	console.log(content);
	this.setState({content:content});
    $(".ulGroup").hide(200);
    console.log(this.state.content);
},
handleNameClick:function(e){
	var value = e.target.value;
	$(document).ready(function(){
		$("#name").focus(function() {  
        	$("#nameError").css("display", "none");
        	$("#nameRight").css("display", "none");
            $(".help-inline").show();
        });
        $("#name").blur(function(){
    		var regName =  /^[\u4e00-\u9fa5]{2,4}$/;
            var uname = $("#name").val();
        	if (!regName.test(uname)){
      			$("#nameError").show(); 
            	$("#nameRight").hide();
  			}else{
  				$("#name").css("border", "1px solid #d0d0d0");
            	$("#nameRight").show();  
                $("#nameError").hide();
  			}
        })
    });  
},
handlePhoneClick:function(e){
	var value = e.target.value;
	$(document).ready(function(){
		$("#phone").focus(function() {  
        	$("#phoneError").css("display", "none");
        	$("#phoneRight").css("display", "none");
        	$("#phoneRepeat").css("display", "none");
            $(".help-inline").show();
        });
        $("#phone").blur(function(){
    		var regPhone = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
            var uphone = $("#phone").val();
        	if (uphone.length !==11||uphone.length ==""||!regPhone.test(uphone)){
      			$("#phoneError").show(); 
            	$("#phoneRight").hide();
            	$("#phoneRepeat").hide(); 
  			}else{
  		 		//判断电话号码是否唯一
  				var flag = loginAction.isExitPhone(uphone);
  				if(flag == "0"){
  					$("#phoneRight").hide();  
                	$("#phoneError").hide();
                	$("#phoneRepeat").show(); 
  				}else{
  					$("#phone").css("border", "1px solid #d0d0d0");
  					$("#phoneRight").show();  
               		$("#phoneError").hide();
               		$("#phoneRepeat").hide(); 
  				}
  			}
        })
    });  
},
handleEmployerClick:function(e){
	var value=e.target.valueOf();
	$(document).ready(function(){
		$("#employer").focus(function() {
        	$("#employerError").css("display", "none");
        	$("#employerRight").css("display", "none");
            $(".help-inline").show();
        });
        $("#employer").blur(function(){
            var uemployer = $("#employer").val();
        	if (uemployer.length ==0){
      			$("#employerError").show(); 
            	$("#employerRight").hide();
            	//$(".ulGroup").hide();
  			}else{
  				$("#employer").css("border", "1px solid #d0d0d0");
            	$("#employerRight").show();  
                $("#employerError").hide();
                //$(".ulGroup").hide();
  			}
        })
	});
},
submitPhone:function(){
	var regPhone = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    var uphone = $("#phone").val();
    console.log("uphone=" +uphone);
    if (uphone.length !==11||uphone.length ==""||!regPhone.test(uphone)){
		return false;
	}else{
		return true;
	}
},
submitUserName:function(){
    var regtitle = /^[a-zA-Z][a-zA-Z0-9_]*$/;  
    var uname = $("#username").val();  
    if (uname.length < 5||uname.length >14|| !regtitle.test(uname)) {
        return false;
    }
    if(uname.length >= 5 ){
    	if(uname.length <=14){
    		return true;
    	}else{
    		return false;
    	}
    }
},
submitPassword:function(){
	var regPassWord = /^[a-zA-Z0-9]{5,14}$/;  
    var uPassWord = $("#password").val();  
    if ( !regPassWord.test(uPassWord)) {  
        $("#passwordRight").hide();  
        $("#passwordError").show();  
        return false;
    }else{
    	return true;
    }
},
submitPassword_r:function(){
	var upassword = $("#password").val();  
    var upassword1 = $("#password_r").val();  
    if (upassword1 !== upassword||upassword1 =="") {  
	  return false;
    } else {  
	   return true;
    }  
},
submitName:function(){
	var regName =  /^[\u4e00-\u9fa5]{2,4}$/;
    var uname = $("#name").val();
	if (!regName.test(uname)){
		return false;
	}else{
    	return true;
	}
},
submitEmail:function(){
	var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var uemail = $("#email").val();
	if (!regEmail.test(uemail)){
		return false;
	}else{
    	return true;
	}	
},
handleSubmit:function(event){
 	event.preventDefault();
	var loginid = document.getElementById('username').value;
	loginid = loginid.toLowerCase();//转成小写字符
	var user = {};
	user.username = loginid;
	user.password = document.getElementById('password').value;
	user.password_r = document.getElementById('password_r').value;
	user.name = document.getElementById('name').value;
	user.phone = document.getElementById('phone').value;
	user.email = document.getElementById('email').value;
	user.employer = document.getElementById('employer').value;
	user.title = document.getElementById('title').value;
	//校验用户名
	let user_name = this.submitUserName();
	console.log("user_name"== + user_name);
	if(!user_name){
		document.getElementById("username").focus(); 
		$("#username").css("outline", "none");
		$("#username").css("border", "1px solid red");
		$("#usernameError").show();
		$(".help-inline").hide();
		return false;
	}else{
		$("#username").css("border", "1px solid #d0d0d0");
		$("#usernameError").hide();
		$(".help-inline").hide();
	}
	//校验登录密码
	let user_password = this.submitPassword();
	console.log("user_password"== + user_password);
	if(!user_password){
		document.getElementById("password").focus(); 
		$("#password").css("outline", "none");
		$("#password").css("border", "1px solid red");
		$("#passwordError").show();
		$(".help-inline").hide();
		return false;
	}else{
		$("#password").css("border", "1px solid #d0d0d0");
		$("#passwordError").hide();
		$(".help-inline").hide();
	}
	//校验确认密码
	let user_password_r = this.submitPassword_r();
	console.log("user_password_r"== + user_password_r);
	if(!user_password_r){
		document.getElementById("password_r").focus(); 
		$("#password_r").css("outline", "none");
		$("#password_r").css("border", "1px solid red");
		$("#password1Error").show();
		$(".help-inline").hide();
		return false;
	}else{
		$("#password_r").css("border", "1px solid #d0d0d0");
		$("#password1Error").hide();
		$(".help-inline").hide();
	}
	//校验姓名
	let user_FullName = this.submitName();
	console.log("user_FullName"== + user_FullName);
	if(!user_FullName){
		document.getElementById("name").focus(); 
		$("#name").css("outline", "none");
		$("#name").css("border", "1px solid red");
		$("#nameError").show();
		$(".help-inline").hide();
		return false;
	}else{
		$("#name").css("border", "1px solid #d0d0d0");
		$("#nameError").hide();
		$(".help-inline").hide();
	}	
	//校验电话号码格式
	let user_flag = this.submitPhone();
	if(!user_flag){
	//获取焦点边框变红,并且提示电话号码不正确信息
		document.getElementById("phone").focus(); 
		$("#phone").css("outline", "none");
		$("#phone").css("border", "1px solid red");
		$("#phoneError").show();
		$(".help-inline").hide();
		return false;
	}else{
		$("#phone").css("border", "1px solid #d0d0d0");
		$("#phoneError").hide();
		$(".help-inline").hide();
	}
	//校验邮箱
	let user_Email = this.submitEmail();
	console.log("user_Email"== + user_Email);
	if(!user_Email){
		document.getElementById("email").focus(); 
		$("#email").css("outline", "none");
		$("#email").css("border", "1px solid red");
		$("#emailError").show();
		$(".help-inline").hide();
		return false;
	}else{
		$("#email").css("border", "1px solid #d0d0d0");
		$("#emailError").hide();
		$(".help-inline").hide();
	}	
	//调用注册接口，注册接口两个校验，一是再次验证用户名是否重复，二是验证电话号码是否唯一
  	let user_mark = loginAction.getRegisterInfo(user);
  	if(user_mark == "2"){
  		document.getElementById("username").focus(); 
		$("#username").css("outline", "none");
		$("#username").css("border", "1px solid red");
		$("#usernameRepeat").show();
		$("#usernameError").hide();
		$(".help-inline").hide();
  	}else if(user_mark == "3"){
  		document.getElementById("phone").focus(); 
		$("#phone").css("outline", "none");
		$("#phone").css("border", "1px solid red");
		$("#phoneRepeat").show();
		$("#phoneError").hide();
		$(".help-inline").hide();
		return false;
  	}
},
render:function () {
return(
<div className="regContainer">
	<div className="regHeader">
		<div className="regLogo">
			<img src="img/logoH.jpg"/>
			<div className="registerLogoRight"></div>
			<span className="registerLogoRightSpan">注册账号</span>
			<div className="headZ">
				<span className="headLogin">我已注册，现在就</span>
				<Link to="/StartForm"><input type="button" value="登录" className="headButton"/></Link>
			</div>
		</div>
	</div>
<div className="main" >
        <div id="register">    
            <form role="form" id="registerForm" action="" method="post" name="registerForm" onSubmit={this.handleSubmit}>
                <div className="formContent one">
                    <div className="line">
	                    <label className="head tag">账户设置</label>
	                    <span className="label1">请设置您的用户名和密码用于登录</span>
                    </div>
                    <div className="line">
                    	<label htmlFor="username" className="tag">用户名</label>
                        <input id="username" className="input" name="username" type="text" placeholder="设置用户名"
        					     defaultValue ={this.props.username}  
        					     onClick={this.handleUserClick}/>
                        <span className="help-inline">5-14个字符，一旦设置成功无法修改</span>
                        <img src="./img/regRight.png" id="usernameRight"/>
                        <div id="usernameError">
                        	<img src="./img/regWrong.png" className="wronU"/>
                        	<span className="wron-U" >用户名不符合要求，请重新输入</span>
                        </div>     
                        <div id="usernameRepeat">
                        	<img src="./img/regWrong-t.png" className="wronU"/>
                        	<span className="wron-U" >用户名已存在!</span>
                        </div>
                    </div>
                    <div className="line">
                    	<label htmlFor="password" className="tag">登录密码</label>
                        <input id="password" className="input" name="password" type="password" placeholder="设置登录密码"
                        	   defaultValue ={this.props.password} onChange={this.handleChange.bind(this,'password')}
                        	   onClick={this.handlePassWordClick}/>
                        <span className="help-inline">长度为6~14个字符，支持数字和字母</span>	
                        <img src="./img/regRight.png" id="passwordRight"/>
                        <div id="passwordError">
                        	<img src="./img/regWrong.png" className="wronU"/>
                        	<span className="wron-U">密码不符合要求，请重新输入</span>
                        </div>    
                    </div>
                    <div className="line">
                    	<label className="tag">确认密码</label>
                        <input id="password_r" className="input password_r" name="password_r" type="password" placeholder="请再次输入您的密码" 
                        	   defaultValue ={this.props.password_r} onChange={this.handleChange.bind(this,'password_r')}
                        	   onClick={this.handlePassword1Click}/>
                        <span className="help-inline" >长度为6~14个字符，支持数字和字母</span>
                        <img src="./img/regRight.png" id="password1Right"/>
                        <div id="password1Error">
                        	<img src="./img/regWrong-t.png" className="wronU"/>
                        	<span className="wron-U">请再次输入密码</span>
                        </div>
                    </div>
                </div>
                
                <hr id="hrReg"/>
                
                <div className="formContent two">
                    <div className="line">
	                    <label  className="head tag" >基本信息</label>
	                    <span className="label1">请输入个人真实信息用于身份验证</span>
                    </div>
                    <div className="line">
                    	<label htmlFor="name" className="tag">姓名</label>
                        <input id="name" className="input" name="name" type="text" placeholder="您的真实姓名"
                        	   defaultValue ={this.props.name} onChange={this.handleChange.bind(this,'name')}
                        	   onClick={this.handleNameClick}/>
                        <span className="help-inline">2-4个汉字</span>
                        <img src="./img/regRight.png" id="nameRight"/>
                        <div id="nameError">
                        	<img src="./img/regWrong.png" className="wronU"/>
                        	<span className="wron-U">2-4个汉字</span>
                        </div>
                    </div>
                    <div className="line">
                    	<label htmlFor="phone" className="tag">电话</label>
                        <span className="eight">+86</span>
                        <input type="text" id="phone" name="phone" placeholder="请输入手机号码" className="tel"
                        	   defaultValue ={this.props.phone} onChange={this.handleChange.bind(this,'phone')}
                        	   onClick={this.handlePhoneClick}/>
                        <span className="help-inline">请输入中国大陆手机号码</span>
                        <img src="./img/regRight.png" id="phoneRight"/>
                        <div id="phoneError">
                        	<img src="./img/regWrong.png" className="wronU"/>
                        	<span className="wron-U">电话号码不符合要求，请重新输入</span>
                        </div>
                        <div id="phoneRepeat">
                        	<img src="./img/regWrong-t.png" className="wronU"/>
                        	<span className="wron-U" >电话号码已存在!</span>
                        </div>
                    </div>
                    <div className="line">
                    	<label htmlFor="email" className="tag">邮箱</label>
                        <input id="email" className="input" name="email" type="email" placeholder="请输入您的邮箱地址"
                        	   defaultValue ={this.props.email} onChange={this.handleChange.bind(this,'email')}
                        	   onClick={this.handleEmailClick}/>
                        <span className="help-inline">请输入个人邮箱地址</span>
                        <img src="./img/regRight.png" id="emailRight"/>
                        <div id="emailError">
                        	<img src="./img/regWrong.png" className="wronU"/>
                        	<span className="wron-U">邮箱格式不正确，请重新输入</span>
                        </div>
                    </div>
                    <div className="line">
                    	<label htmlFor="employer" className="tag">单位</label>
                        <input id="employer" className="input" defaultValue ={this.props.company} name="employer" ref="companyValue" type="text" placeholder="请输入您所在的单位名称" onClick={this.handleEmployerClick} onChange={this.handleChange.bind(this,'company')}/>
                        <ul className="ulGroup">
                        	{
                        		_this.props.registerOrganizationData.map((item,index) => {
                        			return <li className="liClick" key={index} id={item.ORANIZATION_NAME} onClick={this.handleLiClick}>{item.ORANIZATION_NAME}</li>
                        		})
                        	}
                        </ul>
                        <span className="help-inline">输入后有提示可以选择</span>
                        <img src="./img/regRight.png" id="employerRight"/>
                        <div id="employerError">
                        	<img src="./img/regWrong.png" className="wronU"/>
                        	<span className="wron-U">单位名称不正确，请重新输入</span>
                        </div>
                    </div>
                    <div className="line">
                    	<label htmlFor="title" className="tag">职位</label>
                        {/*<input id="title" className="input select" name="title link" type="text" placeholder="选择职位" list="url_list"
                        	   defaultValue ={this.props.title} onChange={this.handleCity} onClick={this.handleManager}/>*/}
						<select id="title" className="input select" name="title link" type="text" placeholder="选择职位" list="url_list"
								defaultValue ={this.props.title} onChange={this.handleCity} onClick={this.handleManager}>
                            {
                                this.state.content.map(function(item,index){
                                	return <option key={index} value={item}>{item}</option>
                                    {/*return <option key={index} value={item} />*/}
                                })
                            }

						</select>
                        <span className="help-inline">请选择职位名称，或创建一个职位</span>
                        <img src="./img/regRight.png" id="titleRight"/>
                        <div id="titleError">
                        	<img src="./img/regWrong.png" className="wronU"/>
                        	<span className="wron-U">请选择职位或创建一个新职位</span>
                        </div>
                        {/*<datalist id="url_list" className="da">
                        {
                        	this.state.content.map(function(item,index){
                                    return <option key={index} value={item} />
                        	})
                        }
						</datalist>*/}
                    </div>
                    <div className="line">
                    	<button type="submit" id="submit" className="regButton input">注册</button>
                    </div>
                </div>
            </form>
          </div>
    </div>	
</div>);
        }
  });
  function myPropsToState(state) {
	  const {registerOrganizationData} = state.dataDictReducer;
	  return{
	  	registerOrganizationData:registerOrganizationData
	  }
  }
export default connect(myPropsToState)(Register)