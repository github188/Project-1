import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
function editPic() {
    return '<a class="EditUpgradeLevel" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelUpgradeLevel" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.faultLevelUpMagTableEvent = {
    'click .EditUpgradeLevel':function(e, value, row, index){
         //曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
        $("#editUpgradeLevelModal").modal("show");
        var id = row.RecId;
        _this.props.upgradeLevelId(id);
        $("#upgradeLevelNameEditInput").val(row.Name);
    },
    'click .DelUpgradeLevel':function(e, value, row, index){
    	//曹志强		20161220	权限控制代码	start
    	var canDelete = _this.props.canDelete;
	    if(canDelete == 1){
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "您的权限不足执行此操作。"
	      $('#publicMessageModal').modal('show');
	      return false;
	    };
    	//曹志强		20161220	权限控制代码	end
    	
		$("#deleteUpgradeLevelModal").modal("show");
        var id = row.RecId;
        _this.props.upgradeLevelId(id);
        $("#upgradeLevelNameEditInput").val(row.Name);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var UpgradeLevel = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.upgradeLevelData;
      $("#upgradeLevelTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#upgradeLevelTableList").bootstrapTable({

            columns: [
	                  {
			            title: '升级级别名称',
			            field: 'Name',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: faultLevelUpMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: faultLevelUpMagTableEvent,
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
        titleBoxObjW.innerHTML = "升级级别管理";
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
            _this.props.get_upgradeLevelData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加升级级别');
        addBtnObj.innerHTML = "添加升级级别";
        addBtnObj.onclick = function () {
            /*----新建用户--*/
            $("#addUpgradeLevelModal").modal("show")
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#upgradeLevelTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    },
    saveUpgradeLevelData:function(){
        var name = $("#upgradeLevelNameAddInput").val();
        if(name != null && name != "") {
            $("#upgradeLevelNameAddInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#upgradeLevelNameAddInput").focus();
            $("#upgradeLevelNameAddInput").css("outline", "none");
            $("#upgradeLevelNameAddInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickSave(10);
        $("#addUpgradeLevelModal").modal("hide");
    },
    editUpgradeLevelData:function(){
        var nameEdit = $("#upgradeLevelNameEditInput").val();
        if(nameEdit != null && nameEdit != "") {
            $("#upgradeLevelNameEditInput").css("border", "1px solid #d0d0d0");
        }else{
            $("#upgradeLevelNameEditInput").focus();
            $("#upgradeLevelNameEditInput").css("outline", "none");
            $("#upgradeLevelNameEditInput").css("border", "1px solid red");
            return false;
        }
        this.props.onClickEdit(10);
        $("#editUpgradeLevelModal").modal("hide");
    },
    deleteUpgradeLevel:function (){
        this.props.delete_areaData(10);
        $("#deleteUpgradeLevelModal").modal("hide");
    },
    render: function () {
        return (
            <div className='faultLevelMag'>
                {/*添加升级级别------------------------------------模态弹窗*/}
                <div className="modal fade" id="addUpgradeLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{"zIndex":"1041"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加升级级别管理</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="upgradeLevelNameAddInput" className="col-sm-5 control-label">升级级别名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="upgradeLevelNameAddInput" name="upgradeLevelNameAddInput" placeholder="填写升级级别名称"/>
                                        </div>
                                        <p id="upgradeLevelModalContent" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveUpgradeLevelData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑升级级别------------------------------------模态弹窗*/}
                <div className="modal fade" id="editUpgradeLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{"zIndex":"1041"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑升级级别</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"444px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="upgradeLevelNameEditInput" className="col-sm-5 control-label">升级级别名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-240px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="upgradeLevelNameEditInput" name="upgradeLevelNameEditInput" placeholder="填写升级级别名称"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editUpgradeLevelData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除故障级别------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteUpgradeLevelModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除升级级别</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此升级级别吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteUpgradeLevel}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*区域升级级别*/}
                <div className="col-md-12">
                    <table id="upgradeLevelTableList"
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
export default UpgradeLevel