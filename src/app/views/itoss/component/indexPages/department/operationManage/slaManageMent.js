import React, {PropTypes} from "react";
import ReactDom from "react-dom";
var ReactRouter = require("react-router");
var History = ReactRouter.History;
import {connect} from "react-redux"
function editPic(value,row){
    if(row.STATUSCODE == 0){
        return '<a class="slaMentEdit" href="javascript:void(0)" title="审核"><img src="img/images/review.png"/></a>';
    }else if(row.STATUSCODE == 2){
        return '<a class="slaMentEdit" href="javascript:void(0)" title="发布"><img src="img/images/publish.png"/></a>';
    }else if(row.STATUSCODE == 1){
        return '<a class="slaMentEdit" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
    }else {
        return "";
    }
   /* return '<a class="slaMentEdit" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';*/
}
function deletePic(){
    return '<a class="slaMentDelete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
var _this;
window.slaManageMentTableEvent = {
    'click .slaMentEdit':function (e, value, row, index) {
        _this.props.setSlaStatusCode(row.STATUSCODE);
        _this.props.setSlaRowId(row.SLAID);
        _this.props.setSlaRowCompanyId(row.ORGANIZATION_ID);
        _this.props.setSlaRowProjectId(row.PROJECT_ID);
        _this.props.setSlaRowUnitTypeId(row.UNITTYPE_ID);
        _this.props.setSlaRowStatusId(row.SLA_STATUS);
        _this.props.setSlaRowBigServiceId(row.SCLID);
        _this.props.setSlaRowServiceSubId(row.SITID);
        _this.props.setSlaRowWorkTimeId(row.WORKTIME_ID);
        _this.props.setSlaRowStartTimeVal(row.STARTTIME);
        _this.props.setSlaRowEndTimeVal(row.ENDTIME);
        _this.props.setSLaRowServiceType(row.UNIT);
        _this.history.pushState(null,"operationManage/slaEditDetail");
        $("#SlaTitleEdit").val(row.SLA_TITLE);
        $("#projectNameEdit").find(".rw-input").text(row.PROJECT_NAME);
        $("#statussEdit").find(".rw-input").text(row.SLA_STATUSNAME);
        $("#serviceSubEdit").find(".rw-input").text(row.SITNAME);
        $("#responseTimeEdit").val(row.RESPONSETIME);
        $("#workTimeEdit").find(".rw-input").text(row.WORKTIME);
        $("#endTimeEdit").val(row.ENDTIME);
        $("#organizationEdit").find(".rw-input").text(row.ORGANIZATION_NAME);
        $("#unitTypeEdit").find(".rw-input").text(row.UNITTYPE_NAME);
        $("#bigServiceEdit").find(".rw-input").text(row.SCLNAME);
        $("#serviceProjectEdit").val(row.SERVICECONTENT);
        $("#solutionTimeEdit").val(row.SOLUTIONTIME);
        $("#startTimeEdit").val(row.STARTTIME);
        $("#resNumberEdit1").val(row.RESPONSE1);
        $("#resNumberEdit2").val(row.RESPONSE2);
        $("#resNumberEdit3").val(row.RESPONSE3);
        $("#resNumberEdit4").val(row.RESPONSE4);
        $("#resNumberEdit5").val(row.RESPONSE5);
        $("#sulNumberEdit1").val(row.SOLUTION1);
        $("#sulNumberEdit2").val(row.SOLUTION2);
        $("#sulNumberEdit3").val(row.SOLUTION3);
        $("#sulNumberEdit4").val(row.SOLUTION4);
        $("#sulNumberEdit5").val(row.SOLUTION5);
        $("#totalTimeEdit").val(row.TOTALCOUNT);
        $("#residueTimeEdit").val(row.EXECOUNT);
    },
    'click .slaMentDelete':function (e, value, row, index) {
        let slaId = row.SLAID;
        _this.props.setSLAInfoId(slaId);
        $("#deleteSLAModal").modal("show");
    }
};
let refreshBtnObj,addBtnObj;
var SLAManageMent = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return{
            isOk: 1,
            rowIdsCount:null
        }
    },
    componentDidUpdate:function () {
       let bdata = this.props.slaInfoData;
        $("#slaTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#slaTableList").bootstrapTable({

            columns: [
                {
                    field: 'state',
                    checkbox: true
                },
                {
                    title: 'SLA标题',
                    field: 'SLA_TITLE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '项目',
                    field: 'PROJECT_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '单位类型',
                    field: 'UNITTYPE_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '服务项',
                    field: 'SERVICECONTENT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '响应时间(分)',
                    field: 'RESPONSETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '解决时间(分)',
                    field: 'SOLUTIONTIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '状态',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: slaManageMentTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: slaManageMentTableEvent,
                    formatter: deletePic
                }
            ],
            data: [],
            //onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            _this.props.get_slaInfoData();
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建SLA');
        addBtnObj.innerHTML = "新建SLA";
        addBtnObj.onclick = function () {
            /*----新建SLA--*/
        //    alert("新建++++++++++++++++++++");
            _this.history.pushState(null,'operationManage/slaAddDetail');
        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        $(".form-control").css({ "display": "inline-block", "width": "243px" });
        $("#slaTableList thead>tr").css({ "background": "#d8e1e5" });
        $(".btn").css({"margin-bottom":"4px"});
        $("#allStatus").on("change",function () {
            let statusCode = "";
            let val = $(this).val();
            if(val == "待发布"){
                statusCode = 2;
                _this.props.get_slaInfoData(statusCode);
            }else if(val == "待审核"){
                statusCode = 0;
                _this.props.get_slaInfoData(statusCode);
            }else if(val == "已发布"){
                statusCode = 3;
                _this.props.get_slaInfoData(statusCode);
            }else if(val == "审核未通过"){
                statusCode = 1;
                _this.props.get_slaInfoData(statusCode);
            }else if(val == "全部状态"){
                _this.props.get_slaInfoData(statusCode);
            }
        });
        $("#handleType").on("change",function () {
            let val = $(this).val();
        //    alert(val);
            if(val == "批量发布"){
                let rowIds = [];
                let rowIdArr = $("#slaTableList").bootstrapTable("getSelections");
                if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量发布的SLA。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                for (let i = 0;i<rowIdArr.length;i++){
                    rowIds.push(rowIdArr[i].SLAID);
                }
                let rowIdss = rowIds.join(",");
                let filter = [
                    {key:"REVIEWSTATUS",value:3},
                    {key:"SLAID",value:rowIdss}
                ];
                _this.props.edit_slaInfoData(filter);
            }else if(val == "批量删除"){
            	let rowIdArr = $("#slaTableList").bootstrapTable("getSelections");
            	if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的SLA。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                $("#deleteSLAModalAll").modal("show");
            }else if(val == "批量审核"){
                let rowIds = [];
                let rowIdArr = $("#slaTableList").bootstrapTable("getSelections");
                if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量审核的SLA。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                for (let i = 0;i<rowIdArr.length;i++){
                    rowIds.push(rowIdArr[i].SLAID);
                }
                let rowIdss = rowIds.join(",");
                let filter = [
                    {key:"REVIEWSTATUS",value:3},
                    {key:"SLAID",value:rowIdss}
                ];
                _this.props.edit_slaInfoData(filter);
            }
        })
    },
    deleteSLAData:function () {
        let filter = [
            {key:"SLAID",value:_this.props.slaInfoId}
        ];
       _this.props.delete_slaInfoData(filter);
        $("#deleteSLAModal").modal("hide");
    },
    deleteSLADataAll:function () {
        let rowIds = [];
        let rowIdArr = $("#slaTableList").bootstrapTable("getSelections");
        if(rowIdArr.length == 0){
        	setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的SLA。"
                $('#publicMessageModal').modal('show');
        	},100);
        	return;
        }
        for (let i = 0;i<rowIdArr.length;i++){
            rowIds.push(rowIdArr[i].SLAID);
            _this.setState({rowIdsCount:i+1});
        }
        let rowIdss = rowIds.join(",");
        let filter = [
            {key:"SLAID",value:rowIdss}
        ];
        $("#deleteSLAModalAll").modal("hide");
        _this.props.delete_slaInfoData(filter);
    },
    render: function () {
        return (
            <div className="">
                {/*删除服务级别协议------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteSLAModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除服务级别协议</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此SLA数据吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteSLAData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除服务级别协议组------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteSLAModalAll" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除服务级别协议</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除这{_this.state.rowIdsCount}条数据吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteSLADataAll}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SlaTitle" style={{"font-size":"16px","height":"20px","margin":"16px 0 0 16px"}}>
                    <span style={{"width":"4px","height":"16px","background-color":"#8eddf2","display":"inline-block","margin-right":"10px"}}></span>
                    SLA管理
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
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="slaTableList"
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
        )
    }
});
function myStateToProps(state) {
    const {slaInfoData,slaInfoId} =state.operationReducer;
    return {
        slaInfoData:slaInfoData,
        slaInfoId:slaInfoId
    }
}
export default  connect(myStateToProps)(SLAManageMent);