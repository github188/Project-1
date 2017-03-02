import React from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
import { Router, Route, link, IndexRoute,History} from 'react-router';
function editPic() {
    return '<a class="EditPar" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPar" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.FaultClaSmaTableEvent = {
    'click .EditPar':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editFaultClaSmaModal").modal("show")
        var pid = row.pId;
        var cid = row.cId;
        var pName = row.pName;
        var cName = row.cName;
        _this.props.setFaultSubPid(pid);
        _this.props.setFaultSubId(cid);
        $("#editParentMagSelect").find(".rw-input").text(pName);
        $("#editFaultClaSmaNameInput").val(cName);
    },
    'click .DelPar':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
    	var pid = row.pId;
        var cid = row.cId;
        var pName = row.pName;
        var cName = row.cName;
        _this.props.setFaultSubPid(pid);
        _this.props.setFaultSubId(cid);
        $("#parentMagSelect").find(".rw-input").text(pName);
        $("#editFaultClaSmaNameInput").val(cName);
        $("#deleteFaultClaSmaModal").modal("show");
    }
};
let _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var FaultClassSmall = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            parentIndex: 0,
            parentIndexEdit:0
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.faultSubData;
      $("#faultClaSmaTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#faultClaSmaTableList").bootstrapTable({
            //url: "FaultClaSmaMag.json",
            // height:538, 
            //striped: true,
            // cellStyle: {backgroundColor: '#daf1f8'},
            columns: [
                {
                    title: '故障细类名称',
                    field: 'cName',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                },{
                    title: '故障大类名称',
                    field: 'pName',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: FaultClaSmaTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: FaultClaSmaTableEvent,
                    formatter: deletePic
                }
            ],
            data: [],
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        titleBoxObj =document.createElement("div");
        let titleBoxObjA = document.createElement("a");
        let titleBoxObjW = document.createElement("span");
        titleBoxObjW.innerHTML = "故障细类管理";
        titleBoxObj.appendChild(titleBoxObjA);
        // console.log(titleBoxObj.appendChild(titleBoxObjA));
        titleBoxObj.setAttribute("class","pull-left");
        // var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            _this.props.get_sysFaultSubType();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加故障细类');
        addBtnObj.innerHTML = "添加故障细类";
        addBtnObj.onclick = function () {
            //alert("开始增加添加二级故障！！");
//          return (<NewUser add_user={ _this.props.add_user} />);
            /*----新建用户--*/
            _this.props.setFaultSubPid("");
            _this.props.setFaultSubId("");
            $('#faultClaSmaNameInput').val("") ;
            $("#parentMagSelect").find(".rw-input").text("请选择");
            $("#addFaultClaSmaModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#faultClaSmaTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
		$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    },
    deleteFaultSubData:function () {
        this.props.delete_sysFaultSubType(18);
        $("#deleteFaultClaSmaModal").modal("hide");
    },
    setFaultPid:function(e){
        var faultType = this.props.faultType;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<faultType.length;i++){
            var faultTypeId = faultType[i].RecId;
            if(pid == faultTypeId){
                that.setState({parentIndex:i+1});
            };
        };
        // console.log(e)
        $("#parentMagSelect").find(".rw-input").text(e.FaultName);
        this.props.setFaultSubPid(pid);
    },
    setFaultPidEdit:function(e){
	    var faultType = this.props.faultType;
	    var pid = e.RecId;
	    var that = this;
	    for(var i=0;i<faultType.length;i++){
	        var faultTypeId = faultType[i].RecId;
	        if(pid == faultTypeId){
	            that.setState({parentIndexEdit:i+1});
	        };
	    };
	    // console.log(e)
	    $("#editParentMagSelect").find(".rw-input").text(e.FaultName);
	    this.props.setFaultSubPid(pid);
    },
    saveFaultSubData:function () {
        this.props.onClickSave(18);
        $("#addFaultClaSmaModal").modal("hide");
    },
    editFaultSubData:function () {
        this.props.onClickEdit(18);
        $("#editFaultClaSmaModal").modal("hide");
    },
    onChangeDropDown:function () {

    },
    render: function() {
    	var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var parents = this.props.faultType;
        var list = [],list1=[];
        list.push({RecId:"",FaultName:""});
        list1.push({RecId:"",FaultName:""});
        for(var i=0;i<parents.length;i++){
            list.push(parents[i]);
            list1.push(parents[i]);
        };
        return (
            <div className = 'FaultClassSmall'>
                {/*添加区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="addFaultClaSmaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加故障细类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"440px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="faultClaNameInput" className="col-sm-5 control-label">故障大类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[parentIndex]} textField="FaultName" onSelect={this.setFaultPid} onChange={this.onChangeDropDown} id="parentMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="faultClaSmaNameInput" className="col-sm-5 control-label">故障细类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="faultClaSmaNameInput" name="faultClaSmaNameInput" placeholder="填写故障细类名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer" style={{"border-top":"none"}}>
                                <button type="button" className="btn btn-info"  onClick={this.saveFaultSubData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="editFaultClaSmaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑故障细类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"440px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editFaultClaNameInput" className="col-sm-5 control-label">故障大类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list1[parentIndexEdit]} textField="FaultName" onSelect={this.setFaultPidEdit} onChange={this.onChangeDropDown} id="editParentMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editFaultClaSmaNameInput" className="col-sm-5 control-label">故障细类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editFaultClaSmaNameInput" placeholder="填写故障细类名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer" style={{"border-top":"none"}}>
                                <button type="button" className="btn btn-info" onClick={this.editFaultSubData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteFaultClaSmaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除故障细类</h4>
                            </div>
                            <div className="modal-body">
                                确定要删除吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteFaultSubData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="faultClaSmaTableList"
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
export default FaultClassSmall