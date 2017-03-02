import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
var OrganizationTree = require('../../../../monitorTree/organizationTree');
function editPic() {
    return '<a class="EditOrgin" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelOrgin" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
function editRootPic(){
    return '<a class="EditRootOrgin" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
/*function editPic() {
    return '<a class="EditOrgin" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}*/
var _this;
window.orgTableEvent = {
    'click .EditOrgin':function(e, value, row, index){
        // console.log(e,value,row,index,"edit")
        $("#hiddenInput").val("edit");
        $("#editOrginModal").modal("show");
        var id = row.DEFRECID;
        var roleName = row.ROLE_NAME;
        _this.props.setOrganizationId(id);
        $("#orgNameInput").val(row.FDNAME);
        $("#orgDescInput").val(row.FDDESC);
        _this.props.init_editOrgRoleTree(roleName);
    },
    'click .DelOrgin':function(e, value, row, index){
        // console.log(e,value,row,index,"edit")
        $("#deleteOrginModal").modal("show");
        var name = row.FDNAME;
        _this.props.setOrganizationId(name);
    },
};
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var Orginsmanager = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.organizationData;
      $("#orginTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#orginTableList").bootstrapTable({
            columns: [
	                  {
			            title: '组名',
			            field: 'FDNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '组描述',
			            field: 'FDDESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '角色',
			            field: 'ROLE_NAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: orgTableEvent,
			            formatter: editPic
			          },
//			          {
//			            title: '编辑资产权限',
//			            halign: 'left',
//			            align: 'left',
//			            events: orignTableEvent,
//			            formatter: editRootPic
//			          },
			          {
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: orgTableEvent,
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
        titleBoxObjW.innerHTML = "组织机构列表";
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
            _this.props.get_organizationData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建组织机构');
        addBtnObj.innerHTML = "新建组织机构";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
            $("#hiddenInput").val("add");
            $("#orgNameInput").val("");
        	$("#orgDescInput").val("");
            _this.props.init_editOrgRoleTree("");
            $("#editOrginModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#orginTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
   		$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveOrginData:function(){
    	if($("#hiddenInput").val() == "add"){
    		this.props.onClickSave(2);
    		$("#editOrginModal").modal("hide");
    		this.props.setOrganizationId("");
    	}else if($("#hiddenInput").val() == "edit"){
    		this.props.onClickEdit(2);
        	$("#editOrginModal").modal("hide");
    	}
    },
    deleteOrgin:function(){
    	_this.props.deleteSystemData(2);
        $("#deleteOrginModal").modal("hide");
    },
    render: function () {
        return (
            <div className='Orginsmanager'>
                {/*编辑单位管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="editOrginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加或编辑组织</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="editOrignNameInput" className="col-sm-6 control-label">组织机构</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="orgNameInput" name="orgNameInput" placeholder="请填写组织机构名称"/>
                                        </div>
                                        <p id="editOrignModalName" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="editOrignDescribeInput" className="col-sm-6 control-label">描述</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="orgDescInput" name="orgDescInput" placeholder="填写组织机构描述"/>
                                        </div>
                                        <p id="editOrignModalDescribe" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group">
                                            <label for="projectFDNameInput" className="col-sm-6 control-label">角色</label>
                                            <b style={{"color":"red","display":"inline-block","margin-top":"10px","margin-left":"-4px"}}>*</b>
                                            <div className="col-sm-6" style={{"width":"243px","height":"200px","margin-top":"-26px","border":"1px solid #ccc","marginLeft":"181px","overflow-y":"auto"}}>
                                            	<OrganizationTree get_orgRoleData={this.props.get_orgRoleData}/>
                                            </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="hidden" id="hiddenInput"/>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveOrginData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除单位管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteOrginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除组织</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此组织机构吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteOrgin}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*单位管理列表*/}
                <div className="col-md-12">
                    <table id="orginTableList"
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
module.exports = Orginsmanager;
