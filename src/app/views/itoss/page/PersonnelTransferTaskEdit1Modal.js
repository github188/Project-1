require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import * as operationAction from "../../../actions/operation_action";
import { connect } from 'react-redux';
let _this;

var PersonnelTransferTaskEdit1Modal = React.createClass({
    getInitialState: function() {
        _this = this;
        return {
            isOk:1
        }
    },
    componentDidUpdate:function () {
        const {nextWorkFlowData} = this.props;
        let bdata = [];
        nextWorkFlowData.map(function (item) {
            JSON.parse(item.TO_USERS).forEach(function (item, index) {
                bdata.push(item);
            });
        });
        $("#personnelTransferTaskEdit1TableList").bootstrapTable("load",bdata);
    },
    componentWillMount:function(){

    },
    componentDidMount:function(){
        $("#personnelTransferTaskEdit1TableList").bootstrapTable({
            columns: [
                {
                    field:"state",
                    radio:true
                },
                {
                    title: '用户名',
                    field: 'loginId',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '登录名',
                    field: 'name',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '组织机构',
                    field: 'FDName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '角色名称',
                    field: 'roleName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }
            ],
            data: [],
            //onClickRow: this._onClickRow,
        });
    },
    setRowTaskUserNameEdit1:function () {
        const {dispatch} = this.props;
        let rowUserName = $("#personnelTransferTaskEdit1TableList").bootstrapTable("getSelections");
        let RowUser;
        let RowLoginId;
        let taskFlowAction;
        let taskFromId;
        let taskToId;
        rowUserName.forEach(function (item, index) {
            RowUser = item.name;
            RowLoginId = item.loginId;
            taskFlowAction = item.flowAction;
            taskFromId = item.fromId;
            taskToId = item.toId;
        });
        dispatch(operationAction.setFauleRowUserName(RowLoginId));
        dispatch(operationAction.setFauleFlowAction(taskFlowAction));
        dispatch(operationAction.setFauleFromId(taskFromId));
        dispatch(operationAction.setFauleToId(taskToId));
        dispatch(operationAction.setFauleToUser(RowUser));
        $("#taskNextPeopleEdit").val(RowUser);
        $("#PersonnelTransferTaskEdit1Modal").modal("hide");
    },
    render:function(){
        return (
            <div className="modal fade" id="PersonnelTransferTaskEdit1Modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{"borderBottom":"none"}}>
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="myModalLabel">选择处理人</h4>
                        </div>
                        <div className="modal-body">
                            {/* <PersonnelTransfer />*/}
                            <div className="col-md-12">
                                <table id="personnelTransferTaskEdit1TableList"
                                       data-toggle='table'
                                       data-classes='table table-no-bordered table-striped table-hover'
                                       data-resizable='true'>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer" style={{"borderTop":"none"}}>
                            <button type="button" className="btn btn-primary" style={{"marginTop":"20px"}} onClick={this.setRowTaskUserNameEdit1}>确定</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal" style={{"marginTop":"20px"}}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    const {nextWorkFlowData} = state.operationReducer;

    return {
        nextWorkFlowData:nextWorkFlowData
    }
}
module.exports =  connect(mapStateToProps)(PersonnelTransferTaskEdit1Modal);

