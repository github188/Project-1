import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
import ReactWidgets from "react-widgets";
function editPic() {
    return '<a class="EditSLARemind" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelSLARemind" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}

window.SLARemindMagTableEvent = {
    'click .EditSLARemind':function(e, value, row, index){
        // console.log(e,value,row,index,"edit")
        $("#editSLARemindModal").modal("show");
        var id = row.COLOR_ID;
        _this.props.slaColorId(id);
        $("#editSLATimePointInput").val(row.VERIFYTIME);
        $("#editSLATimeUnitInput").val(row.TIMEUNIT);
        $("#editSLAColorInput").val(row.RGB);
    },
    'click .DelSLARemind':function(e, value, row, index){
		$("#deleteSLARemindModal").modal("show");
        var id = row.COLOR_ID;
        _this.props.slaColorId(id);
        $("#sLATimePointInput").val(row.VERIFYTIME);
        $("#sLATimeUnitInput").val(row.TIMEUNIT);
        $("#sLAColorInput").val(row.RGB);
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var SLARemind = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            rselected:' ',
            editSelected:' '
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.slaColorData;
      $("#SLARemindTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#SLARemindTableList").bootstrapTable({
            columns: [
	                  {
			            title: '时间点',
			            field: 'VERIFYTIME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '时间单位',
			            field: 'TIMEUNIT',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '颜色',
			            field: 'RGB',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: SLARemindMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: SLARemindMagTableEvent,
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
        titleBoxObjW.innerHTML = "SLA提醒、资产提醒管理";
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
            _this.props.get_slaColorData();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加时间点');
        addBtnObj.innerHTML = "添加时间点";
        addBtnObj.onclick = function (e, value, row, index) {
            /*----新建用户--*/
           $("#addSLARemindModal").modal("show")
			};
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
			btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#SLARemindTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    	$("#allStatus").on("change",function () {
            let statusCode = "";
            let val = $(this).val();
            if(val == "SLA提醒"){
                _this.props.get_slaColorData("");
            }else if(val == "资产提醒"){
                _this.props.get_slaColorData("true");
            }
        });
    	$(function(){
    		$(".a-popup").ColorPickerSliders({
                    order: {
                        rgb: 1
                    }
            });
    	});
    },
    selectChange:function (event) {
        this.setState({rselected:event.target.value});
    },
    selectEditChange:function (event) {
        this.setState({editSelected:event.target.value});
    },
    onClickSave:function(){
        this.props.onClickSave(25);
        $("#addSLARemindModal").modal("hide");
    },
    onClickEdit:function(){
        this.props.onClickEdit(25);
        $("#editSLARemindModal").modal("hide");
    },
    deleteSLARemind:function () {
        this.props.delete_areaData(25);
        $("#deleteSLARemindModal").modal("hide");
    },
    render: function () {
        return (
            <div className='SLARemindMag'>
                {/*添加时间点------------------------------------模态弹窗*/}
                <div className="modal fade" id="addSLARemindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加时间点</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="sLATimePointInput" className="col-sm-6 control-label">时间点</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="sLATimePointInput" name="sLATimePointInput" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="sLATimeUnitInput" className="col-sm-6 control-label">时间单位</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                            	<select className="form-control" id="sLATimeUnitInput" name="sLATimeUnitInput" placeholder=""  value={this.state.rselected} onChange={this.selectChange}>
                                            		<option value="month">月</option>
                                            		<option value="hour">小时</option>
                                            		<option value="day">天</option>
                                            		<option value="year">年</option>
                                            		<option value="minute">分钟</option>
                                            	</select>
												{/*<input type="text" className="form-control" id="editAdressInput" name="editAdressInput" placeholder="填写详细地址"/>*/}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                    		<label for="sLAColorInput" className="col-sm-6 control-label">颜色</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
								                <input type="text" className="a-popup form-control" id="sLAColorInput" name="sLAColorInput" data-color-format="rgb" />
                                            </div>
                                    	</div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.onClickSave}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑时间点------------------------------------模态弹窗*/}
                <div className="modal fade" id="editSLARemindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑单位人员</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editSLATimePointInput" className="col-sm-6 control-label">时间点</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editSLATimePointInput" name="editSLATimePointInput" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editSLATimeUnitInput" className="col-sm-6 control-label">时间单位</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                            	<select className="form-control" id="editSLATimeUnitInput" name="editSLATimeUnitInput" placeholder=""  value={this.state.editSelected} onChange={this.selectEditChange}>
                                            		<option value="month">月</option>
                                            		<option value="hour">小时</option>
                                            		<option value="day">天</option>
                                            		<option value="year">年</option>
                                            		<option value="minute">分钟</option>
                                            	</select>
                                                {/*<input type="text" className="form-control" id="editAdressInput" name="editAdressInput" placeholder="填写详细地址"/>*/}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                    		<label for="editSLAColorInput" className="col-sm-6 control-label">颜色</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                               <input type="text" className="a-popup form-control" id="editSLAColorInput" name="editSLAColorInput" data-color-format="rgb" />
                                            </div>
                                    	</div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.onClickEdit}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除时间点------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteSLARemindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除时间点</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此时间点吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteSLARemind}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{"position":"absolute","top":"70px","left":"233px","zIndex":"1"}}>
                    <select name="allStatus" id="allStatus">
                        <option value="SLA提醒">SLA提醒</option>
                        <option value="资产提醒">资产提醒</option>
                    </select>
                </div>
                {/*SLA列表*/}
                <div className="col-md-12">
                    <table id="SLARemindTableList"
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
export default SLARemind
