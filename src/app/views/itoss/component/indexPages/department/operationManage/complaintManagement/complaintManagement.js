import React, {PropTypes} from "react";
import ReactDom from "react-dom";
var ReactRouter = require("react-router");
var History = ReactRouter.History;
import {connect} from "react-redux"
function complaintEditPic(value,row){
    if(row.STATUS == "待处理"){
        return '<a class="ComplaintEdit" href="javascript:void(0)" title="待处理"><img src="img/images/dclt_03.png"/></a>';
    }else if(row.STATUS == "待评价"){
        return '<a class="ComplaintEdit" href="javascript:void(0)" title="待评价"><img src="img/images/dpj_03.png"/></a>';
    }else if(row.STATUS == "待关闭"){
        return '<a class="ComplaintEdit" href="javascript:void(0)" title="待关闭"><img src="img/images/dgb_03.png"/></a>';
    }else {
        return "";
    }
}
function complaintDeletePic(){
    return '<a class="ComplaintDelete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
function complaintFlowPic(){
    return '<a class="complaintFlow" href="javascript:void(0)" title="流转"><img src="img/images/lz_03.png"/></a>';
}
var _this;
window.complaintManagementTableEvent = {
    'click .ComplaintEdit':function (e, value, row, index) {
        _this.history.pushState(null,'operationManage/complaintManagement/complaintEditManagement');
    },
    'click .ComplaintDelete':function (e, value, row, index) {
        let filters = [
            {key:"WORKORDER_ID",value:row.WORKORDER_ID}
        ];
        _this.props.delete_workOrderCommon(filters);
        let filters1 = [
            {key:"PARAM",value:4},
            {key:"WORKFLOW_ID",value:"ComplaintWorkOrder"}
        ];
        _this.props.get_workOrderList(filters1);
    },
    'click .complaintFlow':function (e, value, row, index) {

    }
};
let refreshBtnObj,addBtnObj;
var ComplaintManagement = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return{
            isOk: 1,
            complaintGroups:null
        }
    },
    componentDidUpdate:function () {
        let bdata = this.props.workOrderList;
        $("#complaintTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#complaintTableList").bootstrapTable({

            columns: [
                {
                    field: 'state',
                    checkbox: true
                },
                {
                    title: '投诉级别',
                    field: 'COMPLAINTLEVEL',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '投诉主题',
                    field: 'SUBJECT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '被投诉单位',
                    field: 'COMPLAINTUNIT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '投诉内容',
                    field: 'WORKORDERDESC',
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
                    events: complaintManagementTableEvent,
                    formatter: complaintEditPic
                },{
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: complaintManagementTableEvent,
                    formatter: complaintDeletePic
                }, {
                    title: '流转',
                    halign: 'left',
                    align: 'left',
                    //events: complaintManagementTableEvent,
                    formatter: complaintFlowPic
                }
            ],
            data: [],
            //onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-default');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            let filters2 = [
                {key:"PARAM",value:4},
                {key:"WORKFLOW_ID",value:"ComplaintWorkOrder"}
            ];
            _this.props.get_workOrderList(filters2);
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '投诉新建');
        addBtnObj.innerHTML = "投诉新建";
        addBtnObj.onclick = function () {
            /*----新建SLA--*/
            alert("新建++++++++++++++++++++");
            _this.history.pushState(null,'operationManage/complaintManagement/complaintAddManagement');
        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        $(".form-control").css({ "display": "inline-block", "width": "243px" });
        $("#complaintTableList thead>tr").css({ "background": "#daf1f7" });
        $("#complaintDeleteBtn").on("click",function () {
            let rowIds = [];
            let rowIdArr = $("#complaintTableList").bootstrapTable("getSelections");
            for (let i = 0;i<rowIdArr.length;i++){
                rowIds.push(rowIdArr[i].WORKORDER_ID);
                _this.setState({complaintGroups:i+1});
            }
           $("#deleteComplaintModalAll").modal("show");
        });
    },
    deleteComplaintDataAll:function () {
        let rowIds = [];
        let rowIdArr = $("#complaintTableList").bootstrapTable("getSelections");
        for (let i = 0;i<rowIdArr.length;i++){
            rowIds.push(rowIdArr[i].WORKORDER_ID);
            _this.setState({complaintGroups:i+1});
        }
        let rowIdss = rowIds.join(",");
        let filter = [
            {key:"WORKORDER_ID",value:rowIdss}
        ];
        _this.props.delete_workOrderCommon(filter);
        $("#deleteComplaintModalAll").modal("hide");
        let filters2 = [
            {key:"PARAM",value:4},
            {key:"WORKFLOW_ID",value:"ComplaintWorkOrder"}
        ];
        _this.props.get_workOrderList(filters2);
    },
    render: function () {
        return (
            <div className="">
                {/*删除投诉管理组------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteComplaintModalAll" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除投诉管理数据</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除这{_this.state.complaintGroups}条数据吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteComplaintDataAll}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="complaintTitle" style={{"font-size":"16px","height":"20px","margin":"16px 0 0 16px"}}>
                    <span style={{"width":"4px","height":"16px","background-color":"#8eddf2","display":"inline-block","margin-right":"10px"}}></span>
                    投诉管理（待办 <span style={{"color":"#8eddf2"}}>11</span> ）
                </div>
                <button id="complaintDeleteBtn" style={{"position":"absolute","border":"1px solid #ccc","width":"82px","height":"34px","lineHeight":"34px","textAlign":"center","top":"64px","left":"233px","cursor":"pointer","zIndex":"1"}}>批量删除</button>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="complaintTableList"
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
export default  connect(myStateToProps)(ComplaintManagement);