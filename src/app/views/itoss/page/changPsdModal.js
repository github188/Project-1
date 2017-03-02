import { connect } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import * as SystemAction from "../../../actions/system_action";
import Store from '../../../server/store';

var ChangPsdModal = React.createClass({
	
	componentDidMount:function(){
	    $('#changePsdUserName').val(Store.get("localUserName"));
 	    console.log($('#changePsdUserName').val(Store.get("localUserName")));
	},
	
	clickChangePswUser:function(){
		var {dispatch} = this.props;
		var changePsdUserName = $('#changePsdUserName').val();
		var changeNewPsd = $('#changeNewPsd').val();
		var changePsdSure = $('#changePsdSure').val();
		console.log(changePsdUserName);
		console.log(changeNewPsd);
		console.log(changePsdSure);
		var filter = [
		{key: "LOGIN_ID", value: changePsdUserName},
		{key: "NEW_PWD", value: changeNewPsd},
        {key: "SURE_NEW_PWD", value: changePsdSure}
		]
		 dispatch(SystemAction.changePassword(filter));
	},
  render: function() {
  	const {dispatch} = this.props;
    return (
    	<div >
    		    <div className="modal fade" id="changPsdModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" style={{'width':'380px','margin':'68px auto'}}>

                        <div className="modal-content" style={{'width':'380px'}}>
                            <div className="modal-header" style={{'background':'#64c4dd'}}>
                                <button type="button" className="close" style={{'color':'white'}} data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" style={{'color':'white'}} id="">修改密码</h4>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <form className="form-horizontal" role="form">
		                                    <div className="form-group">
		                                        <label for="inputEmail3" style={{'width':'72px'}}  className="col-sm-5 control-label">用户名</label>
		
		                                        <div className="col-sm-6">
		                                            <input type="text" className="form-control" id='changePsdUserName' style={{width:'246px'}} 	disabled={true} />
		                                        </div>
		                                    </div>
		                                    <div className="form-group" style={{'display':'none'}}>
		                                        <label for="inputPassword3" style={{'width':'72px'}}  className="col-sm-5 control-label">旧密码</label>
		
		                                        <div className="col-sm-6">
		                                            <input type="text" className="form-control" id='changeOldPsd'  style={{width:'246px'}} placeholder="请输入旧密码" />
		                                        </div>
		                                    </div>
		                                     <div className="form-group">
		                                        <label for="inputEmail3" style={{'width':'72px'}}  className="col-sm-5 control-label">新密码</label>
		
		                                        <div className="col-sm-6">
		                                            <input type="password" className="form-control" id='changeNewPsd'  style={{width:'246px'}} placeholder="请输入新密码" />
		                                        </div>
		                                    </div>
		                                    <div className="form-group">
		                                        <label for="inputPassword3" style={{'width':'72px'}} className="col-sm-5 control-label">确认</label>
		
		                                        <div className="col-sm-6">
		                                            <input type="password" className="form-control" id='changePsdSure' style={{width:'246px'}}  placeholder="确认新密码" />
		                                        </div>
		                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-dismiss="modal"  onClick={this.clickChangePswUser}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>



    	</div>

  )}
});
function changePasswordFlag(state) {
  const {changePasswordFlag} = state.systemReducer;
  return {
    changePasswordFlag:changePasswordFlag
  }
}
export default connect(changePasswordFlag)(ChangPsdModal)
