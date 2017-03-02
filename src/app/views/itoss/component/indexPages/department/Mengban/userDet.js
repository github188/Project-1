import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import $ from 'jquery';
var userDet = React.createClass({
	componentDidMount:function(){ 
          			
          			
                  },
	
  render: function() {
    return (
   		<div className="dateMengban">
			<div className='dateMengbanCenter'>
				<div className="newtop">
					<span className="newtopTxt">系统提示</span>
					<span className="newtopX">&times;</span>
				</div>
				<div className='newForm'>			
					您确定要删除此用户吗?
					
				</div>
				<div className="dateBottom">
						<span className="newCox">取消</span>
							<span className="newSure"><input type="submit"  className="" value="确定" /></span>
				</div>
			</div>
		</div>
  )}
});
export default userDet
