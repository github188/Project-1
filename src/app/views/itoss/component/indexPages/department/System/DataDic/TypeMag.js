import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
var ProjectManageTree = require('../../../../monitorTree/projectManageTree');
function editPic() {
    return '<a class="EditType" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelType" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
let _this;
window.typeMagTableEvent = {
    'click .EditType':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	$("#unitTypeNameInput").css("border", "1px solid #d0d0d0");
        $("#addTypeModal").modal("show");
        $("#hiddenInput").val("edit");
        var id = row.RECID;
        var name = row.UNITTYPENAME;
        var unitTypes = JSON.parse(row.ORGANIZATIONINFO);
        var organizations = "";
		if(unitTypes != null && unitTypes.length > 0){
			for(var i = 0; i< unitTypes.length; i++){
				if(i != unitTypes.length - 1){
					organizations = organizations + unitTypes[i].FDRECID + ",";
				}else if(i == unitTypes.length - 1){
					organizations = organizations + unitTypes[i].FDRECID;
				}
			}
			_this.props.init_editProMagTree(organizations);
		}
        _this.props.setUnitTypeId(id);
        $("#unitTypeNameInput").val(name);
    },
    'click .DelType':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
		$("#deleteTypeModal").modal("show");
        var id = row.RECID;
        _this.props.setUnitTypeId(id);
    }
};
function unitTypeFormatter(value, row){
	var unitTypes = eval(value);
	var organizations = "";
	if(unitTypes != null && unitTypes.length > 0){
		for(var i = 0; i< unitTypes.length; i++){
			if(i != unitTypes.length - 1){
				organizations = organizations + unitTypes[i].FDNAME + ",";
			}else if(i == unitTypes.length - 1){
				organizations = organizations + unitTypes[i].FDNAME;
			}
		}
	}
	return organizations;
}
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var TypeMag = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.unitTypeData;
      $("#TypeTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#TypeTableList").bootstrapTable({
            columns: [
	                  {
			            title: '单位类型名称',
			            field: 'UNITTYPENAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '厂商',
			            field: 'ORGANIZATIONINFO',
			            halign: 'left',
			            align: 'left',
			            formatter: unitTypeFormatter,
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: typeMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: typeMagTableEvent,
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
        titleBoxObjW.innerHTML = "单位类型管理";
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
            _this.props.get_unitTypeData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加单位类型');
        addBtnObj.innerHTML = "添加单位类型";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
           $("#unitTypeNameInput").css("border", "1px solid #d0d0d0");
           $("#unitTypeNameInput").val("");
           $("#hiddenInput").val("add");
           //添加时不选择厂商信息
           	_this.props.init_editProMagTree("");
            $("#addTypeModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#TypeTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    },
    saveTypeData:function(){
    	var unitTypeNameInput = $("#unitTypeNameInput").val();
    	if(unitTypeNameInput == null || unitTypeNameInput.trim() == ""){
    		$("#unitTypeNameInput").focus();
            $("#unitTypeNameInput").css("outline", "none");
            $("#unitTypeNameInput").css("border", "1px solid red");
            return false;
    	}
    	if($("#hiddenInput").val() == "add"){
    		this.props.onClickSave(21);
    		$("#addTypeModal").modal("hide");
    		this.props.setUnitTypeId("");
    	}else if($("#hiddenInput").val() == "edit"){
    		this.props.onClickEdit(21);
        	$("#addTypeModal").modal("hide");
    	}
    },
    deleteType:function (){
        this.props.delete_areaData(21);
        $("#deleteTypeModal").modal("hide");
    },
    render: function () {
        return (
            <div className='typeMag'>
                {/*添加单位类型------------------------------------模态弹窗*/}
                <div className="modal fade" id="addTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加或编辑单位类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="typeInput" className="col-sm-5 control-label">单位类型名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="unitTypeNameInput" name="unitTypeNameInput" placeholder="填写单位类型名称"/>
                                        </div>
                                        <p id="typeModalContent" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group">
	                                    <label for="projectFDNameInput" className="col-sm-5 control-label">厂商</label>
	                                    <div className="col-sm-6" style={{"width":"243px","height":"200px","border":"1px solid #ccc","margin-left":"14px","overflow-y":"auto","border-radius":"4px"}}>
	                                    	<ProjectManageTree  get_siteviewasdData={this.props.get_siteviewasdData}/>
	                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="hidden" id="hiddenInput"/>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveTypeData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除单位类型------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除单位类型</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此单位类型吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteType}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域单位类型*/}
                <div className="col-md-12">
                    <table id="TypeTableList"
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
export default TypeMag