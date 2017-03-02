import React from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditPos" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPos" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
let _this;
window.posMagTableEvent = {
    'click .EditPos':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
        var pid = row.DEPARTMENT_ID;
        var cid = row.POSITION_ID;
        var pName = row.DEPARTMENT_NAME;
        var cName = row.POSITION_NAME;
        console.log(pid)
        console.log(pName)
        $("#editPosModal").modal("show");      
        $("#editPositionSelect").find(".rw-input").text(pName); 
        $("#editPosDepartInput").val(cName);   
        _this.props.setPositionId(cid);
        _this.props.setDepartMentPname(pName);
        _this.props.setDepartMentPid(pid);
    },
    'click .DelPos':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
		$("#deletePosModal").modal("show");
        var pid = row.DEPARTMENT_ID;
        var cid = row.POSITION_ID;
        var pName = row.DEPARTMENT_NAME;
        var cName = row.POSITION_NAME;
        console.log(pid)
        console.log(pName)
        $("#deletePosModal").modal("show"); 
        $("#editPositionSelect").find(".rw-input").text(pName); 
        $("#editPosDepartInput").val(cName);
        _this.props.setPositionId(cid);  
        _this.props.setDepartMentPid(pid);
        _this.props.setDepartMentPname(pName);
    //  $("#departDescInput").val(row.AreaDesc);
    }
};
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var PosMag = React.createClass({
        // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            parentIndex: 0,
            parentIndexEdit:0
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.positionData;
      $("#posTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#posTableList").bootstrapTable({
            columns: [
	                  {
			            title: '职位名称',
			            field: 'POSITION_NAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '技术部门',
			            field: 'DEPARTMENT_NAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: posMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: posMagTableEvent,
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
        titleBoxObjW.innerHTML = "职位管理";
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
            _this.props.get_positionData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加职位');
        addBtnObj.innerHTML = "添加职位";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
           $("#parentMagSelect").find(".rw-input").text("请选择");
           $("#posDepartInput").val("")
           $("#addPosModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#posTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    savePosData:function(){
        var parentMagSelect = $("#parentMagSelect").find(".rw-input").text();
        var posDepartInput = $('#posDepartInput').val();
	        console.log("parentMagSelect")
	        console.log(parentMagSelect)
	        console.log("posDepartInput")
	        console.log(posDepartInput)
        if(parentMagSelect == "请选择" || parentMagSelect == "") {
            $("#parentMagSelect").focus();
            $("#parentMagSelect").css("outline", "none");
            $("#parentMagSelect").css("border", "1px solid red");
            return false
        }else if(posDepartInput == null || posDepartInput == ""  ){
        	$("#parentMagSelect").css("border", "1px solid #d0d0d0");
        
        	$("#posDepartInput").focus();
            $("#posDepartInput").css("outline", "none");
            $("#posDepartInput").css("border", "1px solid red");
            return false
        }else{
        	 this.props.onClickSave(24);
       		 $("#addPosModal").modal("hide");
        }
    },
    editPosData:function(){
        this.props.onClickEdit(24);
        $("#editPosModal").modal("hide");
    },  
    deletePos:function () {
        this.props.delete_positionData(24);
        $("#deletePosModal").modal("hide");
    },
    addDepartmentSelect:function(e){
        var departMentData = this.props.departMentData;
        var pid = e.DEPARTMENT_ID;
        var that = this;
        for(var i=0;i<departMentData.length;i++){
            if(pid == departMentData[i].DEPARTMENT_ID){
                that.setState({parentIndex:i+1});
            };
        };
        $("#parentMagSelect").find(".rw-input").text(e.DEPARTMENT_NAME);
        this.props.setDepartMentPid(pid);
        this.props.setDepartMentPname(e.DEPARTMENT_NAME);
    },
      setCurChildPidEdit:function(e){
	    var departMentData = this.props.departMentData;
        var pid = e.DEPARTMENT_ID;
        var that = this;
        for(var i=0;i<departMentData.length;i++){
            if(pid == departMentData[i].DEPARTMENT_ID){
                that.setState({parentIndexEdit:i+1});
            };
        };
	    $("#editPositionSelect").find(".rw-input").text(e.DEPARTMENT_NAME);
	    this.props.setDepartMentPid(pid);
	    this.props.setDepartMentPname(e.DEPARTMENT_NAME);
    },
     onChangeDropDown:function () {

    },
    render: function () {
    	var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var departMentData = this.props.departMentData;
    	var list = [],list1=[];
        list.push({DEPARTMENT_ID:"",DEPARTMENT_NAME:""});
        list1.push({DEPARTMENT_ID:"",DEPARTMENT_NAME:""});
        for(var i=0;i<departMentData.length;i++){
            list.push(departMentData[i]);
            list1.push(departMentData[i]);
        };
        return (
            <div className='positionMag'>
                {/*添加职位------------------------------------模态弹窗*/}
                <div className="modal fade" id="addPosModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加职位</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"340px"}}>
                                    <form className="form-horizontal" role="form">
	                                    <div className="form-group">
	                                        <label for="posNameInput" className="col-sm-5 control-label">部门名称</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-188px","margin-top":"10px"}}>*</b>	                                       
	                                         <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[parentIndex]} textField="DEPARTMENT_NAME" onSelect={this.addDepartmentSelect} onChange={this.onChangeDropDown} id="parentMagSelect"/>
                                            </div>
	                                    </div>
	                                    <div className="form-group">
	                                        <label for="posDepartInput" className="col-sm-5 control-label">职位名称</label>
	                                        <b style={{"color":"red","display":"inline-block","margin-left":"-188px","margin-top":"10px"}}>*</b>
	                                        <div className="col-sm-6">
	                                            <input type="text" className="form-control" id="posDepartInput" placeholder="填写职位" name="posDepartInput"/>
	                                        </div>
	                                    </div>
                                	</form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.savePosData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑职位------------------------------------模态弹窗*/}
                <div className="modal fade" id="editPosModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑职位</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editPosNameInput" className="col-sm-5 control-label">部门名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>	
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list1[parentIndexEdit]} textField="DEPARTMENT_NAME" onSelect={this.setCurChildPidEdit} onChange={this.onChangeDropDown} id="editPositionSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editPosDepartInput" className="col-sm-5 control-label">职位名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editPosDepartInput" name="editPosDepartInput" placeholder="填写代号"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editPosData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除职位------------------------------------模态弹窗*/}
                <div className="modal fade" id="deletePosModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除职位</h4>
                            </div>
                            <div className="modal-body">
                                 您确定要删除此职位吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deletePos}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="posTableList"
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
export default PosMag
