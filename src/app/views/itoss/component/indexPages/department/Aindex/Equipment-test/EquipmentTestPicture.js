import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import $ from 'jquery';
var EquipmentTestPicture= React.createClass({
  render: function() {
    return (
    		
		 <div id="main">  
		 <div className='EquipmentkongTop'></div>
		 	<div className='Equipment-test-cnt-left-top'>
		 		<div >
		 			<span className='Equipment-test-cnt-left-top-normal'></span>
		 		</div>
		 		<div >
		 			<span className='Equipment-test-cnt-left-top-error'></span>
		 		</div>
		 		<div >
		 			<span className='Equipment-test-cnt-left-top-danger'></span>
		 		</div>
		 		<div >
		 			<span className='Equipment-test-cnt-left-top-forbid'></span>
		 		</div>
		 		
		 	</div>
			  <div className='Equipment-test-cnt-left-bottom'>
				 	 <ul>
					 	 	 <li style={{color:'#66c877'}}>正常</li>
						 	 <li style={{color:'#6991ee'}}>错误</li>
						 	 <li style={{color:'#e19577'}}>危险</li>
						 	 <li style={{color:'#db8cd4'}}>禁止</li>
				 	 </ul>
			 	</div>
		 
		 </div>
		   			
  )}
});
export default EquipmentTestPicture
