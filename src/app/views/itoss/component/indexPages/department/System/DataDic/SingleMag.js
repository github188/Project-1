import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, link, IndexRoute,History} from 'react-router';
import ReactWidgets from "react-widgets";
function editPic() {
    return '<a class="EditSingle" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelSingle" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.singleMagTableEvent = {
    'click .EditSingle':function(e, value, row, index){
        // console.log(e,value,row,index,"edit")
        $("#editSingleModal").modal("show");
         var id = row.RecId;
         var bot = row.BoType;
         var pid = row.ProjectId;
         _this.props.setWorkOrderBot(bot);
        _this.props.setWorkOrderTypeId(id);
        _this.props.setProjectId(pid);
        $("#editSingleNameInput").find(".rw-input").text(row.Name);
        $("#editSingleCodeInput").val(row.Code);
        $("#editSubProjectInput").find(".rw-input").text(row.ProjectName);
    },
    'click .DelSingle':function(e, value, row, index){
    	$("#deleteSingleModal").modal("show")
        var id = row.RecId;
        var bot = row.BoType;
        var pid = row.ProjectId;
        _this.props.setWorkOrderBot(bot);
        _this.props.setWorkOrderTypeId(id);
        _this.props.setProjectId(pid);
        $("#editSingleNameInput").find(".rw-input").text(row.Name);
        $("#editSingleCodeInput").val(row.Code);
        $("#editSubProjectInput").find(".rw-input").text(row.ProjectId);
    }
};
let _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var SingleMag = React.createClass({
    getInitialState: function () {
        _this = this;
        return {
            projectIndex: 0,
            projectIndexEdit:0,
            workOrderIndex: 0,
            workOrderIndexEdit: 0
        }
    },
    componentDidUpdate:function(){
        var bdata = this.props.workOrderTypeAllData;
        $("#singleTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#singleTableList").bootstrapTable({
            columns: [
                {
                    title: '工单名称',
                    field: 'Name',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '工单缩写',
                    field: 'Code',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '所属项目',
                    field: 'ProjectName',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                },{
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: singleMagTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: singleMagTableEvent,
                    formatter: deletePic
                }
            ],
            data: [],
            // onClickRow: this._onClickRow,
            // exportDataType: "all"
        });
        titleBoxObj =document.createElement("div");
        let titleBoxObjA = document.createElement("a");
        let titleBoxObjW = document.createElement("span");
        titleBoxObjW.innerHTML = "工单类型管理";
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
            _this.props.get_workOrderTypeAllData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加工单类型');
        addBtnObj.innerHTML = "添加工单类型";
        addBtnObj.onclick = function () {
            // alert("开始增加新的区域！！");
//          return (<NewUser add_user={ _this.props.add_user} />);
            /*----新建用户--*/
            $("#singleNameInput").find(".rw-input").text("请选择");
            $("#subProjectInput").find(".rw-input").text("请选择");
             $("#addSingleModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#singleTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
		$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    },
    saveSingleData:function(){
        var name = $("#singleCodeInput").val();
        if(name != null && name != "") {
            $("#singleCodeInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#singleCodeInput").focus();
            $("#singleCodeInput").css("outline", "none");
            $("#singleCodeInput").css("border", "1px solid red");
            return false;
        }
        var name1 = $("#singleNameInput").find(".rw-input").text();
        if(name1 != null && name1 != "" && name1 != "请选择") {
            $("#singleNameInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#singleNameInput").focus();
            $("#singleNameInput").css("outline", "none");
            $("#singleNameInput").css("border", "1px solid red");
            return false;
        }
        var name2 = $("#subProjectInput").find(".rw-input").text();
        if(name2 != null && name2 != "" && name2 != "请选择") {
            $("#subProjectInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#subProjectInput").focus();
            $("#subProjectInput").css("outline", "none");
            $("#subProjectInput").css("border", "1px solid red");
            return false;
        }

        this.props.onClickSave(4);
        $("#addSingleModal").modal("hide");
    },
    editSingleData:function(){
        var nameEdit = $("#editSingleCodeInput").val();
        if(nameEdit != null && nameEdit != "") {
            $("#editSingleCodeInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#editSingleCodeInput").focus();
            $("#editSingleCodeInput").css("outline", "none");
            $("#editSingleCodeInput").css("border", "1px solid red");
            return false;
        }
        var nameEdit1 = $("#editSingleNameInput").find(".rw-input").text();
        if(nameEdit1 != null && nameEdit1 != "" && nameEdit1 != "请选择") {
            $("#editSingleNameInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#editSingleNameInput").focus();
            $("#editSingleNameInput").css("outline", "none");
            $("#editSingleNameInput").css("border", "1px solid red");
            return false;
        }
        var nameEdit2 = $("#editSubProjectInput").find(".rw-input").text();
        if(nameEdit2 != null && nameEdit2 != "" && nameEdit2 != "请选择") {
            $("#editSubProjectInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#editSubProjectInput").focus();
            $("#editSubProjectInput").css("outline", "none");
            $("#editSubProjectInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(4);
        $("#editSingleModal").modal("hide");
    },
    deleteSingle:function () {
        this.props.delete_areaData(4);
        $("#deleteSingleModal").modal("hide");
    },
    setWorkOrderName:function(e){
        var workOrderNameData = this.props.workOrderNameData;
        var pid = e.RecId;
        var that = this;
        var boType = null;
        for(var i=0;i<workOrderNameData.length;i++){
            var workOrderTypeDataId = workOrderNameData[i].RecId;
            if(pid == workOrderTypeDataId){
                that.setState({workOrderIndex:i+1});
            }
        }
        // console.log(e)
        $("#singleNameInput").find(".rw-input").text(e.DictDataName);
        this.props.setWorkOrderNameId(pid);
    },
    setWorkOrderNameEdit:function(e){
        var workOrderNameData = this.props.workOrderNameData;
        var pid = e.RecId;
        var that = this;
        var boType = null;
        for(var i=0;i<workOrderNameData.length;i++){
            var workOrderTypeDataId = workOrderNameData[i].RecId;
            if(pid == workOrderTypeDataId){
                that.setState({workOrderIndexEdit:i+1});
            }
        }
        // console.log(e)
        $("#editSingleNameInput").find(".rw-input").text(e.DictDataName);
        this.props.setWorkOrderNameId(pid);
    },
    setProjectNameSingle:function(e){
        var projectData = this.props.projectData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<projectData.length;i++){
            var projectDataId = projectData[i].RecId;
            if(pid == projectDataId){
                that.setState({projectIndex:i+1});
            }
        }
        // console.log(e)
        $("#subProjectInput").find(".rw-input").text(e.Name);
        this.props.setProjectId(pid);
    },
    setProjectNameSingleEdit:function(e){
        var projectData = this.props.projectData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<projectData.length;i++){
            var projectDataId = projectData[i].RecId;
            if(pid == projectDataId){
                that.setState({projectIndexEdit:i+1});
            }
        }
        // console.log(e)
        $("#editSubProjectInput").find(".rw-input").text(e.Name);
        this.props.setProjectId(pid);
    },
    render: function() {
        var projectIndex = this.state.projectIndex;
        var projectIndexEdit = this.state.projectIndexEdit;
        var workOrderIndex = this.state.workOrderIndex;
        var workOrderIndexEdit = this.state.workOrderIndexEdit;
        var projects = this.props.projectData;
        var workOrderNames = this.props.workOrderNameData;
        var list = [],list1=[],listEdit = [],listEdit1 = [];
        list.push({RecId:"",DictDataName:""});
        list1.push({RecId:"",Name:""});
        listEdit.push({RecId:"",DictDataName:""});
        listEdit1.push({RecId:"",Name:""});
        for(var i=0;i<projects.length;i++){
            listEdit1.push(projects[i]);
            list1.push(projects[i]);
        }
        for(var j = 0;j<workOrderNames.length;j++){
            list.push(workOrderNames[j]);
            listEdit.push(workOrderNames[j]);
        }
        return (
            <div className = ''>
            	{/*添加工单------------------------------------模态弹窗*/}
                <div className="modal fade" id="addSingleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加工单</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="singleNameInput" className="col-sm-5 control-label">工单名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[workOrderIndex]} textField="DictDataName" onSelect={this.setWorkOrderName} onChange={this.onChangeDropDown} id="singleNameInput" />
                                        </div>
                                        <p id="singleModalContent" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                         <label for="singleCodeInput" className="col-sm-5 control-label">工单缩写</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="singleCodeInput" name="singleCodeInput" placeholder="填写代号"/>
                                        </div>
                                        <p id="singleModalCode" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                        <div className="form-group">
                                            <label for="subProjectInput" className="col-sm-5 control-label">所属项目</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className=" col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list1[projectIndex]} textField="Name" onSelect={this.setProjectNameSingle} onChange={this.onChangeDropDown} id="subProjectInput" />
                                            </div>
                                        </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveSingleData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑工单------------------------------------模态弹窗*/}
                <div className="modal fade" id="editSingleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑工单</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"440px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editSingleNameInput" className="col-sm-5 control-label">工单名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={listEdit} value={listEdit[workOrderIndexEdit]} textField="DictDataName" onSelect={this.setWorkOrderNameEdit} onChange={this.onChangeDropDown} id="editSingleNameInput" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editSingleCodeInput" className="col-sm-5 control-label">工单缩写</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editSingleCodeInput" placeholder="" name="editSingleCodeInput"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editSubProjectInput" className="col-sm-5 control-label">所属项目</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={listEdit1} value={listEdit1[projectIndexEdit]} textField="Name" onSelect={this.setProjectNameSingleEdit} onChange={this.onChangeDropDown} id="editSubProjectInput" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.editSingleData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除工单------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteSingleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除工单类型</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此工单类型吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteSingle}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*工单列表*/}
                <div className="col-md-12">
                    <table id="singleTableList"
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
export default SingleMag