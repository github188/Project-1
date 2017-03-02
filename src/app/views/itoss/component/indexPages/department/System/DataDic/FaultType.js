import React from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
import { Router, Route, link, IndexRoute} from 'react-router';
function editPic() {
    return '<a class="EditPar" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPar" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.FaultTypeTableEvent = {
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
    	
        $("#editFaultTypeDetailModal").modal("show")
        var pId = row.PID;       
        var cId = row.CID;
        var fId = row.FID;
        var pName = row.PNAME;
        var cName = row.CNAME;
        var fName = row.FNAME;
        $("#editParentMagSelect").find(".rw-input").text(pName);
        $("#editFaultTypeDetailNameInput").val(fName);
        _this.props.setFaultSubPid(pId);
        _this.props.setFaultSubId(cId);
        _this.props.setFaultTypeDetailId(fId);
        var list = [];
        var faultSubData = _this.props.faultSubData;
        for (var i = 0; i < faultSubData.length; i++) {
            var idp = faultSubData[i].pId;
            if (pId == idp) {
            	_this.setState({ parentIndexEdit: i });
              	list = faultSubData[i].list1;
            };
        };
        //重新加载故障细类
        for (var j = 0; j < list.length; j++) {
            var namec = list[j].cName;
            $("#editSubMagSelect").find(".rw-input").text(namec);             
        };
        $("#editSubMagSelect").find(".rw-input").text(cName);
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
	    
        var pId = row.PID;
        var cId = row.CID;
        var fId = row.FID;
        var pName = row.PNAME;
        var cName = row.CNAME;
        var fName = row.FNAME;
        _this.props.setFaultTypeDetailId(fId);
        $("#editParentMagSelect").find(".rw-input").text(pName);
        $("#editSubMagSelect").find(".rw-input").text(cName);
        $("#editFaultTypeDetailNameInput").val(fName);
        $("#deleteFaultTypeDetailModal").modal("show");
    }
};
let _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var FaultType = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            parentIndex: 0,
            subIndex:0,
            parentIndexEdit:0,
            subIndexEdit:0
            
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.faultTypeDetailData;
      var bdata1 = this.props.faultSubData;
      
      $("#faultTypTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#faultTypTableList").bootstrapTable({
            //url: "FaultType.json",
            // height:538,
            //striped: true,
            // cellStyle: {backgroundColor: '#daf1f8'},
            columns: [
                {
                    title: '故障类型名称',
                    field: 'FNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true,
                }, {
                    title: '故障大类名称',
                    field: 'PNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '故障细类名称',
                    field: 'CNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: FaultTypeTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: FaultTypeTableEvent,
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
        titleBoxObjW.innerHTML = "故障类型管理";
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
        	_this.props.get_faultTypeDetailData();
            // _this.props.get_allUser();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加故障类型');
        addBtnObj.innerHTML = "添加故障类型";
        addBtnObj.onclick = function () {
            //alert("开始增加新故障类型！！");
//          return (<NewUser add_user={ _this.props.add_user} />);
            /*----新建用户--*/
            _this.props.setFaultSubId("");
            _this.props.setFaultSubPid("");
            $('#faultTypeDetailNameInput').val("");
            $("#parentMagSelect").find(".rw-input").text("请选择");
            $("#subMagSelect").find(".rw-input").text("请选择");
            $("#addFaultTypeDetailModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#faultTypTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
		$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});  
    },
    deleteFaultTypeDetailData:function () {
        this.props.delete_faultTypeDetailData(19);
        $("#deleteFaultTypeDetailModal").modal("hide");
    },
    addFaultTypeSelect: function(e) {
        var faultSubData = this.props.faultSubData;
        var id = e.pId;
        var that = this;
        for (var i = 0; i < faultSubData.length; i++) {
            var pid = faultSubData[i].pId;
            if (id == pid) {
                that.setState({ parentIndex: i });
            };
        };
        $("#parentMagSelect").find(".rw-input").text(e.pName);
        $("#subMagSelect").find(".rw-input").text("请选择");
        this.props.setFaultSubPid(id);
    },
    addSubFaultTypeSelect: function(e) {
        var faultSubData = this.props.faultSubData;
        var id = e.cId;
        var that = this;
        for (var i = 0; i < faultSubData.length; i++) {
            var cid = faultSubData[i].cId;
            if (id == cid) {
                that.setState({ subIndex: i });
            };
        };
        $("#subMagSelect").find(".rw-input").text(e.cName);
        this.props.setFaultSubId(id);
    },
    editFaultTypeSelect:function(e){
        var faultSubData = this.props.faultSubData;
        var id = e.pId;
        var that = this;
        for (var i = 0; i < faultSubData.length; i++) {
            var pid = faultSubData[i].pId;
            if (id == pid) {
                that.setState({ parentIndexEdit: i });
            };
        };
        $("#editParentMagSelect").find(".rw-input").text(e.pName);
        $("#editSubMagSelect").find(".rw-input").text("请选择");
        this.props.setFaultSubPid(id);
    },
    editSubFaultTypeSelect:function(e){
        var faultSubData = this.props.faultSubData;
        var id = e.cId;
        var that = this;
        for (var i = 0; i < faultSubData.length; i++) {
            var cid = faultSubData[i].cId;
            if (id == cid) {
                that.setState({ subIndexEdit: i });
            };
        };
        $("#editSubMagSelect").find(".rw-input").text(e.cName);
        this.props.setFaultSubId(id);
    },
    saveFaultTypeDetailData:function () {
        this.props.onClickSave(19);
        $("#addFaultTypeDetailModal").modal("hide");
    },
    editFaultTypeDetailData:function () {
        this.props.onClickEdit(19);
        $("#editFaultTypeDetailModal").modal("hide");
    },
    onChangeDropDown:function () {

    },
    render: function() {
        var parents = this.props.faultSubData;
        var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var subIndex = this.state.subIndex;
        var subIndexEdit = this.state.subIndexEdit;
        var list = [],list1=[];
        var list = parents;
        for (var i = 0; i < parents.length; i++) {
            list1.push(parents[i].list1);
        };
        return (
            <div className = 'FaultType'>
                {/*添加区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="addFaultTypeDetailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加故障类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"340px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="fNameInput" className="col-sm-5 control-label">故障大类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                               <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[parentIndex]} textField="pName" onSelect={this.addFaultTypeSelect} onChange={this.onChangeDropDown} id="parentMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="cNameInput" className="col-sm-5 control-label">故障细类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1[parentIndex]} value={list1[subIndex]} textField="cName" onSelect={this.addSubFaultTypeSelect} onChange={this.onChangeDropDown} id="subMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="faultTypeDetailNameInput" className="col-sm-5 control-label">故障类型名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="faultTypeDetailNameInput" placeholder="填写故障类型名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.saveFaultTypeDetailData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="editFaultTypeDetailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑故障类型</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"340px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="fNameInput" className="col-sm-5 control-label">故障大类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[parentIndexEdit]} textField="pName" onSelect={this.editFaultTypeSelect} onChange={this.onChangeDropDown} id="editParentMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="cNameInput" className="col-sm-5 control-label">故障细类名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1[parentIndexEdit]} value={list1[subIndexEdit]} textField="cName" onSelect={this.editSubFaultTypeSelect} onChange={this.onChangeDropDown} id="editSubMagSelect"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editFaultTypeDetailNameInput" className="col-sm-5 control-label">故障类型名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-189px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editFaultTypeDetailNameInput" placeholder="填写故障类型名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={this.editFaultTypeDetailData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                 {/*删除区域------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteFaultTypeDetailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除故障类型</h4>
                            </div>
                            <div className="modal-body">
                                确定要删除吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteFaultTypeDetailData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="faultTypTableList"
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
export default FaultType