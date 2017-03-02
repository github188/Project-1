import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import $ from 'jquery';
var NewOrgin = React.createClass({
	componentDidMount:function(){ 
		$('#neworgin').blur(function() {
				if($('#neworgin').val()===''||$('#neworgin').val()==null) {
					$('.user_box').css('visibility','visible');
				} else {
					$('.user_box').css('visibility','hidden');
				}
			})
			$('.newOrginMid').submit(function(){
					if($('#neworgin').val()===''||$('#neworgin').val()==null){
					  return false;
					}		
			})
              },

  render: function() {
    return (
    		<div className="newOrgin">
			<div className="newOrginCenter">
					<div className="newOrgintop">
						<span className="newtopTxt">新建组织机构</span>
						<span className="newtopX">&times;</span>
					</div>
					<form className="newOrginMid">
							<p>
								<label htmlFor="user">名称<b>*</b></label>
								<input type='text'id='neworgin' />
								<span className="user_box" id="#neworgin_tic">请输入组织机构名称</span>
							</p>
							<p className="formBottom">
								<span className="newCox">取消</span>
								<span className="newSure">
									<input type="submit"  placeholder="保存" />
								</span>
							</p>
					</form>
			</div>
		</div>			
  )}
});
export default NewOrgin
