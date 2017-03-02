import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditProductType" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelProductType" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.productTypeTableEvent = {
    'click .EditProductType':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    $("#productTypeNameEditInput").css("border", "1px solid #d0d0d0");
	    $("#productTypeCodeEditInput").css("border", "1px solid #d0d0d0");
        $("#editProductTypeModal").modal("show");
        var id = row.recId;
        _this.props.setProductTypeId(id);
        $("#productTypeNameEditInput").val(row.typeName);
        $("#productTypeCodeEditInput").val(row.codeName);
    },
    'click .DelProductType':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
			$("#deleteProductTypeModal").modal("show");
	        var id = row.recId;
	        _this.props.setProductTypeId(id);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ProductType = React.createClass({
        getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.productType;
      $("#productTypeTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#productTypeTableList").bootstrapTable({
            columns: [
	                  {
			            title: '产品类型名称',
			            field: 'typeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '产品类型代号',
			            field: 'codeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: productTypeTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: productTypeTableEvent,
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
        titleBoxObjW.innerHTML = "产品类型管理";
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
        	$("#productTypeNameInput").val("");
        	$("#productTypeCodeInput").val("");
            _this.props.get_productTypes();
        };

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加产品类型');
        addBtnObj.innerHTML = "添加产品类型";
        addBtnObj.onclick = function () {
        	$("#productTypeNameInput").val();
        	$("#productTypeCodeInput").val();
		    $("#productTypeNameInput").css("border", "1px solid #d0d0d0");
		    $("#productTypeCodeInput").css("border", "1px solid #d0d0d0");
            $("#addProductTypeModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#productTypeTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveProductType:function(){
    	//非零正整数正则表达式
    	var productTypeName = $("#productTypeNameInput").val();
    	var productTypeCode = $("#productTypeCodeInput").val();
    	if(productTypeName.trim() == null || productTypeName.trim() == "") {
           	$("#productTypeNameInput").focus();
            $("#productTypeNameInput").css("outline", "none");
            $("#productTypeNameInput").css("border", "1px solid red");
            return false;
        }else if(productTypeCode.trim() == null || productTypeCode.trim() == ""){
        	$("#productTypeCodeInput").focus();
            $("#productTypeCodeInput").css("outline", "none");
            $("#productTypeCodeInput").css("border", "1px solid red");
            return false;
        }
    	this.props.onClickSave(16);
    	$("#addProductTypeModal").modal("hide");
    },
    editProductType:function(){
    	var productTypeName = $("#productTypeNameEditInput").val();
    	var productTypeCode = $("#productTypeCodeEditInput").val();
    	if(productTypeName.trim() == null || productTypeName.trim() == "") {
           	$("#productTypeNameEditInput").focus();
            $("#productTypeNameEditInput").css("outline", "none");
            $("#productTypeNameEditInput").css("border", "1px solid red");
            return false;
        }else if(productTypeCode.trim() == null || productTypeCode.trim() == ""){
        	$("#productTypeCodeEditInput").focus();
            $("#productTypeCodeEditInput").css("outline", "none");
            $("#productTypeCodeEditInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(16);
        $("#editProductTypeModal").modal("hide");
    },
    deleteProductType:function () {
        this.props.delete_ProductTypeData(16);
        $("#deleteProductTypeModal").modal("hide");
    },
    render: function () {
        return (
            <div className='singleSourceMag'>
                {/*添加工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="addProductTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加产品类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="productTypeNameInput" className="col-sm-5 control-label">产品类型名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="productTypeNameInput" name="productTypeNameInput" placeholder="填写产品类型名称"/>
                                        </div>
                                        <p id="productTypeNameInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="productTypeCodeInput" className="col-sm-5 control-label">代号</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="productTypeCodeInput" name="productTypeCodeInput" placeholder="填写代号"/>
                                        </div>
                                        <p id="productTypeCodeInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveProductType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="editProductTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑产品类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="productTypeNameEditInput" className="col-sm-5 control-label">产品类型名称</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="productTypeNameEditInput" name="productTypeNameEditInput" placeholder="填写产品类型名称"/>
	                                        </div>
	                                        <p id="productTypeNameEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="productTypeCodeEditInput" className="col-sm-5 control-label">代号</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="productTypeCodeEditInput" name="productTypeCodeEditInput" placeholder="填写代号"/>
	                                        </div>
	                                        <p id="productTypeCodeEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editProductType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteProductTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除产品类型</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此产品类型吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteProductType}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="productTypeTableList"
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
export default ProductType