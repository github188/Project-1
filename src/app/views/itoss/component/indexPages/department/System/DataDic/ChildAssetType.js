import React from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditCAssetsType" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelCAssetsType" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.cAssetTypeTableEvent = {
    'click .EditCAssetsType':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    $("#editParentMagSelect").find(".rw-input").text(row.parentAssetTypeName);
	    $("#cAssetsTypeNameEditInput").css("border", "1px solid #d0d0d0");
	    $("#cAssetsTypeDesEditInput").css("border", "1px solid #d0d0d0");
	    $("#editParentMagSelect").css("border", "1px solid #d0d0d0");
        $("#editCAssetsTypeModal").modal("show");
        var id = row.recId;
        _this.props.setChildAssetsTypeId(id);
        $("#cAssetsTypeNameEditInput").val(row.childAssetTypeName);
        $("#cAssetsTypeDesEditInput").val(row.childAssetTypeDesc);
    },
    'click .DelCAssetsType':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    	
		$("#deleteCAssetsTypeModal").modal("show");
        var id = row.recId;
        _this.props.setChildAssetsTypeId(id);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ParentAssetType = React.createClass({
        getInitialState: function () {
        _this = this;
        return {
            parentIndex:0,
            parentIndexEdit:0
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.childAssetsType;
      $("#cAssetTypeTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#cAssetTypeTableList").bootstrapTable({
            columns: [
	                  {
			            title: '父级资产类型名称',
			            field: 'parentAssetTypeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '子级资产类型名称',
			            field: 'childAssetTypeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '描述',
			            field: 'childAssetTypeDesc',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: cAssetTypeTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: cAssetTypeTableEvent,
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
        titleBoxObjW.innerHTML = "子级资产类型管理";
        titleBoxObj.appendChild(titleBoxObjA);
        // console.log(titleBoxObj.appendChild(titleBoxObjA));
        titleBoxObj.setAttribute("class","pull-left");
        // titleBoxObj.innerHTML = "子区域管理";
            // var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            _this.props.get_cAssetsTypeData();
        };

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加子级资产类型');
        addBtnObj.innerHTML = "添加子级资产类型";
        addBtnObj.onclick = function () {
        	$("#cAssetsTypeNameInput").val("");
        	$("#cAssetsTypeDesInput").val("");
        	$("#cAssetsTypeNameInput").css("border", "1px solid #d0d0d0");
        	$("#cAssetsTypeDesInput").css("border", "1px solid #d0d0d0");
        	$("#parentMagSelect").css("border", "1px solid #d0d0d0");
        	$("#parentMagSelect").find(".rw-input").text("请选择");
            $("#addCAssetsTypeModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#cAssetTypeTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveCAssetType:function(){
    	var cAssetsTypeName = $("#cAssetsTypeNameInput").val();
    	var cAssetsTypeDes = $("#cAssetsTypeDesInput").val();
    	var name1 = $("#parentMagSelect").find(".rw-input").text();
        if(name1 != null && name1 != "" && name1 != "请选择") {
            $("#parentMagSelect").css("border", "1px solid #d0d0d0");
        }else{
            $("#parentMagSelect").focus();
            $("#parentMagSelect").css("outline", "none");
            $("#parentMagSelect").css("border", "1px solid red");
            return false;
        }
    	if(cAssetsTypeName.trim() == null || cAssetsTypeName.trim() == "") {
           	$("#cAssetsTypeNameInput").focus();
            $("#cAssetsTypeNameInput").css("outline", "none");
            $("#cAssetsTypeNameInput").css("border", "1px solid red");
            return false;
        }
//  	else if(pAssetsTypeDes.trim() == null || pAssetsTypeDes.trim() == ""){
//      	$("#pAssetsTypeDesInput").focus();
//          $("#pAssetsTypeDesInput").css("outline", "none");
//          $("#pAssetsTypeDesInput").css("border", "1px solid red");
//          return false;
//      }
    	this.props.onClickSave(26);
    	$("#addCAssetsTypeModal").modal("hide");
    },
    editCAssetType:function(){
    	var cAssetsTypeName = $("#cAssetsTypeNameEditInput").val();
    	var cAssetsTypeDes = $("#cAssetsTypeDesEditInput").val();
    	var name1 = $("#editParentMagSelect").find(".rw-input").text();
        if(name1 != null && name1 != "" && name1 != "请选择") {
            $("#editParentMagSelect").css("border", "1px solid #d0d0d0");
        }else{
            $("#editParentMagSelect").focus();
            $("#editParentMagSelect").css("outline", "none");
            $("#editParentMagSelect").css("border", "1px solid red");
            return false;
        }
    	if(cAssetsTypeName.trim() == null || cAssetsTypeName.trim() == "") {
           	$("#cAssetsTypeNameEditInput").focus();
            $("#cAssetsTypeNameEditInput").css("outline", "none");
            $("#cAssetsTypeNameEditInput").css("border", "1px solid red");
            return false;
        }
//  	else if(pAssetsTypeDes.trim() == null || pAssetsTypeDes.trim() == ""){
//      	$("#pAssetsTypeDesEditInput").focus();
//          $("#pAssetsTypeDesEditInput").css("outline", "none");
//          $("#pAssetsTypeDesEditInput").css("border", "1px solid red");
//          return false;
//      }
        this.props.onClickEdit(26);
        $("#editCAssetsTypeModal").modal("hide");
    },
    deleteCAssetType:function () {
        this.props.delete_childAssetsTypeData(26);
        $("#deleteCAssetsTypeModal").modal("hide");
    },
    setCurChildPid:function(e){
        var assetsType = this.props.assetsType;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<assetsType.length;i++){
            var assetsTypeId = assetsType[i].RecId;
            if(pid == assetsType){
                that.setState({parentIndex:i+1});
            };
        };
        // console.log(e)
        $("#parentMagSelect").find(".rw-input").text(e.typeAlias);
        this.props.setAssetsTypeId(pid);
    },
    setCurChildPidEdit:function(e){
	    var assetsType = this.props.assetsType;
	    var pid = e.RecId;
	    var that = this;
	    for(var i=0;i<assetsType.length;i++){
	        var assetsTypeId = assetsType[i].RecId;
	        if(pid == assetsTypeId){
	            that.setState({parentIndexEdit:i+1});
	        };
	    };
	    // console.log(e)
	    $("#editParentMagSelect").find(".rw-input").text(e.typeAlias);
	    this.props.setAssetsTypeId(pid);
    },
    render: function () {
    	var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var parents = this.props.assetsType;
        var list = [],list1=[];
        list.push({RecId:"",typeAlias:""});
        list1.push({RecId:"",typeAlias:""});
        for(var i=0;i<parents.length;i++){
            list.push(parents[i]);
            list1.push(parents[i]);
        };
        return (
            <div className='singleSourceMag'>
                {/*添加工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="addCAssetsTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加子级资产类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <label for="parentNameInput" className="col-sm-5 control-label">父级资产类型名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[parentIndex]} textField="typeAlias" onSelect={this.setCurChildPid} onChange={this.onChangeDropDown} id="parentMagSelect"/>
                                        </div>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="cAssetsTypeNameInput" className="col-sm-5 control-label">子级资产类型名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="cAssetsTypeNameInput" name="cAssetsTypeNameInput" placeholder="填写子级资产类型名称"/>
                                        </div>
                                        <p id="cAssetsTypeNameInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="cAssetsTypeDesInput" className="col-sm-5 control-label">描述</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="cAssetsTypeDesInput" name="cAssetsTypeDesInput" placeholder="填写描述信息"/>
                                        </div>
                                        <p id="cAssetsTypeDesInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveCAssetType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="editCAssetsTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑子级资产类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    	<div className="form-group">
                                            <label for="parentNameInput" className="col-sm-5 control-label">父级资产类型名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list[parentIndexEdit]} textField="typeAlias" onSelect={this.setCurChildPidEdit} onChange={this.onChangeDropDown} id="editParentMagSelect"/>
                                            </div>
                                    	</div>
                                        <div className="form-group">
                                            <label for="cAssetsTypeNameEditInput" className="col-sm-5 control-label">子级资产类型名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="cAssetsTypeNameEditInput" name="cAssetsTypeNameEditInput" placeholder="填写子级资产类型名称"/>
                                            </div>
                                        </div>
                                        <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="cAssetsTypeDesEditInput" className="col-sm-5 control-label">描述</label>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="cAssetsTypeDesEditInput" name="cAssetsTypeDesEditInput" placeholder="填写描述信息"/>
	                                        </div>
	                                        <p id="cAssetsTypeDesEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    	</div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editCAssetType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteCAssetsTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除子级资产类型</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此子级资产类型吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteCAssetType}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="cAssetTypeTableList"
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
export default ParentAssetType