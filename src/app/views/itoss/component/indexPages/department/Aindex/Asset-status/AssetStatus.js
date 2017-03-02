import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var AssetStatus = React.createClass({
  render: function() {
    return (
    		<div className = 'Asset-status'>
									<p className='Asset-status-top'></p>
									<p className ='Asset-status-cnt'>
							{	/*	<canvas id="oCanvas" width="290px" height="214px" ref='oCanvas'></canvas>*/}
									</p>
										<ul className="Asset-status-bottom">
											<li >
												<span className="Asset-status-roll green"></span> 
												<span >在线</span>
												<span ><input type="text" id="zaixian" defaultValue="33" />
												%</span>
											</li>			
											<li>
												<span className="Asset-status-roll pink"></span>
												<span >库存</span>
												<span ><input type="text" id='kucun' defaultValue="33" />%
												</span>
											</li>
											<li className='Asset-status-bottom-last'>
												<span className="Asset-status-roll purple"></span>
												<span >维修</span>
												<span ><input type="text" id='weixiu' defaultValue="34"/>%
												</span>
											</li>		
										</ul>	
									
								</div>				
  )}
});
export default AssetStatus
