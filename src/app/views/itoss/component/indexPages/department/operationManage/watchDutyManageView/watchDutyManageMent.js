import React from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
import { Router, Route, Link, IndexRoute} from 'react-router';
function editPic() {
    return '<a class="EditDutyTableRemind" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelDutyTableRemind" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
function checkPic() {
    return '<a class="CheckDutyTableRemind" href="javascript:void(0)" title="查看"><img src="img/images/运维-1值班表管理查看.png"/></a>';
}

window.DutyTableRemindMagTableEvent = {
    'click .EditDutyTableRemind':function(e, value, row, index){
        // console.log(e,value,row,index,"edit")
        var id = row.DUTYTABLEID;
        _this.props.setDutyTableId(id);
        $("#editDutyTableName").val(row.DUTYTABLENAME);
        $("#editStartTimeDate").val(row.STARTTIMEDATE);
        $("#editDutyType option[value='"+row.DUTYTYPE+"']").attr("selected","selected");
        $("#editUnitName").find(".rw-input").text(row.UNITNAME);
//      $("#editCount").val(row.COUNT);
        _this.setState({userPepoleinfo:JSON.parse(row.USERINFO)});
        _this.setState({dutyTableId:row.DUTYTABLEID});
        _this.setState({groupId:row.UNITID});
        $("#editDutyTableRemindModal").modal("show");
    },
    'click .DelDutyTableRemind':function(e, value, row, index){
		$("#deleteDutyTableRemindModal").modal("show");
        var id = row.DUTYTABLEID;
        _this.setState({dutyTableId:row.DUTYTABLEID});
        $("#dutyTableName").val("");
        $("#startTimeDate").val("");
//      $("#dutyType").val(row.DUTYTYPE);
//      $("#unitName").val(row.UNITNAME);
//      $("#userInfo").val(row.USERINFO);
    },
    'click .CheckDutyTableRemind':function(e, value, row, index){
		var userInfo = JSON.parse(row.USERINFO);
		var str = "";
		var peopleInfoStart = "[";
		var peopleInfoEnd = "]";
		if(userInfo != null && userInfo.length > 0){
			for(var i = 0; i< userInfo.length; i++){
				if(userInfo[i].checked == "true"){
					str = str + "{\"PERSONNAME\":\"" + userInfo[i].PERSONNAME + "\",\"PHONE\":\""+userInfo[i].PHONE+"\"},";
				}
			}
			
		}
		str = str.substring(0, str.length - 1);
		str = peopleInfoStart+str+peopleInfoEnd
//		str = str.replace(/'/g, '"');可用
		_this.setState({people:JSON.parse(str)});
		$("#checkDutyTableRemindModal").modal("show");
    }
};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var WatchDutyManageMent = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            rselected:' ',
            editSelected:' ',
            dutyTableDataIndex:0,
            roleInfo:[],
            groupId:"",
            people:[],
            dutyTableId:"",
            userPepoleinfo:[]
        }
    },
    componentDidUpdate:function(){
      var bdata = this.props.dutyTableData;
      $("#WatchMangerTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#WatchMangerTableList").bootstrapTable({
            columns: [
	                  {
			            title: '值班表名称',
			            field: 'DUTYTABLENAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '值班日期',
			            field: 'STARTTIMEDATE',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '值班类别',
			            field: 'DUTYTYPE',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '公司名称',
			            field: 'UNITNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '值班人数',
			            field: 'COUNT',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '查看',
			            halign: 'left',
			            halign: 'left',
			            events: DutyTableRemindMagTableEvent,
			            formatter: checkPic
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: DutyTableRemindMagTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: DutyTableRemindMagTableEvent,
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
        titleBoxObjW.innerHTML = "值班表管理";
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
            _this.props.get_dutyTableData();
            _this.props.get_dutyPerson();
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建值班表');
        addBtnObj.innerHTML = "新建值班表";
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
        $("#WatchMangerTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    	$(".btn").css({"margin-bottom":"4px"});
    	$(".fixed-table-toolbar").css({"padding-top":"4px"});
    	$(".btn-refresh").css({"background":"#d8e1e5"});	
    	
    	$("#unitName").find(".rw-input").text("请选择");
    },
    selectChange:function (event) {
        this.setState({rselected:event.target.value});
    },
    selectEditChange:function (event) {
        this.setState({editSelected:event.target.value});
    },
    setDutyTableManageId:function (e) {
        const {dispatch} = this.props;
        let dutyManageData = this.props.dutyManageData;
        let curId = e.GROUPID;
        let that = this;
        for (let i=0;i<dutyManageData.length;i++){
            let dutyTableManageId = dutyManageData[i].GROUPID;
            if(curId == dutyTableManageId){
                that.setState({dutyTableDataIndex:i+1});
            }
        }
        $("#unitName").find(".rw-input").text(e.GROUPNAME);
//      this.props.setDutyManageId(curId);
        this.setState({groupId:curId});
    },
    onClickSave:function(){
    	const {dispatch,dutyManageId} = this.props;
        $("#addSLARemindModal").modal("hide");
        let dutyTableName = $("#dutyTableName").val();
        let startTimeDate = $("#startTimeDate").val();
        let dutyType = $("#dutyType").val();
        let dutyTableUserId = this.state.groupId;
        let roleInfo = this.state.roleInfo;
    	let strRoles = "";
    	for(var i = 0; i < roleInfo.length; i++) {
			if(document.getElementById("role_"+roleInfo[i].PERSONID).checked == true) {
				strRoles += (strRoles.length==0?"":",") + roleInfo[i].PERSONID;
			}
		}
    	if(dutyTableName == ""){
        	$.showPublicDialog('提示','请您输入值班表名称');
        	return;
      	}
    	if(startTimeDate == ""){
        	$.showPublicDialog('提示','请您输入值班日期');
        	return;
      	}
    	if(dutyType == ""){
        	$.showPublicDialog('提示','请您选择值班类型');
        	return;
      	}
    	if(dutyTableUserId == "" || dutyTableUserId == null || dutyTableUserId == undefined){
        	$.showPublicDialog('提示','请您选择单位名称');
        	return;
      	}
    	if(strRoles == ""){
        	$.showPublicDialog('提示','请您选择值班人员');
        	return;
      	}
        let filters = [
            {key:"DUTYTABLENAME",value:dutyTableName},
            {key:"STARTDATETIME",value:startTimeDate},
            {key:"WEEKFIELD",value:dutyType},
            {key:"DUTYTABLEUSERID",value:strRoles},
            {key:"UNITID",value:dutyTableUserId},
            {key:"OPERATE_TYPE",value:"ADD"}
        ];
       this.props.set_dutyTable(filters);
    },
    onClickEdit:function(){
        $("#editDutyTableRemindModal").modal("hide");
        let dutyTableName = $("#editDutyTableName").val();
        let startTimeDate = $("#editStartTimeDate").val();
        let dutyType = $("#editDutyType").val();
        let dutyTableUserId = this.state.groupId;
        let userPepoleinfo = this.state.userPepoleinfo;
        let dutyTableId = this.state.dutyTableId;
    	let strRoles = "";
    	for(var i = 0; i < userPepoleinfo.length; i++) {
			if(document.getElementById("role_"+userPepoleinfo[i].PERSONID).checked == true) {
				strRoles += (userPepoleinfo.length==0?"":",") + userPepoleinfo[i].PERSONID;
			}
		}
    	strRoles = strRoles.substring(1, strRoles.length);
    	if(dutyTableName == ""){
        	$.showPublicDialog('提示','请您输入值班表名称');
        	return;
      	}
    	if(startTimeDate == ""){
        	$.showPublicDialog('提示','请您输入值班日期');
        	return;
      	}
    	if(dutyType == ""){
        	$.showPublicDialog('提示','请您选择值班类型');
        	return;
      	}
    	if(dutyTableUserId == "" || dutyTableUserId == null || dutyTableUserId == undefined){
        	$.showPublicDialog('提示','请您选择单位名称');
        	return;
      	}
    	if(strRoles == ""){
        	$.showPublicDialog('提示','请您选择值班人员');
        	return;
      	}
        let filters = [
            {key:"DUTYTABLENAME",value:dutyTableName},
            {key:"STARTDATETIME",value:startTimeDate},
            {key:"WEEKFIELD",value:dutyType},
            {key:"DUTYTABLEUSERID",value:strRoles},
            {key:"UNITID",value:dutyTableUserId},
            {key:"OPERATE_TYPE",value:"EDIT"},
            {key:"DUTYTABLEID",value:dutyTableId}
        ];
       this.props.set_dutyTable(filters);
    },
    deleteDutyManageRemind:function () {
   //     this.props.delete_areaData(25);
   const {dispatch,dutyTableId} = this.props;
		let filter = [
		   {key:"OPERATE_TYPE",value:"DELETE"},
		   {key:"DUTYTABLEID",value:this.state.dutyTableId}
		   ];
	    _this.props.set_dutyTable(filter);
	    $("#deleteDutyTableRemindModal").modal("hide");
    },
    onClickCheck:function (){
    	$("#checkDutyTableRemindModal").modal("hide");
    },
    selectDutyManage:function(e){
    	let roleInfo = e.INFO;
    	this.setState({roleInfo:JSON.parse(roleInfo)});
    },
    selectDutyManageEdit:function(e){
    	let userPepoleinfo = e.INFO;
    	this.setState({userPepoleinfo:JSON.parse(userPepoleinfo)});
    },
    checkInfoChanged:function(e){
    },
    render: function () {
    	const {dutyManageData} = this.props;
        let _this = this;
    	let dutyTableDataIndex = this.state.dutyTableDataIndex;
        let dutyTableDataArr = [];
        dutyTableDataArr.push({GROUPID:"",GROUPNAME:"",INFO:""});
        for (let i = 0;i<dutyManageData.length;i++){
            dutyTableDataArr.push(dutyManageData[i]);
        }
        return (
            <div className='SLARemindMag'>
                {/*添加值班表------------------------------------模态弹窗*/}
                <div className="modal fade" id="addSLARemindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">新建值班表</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="dutyTableName" className="col-sm-6 control-label">值班表名</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="dutyTableName" name="dutyTableName" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="startTimeDate" className="col-sm-6 control-label">值班日期</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="date" className="form-control" id="startTimeDate" name="startTimeDate" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="dutyType" className="col-sm-6 control-label">值班类别</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <select className="form-control" id="dutyType" name="dutyType" placeholder=""  defaultValue={this.state.rselected} onChange={this.selectChange}>
                                            		<option value="白班">白班</option>
                                            		<option value="夜班">夜班</option>
                                            	</select>
                                            </div>
                                        </div>
                                        <div className="form-group" style={{"position":"relative"}}>
                                            <label for="unitName" className="col-sm-6 control-label">公司名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-4px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6" style={{"width":"244px","margin-top":"-26px","margin-left":"164px"}}>
                                            	<ReactWidgets.DropdownList id="unitName" className="form-control" data={dutyTableDataArr} value={dutyTableDataArr[dutyTableDataIndex]} textField='GROUPNAME' onSelect={this.setDutyTableManageId} onChange={this.selectDutyManage} defaultValue={"请选择"} style={{"overflow":"auto"}}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                    		<label for="userInfo" className="col-sm-6 control-label">值班人员</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-4px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6 form-control" style={{"height":"130px","width":"244px","margin-left":"180px","margin-top":"-26px","overflow":"auto"}}>
								                {this.state.roleInfo.map(function(Role) {
						                            return (
						                                <label className="radioLabel">
						                                    <input id={"role_"+Role.PERSONID} type="checkbox" name="role_checkbox" defaultChecked={false} onClick={_this.checkInfoChanged}/> {Role.PERSONNAME}
						                                </label>
						                            );
						                        })}
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
                {/*编辑值班表------------------------------------模态弹窗*/}
                <div className="modal fade" id="editDutyTableRemindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑值班表</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="editDutyTableName" className="col-sm-6 control-label">值班表名</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" id="editDutyTableName" name="editDutyTableName" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editStartTimeDate" className="col-sm-6 control-label">值班日期</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <input type="date" className="form-control" id="editStartTimeDate" name="editStartTimeDate" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="editDutyType" className="col-sm-6 control-label">值班类别</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6">
                                                <select className="form-control" id="editDutyType" name="editDutyType" placeholder=""  value={this.state.rselected} onChange={this.selectEditChange}>
                                            		<option value="白班">白班</option>
                                            		<option value="夜班">夜班</option>
                                            	</select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="unitName" className="col-sm-6 control-label">公司名称</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-4px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6" style={{"width":"244px","margin-top":"-26px","margin-left":"164px"}}>
                                            	<ReactWidgets.DropdownList id="editUnitName" className="form-control" data={dutyTableDataArr} value={dutyTableDataArr[dutyTableDataIndex]} textField='GROUPNAME' onSelect={this.setDutyTableManageId} onChange={this.selectDutyManageEdit} defaultValue={"请选择"} style={{"overflow":"auto"}}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                    		<label for="userInfo" className="col-sm-6 control-label">值班人员</label>
                                            <b style={{"color":"red","display":"inline-block","margin-left":"-4px","margin-top":"10px"}}>*</b>
                                            <div className="col-sm-6 form-control" style={{"height":"130px","width":"244px","margin-left":"180px","margin-top":"-26px","overflow":"auto"}}>
								                {this.state.userPepoleinfo.map(function(Role) {
						                            return (
						                                <label className="radioLabel">
						                                    <input id={"role_"+Role.PERSONID} type="checkbox" name="role_checkbox" defaultChecked={Role.checked === 'true'} onClick={_this.checkInfoChanged}/> {Role.PERSONNAME}
						                                </label>
						                            );
						                        })}
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
                {/*查看值班表------------------------------------模态弹窗*/}
                <div className="modal fade" id="checkDutyTableRemindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">值班表人员</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"70%","margin-left":"13%"}}>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="projectFDNameInput" className="col-sm-3 control-label">值班人员</label>
                                            <div className="col-sm-8" style={{"height":"200px","border":"1px solid #ccc","marginLeft":"4px","overflow-y":"auto"}}>
                                            	<ul>
	                                            	{this.state.people.map(function(people) {
							                            return (
							                              	<li>{people.PERSONNAME + "(" +people.PHONE+ ")"}</li>
							                            );
							                        })}
	                                            </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.onClickCheck}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除值班表------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteDutyTableRemindModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除值班表</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此值班表吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteDutyManageRemind}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*SLA列表*/}
                <div className="col-md-12">
                    <table id="WatchMangerTableList"
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

export default WatchDutyManageMent