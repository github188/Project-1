import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
		
		const ReportMangmentPie = React.createClass({
			render:function(){
				return(
					<div className='ReportMangmentFromBj' style={{'width':'100%','height':'100%','background':'#eef5f8'}}>
					  	<div  className="ReportMangmentFrom">
							<div className='ReportMangmentFromMid'>
							<header className=''>
			   		            <div className='topLeftNewFault'>
			   		                 硬件资产图
								         
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
					    <div>我是图都是</div>
					  </div>
					</div>
					</div>
					)
			}
		})
export default ReportMangmentPie	