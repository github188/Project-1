import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, link, IndexRoute,History} from 'react-router';
function editPic() {
    return '<a class="EditPar" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPar" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.FaultClassTableEvent = {
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
    	
        $("#editFaultClassModal").modal("show")
         var id = row.RecId;
        _this.props.setFaultTypeId(id);
        $("#editFaultClaNameInput").val(row.FaultName);
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
    	
    	$("#deleteFaultClassModal").modal("show");
        var id = row.RecId;
        _this.props.setFaultTypeId(id);
        $("#faultClaNameInput").val(row.FaultName);
    }
};
let _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var FaultClass = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.faultType;
      $("#faultTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#faultTableList").bootstrapTable({
            //url: "FaultClassMag.json",
            // height:538,
            //striped: true,
            // cellStyle: {backgroundColor: '#daf1f8'},
            columns: [
                {
                    title: '故障大类名称',
                    field: 'FaultName',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: FaultClassTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: FaultClassTableEvent,
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
        titleBoxObjW.innerHTML = "故障大类管理";
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
            _this.props.get_sysFaultType();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加故障大类');
        addBtnObj.innerHTML = "添加故障大类";
        addBtnObj.onclick = function () {
            //alert("开始增加添加一级故障！！");
//          return (<NewUser add_user={ _this.props.add_user} />);
            /*----新建用户--*/
            $('#faultClaNameInput').val("");
            $("#addFaultClassModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#faultTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
	    $(".btn").css({"margin-bottom":"4px"});
        $(".fixed-table-toolbar").css({"padding-top":"4px"});
        $(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveFaultType:function(){
    	$("#addFaultClassModal").modal("hide");
    	var faultClaNameInput = $('#faultClaNameInput').val();
    	if(faultClaNameInput == ''){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "请填写故障大类名称"
	      $('#publicMessageModal').modal('show');
	      return false;
	    }
    	else
	    {
	    	this.props.onClickSave(17);
	    }
    },
    editFaultType:function(){
    	$("#editFaultClassModal").modal("hide");
    	var editFaultClaNameInput = $('#editFaultClaNameInput').val();
    	if(editFaultClaNameInput == ''){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "请填写故障大类名称"
	      $('#publicMessageModal').modal('show');
	      return false;
	    }
    	else
	    {
	    	this.props.onClickEdit(17);
	    }
    },
    deleteFaultType:function () {
        this.props.delete_sysFaultType(17);
        $("#deleteFaultClassModal").modal("hide");
    },
    render: function() {
        return (
            <div className = 'FaultClass'>
                {/*添加区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="addFaultClassModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加故障大类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"440px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="faultClaNameInput" className="col-sm-5 control-label">故障大类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" name="faultClaNameInput" id="faultClaNameInput" placeholder="填写故障大类名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer" style={{"border-top":"none"}}>
                                <button type="button" className="btn btn-info" onClick={this.saveFaultType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="editFaultClassModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑故障大类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"440px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editFaultClaNameInput" className="col-sm-5 control-label">故障大类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" name="editFaultClaNameInput" id="editFaultClaNameInput" placeholder="填写故障大类名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.editFaultType}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                 {/*删除区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteFaultClassModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除故障大类</h4>
                            </div>
                            <div className="modal-body">
                                确定要删除吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteFaultType}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="faultTableList"
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
export default FaultClass