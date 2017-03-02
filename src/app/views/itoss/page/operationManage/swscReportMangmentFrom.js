import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
		
		const ReportMangmentFrom = React.createClass({
			render:function(){
				return(
					<div className='ReportMangmentFromBj'>
					  	<div  className="ReportMangmentFrom">
							<div className='ReportMangmentFromMid'>
							<header className=''>
			   		            <div className='topLeftNewFault'>
			   		                 硬件资产报表
								         
								</div>
								 <ul className='topRightNewFault'>
									 <li>
									   <button  type="button" className='printNewFault'>打印</button>
									 </li>
									 <li>
									   <button type="button" className='sureNewFault'>导出</button>
									 </li>
									  <li>
									   <button type="button" className='fliterReport'>筛选</button>
									 </li>
								 </ul>
		   		       		 </header>
					    <div>我是报表插件</div>
					  </div>
					</div>
					</div>
					)
			}
		})
export default ReportMangmentFrom	