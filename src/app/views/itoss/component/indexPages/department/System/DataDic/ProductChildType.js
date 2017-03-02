import React from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditProductChildType" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelProductChildType" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.productChildTypeTableEvent = {
    'click .EditProductChildType':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    	
	    $("#productChildTypeNameEditInput").css("border", "1px solid #d0d0d0");
	    $("#productChildTypeCodeEditInput").css("border", "1px solid #d0d0d0");
        $("#editProductChildTypeModal").modal("show");
        var id = row.recId;
        var pid = row.pId;
        _this.props.setProductChildTypeId(id);
        _this.props.setProductTypeId(pid);
        $("#productChildTypeNameEditInput").val(row.typeName);
        $("#productChildTypeCodeEditInput").val(row.codeName);
        $("#productTypeEditSelect").find(".rw-input").text(row.pTypeName);
    },
    'click .DelProductChildType':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
			$("#deleteProductChildTypeModal").modal("show");
	        var id = row.recId;
	        _this.props.setProductChildTypeId(id);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ProductChildType = React.createClass({
        getInitialState: function () {
        _this = this;
        return {
            parentIndex:0,
            parentIndexEdit:0
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.productChildType;
      $("#productChildTypeTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#productChildTypeTableList").bootstrapTable({
            columns: [
	                  {
			            title: '产品父类型名称',
			            field: 'pTypeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '产品子类型名称',
			            field: 'typeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '产品子类型代号',
			            field: 'codeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: productChildTypeTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: productChildTypeTableEvent,
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
        titleBoxObjW.innerHTML = "产品子类型管理";
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
        	$("#productChildTypeNameInput").val("");
        	$("#productChildTypeCodeInput").val("");
            _this.props.get_productChildTypes();
        };

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加产品子类型');
        addBtnObj.innerHTML = "添加产品子类型";
        addBtnObj.onclick = function () {
        	$("#productTypeSelect").find(".rw-input").text("请选择");
        	$("#productChildTypeNameInput").val("");
        	$("#productChildTypeCodeInput").val("");
		    $("#productChildTypeNameInput").css("border", "1px solid #d0d0d0");
		    $("#productChildTypeCodeInput").css("border", "1px solid #d0d0d0");
            $("#addProductChildTypeModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#productChildTypeTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveProductChildType:function(){
    	//非零正整数正则表达式
    	var productChildTypeName = $("#productChildTypeNameInput").val();
    	var productChildTypeCode = $("#productChildTypeCodeInput").val();
    	if(productChildTypeName.trim() == null || productChildTypeName.trim() == "") {
           	$("#productChildTypeNameInput").focus();
            $("#productChildTypeNameInput").css("outline", "none");
            $("#productChildTypeNameInput").css("border", "1px solid red");
            return false;
        }else if(productChildTypeCode.trim() == null || productChildTypeCode.trim() == ""){
        	$("#productChildTypeCodeInput").focus();
            $("#productChildTypeCodeInput").css("outline", "none");
            $("#productChildTypeCodeInput").css("border", "1px solid red");
            return false;
        }
    	this.props.onClickSave(27);
    	$("#addProductChildTypeModal").modal("hide");
    },
    editProductChildType:function(){
    	var productChildTypeName = $("#productChildTypeNameEditInput").val();
    	var productChildTypeCode = $("#productChildTypeCodeEditInput").val();
    	if(productChildTypeName.trim() == null || productChildTypeName.trim() == "") {
           	$("#productChildTypeNameEditInput").focus();
            $("#productChildTypeNameEditInput").css("outline", "none");
            $("#productChildTypeNameEditInput").css("border", "1px solid red");
            return false;
        }else if(productChildTypeCode.trim() == null || productChildTypeCode.trim() == ""){
        	$("#productChildTypeCodeEditInput").focus();
            $("#productChildTypeCodeEditInput").css("outline", "none");
            $("#productChildTypeCodeEditInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(27);
        $("#editProductChildTypeModal").modal("hide");
    },
    deleteProductChildType:function () {
        this.props.delete_productChildTypeData(27);
        $("#deleteProductChildTypeModal").modal("hide");
    },
    setProductTypePId:function(e){
    	var productType = this.props.productType;
        var pid = e.recId;
        var that = this;
        for(var i=0;i<productType.length;i++){
            var productTypeId = productType[i].recId;
            if(pid == productTypeId){
                that.setState({parentIndex:i+1});
            };
        };
        // console.log(e)
        $("#productTypeSelect").find(".rw-input").text(e.typeName);
        this.props.setProductTypeId(pid);
    },
    setProductTypePIdEdit:function(e){
    	var productType = this.props.productType;
        var pid = e.recId;
        var that = this;
        for(var i=0;i<productType.length;i++){
            var productTypeId = productType[i].recId;
            if(pid == productTypeId){
                that.setState({parentIndexEdit:i+1});
            };
        };
        // console.log(e)
        $("#productTypeEditSelect").find(".rw-input").text(e.typeName);
        this.props.setProductTypeId(pid);
    },
    render: function () {
    	var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var parents = this.props.productType;
        var list = [],list1=[];
        list.push({recId:"",typeName:""});
        list1.push({recId:"",typeName:""});
        for(var i=0;i<parents.length;i++){
            list.push(parents[i]);
            list1.push(parents[i]);
        };
        return (
            <div className='singleSourceMag'>
                {/*添加工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="addProductChildTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加产品子类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group"  style={{"position":"relative"}}>
                                            <label for="productTypeNameInput" className="col-sm-5 control-label">产品父类型名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[parentIndex]} textField="typeName" onSelect={this.setProductTypePId} onChange={this.onChangeDropDown} id="productTypeSelect"/>
                                            </div>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="productChildTypeNameInput" className="col-sm-5 control-label">产品子类型名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="productChildTypeNameInput" name="productChildTypeNameInput" placeholder="填写产品类型名称"/>
                                        </div>
                                        <p id="productChildTypeNameInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="productChildTypeCodeInput" className="col-sm-5 control-label">代号</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="productChildTypeCodeInput" name="productChildTypeCodeInput" placeholder="填写代号"/>
                                        </div>
                                        <p id="productChildTypeCodeInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveProductChildType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="editProductChildTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑产品子类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    	<div className="form-group"  style={{"position":"relative"}}>
                                            <label for="productTypeNameInput" className="col-sm-5 control-label">产品父类型名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list1[parentIndexEdit]} textField="typeName" onSelect={this.setProductTypePIdEdit} onChange={this.onChangeDropDown} id="productTypeEditSelect"/>
                                            </div>
                                    	</div>
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="productChildTypeNameEditInput" className="col-sm-5 control-label">产品子类型名称</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="productChildTypeNameEditInput" name="productChildTypeNameEditInput" placeholder="填写产品类型名称"/>
	                                        </div>
	                                        <p id="productChildTypeNameEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="productChildTypeCodeEditInput" className="col-sm-5 control-label">代号</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="productChildTypeCodeEditInput" name="productChildTypeCodeEditInput" placeholder="填写代号"/>
	                                        </div>
	                                        <p id="productChildTypeCodeEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editProductChildType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteProductChildTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除产品子类型</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此产品子类型吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteProductChildType}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="productChildTypeTableList"
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
export default ProductChildType