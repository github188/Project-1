import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditPAssetsType" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPAssetsType" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.pAssetTypeTableEvent = {
    'click .EditPAssetsType':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    $("#pAssetsTypeNameEditInput").css("border", "1px solid #d0d0d0");
	    $("#pAssetsTypeDesEditInput").css("border", "1px solid #d0d0d0");
        $("#editPAssetsTypeModal").modal("show");
        var id = row.RecId;
        _this.props.setAssetsTypeId(id);
        $("#pAssetsTypeNameEditInput").val(row.typeAlias);
        $("#pAssetsTypeDesEditInput").val(row.descript);
    },
    'click .DelPAssetsType':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    	
		$("#deletePAssetsTypeModal").modal("show");
        var id = row.RecId;
        _this.props.setAssetsTypeId(id);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ParentAssetType = React.createClass({
        getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.assetsType;
      $("#pAssetTypeTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#pAssetTypeTableList").bootstrapTable({
            columns: [
	                  {
			            title: '父级资产类型名称',
			            field: 'typeAlias',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '描述',
			            field: 'descript',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: pAssetTypeTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: pAssetTypeTableEvent,
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
        titleBoxObjW.innerHTML = "父级资产类型管理";
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
            _this.props.get_pAssetsTypeData();
        };

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加父级资产类型');
        addBtnObj.innerHTML = "添加父级资产类型";
        addBtnObj.onclick = function () {
        	$("#pAssetsTypeNameInput").val("");
        	$("#pAssetsTypeDesInput").val("");
        	$("#pAssetsTypeNameInput").css("border", "1px solid #d0d0d0");
        	$("#pAssetsTypeDesInput").css("border", "1px solid #d0d0d0");
            $("#addPAssetsTypeModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#pAssetTypeTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    savePAssetType:function(){
    	var pAssetsTypeName = $("#pAssetsTypeNameInput").val();
    	var pAssetsTypeDes = $("#pAssetsTypeDesInput").val();
    	if(pAssetsTypeName.trim() == null || pAssetsTypeName.trim() == "") {
           	$("#pAssetsTypeNameInput").focus();
            $("#pAssetsTypeNameInput").css("outline", "none");
            $("#pAssetsTypeNameInput").css("border", "1px solid red");
            return false;
        }
//  	else if(pAssetsTypeDes.trim() == null || pAssetsTypeDes.trim() == ""){
//      	$("#pAssetsTypeDesInput").focus();
//          $("#pAssetsTypeDesInput").css("outline", "none");
//          $("#pAssetsTypeDesInput").css("border", "1px solid red");
//          return false;
//      }
    	this.props.onClickSave(12);
    	$("#addPAssetsTypeModal").modal("hide");
    },
    editPAssetType:function(){
    	var pAssetsTypeName = $("#pAssetsTypeNameEditInput").val();
    	var pAssetsTypeDes = $("#pAssetsTypeDesEditInput").val();
    	if(pAssetsTypeName.trim() == null || pAssetsTypeName.trim() == "") {
           	$("#pAssetsTypeNameEditInput").focus();
            $("#pAssetsTypeNameEditInput").css("outline", "none");
            $("#pAssetsTypeNameEditInput").css("border", "1px solid red");
            return false;
        }
//  	else if(pAssetsTypeDes.trim() == null || pAssetsTypeDes.trim() == ""){
//      	$("#pAssetsTypeDesEditInput").focus();
//          $("#pAssetsTypeDesEditInput").css("outline", "none");
//          $("#pAssetsTypeDesEditInput").css("border", "1px solid red");
//          return false;
//      }
        this.props.onClickEdit(12);
        $("#editPAssetsTypeModal").modal("hide");
    },
    deletePAssetType:function () {
        this.props.delete_assetsTypeData(12);
        $("#deletePAssetsTypeModal").modal("hide");
    },
    render: function () {
        return (
            <div className='singleSourceMag'>
                {/*添加工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="addPAssetsTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加父级资产类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="pAssetsTypeNameInput" className="col-sm-5 control-label">父级资产类型名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="pAssetsTypeNameInput" name="pAssetsTypeNameInput" placeholder="填写父级资产类型名称"/>
                                        </div>
                                        <p id="pAssetsTypeNameInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="pAssetsTypeDesInput" className="col-sm-5 control-label">描述</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="pAssetsTypeDesInput" name="pAssetsTypeDesInput" placeholder="填写描述信息"/>
                                        </div>
                                        <p id="pAssetsTypeDesInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.savePAssetType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="editPAssetsTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑父级资产类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="pAssetsTypeNameEditInput" className="col-sm-5 control-label">父级资产类型名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="pAssetsTypeNameEditInput" name="pAssetsTypeNameEditInput" placeholder="填写父级资产类型名称"/>
                                            </div>
                                        </div>
                                        <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="pAssetsTypeDesEditInput" className="col-sm-5 control-label">描述</label>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="pAssetsTypeDesEditInput" name="pAssetsTypeDesEditInput" placeholder="填写描述信息"/>
	                                        </div>
	                                        <p id="pAssetsTypeDesEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    	</div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editPAssetType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="deletePAssetsTypeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除父级资产类型</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此父级资产类型吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deletePAssetType}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="pAssetTypeTableList"
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