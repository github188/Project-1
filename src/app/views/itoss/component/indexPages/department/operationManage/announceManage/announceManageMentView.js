import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, link, IndexRoute} from 'react-router';
//import { connect } from 'react-redux';
var operationAction = require('../../../../../../../actions/operation_action');
var ReactRouter = require('react-router');
var History = ReactRouter.History;

function editPic(value,row) {
    if(row.TOPICSTATUS == 0){
        return '<a class="EditNotice" href="javascript:void(0)" title="审核"><img src="img/images/review.png"/></a>';
    }else if(row.TOPICSTATUS == 2){
        return '<a class="EditNotice" href="javascript:void(0)" title="发布"><img src="img/images/publish.png"/></a>';
    }else if(row.TOPICSTATUS == 1){
        return '<a class="EditNotice" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
    }else {
        return '<a class="EditNotice" href="javascript:void(0)" title="已发布"></a>';
    }
}
function deletePic() {
    return '<a class="DelNotice" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
let _this;
window.noticeTableEvent = {
    'click .EditNotice':function(e, value, row, index){
    	//编辑公告信息
    	//编辑时把是否为修改状态的标记改为true
    	_this.props.setIsEditTopicObjectData(true);
    	_this.props.setTopicName(row.TOPICNAME);
    	_this.props.setTopicContent(row.TOPICCONTENT);
    	_this.props.setTopicInfoListId(row.TOPICID);
    	_this.props.setTopicStatus(row.TOPICSTATUS);
    	_this.props.setTopicReviewDesc(row.REVIEWDESC);
    	if(row.TOPICSTATUS == 1){
    		_this.props.setTopicObjectFlagData(true);
    	}else{
    		_this.props.setTopicObjectFlagData(false);
    	}
    	_this.history.pushState(null,'operationManage/annouceManageAddPage');
    },
    'click .DelNotice':function(e, value, row, index){
    	//删除公告信息
		$("#deleteNoticeModal").modal("show");
        var id = row.TOPICID;
        _this.props.setTopicInfoListId(id);
    }
};

var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var AnnounceManageMent = React.createClass({
	mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            rowIdsCount:null
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.topicInfoListData;
      $("#noticeTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#noticeTableList").bootstrapTable({
            columns: [
            	{
                    field: 'state',
                    checkbox: true
               },{
                    title: '主题',
                    field: 'TOPICNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '提交人',
                    field: 'LASTMODBY',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '提交时间',
                    field: 'LASTMODDATETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '状态',
                    field: 'DESCRIPT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: noticeTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: noticeTableEvent,
                    formatter: deletePic
                }
            ],
            data: [],
            // onClickRow: this._onClickRow,
            // exportDataType: "all"
        });
        
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
        	_this.props.get_topicInfoListData("");
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建公告');
        addBtnObj.innerHTML = "新建公告";
        addBtnObj.onclick = function () {
            /*----新建公告信息--*/
        _this.props.setIsEditTopicObjectData(false);
    	_this.props.setTopicName("");
    	_this.props.setTopicContent("");
    	_this.props.setTopicInfoListId("");
        _this.history.pushState(null,'operationManage/annouceManageAddPage');
        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#noticeTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"float":"left","font-size":"16px","margin-left":"-415px"});
        $(".pull-left>span").css({"margin-left":"10px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
        $(".btn").css({"margin-bottom":"4px"});
        $("#allStatus").on("change",function () {
            let statusCode = "";
            let val = $(this).val();
            if(val == "待发布"){
                statusCode = 2;
                _this.props.get_topicInfoListData(statusCode);
            }else if(val == "待审核"){
                statusCode = 0;
                _this.props.get_topicInfoListData(statusCode);
            }else if(val == "已发布"){
                statusCode = 3;
                _this.props.get_topicInfoListData(statusCode);
            }else if(val == "审核未通过"){
                statusCode = 1;
                _this.props.get_topicInfoListData(statusCode);
            }else if(val == "全部状态"){
                _this.props.get_topicInfoListData(statusCode);
            }
        });
        $("#handleType").on("change",function () {
            let val = $(this).val();
            if(val == "批量发布"){
                let rowIds = [];
                let rowIdArr = $("#noticeTableList").bootstrapTable("getSelections");
                if(rowIdArr.length == 0){
				        	setTimeout(function(){
				                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量发布的公告。"
				                $('#publicMessageModal').modal('show');
				        	},100);
		        			return;
	        			}
                for (let i = 0;i<rowIdArr.length;i++){
                    rowIds.push(rowIdArr[i].TOPICID);
                }
                let rowIdss = rowIds.join(",");
                let filter = [
                    {key:"REVIEWSTATUS",value:3},
                    {key:"TOPICID",value:rowIdss}
                ];
                _this.props.edit_topicInfoData(filter);
            }else if(val == "批量删除"){
            		let rowIdArr = $("#noticeTableList").bootstrapTable("getSelections");
				        if(rowIdArr.length == 0){
				        	setTimeout(function(){
				                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的公告。"
				                $('#publicMessageModal').modal('show');
				        	},100);
				        	return;
				        }
                $("#deleteNoticeAllModal").modal("show");
            }else if(val == "批量审核"){
                let rowIds = [];
                let rowIdArr = $("#noticeTableList").bootstrapTable("getSelections");
                if(rowIdArr.length == 0){
                	setTimeout(function(){
	                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	                    document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量审核的公告。"
	                    $('#publicMessageModal').modal('show');
                	},100);
                	return;
                }
                for (let i = 0;i<rowIdArr.length;i++){
                    rowIds.push(rowIdArr[i].TOPICID);
                }
                let rowIdss = rowIds.join(",");
                let filter = [
                    {key:"TOPICSTATUS",value:2},
                    {key:"TOPICID",value:rowIdss}
                ];
                _this.props.edit_topicInfoData(filter);
            }
        })
    },
    deleteNoticeData:function(){
    	$("#deleteNoticeModal").modal("hide");
    	_this.props.delete_topicInfoListData("");
    },
    deleteNoticeAllData:function(){
    	 $("#deleteNoticeAllModal").modal("hide");
    	let rowIds = [];
        let rowIdArr = $("#noticeTableList").bootstrapTable("getSelections");
        if(rowIdArr.length == 0){
        	setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的公告。"
                $('#publicMessageModal').modal('show');
        	},100);
        	return;
        }
        for (let i = 0;i<rowIdArr.length;i++){
            rowIds.push(rowIdArr[i].TOPICID);
            _this.setState({rowIdsCount:i+1});
        }
        let rowIdss = rowIds.join(",");
        _this.props.delete_topicInfoListData(rowIdss);
    },
    render: function() {
        return (
            <div>
	            <div className="modal fade" id="deleteNoticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	                <div className="modal-dialog">
	                    <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
	                        <div className="modal-header" style={{"background":"#64c4dd"}}>
	                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
	                            <h4 className="modal-title" id="myModalLabel">删除公告信息</h4>
	                        </div>
	                        <div className="modal-body">
	                            确定要删除吗？
	                        </div>
	                        <div className="modal-footer">
	                            <button type="button" className="btn btn-success" onClick={this.deleteNoticeData}>确定</button>
	                            <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div className="modal fade" id="deleteNoticeAllModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	                <div className="modal-dialog">
	                    <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
	                        <div className="modal-header" style={{"background":"#64c4dd"}}>
	                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
	                            <h4 className="modal-title" id="myModalLabel">批量删除公告信息</h4>
	                        </div>
	                        <div className="modal-body">
	                            确定要删除吗？
	                        </div>
	                        <div className="modal-footer">
	                            <button type="button" className="btn btn-success" onClick={this.deleteNoticeAllData}>确定</button>
	                            <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div className="SlaTitle" style={{"font-size":"16px","height":"20px","margin":"16px 0 0 16px"}}>
                    <span style={{"width":"4px","height":"16px","background-color":"#8eddf2","display":"inline-block","margin-right":"10px"}}></span>
                    公告管理
                </div>
                <div style={{"position":"absolute","top":"70px","left":"233px","zIndex":"1"}}>
                    <select name="allStatus" id="allStatus">
                        <option value="全部状态">全部状态</option>
                        <option value="待审核">待审核</option>
                        <option value="待发布">待发布</option>
                        <option value="已发布">已发布</option>
                        <option value="审核未通过">审核不通过</option>
                    </select>
                    <select name="handleType" id="handleType" style={{"marginLeft":"20px"}}>
                        <option value="全部状态">批量操作</option>
                        <option value="批量审核">批量审核</option>
                        <option value="批量发布">批量发布</option>
                        <option value="批量删除">批量删除</option>
                    </select>
                </div>
	            <div className="col-md-12">
	                <table id="noticeTableList"
	                       data-toggle='table'
	                       data-search='true'
	                       data-classes='table table-no-bordered table-hover'
	                       data-show-export="true"
	                       data-show-refresh='false'
	                       data-show-toggle='true'
	                       data-show-columns='true'
	                       data-pagination='true'
	                       data-page-size='10'
	                       data-resizable='true'>
	                </table>
	            </div>
	        </div>
        )}
});
//function mapStateToProps(state) {
//const {topicInfoListData} = state.operationReducer;
//
//return {
//	topicInfoListData:topicInfoListData
//}
//}
//export default connect(mapStateToProps)(AnnounceManageMent)
export default AnnounceManageMent;
