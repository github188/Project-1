import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var userQx = React.createClass({
	componentDidMount:function(){ 
          			
          			
                  },
	
  render: function() {
    return (
   		<div className="quanXiMengban">
			<div className='quanXiMengbanCenter'>
				<div className="newtop">
					<span className="newtopTxt">编辑用户权限</span>
					<span className="newtopX">&times;</span>
				</div>
				<div className="newNav">
					<div className="newNavright">
				
						<li><input type="checkbox"  id="" /><span>查询</span></li>
						<li><input type="checkbox"  id="" /><span>添加</span></li>
						<li><input type="checkbox" id="" /><span>编辑</span></li>
						<li><input type="checkbox"  id="" /><span>删除</span></li>
					
					</div>	
				</div>
				<div className='newForm'>			
					您确定要删除此用户吗?
				</div>
				<div className="dateBottom">
					<span className="newCox">取消</span>
					<span className="newSure"><input type="submit"  className="" value="保存" /></span>
				</div>
			</div>
		</div>
  )}
});
export default userQx
