import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="editFauLevel" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="delFauLevel" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.faultLevelMagTableEvent = {
    'click .editFauLevel':function(e, value, row, index){
         //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editFaultLevelModal").modal("show");
        var id = row.RecId;
        _this.props.faultLevelId(id);
        $("#faultLevelNameEditInput").val(row.Name);
    },
    'click .delFauLevel':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
		$("#deleteFaultLevelModal").modal("show");
        var id = row.RecId;
        _this.props.faultLevelId(id);
        $("#faultLevelNameEditInput").val(row.Name);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var FaultLevel = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.faultLevelData;
      $("#faultLevelTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#faultLevelTableList").bootstrapTable({

            columns: [
	                  {
			            title: '故障级别名称',
			            field: 'Name',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: faultLevelMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: faultLevelMagTableEvent,
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
        titleBoxObjW.innerHTML = "故障级别管理";
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
            _this.props.get_faultLevelData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加故障级别');
        addBtnObj.innerHTML = "添加故障级别";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
            $("#addFaultLevelModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#faultLevelTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveFaultLevelData:function(){
        var name = $("#faultLevelNameAddInput").val();
        if(name != null && name != "") {
            $("#faultLevelNameAddInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#faultLevelNameAddInput").focus();
            $("#faultLevelNameAddInput").css("outline", "none");
            $("#faultLevelNameAddInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickSave(9);
        $("#addFaultLevelModal").modal("hide");
    },
    editFaultLevelData:function(){
        var nameEdit = $("#faultLevelNameEditInput").val();
        if(nameEdit != null && nameEdit != "") {
            $("#faultLevelNameEditInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#faultLevelNameEditInput").focus();
            $("#faultLevelNameEditInput").css("outline", "none");
            $("#faultLevelNameEditInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(9);
        $("#editFaultLevelModal").modal("hide");
    },
    deleteFaultLevel:function (){
        this.props.delete_areaData(9);
        $("#deleteFaultLevelModal").modal("hide");
    },
    render: function () {
        return (
            <div className='faultLevelMag'>
                {/*添加故障级别------------------------------------模态弹窗*/}
                <div className="modal fade" id="addFaultLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{"zIndex":"1041"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加故障级别</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="faultLevelNameAddInput" className="col-sm-5 control-label">故障级别名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="faultLevelNameAddInput" name="faultLevelNameAddInput" placeholder="填写故障级别名称"/>
                                        </div>
                                        <p id="faultLevelparentModalContent" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveFaultLevelData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑故障级别------------------------------------模态弹窗*/}
                <div className="modal fade" id="editFaultLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{"zIndex":"1041"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑故障级别</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="faultLevelNameEditInput" className="col-sm-5 control-label">故障级别名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="faultLevelNameEditInput" name="faultLevelNameEditInput" placeholder="填写故障级别名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editFaultLevelData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除故障级别------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteFaultLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除故障级别</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此故障级别吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteFaultLevel}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域故障级别*/}
                <div className="col-md-12">
                    <table id="faultLevelTableList"
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
export default FaultLevel