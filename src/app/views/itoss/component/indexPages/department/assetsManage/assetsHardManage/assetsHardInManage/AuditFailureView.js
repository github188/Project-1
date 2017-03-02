//审核未通过页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
		
const AuditFailureView = React.createClass({
			render:function(){
				return(
					<div className='home'>我是审核未通过</div>
					)
			}
		})
export default AuditFailureView;