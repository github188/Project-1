import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditDepart" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelDepart" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.departMagTableEvent = {
    'click .EditDepart':function(e, value, row, index){
         //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editDepModal").modal("show");
        var id = row.DEPARTMENT_ID;
        _this.props.setDepartMentId(id);
        $("#editDepartCodeInput").val(row.DEPARTMENT_CODE);
        $("#editDepartNameInput").val(row.DEPARTMENT_NAME);
    },
    'click .DelDepart':function(e, value, row, index){
    	 //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
		$("#deleteDepModal").modal("show");
        var id = row.DEPARTMENT_ID;
        _this.props.setDepartMentId(id);
     //   $("#departDescInput").val(row.AreaDesc);
     //有没有可能用的是一个id,,,departMentId
    }
};
let _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var DepartMag = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.departMentData;
      $("#departTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#departTableList").bootstrapTable({         
            columns: [
	                  {
			            title: '部门名称',
			            field: 'DEPARTMENT_NAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '部门代号',
			            field: 'DEPARTMENT_CODE',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: departMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: departMagTableEvent,
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
        titleBoxObjW.innerHTML = "部门管理";
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
            _this.props.get_departMentData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加部门');
        addBtnObj.innerHTML = "添加部门";
        addBtnObj.onclick = function () {
            /*----添加部门--*/
            $("#addDepartModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#departTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
        $(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    },
    saveDepartmentData:function(){
    	var DepartmentCode = $("#departNameInput").val();
        var DepartmentName = $("#departCodeInput").val();
        if(DepartmentCode != null && DepartmentCode != "") {
            $("#departNameInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#departNameInput").focus();
            $("#departNameInput").css("outline", "none");
            $("#departNameInput").css("border", "1px solid red");
            return false;
        }
         if(DepartmentName != null && DepartmentName != "") {
            $("#departCodeInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#departCodeInput").focus();
            $("#departCodeInput").css("outline", "none");
            $("#departCodeInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickSave(23);
        //添加
        $("#addDepartModal").modal("hide");
    },
    editDepartmentData:function(){
        this.props.onClickEdit(23);
        //编辑
        $("#editDepModal").modal("hide");
    },
    deleteDepartment:function () {
        this.props.delete_departMentData(23);
        $("#deleteDepModal").modal("hide");
    },
    render: function () {
        return (
            <div className='departMag'>
                {/*添加部门------------------------------------模态弹窗*/}
                <div className="modal fade" id="addDepartModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加部门</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"340px"}}>
                                    <form className="form-horizontal" role="form">
	                                    <div className="form-group">
	                                        <label for="departNameInput" className="col-sm-5 control-label">部门名称</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="departNameInput" placeholder="填写部门名称"/>
	                                        </div>
	                                    </div>
	                                     <p id="departmentModalContent" style={{"position":"absolute","left":"358px","color":"red"}}></p>
	                                    <div className="form-group">
	                                        <label for="departCodeInput" className="col-sm-5 control-label">部门代号</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="departCodeInput" placeholder="填写部门代号" name="departCodeInput"/>
	                                        </div>
	                                    </div>
	                                    <p id="departmentModalCode" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                	</form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveDepartmentData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑部门------------------------------------模态弹窗*/}
                <div className="modal fade" id="editDepModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑部门</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editDepartNameInput" className="col-sm-5 control-label">部门名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editDepartNameInput" name="editDepartNameInput" placeholder="填写区域名称"/>
                                            </div>
                                        </div>
                                         <p id="departmentModalContentBj" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                        <div className="form-group">
                                            <label for="editDepartCodeInput" className="col-sm-5 control-label">部门代号</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editDepartCodeInput" name="editDepartCodeInput" placeholder="填写代号"/>
                                            </div>
                                        </div>
                                         <p id="departmentModalCodeBj" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editDepartmentData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除部门------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteDepModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除部门</h4>
                            </div>
                            <div className="modal-body">
                                 您确定要删除此部门吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteDepartment}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="departTableList"
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



export default DepartMag