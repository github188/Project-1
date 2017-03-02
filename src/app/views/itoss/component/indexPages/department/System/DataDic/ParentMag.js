import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditPar" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPar" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.parentMagTableEvent = {
    'click .EditPar':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editParModal").modal("show");
        var id = row.RecId;
        _this.props.setAreaId(id);
        $("#editAreaNameInput").val(row.Name);
        $("#editAreaCodeInput").val(row.Code);
        $("#editAreaDescInput").val(row.AreaDesc);
    },
    'click .DelPar':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
		$("#deleteParModal").modal("show");
        var id = row.RecId;
        _this.props.setAreaId(id);
        $("#areaNameInput").val(row.Name);
        $("#areaCodeInput").val(row.Code);
        $("#areaDescInput").val(row.AreaDesc);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ParentMag = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.areaData;
      $("#parentTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#parentTableList").bootstrapTable({

            columns: [
	                  {
			            title: '区域名称',
			            field: 'Name',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '代号',
			            field: 'Code',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '描述',
			            field: 'AreaDesc',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: parentMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: parentMagTableEvent,
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
        titleBoxObjW.innerHTML = "父区域管理";
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
            _this.props.get_areaData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加区域');
        addBtnObj.innerHTML = "添加区域";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
            $("#addModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#parentTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
        $(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
		$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveParentAreaData:function(){
        this.props.onClickSave(1);
        $("#addModal").modal("hide");

    },
    editParentAreaData:function(){
        this.props.onClickEdit(1);
        $("#editParModal").modal("hide");
    },
    deleteAreaParent:function () {
        this.props.delete_areaData(1);
        $("#deleteParModal").modal("hide");
    },
    render: function () {
        return (
            <div className='parentMag'>
                {/*添加区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加父区域</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="areaNameInput" className="col-sm-5 control-label">区域名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="areaNameInput" name="areaNameInput" placeholder="填写区域名称"/>
                                        </div>
                                        <p id="parentModalContent" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="areaCodeInput" className="col-sm-5 control-label">代号</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="areaCodeInput" name="areaCodeInput" placeholder="填写代号"/>
                                        </div>
                                        <p id="parentModalCode" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                        <div className="form-group">
                                            <label for="areaDescInput" className="col-sm-5 control-label">描述</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className=" col-sm-6">
                                                <textarea className="form-control" id="areaDescInput" name="areaDescInput" placeholder="区域描述" style={{"height":"100px"}}></textarea>
                                            </div>
                                        </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveParentAreaData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="editParModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑父区域</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editAreaNameInput" className="col-sm-5 control-label">区域名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editAreaNameInput" name="editAreaNameInput" placeholder="填写区域名称"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editAreaCodeInput" className="col-sm-5 control-label">代号</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editAreaCodeInput" name="editAreaCodeInput" placeholder="填写代号"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editAreaDescInput" className="col-sm-5 control-label">描述</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-241px","margin-top":"10px"}}>*</b>
                                            <div className=" col-sm-6">
                                                <textarea className="form-control" id="editAreaDescInput" name="editAreaDescInput" placeholder="区域描述" style={{"height":"100px"}}></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editParentAreaData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteParModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除父区域</h4>
                            </div>
                            <div className="modal-body">
                                确定要删除吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteAreaParent}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="parentTableList"
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
export default ParentMag