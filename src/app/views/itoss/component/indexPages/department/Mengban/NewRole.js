import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import $ from 'jquery';
var NewRole = React.createClass({
	componentDidMount:function(){ 
          var tiaojian=[0,0]
			$('#qunZhu').blur(function() {
				if($('#qunZhu').val()===''||$('#qunZhu').val()==null) {
					$('#qunZhu_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#qunZhu_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			$('#jiaose').blur(function() {
				if($('#jiaose').val()===''||$('#jiaose').val()==null) {
					$('#jiaose_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#jiaose_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			$('form').submit(function(){
				for(var i=0;i<tiaojian.length;i++){
					if(tiaojian[i]==0){
					return false;
					}			
				}
			})
                    },

  render: function() {
    return (
    		<div className="newRole">
			<div className="newRoleCenter">
					<div className="newRoletop">
						<span className="newtopTxt">新建角色</span>
						<span className="newtopX">&times;</span>
					</div>
				
					<form className="newRoleMid">
							<p>
								<label htmlFor="user">群组<b>*</b></label>
								<select id="qunZhu" className="selectBg" >
								    <option value="" > </option>
									<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
									<option   value="北京中光电公司" > 北京中光电公司</option>
									<option   value="真视通公司" >真视通公司 </option>
								</select>	
								<span className="user_box" id="qunZhu_tic">选择群组</span>

							</p>
							<p>
								<label htmlFor="user">角色<b>*</b></label>
								<select id="jiaose" className="selectBg" >
								    <option value="" > </option>
									<option   value="管理员" >管理员</option>
									<option   value="运维" > 运维</option>
									<option   value="运维" >运维 </option>
								</select>	
								<span className="user_box" id="jiaose_tic">选择角色</span>
							</p>
							<p className="formBottom">
								<span className="newCox">取消</span>
								<span className="newSure">
									<input type="submit"  placeholder="提交" />
								</span>
							</p>
					</form>
			</div>
		</div>			
  )}
});
export default NewRole
