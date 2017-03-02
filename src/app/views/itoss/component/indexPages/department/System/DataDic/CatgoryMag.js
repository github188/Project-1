import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
import ReactWidgets from "react-widgets";

function editPic() {
    return '<a class="EditCat" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelCat" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.CategoryMagTableEvent = {
    'click .EditCat':function(e, value, row, index){
         //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editCatgoryModal").modal("show");
        var pid = row.projectRecId;
        var cid = row.bigServiceId;
        var cName = row.bigServiceName;
        var pName = row.projectName;
        _this.props.setProjectId(pid);
        _this.props.setBigServiceId(cid);
        $("#proCatgoryEditSelect").find(".rw-input").text(pName);
        $("#editCatgoryInput").val(cName);
    },
    'click .DelCat':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
		$("#deleteCatgoryModal").modal("show");
        var pid = row.projectRecId;
        var cid = row.bigServiceId;
        var cName = row.bigServiceName;
        var pName = row.projectName;
        _this.props.setProjectId(pid);
        _this.props.setBigServiceId(cid);
        $("#proCatgoryEditSelect").find(".rw-input").text(pName);
        $("#editCatgoryInput").val(cName);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var CatgoryMag = React.createClass({
   // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            projectIndex: 0,
            projectIndexEdit:0
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.bigServiceData;
      $("#categoryTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#categoryTableList").bootstrapTable({

            columns: [
	                  {
			            title: '项目名称',
			            field: 'projectName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '服务大类',
			            field: 'bigServiceName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: CategoryMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: CategoryMagTableEvent,
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
        titleBoxObjW.innerHTML = "服务大类管理";
        titleBoxObj.appendChild(titleBoxObjA);
        // console.log(titleBoxObj.appendChild(titleBoxObjA));
        titleBoxObj.setAttribute("class","pull-left");
        // titleBoxObj.innerHTML = "父区域管理";
            // var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            _this.props.get_bigServiceData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加服务大类');
        addBtnObj.innerHTML = "添加服务大类";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
            $("#proCatgorySelect").find(".rw-input").text("请选择");
            $("#addCatgoryModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#categoryTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    },
    setCurCatgoryPid:function(e){
        var projectData = this.props.projectData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<projectData.length;i++){
            var projectDataId = projectData[i].RecId;
            if(pid == projectDataId){
                that.setState({parentIndex:i+1});
            }
        }
        // console.log(e)
        $("#proCatgorySelect").find(".rw-input").text(e.Name);
        this.props.setProjectId(pid);
    },
    setCurCatgoryPidEdit:function(e){
        var projectData = this.props.projectData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<projectData.length;i++){
            var projectDataId = projectData[i].RecId;
            if(pid == projectDataId){
                that.setState({parentIndexEdit:i+1});
            }
        }
        // console.log(e)
        $("#proCatgoryEditSelect").find(".rw-input").text(e.Name);
        this.props.setProjectId(pid);
    },
    saveCatgory:function(){
        var name = $("#catgoryInput").val();
        if(name != null && name != "") {
            $("#catgoryInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#catgoryInput").focus();
            $("#catgoryInput").css("outline", "none");
            $("#catgoryInput").css("border", "1px solid red");
            return false;
        }
        var name1 = $("#proCatgorySelect").find(".rw-input").text();
        if(name1 != null && name1 != "" && name1 != "请选择") {
            $("#proCatgorySelect").css("border", "1px solid #d0d0d0");
        }else{
            $("#proCatgorySelect").focus();
            $("#proCatgorySelect").css("outline", "none");
            $("#proCatgorySelect").css("border", "1px solid red");
            return false;
        }
        this.props.onClickSave(5);
        $("#addCatgoryModal").modal("hide");
    },
    editCatgory:function(){
        var nameEdit = $("#editCatgoryInput").val();
        if(nameEdit != null && nameEdit != "") {
            $("#editCatgoryInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#editCatgoryInput").focus();
            $("#editCatgoryInput").css("outline", "none");
            $("#editCatgoryInput").css("border", "1px solid red");
            return false;
        }
        var nameEdit1 = $("#proCatgoryEditSelect").find(".rw-input").text();
        if(nameEdit1 != null && nameEdit1 != "" && nameEdit1 != "请选择") {
            $("#proCatgoryEditSelect").css("border", "1px solid #d0d0d0");
        }else{
            $("#proCatgoryEditSelect").focus();
            $("#proCatgoryEditSelect").css("outline", "none");
            $("#proCatgoryEditSelect").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(5);
        $("#editCatgoryModal").modal("hide");
    },
    deleteCatgory:function () {
        this.props.delete_areaData(5);
        $("#deleteCatgoryModal").modal("hide");
    },
    render: function () {
        var projectIndex = this.state.projectIndex;
        var projectIndexEdit = this.state.projectIndexEdit;
        var projects = this.props.projectData;
        var list = [],list1=[];
        list.push({RecId:"",Name:""});
        list1.push({RecId:"",Name:""});
        for(var i=0;i<projects.length;i++){
            list.push(projects[i]);
            list1.push(projects[i]);
        }
        return (
            <div className='catgoryMag'>
                {/*添加服务大类------------------------------------模态弹窗*/}
                <div className="modal fade" id="addCatgoryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加服务大类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="proCatgoryInput" className="col-sm-5 control-label">项目名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[projectIndex]} textField="Name" onSelect={this.setCurCatgoryPid} onChange={this.onChangeDropDown} id="proCatgorySelect"/>
                                        </div>
                                        <p id="catgoryModalContent" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="catgoryInput" className="col-sm-5 control-label">服务大类名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="catgoryInput" name="catgoryInput" placeholder="填写服务大类名称"/>
                                        </div>
                                        <p id="catgoryModalName" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveCatgory}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑服务大类------------------------------------模态弹窗*/}
                <div className="modal fade" id="editCatgoryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑服务大类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editProCatgoryInput" className="col-sm-5 control-label">项目名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list1[projectIndexEdit]} textField="Name" onSelect={this.setCurCatgoryPidEdit} onChange={this.onChangeDropDown} id="proCatgoryEditSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editCatgoryInput" className="col-sm-5 control-label">服务大类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editCatgoryInput" name="editCatgoryInput" placeholder=""/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editCatgory}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除服务大类------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteCatgoryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除服务大类</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此服务大类吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteCatgory}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="categoryTableList"
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
export default CatgoryMag