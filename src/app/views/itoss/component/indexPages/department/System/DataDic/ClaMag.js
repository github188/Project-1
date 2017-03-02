import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, link, IndexRoute, History } from 'react-router';
import ReactWidgets from "react-widgets";

function editPic() {
    return '<a class="EditCla" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelCla" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.classMagTableEvent = {
    'click .EditCla': function (e, value, row, index) {
        //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editClaModal").modal("show");
        var pid = row.bigServiceId;
        var cid = row.smallServiceId;
        var cName = row.smallServiceName;
        var pName = row.bigServiceName;
        _this.props.setBigServicePid(pid);
        _this.props.setSmallServiceId(cid);
        $("#catgoryClaSelectEdit").find(".rw-input").text(pName);
        $("#editSmallServiceNameInput").val(cName);
    },
    'click .DelCla': function (e, value, row, index) {
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#deleteClaModal").modal("show");
        var pid = row.bigServiceId;
        var cid = row.smallServiceId;
        var cName = row.smallServiceName;
        var pName = row.bigServiceName;
        _this.props.setBigServicePid(pid);
        _this.props.setSmallServiceId(cid);
        $("#catgoryClaSelectEdit").find(".rw-input").text(pName);
        $("#editSmallServiceNameInput").val(cName);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var ClaMag = React.createClass({
    getInitialState: function () {
        _this = this;
        return {
            catgoryIndex: 0,
            catgoryIndexEdit:0
        }
    },
    componentDidUpdate: function () {
        var bdata = this.props.smallServiceData;
        $("#classTableList").bootstrapTable("load", bdata);
    },
    componentDidMount: function () {
        $("#classTableList").bootstrapTable({

            columns: [
                {
                    title: '服务大类',
                    field: 'bigServiceName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '服务细类',
                    field: 'smallServiceName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: classMagTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: classMagTableEvent,
                    formatter: deletePic
                }
            ],
            data: [],
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        titleBoxObj = document.createElement("div");
        let titleBoxObjA = document.createElement("a");
        let titleBoxObjW = document.createElement("span");
        titleBoxObjW.innerHTML = "服务细类管理";
        titleBoxObj.appendChild(titleBoxObjA);
        // console.log(titleBoxObj.appendChild(titleBoxObjA));
        titleBoxObj.setAttribute("class", "pull-left");
        // var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            _this.props.get_smallServiceData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加服务细类');
        addBtnObj.innerHTML = "添加服务细类";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
            $("#catgoryClaSelect").find(".rw-input").text("请选择");
            $("#addClassModal").modal("show");
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({ "display": "inline-block", "width": "243px" });
        $("#classTableList thead>tr").css({ "background": "#d8e1e5" });
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({ "width": "3px", "height": "16px", "background": "#8eddf2", "display": "block", "float": "left", "margin-top": "10px" });
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});  
    },
    setCurClaPid: function (e) {
        var bigServiceData = this.props.bigServiceData;
        var pid = e.bigServiceId;
        var that = this;
        for (var i = 0; i < bigServiceData.length; i++) {
            var bigServiceDataId = bigServiceData[i].RecId;
            if (pid == bigServiceDataId) {
                that.setState({ catgoryIndex: i + 1 });
            }
        }
        // console.log(e)
        $("#catgoryClaSelect").find(".rw-input").text(e.bigServiceName);
        this.props.setBigServicePid(pid);
    },
    setCurClaPidEdit: function (e) {
        var bigServiceData = this.props.bigServiceData;
        var pid = e.bigServiceId;
        var that = this;
        for (var i = 0; i < bigServiceData.length; i++) {
            var bigServiceDataId = bigServiceData[i].RecId;
            if (pid == bigServiceDataId) {
                that.setState({ catgoryIndexEdit: i + 1 });
            }
        }
        // console.log(e)
        $("#catgoryClaSelectEdit").find(".rw-input").text(e.bigServiceName);
        this.props.setBigServicePid(pid);
    },
    saveClass: function () {
        var name = $("#smallServiceNameInput").val();
        if(name != null && name != "") {
            $("#smallServiceNameInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#smallServiceNameInput").focus();
            $("#smallServiceNameInput").css("outline", "none");
            $("#smallServiceNameInput").css("border", "1px solid red");
            return false;
        }
        var name1 = $("#catgoryClaSelect").find(".rw-input").text();
        if(name1 != null && name1 != "" && name1 != "请选择") {
            $("#catgoryClaSelect").css("border", "1px solid #d0d0d0");
        }else{
            $("#catgoryClaSelect").focus();
            $("#catgoryClaSelect").css("outline", "none");
            $("#catgoryClaSelect").css("border", "1px solid red");
            return false;
        }

        this.props.onClickSave(6);
        $("#addClassModal").modal("hide");
    },
    editClass: function () {
        var nameEdit = $("#catgoryClaSelectEdit").val();
        if(nameEdit != null && nameEdit != "") {
            $("#catgoryClaSelectEdit").css("border", "1px solid #d0d0d0");
        }else{
            $("#catgoryClaSelectEdit").focus();
            $("#catgoryClaSelectEdit").css("outline", "none");
            $("#catgoryClaSelectEdit").css("border", "1px solid red");
            return false;
        }
        var nameEdit1 = $("#editSmallServiceNameInput").find(".rw-input").text();
        if(nameEdit1 != null && nameEdit1 != "" && nameEdit1 != "请选择") {
            $("#catgoryClaSelect").css("border", "1px solid #d0d0d0");
        }else{
            $("#editSmallServiceNameInput").focus();
            $("#editSmallServiceNameInput").css("outline", "none");
            $("#editSmallServiceNameInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(6);
        $("#editClaModal").modal("hide");
    },
    deleteClass: function () {
        this.props.delete_areaData(6);
        $("#deleteClaModal").modal("hide");
    },
    render: function () {
        var catgoryIndex = this.state.catgoryIndex;
        var catgoryIndexEdit = this.state.catgoryIndexEdit;
        var catgories = this.props.bigServiceData;
        var list = [], list1 = [];
        list.push({ bigServiceId: "", bigServiceName: "" });
        list1.push({ bigServiceId: "", bigServiceName: "" });
        for (var i = 0; i < catgories.length; i++) {
            list.push(catgories[i]);
            list1.push(catgories[i]);
        };
        return (
            <div className='classMag'>
                {/*添加服务细类------------------------------------模态弹窗*/}
                <div className="modal fade" id="addClassModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加服务细类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{ "width": "444px" }}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group" style={{ "position": "relative" }}>
                                            <label for="catgoryClaInput" className="col-sm-5 control-label">服务大类</label>
                                            <b style={{ "color": "red", "display": "inline-block", "margin-left": "-240px", "margin-top": "10px" }}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[catgoryIndex]} textField="bigServiceName" onSelect={this.setCurClaPid} onChange={this.onChangeDropDown} id="catgoryClaSelect" />
                                            </div>
                                            <p id="classModalContent" style={{ "position": "absolute", "left": "358px", "color": "red" }}></p>
                                        </div>
                                        <div className="form-group" style={{ "position": "relative" }}>
                                            <label for="smallServiceNameInput" className="col-sm-5 control-label">服务细类</label>
                                            <b style={{ "color": "red", "display": "inline-block", "margin-left": "-240px", "margin-top": "10px" }}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="smallServiceNameInput" name="smallServiceNameInput" placeholder="填写服务细类" />
                                            </div>
                                            <p id="classModalName" style={{ "position": "absolute", "left": "358px", "color": "red" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveClass}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑服务细类------------------------------------模态弹窗*/}
                <div className="modal fade" id="editClaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑服务细类</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{ "width": "444px" }}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editCatInput" className="col-sm-5 control-label">服务大类</label>
                                            <b style={{ "color": "red", "display": "inline-block", "margin-left": "-240px", "margin-top": "10px" }}>*</b>
                                            <div className="col-sm-6">
                                                <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list1} value={list1[catgoryIndexEdit]} textField="bigServiceName" onSelect={this.setCurClaPidEdit} onChange={this.onChangeDropDown} id="catgoryClaSelectEdit" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editSmallServiceNameInput" className="col-sm-5 control-label">服务细类</label>
                                            <b style={{ "color": "red", "display": "inline-block", "margin-left": "-240px", "margin-top": "10px" }}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editSmallServiceNameInput" name="editSmallServiceNameInput" placeholder="填写服务细类" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editClass}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除服务细类------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteClaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除服务细类</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此服务细类吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteClass}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="classTableList"
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
export default ClaMag