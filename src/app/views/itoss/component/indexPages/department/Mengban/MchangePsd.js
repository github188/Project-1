require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var MchangePsd= React.createClass({
	componentDidMount:function(){ 
          var tiaojian=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			$('#Change_user_name').blur(function() {
				var reg = /^[a-zA-Z]{5,14}$/;
				if(reg.test($(this).val())) {
					$('#Change_name_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#Change_name_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			
			$('#Change_user_pasd1').blur(function() {
				var reg = /^[0-9a-zA-Z]{6,14}$/;
				if(reg.test($(this).val())) {
					$('#Change_psd1_tic1').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#Change_psd1_tic1').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			$('#Change_user_pasd2').blur(function() {
				if($('#Change_user_pasd2').val()===''||$('#Change_user_pasd2').val()==null) {
					$('#Change_psd1_tic2').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#Change_psd1_tic2').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			
			$('#Change_qunZhu').blur(function() {
				if($('#Change_qunZhu').val()===''||$('#Change_qunZhu').val()==null) {
					$('#Change_qunZhu_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#Change_qunZhu_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			
			
			$('.Change_form').submit(function(){
				for(var i=0;i<tiaojian.length;i++){
					if(tiaojian[i]==0){
					return false;
					}			
				}
			})
			
				$('.newtopX,.newCox').click(function(){
				$('.mChangePsd').css({'display':'none'})
					});
				
	},
	
  render: function() {
    return (
   		<div className="mChangePsd">
   		
			<div className='dateMengbanCenter'>
				<div className="newtop">
					<span className="newtopTxt">修改密码</span>
					<span className="newtopX">&times;</span>
				</div>
				<form className='Change_form'>
					<div className='newForm'>
					        <p className='newFormP'>
								<label for="user" className='newFormPlable'>用户名<b>*</b></label>
								<input type="text" name="userID" id='Change_user_name' />
								<span className="user_box" id="Change_name_tic">5-14个字符</span>
							</p>
							<p className='newFormP'>
								<label for="user" className='newFormPlable'>旧密码<b>*</b></label>
								<input type="password" id='Change_user_pasd1' />
								<span className="user_box" id="Change_psd1_tic1">6~14个字符，支持数字和字母</span>
							</p>
							<p className='newFormP'>
								<label for="user" className='newFormPlable'>新密码<b>*</b></label>
								<input type="password" id='Change_user_pasd2' />
								<span className="user_box" id="Change_psd1_tic2">两次密码输入不一致</span>
							</p>
							<p className='newFormP'>
								<label for="user" className='newFormPlable'>群组<b>*</b></label>
								<select id="Change_qunZhu" className="selectBg" >
								    <option value="" > </option>
									<option   value="管理员" >管理员</option>
									<option   value="服务台" >服务台</option>
									<option   value="公司" >公司 </option>
								</select>	
								<span className="user_box" id="Change_qunZhu_tic">选择群组</span>
							</p>
					</div>
				</form>
				
				
				<div className="dateBottom">
						<span className="newCox">取消</span>
						<span className="newSure"><input type="submit"  className="" value="保存" /></span>
				</div>
			</div>		
		</div>
  )}
});
export default MchangePsd
