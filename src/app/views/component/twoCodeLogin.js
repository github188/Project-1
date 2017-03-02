import React, { PropTypes } from 'react';
var ReactRouter = require('react-router');
var Router = ReactRouter;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

const twoCodeLogin = React.createClass({
        render:function () {
            return(<div className="login-bg-1">
            		<div className="login-first">
            			<div className="logo-bg"></div>
            			<div className="login-main">
	            			<div className='top-saoma yangshi'>
			               		 <span className=''>扫码登录</span>
			               		 <Link className='top-saoma-txt' to="/StartForm">
			               		 	<img src='img/images/miasnok01_03.png'/>
			               		 </Link>
		               		 </div>
		               		<div className='biaodan yangshi' action="" method="" onsubmit="">
		               			<div className='erm-fang'></div>
		               		</div>
		               		
		               		<div className='bottom'> 
		               			<div className="bottom-left-erwm">
		               				<p>
										<span className='botton-left-txt'>打开手机智能IT运维平台,扫一扫登录</span>
		               				</p>
								</div>
								<div className='bottomReg-right'>	
								<Link to="/Register" className='bottom-right-txt'>注&nbsp;册</Link>
								</div>
		               		</div>       	
            			</div>
            			<div className="login-footer">
            				<p>Copyright © 2006-2016北京思维实创科技股份有限公司</p>
                			<p>联系电话：<a>400-1046-146</a></p>
            			</div>
            		</div>
            </div>)
        }
   })
module.exports = twoCodeLogin;
