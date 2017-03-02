import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditPhyPos" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelPhyPos" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.phyPosTableEvent = {
    'click .EditPhyPos':function(e, value, row, index){
        //曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    $("#editPhyPosInput").css("border", "1px solid #d0d0d0");
        $("#editPhyPosLocationModal").modal("show");
        var id = row.RecId;
        _this.props.setLocationId(id);
        $("#editPhyPosInput").val(row.LocationName);
    },
    'click .DelPhyPos':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
	    	var canDelete = _this.props.canDelete;
		    if(canDelete == 1){
		      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
		      $('#publicMessageModal').modal('show');
		      return false;
		    };
	    	//曹志强		20161220	权限控制代码	end
	    	
		$("#deletePhyPosModal").modal("show");
        var id = row.RecId;
        _this.props.setLocationId(id);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var PhyPos = React.createClass({
        getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.locationData;
      $("#phyPosTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#phyPosTableList").bootstrapTable({
            columns: [
	                  {
			            title: '物理位置名称',
			            field: 'LocationName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: phyPosTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: phyPosTableEvent,
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
        titleBoxObjW.innerHTML = "物理位置管理";
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
            _this.props.get_locationData();
        };

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加物理位置');
        addBtnObj.innerHTML = "添加物理位置";
        addBtnObj.onclick = function () {
        	$("#phyPosAddInput").val("");
        	$("#phyPosAddInput").css("border", "1px solid #d0d0d0");
            $("#addPhyPosModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#phyPosTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});
    },
    savePhyPos:function(){
    	var phyPosAddInput = $("#phyPosAddInput").val();
    	if(phyPosAddInput.trim() == null || phyPosAddInput.trim() == "") {
           	$("#phyPosAddInput").focus();
            $("#phyPosAddInput").css("outline", "none");
            $("#phyPosAddInput").css("border", "1px solid red");
            return false;
        }
    	this.props.onClickSave(14);
    	$("#addPhyPosModal").modal("hide");
    },
    editPhyPos:function(){
    	var editPhyPosInput = $("#editPhyPosInput").val();
    	if(editPhyPosInput.trim() == null || editPhyPosInput.trim() == "") {
           	$("#editPhyPosInput").focus();
            $("#editPhyPosInput").css("outline", "none");
            $("#editPhyPosInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(14);
        $("#editPhyPosLocationModal").modal("hide");
    },
    deletePhyPos:function () {
        this.props.delete_locationData(14);
        $("#deletePhyPosModal").modal("hide");
    },
    render: function () {
        return (
            <div className='singleSourceMag'>
                {/*添加工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="addPhyPosModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加物理位置</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="phyPosInput" className="col-sm-5 control-label">物理位置名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="phyPosAddInput" name="phyPosAddInput" placeholder="填写物理位置名称"/>
                                        </div>
                                        <p id="brandMagModalName" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.savePhyPos}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="editPhyPosLocationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑物理位置</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editPhyPosInput" className="col-sm-5 control-label">物理位置名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editPhyPosInput" name="editPhyPosInput" placeholder="填写物理位置名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editPhyPos}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除工单来源------------------------------------模态弹窗*/}
                <div className="modal fade" id="deletePhyPosModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除物理位置</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此物理位置吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deletePhyPos}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域列表*/}
                <div className="col-md-12">
                    <table id="phyPosTableList"
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
export default PhyPos