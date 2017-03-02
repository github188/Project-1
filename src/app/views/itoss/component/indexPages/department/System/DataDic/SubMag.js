import React from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
import { Router, Route, link, IndexRoute,History} from 'react-router';
function editPic() {
    return '<a class="EditSub" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelSub" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
let _this;
window.subMagTableEvent = {
    'click .EditSub':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editChildModal").modal("show");
        var pid = row.pId;
        var cid = row.recId;
        var cName = row.childAreaName;
        var pName = row.parentAreaName;
        var cDesc = row.childAreaDesc;
        var cCode = row.childAreaCode;
        _this.props.setChildAreaPid(pid);
        _this.props.setChildAreaId(cid);
        $("#editParentMagSelect").find(".rw-input").text(pName);
        $("#editChildNameInput").val(cName);
        $("#editChildDescInput").val(cDesc);
        $("#editChildCodeInput").val(cCode);
    },
    'click .DelSub':function(e, value, row, index){
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
        var cid = row.recId;
        var cName = row.childAreaName;
        var pName = row.parentAreaName;
        var cDesc = row.childAreaDesc;
        var cCode = row.childAreaCode;
        _this.props.setChildAreaPid(pid);
        _this.props.setChildAreaId(cid);
        $("#parentMagSelect").find(".rw-input").text(pName);
        $("#editChildNameInput").val(cName);
        $("#editChildDescInput").val(cDesc);
        $("#editChildCodeInput").val(cCode);
        $("#deleteChildModal").modal("show");
    }
};
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var SubMag = React.createClass({
    getInitialState: function () {
        _this = this;
        return {
            parentIndex: 0,
            parentIndexEdit:0
        }
    },
    componentDidUpdate:function(){
        var bdata = this.props.childAreaData;
        $("#subTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#subTableList").bootstrapTable({
            columns: [
                {
                    title: '子区域',
                    field: 'childAreaName',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '代号',
                    field: 'childAreaCode',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '父区域',
                    field: 'parentAreaName',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                },{
                    title: '描述',
                    field: 'childAreaDesc',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: subMagTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: subMagTableEvent,
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
        titleBoxObjW.innerHTML = "子区域管理";
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
            _this.props.get_childAreaData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加子区域');
        addBtnObj.innerHTML = "添加子区域";
        addBtnObj.onclick = function () {
            /*----新建区域--*/
           $("#parentMagSelect").find(".rw-input").text("请选择");
           $("#addChildModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#subTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
        $(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    deleteAreaChild:function () {
        this.props.delete_areaData(2);
        $("#deleteChildModal").modal("hide");
    },
    setCurChildPid:function(e){
        var areaData = this.props.areaData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<areaData.length;i++){
            var areaDataId = areaData[i].RecId;
            if(pid == areaDataId){
                that.setState({parentIndex:i+1});
            };
        };
        // console.log(e)
        $("#parentMagSelect").find(".rw-input").text(e.Name);
        this.props.setChildAreaPid(pid);
    },
    setCurChildPidEdit:function(e){
	    var areaData = this.props.areaData;
	    var pid = e.RecId;
	    var that = this;
	    for(var i=0;i<areaData.length;i++){
	        var areaDataId = areaData[i].RecId;
	        if(pid == areaDataId){
	            that.setState({parentIndexEdit:i+1});
	        };
	    };
	    // console.log(e)
	    $("#editParentMagSelect").find(".rw-input").text(e.Name);
	    this.props.setChildAreaPid(pid);
    },
    saveChildData:function () {
        this.props.onClickSave(2);
        $("#addChildModal").modal("hide");
    },
    editChildData:function () {
        this.props.onClickEdit(2);
        $("#editChildModal").modal("hide");
    },
    onChangeDropDown:function () {

    },
    render: function() {
        var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var parents = this.props.areaData;
        var list = [],list1=[];
        list.push({RecId:"",Name:""});
        list1.push({RecId:"",Name:""});
        for(var i=0;i<parents.length;i++){
            list.push(parents[i]);
            list1.push(parents[i]);
        };
        return (
            <div className = ''>
                {/*添加区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="addChildModal" tabindex="-1" role="dialog" aria-labelledby="addChildModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加子区域</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"440px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="parentNameInput" className="col-sm-5 control-label">父区域名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[parentIndex]} textField="Name" onSelect={this.setCurChildPid} onChange={this.onChangeDropDown} id="parentMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="childNameInput" className="col-sm-5 control-label">子区域名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="childNameInput" name="childNameInput"  placeholder="填写子区域名称"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="childCodeInput" className="col-sm-5 control-label">子区域代号</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="childCodeInput" name="childCodeInput" placeholder="填写代号"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="childDescInput" className="col-sm-5 control-label">描述</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className=" col-sm-6">
                                                <textarea className="form-control" id="childDescInput" name="childDescInput" placeholder="区域描述" style={{"height":"100px"}}></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveChildData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="editChildModal" tabindex="-1" role="dialog" aria-labelledby="editChildModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑子区域</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"440px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editParentNameInput" className="col-sm-5 control-label">父区域名称</label>
                                           <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                           <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list1[parentIndexEdit]} textField="Name" onSelect={this.setCurChildPidEdit} onChange={this.onChangeDropDown} id="editParentMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editChildNameInput" className="col-sm-5 control-label">子区域名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editChildNameInput" name="editChildNameInput" placeholder="填写子区域名称"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editChildCodeInput" className="col-sm-5 control-label">子区域代号</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editChildCodeInput" name="editChildCodeInput" placeholder="填写代号"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editChildDescInput" className="col-sm-5 control-label">描述</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className=" col-sm-6">
                                                <textarea className="form-control" id="editChildDescInput" name="editChildDescInput" placeholder="区域描述" style={{"height":"100px"}}></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editChildData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteChildModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除子区域</h4>
                            </div>
                            <div className="modal-body">
                                确定要删除吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteAreaChild}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="subTableList"
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
export default SubMag