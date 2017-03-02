import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
var PersonnelMagTree = require( "../../../../monitorTree/personnelMagTree");
function editPic() {
    return '<a class="EditPersonnel" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPersonnel" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.personnelMagTableEvent = {
    'click .EditPersonnel':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end

        $("#addPersonnelModal").modal("show");
        $("#hiddenInput").val("edit");
        var Cid = row.CID;
        var Pid = row.PID;
        _this.props.setUnitStaffInfoCid(Cid);
        // _this.props.setUnitStaffInfoPid(Pid);
        _this.props.init_personnelEditMagTree(Pid);
        $("#nameInput").val(row.CNAME);
        $("#abbInput").val(row.ACRONYM);
        $("#telInput").val(row.PHONE);
        // $("#unitInput").val(row.PNAME);
        $("#adressInput").val(row.UNITADDRESS);
        $("#headInput").val(row.ISMAIN);
    },
    'click .DelPersonnel':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
        $("#deletePersonnelModal").modal("show");
        var id = row.CID;
        _this.props.setUnitStaffInfoCid(id);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var PersonnelMag = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.unitStaffInfoData;
      $("#personnelTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#personnelTableList").bootstrapTable({
            columns: [
	                  {
			            title: '单位人员名称',
			            field: 'CNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '名称简写',
			            field: 'ACRONYM',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '联系电话',
			            field: 'PHONE',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '所属单位',
			            field: 'PNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '详细地址',
			            field: 'UNITADDRESS',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '是否为单位负责人',
			            field: 'ISMAIN',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: personnelMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: personnelMagTableEvent,
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
        titleBoxObjW.innerHTML = "单位人员管理";
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
            _this.props.get_unitStaffInfoData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加单位人员');
        addBtnObj.innerHTML = "添加单位人员";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
            $("#nameInput").val("");
            $("#abbInput").val("");
            $("#telInput").val("");
            $("#adressInput").val("");
            $("#hiddenInput").val("add");
            //添加时不选择所属单位
            _this.props.init_personnelEditMagTree("");
            $("#addPersonnelModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#personnelTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
		$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});		
    },
    savePersonnelData:function(){
        if($("#hiddenInput").val() == "add"){
            this.props.onClickSave(20);
            $("#addPersonnelModal").modal("hide");
            this.props.setUnitStaffInfoCid("");
        }else if($("#hiddenInput").val() == "edit"){
            this.props.onClickEdit(20);
            $("#addPersonnelModal").modal("hide");
        }
    },
    deletePersonnel:function () {
        this.props.delete_areaData(20);
        $("#deletePersonnelModal").modal("hide");
    },
    render: function () {
        return (
            <div className='personnelMag'>
                {/*添加单位人员------------------------------------模态弹窗*/}
                <div className="modal fade" id="addPersonnelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加单位人员</h4>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <form className="form-horizontal" role="form" style={{"margin-left":"-210px"}}>
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="nameInput" className="col-sm-6 control-label">人员名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-405px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="nameInput" name="nameInput" placeholder="填写人员名称"/>
                                        </div>
                                        <p id="personnelModalName" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="abbInput" className="col-sm-6 control-label">名称简写</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-405px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="abbInput" name="abbInput" placeholder="填写名称简写"/>
                                        </div>
                                        <p id="personnelModalAbb" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="telInput" className="col-sm-6 control-label">联系电话</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-405px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="telInput" name="telInput" placeholder="填写代号"/>
                                        </div>
                                        <p id="personnelModalTel" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="unitInput" className="col-sm-6 control-label">所属单位</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-405px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="unitSearchInput" name="unitSearchInput" placeholder=""/>
                                        </div>
                                        <p id="personnelModalUnit" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                        <div className="form-group">
                                            <div className="col-sm-6" style={{"margin-left":"420px","width":"243px","height":"200px","border":"1px solid #ccc","border-radius":"3px","overflow-y":"auto"}}>
                                                <PersonnelMagTree get_unitData = {this.props.get_unitData}/>
                                            </div>
                                        </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="adressInput" className="col-sm-6 control-label">详细地址</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-405px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="adressInput" name="adressInput" placeholder="填写详细地址"/>
                                        </div>
                                        <p id="personnelModalAdress" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group" style={{"margin-left":"220px"}}>
                                    	<input type="checkbox" id="headInput" name="headInput" placeholder="" style={{"margin-left":"100px"}}/>
                                    	<span for="headInput" style={{"margin-left":"5px"}}>是否为单位负责人</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="hidden" id="hiddenInput"/>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.savePersonnelData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除单位人员------------------------------------模态弹窗*/}
                <div className="modal fade" id="deletePersonnelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除单位人员</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此单位人员吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deletePersonnel}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="personnelTableList"
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
export default PersonnelMag