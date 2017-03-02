import React, {PropTypes} from "react";
import ReactDom from "react-dom";
var ReactRouter = require("react-router");
var History = ReactRouter.History;
import * as operationAction from "../../../../../../../actions/operation_action";
import * as dataDictAction from "../../../../../../../actions/dataDict_action";
import * as Store from "../../../../../../../server/store";
import {connect} from "react-redux"
function TaskEditPic(value,row){
    if(row.STATUS == "待处理"){
        return '<a class="TaskEdit" href="javascript:void(0)" title="待处理"><img src="img/images/dclt_03.png"/></a>';
    }else if(row.STATUS == "待评价"){
        return '<a class="TaskEdit" href="javascript:void(0)" title="待评价"><img src="img/images/dpj_03.png"/></a>';
    }else if(row.STATUS == "待关闭"){
        return '<a class="TaskEdit" href="javascript:void(0)" title="待关闭"><img src="img/images/dgb_03.png"/></a>';
    }else if(row.STATUS == "待审批"){
        return '<a class="TaskEdit" href="javascript:void(0)" title="待审批"><img src="img/images/dspt_03.png"/></a>';
    }else {
        return "";
    }
}
function taskFlowPic(){
    return '<a class="taskFlow" href="javascript:void(0)" title="流转"><img src="img/images/lz_03.png"/></a>';
}
function taskDelete(){
    return '<a class="taskDelete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
var _this;
window.taskManagementTableEvent = {
    'click .TaskEdit':function (e, value, row, index) {
        _this.props.setRowStatus(row.STATUS);
            const {dispatch} = _this.props;
            dispatch(operationAction.setOrderDetailsId(row.WORKORDER_ID));
        if(row.STATUS == "待处理"){
            /*$("#taskProjectNameEdit").find(".rw-input").text(row.PROJECT_NAME);
             $("#taskUnitNameEdit").find(".rw-input").text(row.UNITNAME);
             $("#taskUnitTypeEdit").find(".rw-input").text(row.UNITTYPENAME);
             $("#taskThemeEdit").val(row.SUBJECT);
             $("#taskAnalystEdit").val(row.CONTACTS);
             $("#taskPhoneEdit").val(row.CONTACTSNUMBER);
             $("#taskLeaderEdit").val(row.UNITHEAD);
             $("#taskLeaderPhoneEdit").val(row.UNITHEADPHONE);
             $("#taskUnitAddressEdit").val(row.ADDRESS);
             $("#taskCurrentEdit").val(row.WORKORDERDESC);*/
            let filters = [
                {key:"WORKORDER_ID",value:row.WORKORDER_ID}
            ];
            dispatch(operationAction.get_orderDetailsData(filters));
        }else if(row.STATUS == "待评价"){
            let filters = [
                {key:"WORKORDER_ID",value:row.WORKORDER_ID}
            ];
            dispatch(operationAction.get_orderDetailsData(filters));
        }else if(row.STATUS == "待审批"){
            let filters = [
                {key:"WORKORDER_ID",value:row.WORKORDER_ID}
            ];
            dispatch(operationAction.get_orderDetailsData(filters));
        }
        _this.history.pushState(null,'operationManage/taskManagement/taskEditManagement');

    },
    'click .taskFlow':function (e, value, row, index) {
        _this.history.pushState(null,'operationManage/taskManagement/taskEditManagement');
        $('#taskTabEdit a[href="#conversionTaskEdit"]').tab('show');
        $("#conversionTaskEditLi").css({"borderBottomColor": "#349ff1"}).find("a").css({"color":"#349ff1","fontSize":"18px"});
    },
    'click .taskDelete':function (e, value, row, index) {
        let filters = [
            {key:"WORKORDER_ID",value:row.WORKORDER_ID}
        ];
        _this.props.delete_workOrderCommon(filters);
        let filters1 = [
            {key:"PARAM",value:4},
            {key:"WORKFLOW_ID",value:"EmergencySurvey"}
        ];
        _this.props.get_workOrderList(filters1);
    }
};
let refreshBtnObj,addBtnObj;
var TaskManagement = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return{
            isOk: 1,
            taskGroups:null
        }
    },
    componentDidUpdate:function () {
        let bdata = this.props.workOrderList;
        $("#taskTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#taskTableList").bootstrapTable({

            columns: [
                {
                    field: 'state',
                    checkbox: true
                },
                {
                    title: '项目名称',
                    field: 'PROJECT_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '任务主题',
                    field: 'SUBJECT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '单位名称',
                    field: 'UNITNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '调研人',
                    field: 'CONTACTS',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '负责人',
                    field: 'UNITHEAD',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '单位类型',
                    field: 'UNITTYPE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '状态',
                    field: 'STATUS',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: taskManagementTableEvent,
                    formatter: TaskEditPic
                },{
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: taskManagementTableEvent,
                    formatter: taskDelete
                }, {
                    title: '流转',
                    halign: 'left',
                    align: 'left',
                    events: taskManagementTableEvent,
                    formatter: taskFlowPic
                }
            ],
            data: [],
            //onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-info');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            let filters1 = [
                {key:"PARAM",value:4},
                {key:"WORKFLOW_ID",value:"EmergencySurvey"}
            ];
            _this.props.get_workOrderList(filters1);
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '任务新建');
        addBtnObj.innerHTML = "任务新建";
        addBtnObj.onclick = function () {
            /*----新建SLA--*/
            alert("新建++++++++++++++++++++");
            _this.history.pushState(null,'operationManage/taskManagement/taskAddManagement');
        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        $(".form-control").css({ "display": "inline-block", "width": "243px" });
        $("#taskTableList thead>tr").css({ "background": "#daf1f7" });
        $("#taskDeleteBtn").on("click",function () {
            $("#deleteTaskModalAll").modal("show");
        });
    },
    deleteTaskDataAll:function () {
        let rowIds = [];
        let rowIdArr = $("#taskTableList").bootstrapTable("getSelections");
        for (let i = 0;i<rowIdArr.length;i++){
            rowIds.push(rowIdArr[i].WORKORDER_ID);
            _this.setState({taskGroups:i+1});
        }
        let rowIdss = rowIds.join(",");
        let filter = [
            {key:"WORKORDER_ID",value:rowIdss}
        ];
        _this.props.delete_workOrderCommon(filter);
        $("#deleteTaskModalAll").modal("hide");
        let filters2 = [
            {key:"PARAM",value:4},
            {key:"WORKFLOW_ID",value:"EmergencySurvey"}
        ];
        _this.props.get_workOrderList(filters2);
    },
    render: function () {
        return (
            <div className="">
                {/*删除任务管理组------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteTaskModalAll" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除任务管理数据</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除这{_this.state.taskGroups}条数据吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteTaskDataAll}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="taskTitle" style={{"font-size":"16px","height":"20px","margin":"16px 0 0 16px"}}>
                    <span style={{"width":"4px","height":"16px","background-color":"#8eddf2","display":"inline-block","margin-right":"10px"}}></span>
                    任务管理（待办 <span style={{"color":"#8eddf2"}}>11</span> ）
                </div>
                <button id="taskDeleteBtn" style={{"position":"absolute","border":"1px solid #ccc","width":"82px","height":"34px","lineHeight":"34px","textAlign":"center","top":"64px","left":"233px","cursor":"pointer","zIndex":"1"}}>批量删除</button>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="taskTableList"
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
    const {} =state.operationReducer;
    return {

    }
}
export default  connect(myStateToProps)(TaskManagement);