import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import $ from 'jquery';
//import zTree from 'zTree';
var UserBj = React.createClass({
	componentDidMount:function(){ 
					$('.newtopX,.newCox').click(function(){
						$('.bianjiMengban').css({'display':'none'})
					});
					var setting = {
						view: {
							selectedMulti: false
						},
						check: {
							enable: true
						},
						data: {
							simpleData: {
								enable: true
							}
						},
						callback: {
							beforeCheck: beforeCheck,
							onCheck: onCheck
						}
					};

					var zNodes =[
						{ id:1, pId:0, name:"资产管理",open:true},
						{ id:11, pId:1, name:"资产统计"},
						{ id:12, pId:1, name:"资产统计2"},
						{ id:121, pId:12, name:"资产统计2-1"},
						{ id:122, pId:12, name:"资产统计2-2"},
						{ id:123, pId:1, name:"硬件管理"},
						{ id:124, pId:123, name:"硬件管理-1"},
						{ id:123, pId:22, name:"监控同步"},
						
						{ id:2, pId:0, name:"运维管理"},
						{ id:21, pId:2, name:"运维管理 2-1"},
						{ id:22, pId:2, name:"运维管理 2-2"},
						{ id:221, pId:22, name:"运维管理 2-2-1"},
						{ id:222, pId:22, name:"运维管理 2-2-2"},
						{ id:23, pId:2, name:"运维管理 2-3"},
						
						{ id:3, pId:0, name:"系统设置"},
						{ id:31, pId:3, name:"数据字典-1"},
						{ id:32, pId:3, name:"组织机构-2"},
						{ id:321, pId:3, name:"系统设置2-1"},
						{ id:322, pId:3, name:"系统设置2-2"},
						{ id:33, pId:3, name:"用户管理"},
						{ id:331, pId:3, name:"用户管理-1"},
						{ id:34, pId:3, name:"角色管理"},
						{ id:341, pId:3, name:"角色管理-1"},
						
						{ id:4, pId:0, name:"系统设置"},
						{ id:41, pId:4, name:"数据字典-1"},
						{ id:42, pId:41, name:"组织机构-2"},
						{ id:421, pId:41, name:"系统设置2-1"},
						{ id:422, pId:4, name:"系统设置2-2"},
						{ id:43, pId:4, name:"用户管理"},
						{ id:431, pId:4, name:"用户管理-1"},
						{ id:44, pId:4, name:"角色管理"},
						{ id:441, pId:4, name:"角色管理-1"}
					];
					
					var code, log, className = "dark";
					function beforeCheck(treeId, treeNode) {
						className = (className === "dark" ? "":"dark");
						showLog("[ "+getTime()+" beforeCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name );
						return (treeNode.doCheck !== false);
					}
					function onCheck(e, treeId, treeNode) {
						showLog("[ "+getTime()+" onCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name );
					}		
					function showLog(str) {
						if (!log) log = $("#log");			
					}
					function getTime() {
						var now= new Date(),
						h=now.getHours(),
						m=now.getMinutes(),
						s=now.getSeconds(),
						ms=now.getMilliseconds();
						return (h+":"+m+":"+s+ " " +ms);
					}
/*
					function checkNode(e) {
						var zTree = $.fn.zTree.getZTreeObj($("#treeDemo"),
						 type = e.data.type,
						if (type == "checkAllTrue") {
							zTree.checkAllNodes(true);
						} else if (type == "checkAllFalse") {
							zTree.checkAllNodes(false);
						} else {
							var callbackFlag = $("#callbackTrigger").attr("checked");		
						}
					}
*/
			/*		function setAutoTrigger(e) {
						var zTree = $.fn.zTree.getZTreeObj($("#treeDemo");
						zTree.setting.check.autoCheckTrigger = $("#autoCallbackTrigger").attr("checked");
						$("#autoCheckTriggerValue").html(zTree.setting.check.autoCheckTrigger ? "true" : "false");
					}
*/
					$(document).ready(function(){
//						$.fn.zTree.init($("#treeDemo"), setting, zNodes);
						/*$("#checkTrue").bind("click", {type:"checkTrue"}, checkNode);
						$("#checkFalse").bind("click", {type:"checkFalse"}, checkNode);
						$("#toggle").bind("click", {type:"toggle"}, checkNode);
						$("#checkTruePS").bind("click", {type:"checkTruePS"}, checkNode);
						$("#checkFalsePS").bind("click", {type:"checkFalsePS"}, checkNode);
						$("#togglePS").bind("click", {type:"togglePS"}, checkNode);
						$("#checkAllTrue").bind("click", {type:"checkAllTrue"}, checkNode);
						$("#checkAllFalse").bind("click", {type:"checkAllFalse"}, checkNode);*/

						$("#autoCallbackTrigger").bind("change", {});
					});
				
                    },
	
	
  render: function() {
    return (
   		<div className="bianjiMengban">
			<div className="newMengbanCenter">
				<div className="newtop">
					<span className="newtopTxt">编辑用户权限</span>
					<span className="newtopX">&times;</span>
				</div>			
				<div className="content_wrap">
					<div className="zTreeDemoBackground left">
						<ul id="treeDemo" className="ztree"></ul>
					</div>
				</div>
				<div className="formBottom">
							<span className="newCox">取消</span>
							<span className="newSure">
								<input type="submit"  className="" value="保存" />
							</span>
				</div>
			</div>
		</div>		
  )}
});
export default UserBj
