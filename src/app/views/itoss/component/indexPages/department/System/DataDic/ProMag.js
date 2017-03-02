import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, link, IndexRoute,History} from 'react-router';
var ProjectManageTree = require('../../../../monitorTree/projectManageTree');
function editPic() {
    return '<a class="EditPro" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPro" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
let _this;
window.proMagTableEvent = {
    'click .EditPro':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
        $("#addProModal").modal("show");
        $("#hiddenInput").val("edit");
        var id = row.PROJECTID;
        var name = row.PROJECTNAME;
        var code = row.CODE
        var codeName = row.CODENAME;
        var fdRecId = row.FDRECID;
        $("#projectNameInput").val(name);
		    $("#projectCodeInput").val(code);
		    $("#projectCodeNameInput").val(codeName);
        _this.props.setProjectFirmId(id);
         _this.props.init_editProMagTree(fdRecId);
    },
    'click .DelPro':function(e, value, row, index){
    		//曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    	
				$("#deleteProModal").modal("show");
        var id = row.PROJECTID;
        _this.props.setProjectFirmId(id);
    }
};

var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ProMag = React.createClass({
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.projectFirmData;
      $("#proTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#proTableList").bootstrapTable({
            columns: [
                {
                    title: '项目名称',
                    field: 'PROJECTNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '代号',
                    field: 'CODE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '合同编号',
                    field: 'CODENAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                },{
                    title: '厂商',
                    field: 'FDNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: proMagTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: proMagTableEvent,
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
        titleBoxObjW.innerHTML = "项目管理";
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
            _this.props.get_siteviewasdData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加项目');
        addBtnObj.innerHTML = "添加项目";
        addBtnObj.onclick = function () {
            // alert("开始增加新的区域！！");
//          return (<NewUser add_user={ _this.props.add_user} />);
            /*----新建用户--*/
            $("#projectNameInput").val("");
			$("#projectCodeInput").val("");
			$("#projectCodeNameInput").val("");
           	$("#hiddenInput").val("add");
           	//添加时不选择厂商信息
           	_this.props.init_editProMagTree("");
            $("#addProModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
	    btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#proTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveProjectFirmData:function(){
    	if($("#hiddenInput").val() == "add"){
    		this.props.onClickSave(3);
    		$("#addProModal").modal("hide");
    		this.props.setProjectFirmId("");
    	}else if($("#hiddenInput").val() == "edit"){
    		this.props.onClickEdit(3);
        	$("#addProModal").modal("hide");
    	}
    },
    deleteProjectFirmData:function () {
        this.props.delete_areaData(3);
        $("#deleteProModal").modal("hide");
    },
    render: function() {
        return (
            <div className = 'proMag'>
                {/*添加区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="addProModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加或编辑项目</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"margin-left":"-123px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group" style={{"margin-left":"67px"}}>
                                            <label for="projectNameInput" className="col-sm-4 control-label">项目名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-270px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" id="projectNameInput" name="projectNameInput" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group" style={{"margin-left":"67px"}}>
                                            <label for="projectCodeInput" className="col-sm-4 control-label">代号</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-270px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" id="projectCodeInput" name="projectCodeInput" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group" style={{"margin-left":"67px"}}>
                                            <label for="projectCodeNameInput" className="col-sm-4 control-label">合同编号</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-270px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" id="projectCodeNameInput" name="projectCodeNameInput" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group" style={{"margin-left":"67px"}}>
	                                        <label for="projectFDNameInput" className="col-sm-4 control-label">厂商</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-262px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-5" style={{"width":"243px","height":"200px","border":"1px solid #ccc","margin-left":"14px","overflow-y":"auto","border-radius":"4px"}}>
	                                        	<ProjectManageTree className="form-control" get_siteviewasdData={this.props.get_siteviewasdData}/>
	                                        </div>
                                    	</div>
                                        <div className="form-group">
                                            <input type="hidden" id="hiddenInput"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveProjectFirmData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteProModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除项目</h4>
                            </div>
                            <div className="modal-body">
                                确定要删除吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteProjectFirmData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="proTableList"
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
export default ProMag