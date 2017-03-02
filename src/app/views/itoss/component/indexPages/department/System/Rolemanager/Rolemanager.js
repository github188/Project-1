import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
var ReactWidgets = require('react-widgets');
var PermissionTree = require('../../../../monitorTree/permissionTree');
function editPic() {
    return '<a class="EditRole" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelRole" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
function editRootPic(){
    return '<a class="EditRootRole" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
window.roleTableEvent = {
	//编辑角色
    'click .EditRole':function(e, value, row, index){
        $("#editRoleModal").modal("show");
        $("#editRoleNameInput").val(row.ROLE_NAME);
        $("#editRoleDescribeInput").val(row.ROLE_DESC);
        var editRoleNameInput = row.ROLE_NAME;
        var editRoleDescribeInput = row.ROLE_DESC;
        console.log(editRoleNameInput)
        console.log(editRoleDescribeInput)
        _this.props.setEditRoleNameInput(editRoleNameInput);
        _this.props.setEditRoleDescribeInput(editRoleDescribeInput);
    },
    'click .EditRootRole':function(e, value, row, index){
         $("#editRoleRootModal").modal("show");
        $("#editRoleRootNameInput").val("");
        $("#editRoleRootDescribeInput").val("");
        _this.props.getPermissionTreeData(row.ROLE_NAME);
    },
    //删除角色
    'click .DelRole':function(e, value, row, index){
		$("#deleteRoleModal").modal("show");
         var deleteRoleName = row.ROLE_NAME;
           $("#roleNameInput").val(row.ROLE_NAME);
            $("#roleDescribeInput").val(row.ROLE_DESC);
         console.log(deleteRoleName)
        _this.props.setDeleteRoleName(deleteRoleName);
    },
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;

var Rolemanager = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            parentIndex: 0,
            expand:false
//          parentIndexEdit:0
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.roleManagerData;
      $("#roleTableList").bootstrapTable("load",bdata);
    },
  		componentDidMount:function(){ 
  		   $("#roleTableList").bootstrapTable({
            columns: [
	                  {
			            title: '角色名称',
			            field: 'ROLE_NAME',
			            halign: 'left',
			            align: 'left',     
			            sortable: true
			          },{
			          	title: '角色描述',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: roleTableEvent,
			            formatter: editPic
			          },{
			            title: '编辑权限',
			            halign: 'left',
			            align: 'left',
			            events: roleTableEvent,
			            formatter: editRootPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events:roleTableEvent,
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
        titleBoxObjW.innerHTML = "角色列表";
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
            _this.props.get_roleManagerData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建角色');
        addBtnObj.innerHTML = "新建角色";
        addBtnObj.onclick = function () {
			$("#roleOranizationSelect").find(".rw-input").text("请选择");
			$("#roleDescribeInput").val("");
            $("#roleNameInput").val("");
            $("#addRoleModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#roleTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
		$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
     addOranizationNameRole:function(e){
        var organizationData = this.props.organizationData;
        //组织机构的id
        var DEFRECID = e.DEFRECID;
        var that = this;
        console.log(organizationData)
        for(var i=0;i<organizationData.length;i++){
        	console.log(organizationData.length)
            if(DEFRECID == organizationData[i].DEFRECID){
                that.setState({parentIndex:i+1});
            };
        };
        $("#roleOranizationSelect").find(".rw-input").text(e.FDNAME);
        console.log(e.FDNAME)
        this.props.setOrganizationId(DEFRECID);
        this.props.setOrganizationName(e.FDNAME);
    },
    saveRoleData:function(){
    	var roleDescribeInput =$('#roleDescribeInput').val();
        var roleNameInput = $('#roleNameInput').val();
        var roleOranizationSelect = $("#roleOranizationSelect").find(".rw-input").text();
	        
        if(roleOranizationSelect == '请选择' || roleOranizationSelect == ""  ){
        	$("#roleNameInput").css("border", "1px solid #d0d0d0");
        	$("#roleDescribeInput").css("border", "1px solid #d0d0d0");
        	$("#roleOranizationSelect").focus();
            $("#roleOranizationSelect").css("outline", "none");
            $("#roleOranizationSelect").css("border", "1px solid red");
            return false
        }else if(roleNameInput == null || roleNameInput == "" ) {
            $("#roleOranizationSelect").css("border", "1px solid #d0d0d0");
            $("#roleDescribeInput").css("border", "1px solid #d0d0d0");
        	$("#roleNameInput").focus();
            $("#roleNameInput").css("outline", "none");
            $("#roleNameInput").css("border", "1px solid red");
            return false
        }else if( roleDescribeInput == null || roleDescribeInput == ""){
        	$("#roleOranizationSelect").css("border", "1px solid #d0d0d0");
            $("#roleNameInput").css("border", "1px solid #d0d0d0");
        	$("#roleDescribeInput").focus();
            $("#roleDescribeInput").css("outline", "none");
            $("#roleDescribeInput").css("border", "1px solid red");
            return false
        }else{
        	  this.props.add_roleData();
              $("#addRoleModal").modal("hide");
        }
    	
       
    },
     onChangeDropDown:function () {

    },
    editRoleData:function(){
    	var editRoleNameInput =$('#editRoleNameInput').val();
        var editRoleDescribeInput = $('#editRoleDescribeInput').val();
        if(editRoleNameInput == null || editRoleNameInput == "") {
        	$("#editRoleDescribeInput").css("border", "1px solid #d0d0d0");
        	
            $("#editRoleNameInput").focus();
            $("#editRoleNameInput").css("outline", "none");
            $("#editRoleNameInput").css("border", "1px solid red");
            return false
        }else if(editRoleDescribeInput == null || editRoleDescribeInput == ""  ){
        	$("#editRoleNameInput").css("border", "1px solid #d0d0d0");
        	$("#editRoleDescribeInput").focus();
            $("#editRoleDescribeInput").css("outline", "none");
            $("#editRoleDescribeInput").css("border", "1px solid red");
            return false
        }else{
         this.props.edit_roleData()
        $("#editRoleModal").modal("hide");
        }
        
    },
    editRoleRoot:function(){
        this.setState({expand:false});
    	 this.props.savePermissionTree();
       $("#editRoleRootModal").modal("hide");
    },
     deleteRoleData:function () {
        this.props.delete_roleData();
        $("#deleteRoleModal").modal("hide");
    },
    handelCancelAll:function(){
        var treeObj = $.fn.zTree.getZTreeObj("leftTree");
        treeObj.checkAllNodes(false);
        var zTree = $.fn.zTree.getZTreeObj("leftTree");
        var checkedList = zTree.getCheckedNodes(true);
        this.props.setPermissionTreeData(checkedList);
    },
    handelCheckAll:function(){
        var treeObj = $.fn.zTree.getZTreeObj("leftTree");
        treeObj.checkAllNodes(true);
        var zTree = $.fn.zTree.getZTreeObj("leftTree");
        var checkedList = zTree.getCheckedNodes(true);
        this.props.setPermissionTreeData(checkedList);
    },
    handelExpand:function(){
        var treeObj = $.fn.zTree.getZTreeObj("leftTree");
        var _this = this;
        this.setState({
            expand:!this.state.expand
        },function(){
            treeObj.expandAll(_this.state.expand);
        });
    },
  render: function() {
  	    var parentIndex = this.state.parentIndex;
//      var parentIndexEdit = this.state.parentIndexEdit;
        var organizationData = this.props.organizationData;
        console.log(organizationData)
    	var OrgList = [];
        OrgList.push({DEFRECID:"",FDNAME:""});
        for(var i=0;i<organizationData.length;i++){
            OrgList.push(organizationData[i]);
        };
    return (
    		 <div className='orginMag'>
    		 
                {/*添加角色------------------------------------模态弹窗*/}
                <div className="modal fade" id="addRoleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">新建角色</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                     <div className="form-group" style={{"position":"relative"}}>
                                        <label for="roleOranizationSelect" className="col-sm-6 control-label">组织机构名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
			
                                          <ReactWidgets.DropdownList className="dataDictDropDown form-control" name='roleOranizationSelect' data={OrgList} value={OrgList[parentIndex]} textField="FDNAME" onSelect={this.addOranizationNameRole} onChange={this.onChangeDropDown} id="roleOranizationSelect"/>
                                            
                                        </div>
                                    </div>
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="roleNameInput" className="col-sm-6 control-label">角色名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="roleNameInput" name="roleNameInput" placeholder="填写序号"/>
                                        </div>
                                        <p id="magUnitModalNumber" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                      <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="roleDescribeInput" className="col-sm-6 control-label">描述</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="roleDescribeInput" name="roleDescribeInput" placeholder=""/>
                                        </div>
                                        <p id="roleModalDescribe" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveRoleData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑角色管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="editRoleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑角色</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                  <form className="form-horizontal" role="form">
	                                    <div className="form-group" style={{"position":"relative"}}>
	                                        <label for="editRoleNameInput" className="col-sm-6 control-label">角色名称</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="editRoleNameInput" name="editRoleNameInput" placeholder=""/>
	                                        </div>
	                                        <p id="editOrignModalName" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="editRoleDescribeInput" className="col-sm-6 control-label">描述</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="editRoleDescribeInput" name="editRoleDescribeInput" placeholder=""/>
	                                        </div>
	                                        <p id="editRoleModalDescribe" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editRoleData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑资产权限------------------------------------模态弹窗*/}
                <div className="modal fade" id="editRoleRootModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"600px"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑权限</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"540px","height":"450px","border":"1px solid #ccc","marginLeft":"16px","overflow-y":"auto"}}>
                                	<PermissionTree permissionTreeData={this.props.permissionTreeData} initPermissionTree={this.props.initPermissionTree} setPermissionTreeData={this.props.setPermissionTreeData}/>
                                </div>
                                <button type="button" style={{"background":"#d8e1e5","margin-left":"286px","margin-top":"6px"}} className="btn btn-xs" onClick={this.handelCancelAll} >取消所有勾选</button>
                                <button type="button" style={{"background":"#d8e1e5","margin-top":"6px","margin-left":"10px"}} className="btn btn-xs" onClick={this.handelCheckAll} >勾选所有节点</button>
                                <button type="button" style={{"background":"#d8e1e5","margin-top":"6px","margin-left":"10px"}} className="btn btn-xs" onClick={this.handelExpand}>{this.state.expand?"全部收合":"全部展开"}</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editRoleRoot}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除单位管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteRoleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除角色</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此角色吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteRoleData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*角色*/}
                <div className="col-md-12">
                    <table id="roleTableList"
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
module.exports = Rolemanager;
