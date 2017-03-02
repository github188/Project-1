import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import EquipmentTodayCtn from './EquipmentTodayCtn';
var EquipmentToday = React.createClass({
  render: function() {
    return (
    			<div className = 'Equipment-today'>
									<p className='Equipment-today-top'></p>
									
									<EquipmentTodayCtn/>
									
									<ul className="Equipment-today-bottom">
											<li >
												<span className="Equipment-today-bottom-qure green"></span> 
												&nbsp;
												<span >设备总数</span>
											</li>			
											<li>
												<span className="Equipment-today-bottom-qure pink"></span>
												&nbsp;<span >在线设备数</span>
											</li>
											<li>
												<span className="Equipment-today-bottom-qure purple"></span>
												&nbsp;<span >计划停机数</span>
											</li>		
											<li className='Equipment-today-bottom-last'>
												<span>设备总数:</span>
												<span>6000</span>台
											</li>
									</ul>	
								</div>	
  )}
});
export default EquipmentToday
