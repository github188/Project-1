//待审核页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
		
const CheckPendingView = React.createClass({
			render:function(){
				return(
					<div className='home'>我是待审核页面</div>
					)
			}
		})
export default CheckPendingView;