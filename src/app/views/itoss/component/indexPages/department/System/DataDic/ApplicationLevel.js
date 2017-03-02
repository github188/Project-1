import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditApplicationLevel" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelApplicationLevel" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.applicationLevelTableEvent = {
    'click .EditApplicationLevel':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    $("#appNumberEditInput").css("border", "1px solid #d0d0d0");
	    $("#appTypeEditInput").css("border", "1px solid #d0d0d0");
	    $("#appLevelEditInput").css("border", "1px solid #d0d0d0");
        $("#editApplicationLevelModal").modal("show");
        var id = row.RecId;
        _this.props.setApplevreSponseId(id);
        $("#appNumberEditInput").val(row.AppNumber);
        $("#appTypeEditInput").val(row.AppType);
        $("#appLevelEditInput").val(row.ResponseLev);
    },
    'click .DelApplicationLevel':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
			$("#deleteApplicationLevelModal").modal("show");
	        var id = row.RecId;
	        _this.props.setApplevreSponseId(id);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ApplicationLevel = React.createClass({
        getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.applevreSponseData;
      $("#applicationLevelTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#applicationLevelTableList").bootstrapTable({
            columns: [
	                  {
			            title: '序号',
			            field: 'AppNumber',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '应用类型',
			            field: 'AppType',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '响应级别',
			            field: 'ResponseLev',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: applicationLevelTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: applicationLevelTableEvent,
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
        titleBoxObjW.innerHTML = "应用响应级别管理";
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
            _this.props.get_applevreSponse();
        };

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加应用响应级别');
        addBtnObj.innerHTML = "添加应用响应级别";
        addBtnObj.onclick = function () {
        	 $("#appNumberInput").val("");
	         $("#appTypeInput").val("");
	         $("#appLevelInput").val("");
        	 $("#appNumberInput").css("border", "1px solid #d0d0d0");
		    $("#appTypeInput").css("border", "1px solid #d0d0d0");
		    $("#appLevelInput").css("border", "1px solid #d0d0d0");
            $("#addApplicationLevelModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#applicationLevelTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    saveApplicationLevel:function(){
    	//非零正整数正则表达式
    	var reg = /^\+?[1-9][0-9]*$/;
    	var appNumber = $("#appNumberInput").val();
    	var appType = $("#appTypeInput").val();
    	var appLevelInput = $("#appLevelInput").val();
    	if(appNumber.trim() == null || appNumber.trim() == "" || !reg.test(appNumber)) {
           	$("#appNumberInput").focus();
            $("#appNumberInput").css("outline", "none");
            $("#appNumberInput").css("border", "1px solid red");
            return false;
        }else if(appType.trim() == null || appType.trim() == ""){
        	$("#appTypeInput").focus();
            $("#appTypeInput").css("outline", "none");
            $("#appTypeInput").css("border", "1px solid red");
            return false;
        }else if(appLevelInput.trim() == null || appLevelInput.trim() == ""){
        	$("#appLevelInput").focus();
            $("#appLevelInput").css("outline", "none");
            $("#appLevelInput").css("border", "1px solid red");
            return false;
        }
    	this.props.onClickSave(15);
    	$("#addApplicationLevelModal").modal("hide");
    },
    editApplicationLevel:function(){
    	var appNumber = $("#appNumberEditInput").val();
    	var appType = $("#appTypeEditInput").val();
    	var appLevelInput = $("#appLevelEditInput").val();
    	if(appNumber.trim() == null || appNumber.trim() == "") {
           	$("#appNumberEditInput").focus();
            $("#appNumberEditInput").css("outline", "none");
            $("#appNumberEditInput").css("border", "1px solid red");
            return false;
        }else if(appType.trim() == null || appType.trim() == ""){
        	$("#appTypeEditInput").focus();
            $("#appTypeEditInput").css("outline", "none");
            $("#appTypeEditInput").css("border", "1px solid red");
            return false;
        }else if(appLevelInput.trim() == null || appLevelInput.trim() == ""){
        	$("#appLevelEditInput").focus();
            $("#appLevelEditInput").css("outline", "none");
            $("#appLevelEditInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(15);
        $("#editApplicationLevelModal").modal("hide");
    },
    deleteApplicationLevel:function () {
        this.props.delete_applevreSponse(15);
        $("#deleteApplicationLevelModal").modal("hide");
    },
    render: function () {
        return (
            <div className='singleSourceMag'>
                {/*添加工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="addApplicationLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加应用响应类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="appNumberInput" className="col-sm-5 control-label">序号</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="appNumberInput" name="appNumberInput" placeholder="填写序号"/>
                                        </div>
                                        <p id="appNumberInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="appTypeInput" className="col-sm-5 control-label">应用类型</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="appTypeInput" name="appTypeInput" placeholder="填写应用类型"/>
                                        </div>
                                        <p id="appTypeInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="appLevelInput" className="col-sm-5 control-label">应用级别</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="appLevelInput" name="appLevelInput" placeholder="填写应用级别"/>
                                        </div>
                                        <p id="appLevelInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveApplicationLevel}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="editApplicationLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑应用响应级别</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="appNumberEditInput" className="col-sm-5 control-label">序号</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="appNumberEditInput" name="appNumberEditInput" placeholder="填写序号"/>
	                                        </div>
	                                        <p id="appNumberEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="appTypeEditInput" className="col-sm-5 control-label">应用类型</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="appTypeEditInput" name="appTypeEditInput" placeholder="填写应用类型"/>
	                                        </div>
	                                        <p id="appTypeEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
	                                    <div className="form-group"  style={{"position":"relative"}}>
	                                        <label for="appLevelEditInput" className="col-sm-5 control-label">应用级别</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="appLevelEditInput" name="appLevelEditInput" placeholder="填写应用级别"/>
	                                        </div>
	                                        <p id="appLevelEditInput" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editApplicationLevel}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteApplicationLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除应用响应级别</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此应用响应级别吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteApplicationLevel}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="applicationLevelTableList"
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
export default ApplicationLevel