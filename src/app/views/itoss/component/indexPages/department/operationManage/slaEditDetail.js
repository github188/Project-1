import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import {Router, Route, Link, IndexRoute,History} from 'react-router';
import * as operationAction from "../../../../../../actions/operation_action";

let _this;
var SlaEditDetail = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return {
            slaStatusIndex:0,
            ecctaskplanIndex:0,
            unitTypeIndex:0,
            serviceCatalogDataIndex:0,
            serviceItemDataIndex:0,
            companyDataIndex:0,
            projectUnitIndex:0,
            dataVal:"",
            startTime:"",
            endTime:"",
            reviewStatus:"",
            publishStatus:"",
            companyId:this.props.slaRowCompanyId,
            serviceCatalog:this.props.slaRowBigServiceId
        }
    },
    componentWillMount:function () {
        const {dispatch} = this.props;
        dispatch(operationAction.get_slaStatusData());
        dispatch(operationAction.get_ecctaskplanData());
        dispatch(operationAction.get_unitTypeData());
        dispatch(operationAction.get_serviceCatalog());
        dispatch(operationAction.get_companyData());
        dispatch(operationAction.get_projectUnitData(_this.state.companyId));
        dispatch(operationAction.get_serviceItem(_this.state.serviceCatalog));
    },
    componentDidMount:function () {
        const {slaStatusCode} = this.props;
        if(slaStatusCode == "0"){
            //待审核
            $("#SlaTitleEdit").attr("disabled","disabled");
            $("#projectNameEdit").attr("disabled","disabled");
            $("#statussEdit").attr("disabled","disabled");
            $("#serviceSubEdit").attr("disabled","disabled");
            $("#responseTimeEdit").attr("disabled","disabled");
            $("#workTimeEdit").attr("disabled","disabled");
            $("#endTimeEdit").attr("disabled","disabled");
            $("#organizationEdit").attr("disabled","disabled");
            $("#unitTypeEdit").attr("disabled","disabled");
            $("#bigServiceEdit").attr("disabled","disabled");
            $("#serviceProjectEdit").attr("disabled","disabled");
            $("#solutionTimeEdit").attr("disabled","disabled");
            $("#startTimeEdit").attr("disabled","disabled");
            $("#resNumberEdit1").attr("disabled","disabled");
            $("#resNumberEdit2").attr("disabled","disabled");
            $("#resNumberEdit3").attr("disabled","disabled");
            $("#resNumberEdit4").attr("disabled","disabled");
            $("#resNumberEdit5").attr("disabled","disabled");
            $("#sulNumberEdit1").attr("disabled","disabled");
            $("#sulNumberEdit2").attr("disabled","disabled");
            $("#sulNumberEdit3").attr("disabled","disabled");
            $("#sulNumberEdit4").attr("disabled","disabled");
            $("#sulNumberEdit5").attr("disabled","disabled");
            $("#totalTimeEdit").attr("disabled","disabled");
            $("#residueTimeEdit").attr("disabled","disabled");
            $("#reviewButton").show();
        }else if(slaStatusCode == "2"){
            //审核通过=待发布
            $("#SlaTitleEdit").attr("disabled","disabled");
            $("#projectNameEdit").attr("disabled","disabled");
            $("#statussEdit").attr("disabled","disabled");
            $("#serviceSubEdit").attr("disabled","disabled");
            $("#responseTimeEdit").attr("disabled","disabled");
            $("#workTimeEdit").attr("disabled","disabled");
            $("#endTimeEdit").attr("disabled","disabled");
            $("#organizationEdit").attr("disabled","disabled");
            $("#unitTypeEdit").attr("disabled","disabled");
            $("#bigServiceEdit").attr("disabled","disabled");
            $("#serviceProjectEdit").attr("disabled","disabled");
            $("#solutionTimeEdit").attr("disabled","disabled");
            $("#startTimeEdit").attr("disabled","disabled");
            $("#resNumberEdit1").attr("disabled","disabled");
            $("#resNumberEdit2").attr("disabled","disabled");
            $("#resNumberEdit3").attr("disabled","disabled");
            $("#resNumberEdit4").attr("disabled","disabled");
            $("#resNumberEdit5").attr("disabled","disabled");
            $("#sulNumberEdit1").attr("disabled","disabled");
            $("#sulNumberEdit2").attr("disabled","disabled");
            $("#sulNumberEdit3").attr("disabled","disabled");
            $("#sulNumberEdit4").attr("disabled","disabled");
            $("#sulNumberEdit5").attr("disabled","disabled");
            $("#totalTimeEdit").attr("disabled","disabled");
            $("#residueTimeEdit").attr("disabled","disabled");
            $("#publishButton").show();
            $("#reviewed").show();
        }else if(slaStatusCode == "1"){
            //审核不通过
            $("#saveButton").show();
        }
        $("#myTab li>a").click(function () {
            console.log($(this));
            if($(this).text() == "服务计时"){
                //dataVal = "计时"
                _this.setState({dataVal:"计时"});
            }else if($(this).text() == "服务记次"){
                _this.setState({dataVal:"计次"});
            }
        });
        $("#startTimeEdit").on("change",function () {
            let startTime = $(this).val();
            //startTime = $(this).val();
            _this.setState({startTime:startTime});
        });
        $("#endTimeEdit").on("change",function () {
            let endTime = $(this).val();
            _this.setState({endTime:endTime});
        });
        $("#_select li").on("mouseover",function () {
            $(this).css("backgroundColor","#349ff1");
            $(this).css("color","#ffffff");
        });
        $("#_select li").on("mouseout",function () {
            $(this).css("backgroundColor","#ffffff");
            $(this).css("color","#349ff1");
        });
        $("#_select li").on("click",function () {
            if($(this).text() == "审核通过"){
                _this.setState({reviewStatus:2})
            }else if($(this).text() == "审核不通过"){
                _this.setState({reviewStatus:1})
            }
        });
        $("#publishSla").on("click",function () {
            if($("#publishSla").text() == "发布SLA"){
                _this.setState({publishStatus:3})
            }
        })
    },
    setSlaStatusId:function (e) {
        const {dispatch} = this.props;
        let slaStatusDatas = this.props.slaStatusData;
        let curId = e.RecId;
        let that = this;
        for(let i =0; i<slaStatusDatas.length;i++){
            let SlaStatusId = slaStatusDatas[i].RecId;
            if(curId == SlaStatusId){
                that.setState({slaStatusIndex:i+1});
            }
        }
        $("#statuss").find(".rw-input").text(e.StatusName);
        dispatch(operationAction.setSlaStatusId(curId));
    },
    setEcctaskPlanId:function (e) {
        const {dispatch} = this.props;
        let ecctaskPlanDatas = this.props.ecctaskplanData;
        let curId = e.RecId;
        let that = this;
        for (let i=0;i<ecctaskPlanDatas.length;i++){
            let ecctaskPlanId = ecctaskPlanDatas[i].RecId;
            if(curId == ecctaskPlanId){
                that.setState({ecctaskplanIndex:i+1});
            }
        }
        $("#workTime").find(".rw-input").text(e.Instruction);
        dispatch(operationAction.setEcctaskplanId(curId));
    },
    setunitTypeId:function (e) {
        const {dispatch} = this.props;
        let unitTypeDatas = this.props.unitTypeData;
        let curId = e.RecId;
        let that = this;
        for (let i=0;i<unitTypeDatas.length;i++){
            let unitTypeDatasId = unitTypeDatas[i].RecId;
            if(curId == unitTypeDatasId){
                that.setState({unitTypeIndex:i+1});
            }
        }
        $("#unitType").find(".rw-input").text(e.Name);
        dispatch(operationAction.setUnitTypeId(curId));
    },
    setserviceCatalogDataId:function (e) {
        const {dispatch} = this.props;
        let serviceCatalogData = this.props.serviceCatalogData;
        let curId = e.RecId;
        let that = this;
        for (let i=0;i<serviceCatalogData.length;i++){
            let serviceCatalogDataId = serviceCatalogData[i].RecId;
            if(curId == serviceCatalogDataId){
                that.setState({serviceCatalogDataIndex:i+1});
            }
        }
        $("#bigService").find(".rw-input").text(e.Name);
        dispatch(operationAction.setServiceCatalogId(curId));
    },
    setserviceItemDataId:function (e) {
        const {dispatch} = this.props;
        let serviceItemData = this.props.serviceItemData;
        let curId = e.RecId;
        let that = this;
        for (let i=0;i<serviceItemData.length;i++){
            let serviceItemDataId = serviceItemData[i].RecId;
            if(curId == serviceItemDataId){
                that.setState({serviceItemDataIndex:i+1});
            }
        }
        $("#serviceSub").find(".rw-input").text(e.Name);
        dispatch(operationAction.setServiceItemId(curId));
    },
    setCompanyDataId:function (e) {
        const {dispatch} = this.props;
        let companyData = this.props.companyData;
        let curId = e.DEFRECID;
        let that = this;
        for (let i=0;i<companyData.length;i++){
            let companyDataId = companyData[i].DEFRECID;
            if(curId == companyDataId){
                that.setState({companyDataIndex:i+1});
            }
        }
        $("#organization").find(".rw-input").text(e.FDNAME);
        dispatch(operationAction.setCompanyId(curId));
    },
    setProjectUnitDataId:function (e) {
        const {dispatch} = this.props;
        let projectUnitData = this.props.projectUnitData;
        let curId = e.id;
        let that = this;
        for (let i=0;i<projectUnitData.length;i++){
            let projectUnitDataId = projectUnitData[i].id;
            if(curId == projectUnitDataId){
                that.setState({projectUnitIndex:i+1});
            }
        }
        $("#projectName").find(".rw-input").text(e.name);
        dispatch(operationAction.setProjectUnitId(curId));
    },
    _saveslaEdit:function () {
        const {dispatch,slaStatusData,unitTypeData,unitTypeId,serviceCatalogData,serviceCatalogId,serviceItemData,serviceItemId,ecctaskplanData,ecctaskplanId,projectUnitData,projectUnitId,companyData,companyId,slaStatusId,slaRowId,slaRowCompanyId,slaRowProjectId,slaRowUnitTypeId,slaRowStatusId,slaRowBigServiceId,slaRowServiceSubId,slaRowWorkTimeId,slaRowStartTimeVal,slaRowEndTimeVal,slaRowServiceType} = this.props;
        let SlaTitle = $("#SlaTitleEdit").val();
        let curProjectUnitId = null;
        let projectName = $("#projectNameEdit").find(".rw-input").text();
        for (let i = 0;i<projectUnitData.length;i++){
            if(projectName == projectUnitData[i].name){
                curProjectUnitId = slaRowProjectId;
            }else {
                curProjectUnitId = projectUnitId;
            }
        }
        let curSlaStatusId = null;
        let statuss = $("#statussEdit").find(".rw-input").text();
        for (let i = 0;i<slaStatusData.length;i++) {
            if (statuss == slaStatusData[i].Name) {
                curSlaStatusId = slaStatusData[i].RecId;
            }
        }
        let curServiceSubId = null;
        let serviceSub = $("#serviceSubEdit").find(".rw-input").text();
        for (let i = 0;i<serviceItemData.length;i++){
            if(serviceSub == serviceItemData[i].Name){
                curServiceSubId = slaRowServiceSubId;
            }else {
                curServiceSubId = serviceItemId;
            }
        }
        let responseTime = $("#responseTimeEdit").val();
        let curWorkTimeId = null;
        let workTime = $("#workTimeEdit").find(".rw-input").text();
        for (let i = 0;i<ecctaskplanData.length;i++){
            if(workTime == ecctaskplanData[i].Instruction){
                curWorkTimeId = ecctaskplanData[i].RecId;
            }
        }
        let curEndTime = null;
        let endTime = $("#endTimeEdit").val();
        if(endTime == slaRowEndTimeVal){
            curEndTime = endTime
        }else {
            curEndTime = _this.state.endTime;
        }
        let curCompanyId = null;
        let organization = $("#organizationEdit").find(".rw-input").text();
        for (let i = 0;i<companyData.length;i++){
            if(organization == companyData[i].FDNAME){
                curCompanyId = companyData[i].DEFRECID;
            }
        }
        let curUnitTypeId = null;
        let unitType = $("#unitTypeEdit").find(".rw-input").text();
        for (let i = 0;i<unitTypeData.length;i++){
            if(unitType == unitTypeData[i].Name){
                curUnitTypeId = unitTypeData[i].RecId;
            }
        }
        let curBigServiceId = null;
        let bigService = $("#bigServiceEdit").find(".rw-input").text();
        for (let i = 0;i<serviceCatalogData.length;i++){
            if(bigService == serviceCatalogData[i].Name){
                curBigServiceId = serviceCatalogData[i].RecId;
            }
        }
        let serviceProject = $("#serviceProjectEdit").val();
        let solutionTime = $("#solutionTimeEdit").val();
        let curStartTime = null;
        let startTime = $("#startTimeEdit").val();
        if(startTime == slaRowStartTimeVal){
            curStartTime = slaRowStartTimeVal;
        }else {
            curStartTime = _this.state.startTime;
        }
        let resNumberEdit1 = $("#resNumberEdit1").val();
        let resNumberEdit2 = $("#resNumberEdit2").val();
        let resNumberEdit3 = $("#resNumberEdit3").val();
        let resNumberEdit4 = $("#resNumberEdit4").val();
        let resNumberEdit5 = $("#resNumberEdit5").val();
        let sulNumberEdit1 = $("#sulNumberEdit1").val();
        let sulNumberEdit2 = $("#sulNumberEdit2").val();
        let sulNumberEdit3 = $("#sulNumberEdit3").val();
        let sulNumberEdit4 = $("#sulNumberEdit4").val();
        let sulNumberEdit5 = $("#sulNumberEdit5").val();
        let totalTime = $("#totalTimeEdit").val();
        let residueTime = $("#residueTimeEdit").val();
        let filters = [
            {key:"SLAID",value:slaRowId},
            {key:"SLA_TITLE",value:SlaTitle},
            {key:"PROJECT_ID",value:curProjectUnitId},
            {key:"UNITTYPE_ID",value:curUnitTypeId},
            {key:"SCLID",value:curBigServiceId},
            {key:"SITID",value:curServiceSubId},
            {key:"SERVICECONTENT",value:serviceProject},
            {key:"WORKTIME_ID",value:curWorkTimeId},
            {key:"ORGANIZATION_ID",value:curCompanyId},
            {key:"SLA_STATUS",value:curSlaStatusId},
            {key:"RESPONSETIME",value:responseTime},
            {key:"SOLUTIONTIME",value:solutionTime},
            {key:"RESPONSE1",value:resNumberEdit1},
            {key:"RESPONSE2",value:resNumberEdit2},
            {key:"RESPONSE3",value:resNumberEdit3},
            {key:"RESPONSE4",value:resNumberEdit4},
            {key:"RESPONSE5",value:resNumberEdit5},
            {key:"SOLUTION1",value:sulNumberEdit1},
            {key:"SOLUTION2",value:sulNumberEdit2},
            {key:"SOLUTION3",value:sulNumberEdit3},
            {key:"SOLUTION4",value:sulNumberEdit4},
            {key:"SOLUTION5",value:sulNumberEdit5},
            {key:"TOTALCOUNT",value:totalTime},
            {key:"EXECOUNT",value:residueTime},
            {key:"STARTTIME",value:curStartTime},
            {key:"ENDTIME",value:curEndTime},
            {key:"UNIT",value:slaRowServiceType},
            {key:"REVIEWSTATUS",value:0},
            {key:"EDIT",value:true}
        ];
        dispatch(operationAction.edit_slaInfo(filters));
        dispatch(operationAction.get_slaInfoData());
        dispatch(operationAction.setFlowPicData("SLAManageMent"));
        _this.history.pushState(null,"operationManage/operationManagePage");
    },
    _selectServiceItem:function (e) {
        const {dispatch} =this.props;
        dispatch(operationAction.get_serviceItem(e.RecId))
    },
    _selectProjectUnit:function (e) {
        const {dispatch} =this.props;
        dispatch(operationAction.get_projectUnitData(e.DEFRECID))
    },
    _toggleSelect:function () {
       $("#_select").toggle(200);
    },
    _reviewShow:function () {
        const {dispatch,slaRowId} = this.props;
        let filter = [
            {key:"SLAID",value:slaRowId},
            {key:"REVIEWSTATUS",value:this.state.reviewStatus}
        ];
        dispatch(operationAction.edit_slaInfo(filter));
        $("#reviewed").show();
        $("#noReview").hide();
        $("#_select").hide(200);
        dispatch(operationAction.get_slaInfoData());
        dispatch(operationAction.setFlowPicData("SLAManageMent"));
        _this.history.pushState(null,"operationManage/operationManagePage");
    },
    _noReviewShow:function () {
    	$("#reviewModal").modal("show");
       // $("#reviewModal").show();
        $("#_select").hide(200);
    },
    _reviewShowNo:function () {
        const {dispatch,slaRowId} = this.props;
        let filter = [
            {key:"SLAID",value:slaRowId},
            {key:"REVIEWSTATUS",value:this.state.reviewStatus},
            {key:"REVIEWDESC",value:$("#reviewVal").val()}
        ];
        dispatch(operationAction.edit_slaInfo(filter));
        $("#noReview").show();
        $("#reviewed").hide();
        $("#reviewModal").modal("hide");
     //   $("#reviewModal").hide();
        $("#soluText").text($("#reviewVal").val());
        dispatch(operationAction.get_slaInfoData());
        dispatch(operationAction.setFlowPicData("SLAManageMent"));
        _this.history.pushState(null,"operationManage/operationManagePage");
    },
    _publish:function () {
        const {dispatch,slaRowId} = this.props;
        let filter = [
            {key:"SLAID",value:slaRowId},
            {key:"REVIEWSTATUS",value:this.state.publishStatus}
        ];
        dispatch(operationAction.edit_slaInfo(filter));
        $("#published").show();
        dispatch(operationAction.get_slaInfoData());
        dispatch(operationAction.setFlowPicData("SLAManageMent"));
        _this.history.pushState(null,"operationManage/operationManagePage");
    },
//reviewModalHide:function () {
// //   $("#reviewModal").hide();
//		$("#reviewModal").modal("hide");
//},
    goBack:function(){
    	const {dispatch} = this.props;
  		dispatch(operationAction.setFlowPicData("SLAManageMent"));
  		this.history.goBack();
    },
    render:function () {
        const { slaStatusData,ecctaskplanData,unitTypeData,serviceCatalogData,serviceItemData,companyData,projectUnitData } = this.props;
        let _this = this;
        let slaStatusIndex = this.state.slaStatusIndex;
        let slaStatusArr = [];
        slaStatusArr.push({RecId:"",Name:""});
        for(let i = 0;i < slaStatusData.length; i++){
            slaStatusArr.push(slaStatusData[i]);
        }
        let ecctaskplanIndex = this.state.ecctaskplanIndex;
        let ecctaskplanArr = [];
        ecctaskplanArr.push({RecId:"",Instruction:""});
        for (let i = 0;i<ecctaskplanData.length;i++){
            ecctaskplanArr.push(ecctaskplanData[i]);
        }
        let unitTypeIndex = this.state.unitTypeIndex;
        let unitTypeArr = [];
        unitTypeArr.push({RecId:"",Name:""});
        for (let i = 0;i<unitTypeData.length;i++){
            unitTypeArr.push(unitTypeData[i]);
        }
        let serviceCatalogDataIndex = this.state.serviceCatalogDataIndex;
        let serviceCatalogDataArr = [];
        serviceCatalogDataArr.push({RecId:"",Name:""});
        for (let i = 0;i<serviceCatalogData.length;i++){
            serviceCatalogDataArr.push(serviceCatalogData[i]);
        }
        let serviceItemDataIndex = this.state.serviceItemDataIndex;
        let serviceItemDataArr = [];
        serviceItemDataArr.push({RecId:"",Name:""});
        for (let i = 0;i<serviceItemData.length;i++){
            serviceItemDataArr.push(serviceItemData[i]);
        }
        let companyDataIndex = this.state.companyDataIndex;
        let companyDataArr = [];
        companyDataArr.push({DEFRECID:"",FDNAME:""});
        for (let i = 0;i<companyData.length;i++){
            companyDataArr.push(companyData[i]);
        }
        let projectUnitIndex = this.state.projectUnitIndex;
        let projectUnitDataArr = [];
        projectUnitDataArr.push({id:"",name:""});
        for (let i = 0;i<projectUnitData.length;i++){
            projectUnitDataArr.push(projectUnitData[i]);
        }
        return (
            <div className="slaEdit" style={{"width":"100%","height":"100%","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
                
                
                {/*---------------------------审核未通过原因------------------------*/}
                <div className="modal fade" id="reviewModal" tabindex="-1" role="dialog" aria-labelledby="reviewModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"450px"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="reviewModalLabel">审核不通过原因</h4>
                            </div>
                            <div className="modal-body">
                                <textarea cols="51" rows="6" name="reviewVal" id="reviewVal" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this._reviewShowNo}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="slaEdit_content" style={{"margin":"16px auto","height":"inherit","width":"1000px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="slaEdit_head" style={{"width":"928px","borderBottom":"1px solid #ebecee","position":"relative"}}>
                        <div className="slaEdit_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            SLA详情
                        </div>
                        <div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div id="reviewButton" className="slaEdit_head_right" style={{"position":"absolute","right":"70px","top":"17px","display":"none"}}><span style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block","right":"60px","cursor":"pointer"}} onClick={this._toggleSelect}>审核SLA</span>
                      <ul id="_select" style={{"position":"absolute","top":"32px","left":"0","display":"none","cursor":"pointer"}}>
                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this._reviewShow}>审核通过</li>
                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","position":"relative","zIndex":"1"}} onClick={this._noReviewShow}>审核不通过</li>
                      </ul>
                        </div>
                        <div id="publishButton" className="slaEdit_head_right" style={{"position":"absolute","right":"66px","top":"17px","display":"none"}}><span id="publishSla" style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block"}} onClick={this._publish}>发布SLA</span>
                        </div>
                        <div id="saveButton" className="slaEdit_head_right" style={{"position":"absolute","right":"70px","top":"17px","display":"none"}}><span id="publishSla" style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block"}} onClick={this._saveslaEdit}>保存</span>
                        </div>
                    </div>
                    <div className="slaEdit_content_middle" style={{"width":"928px"}}>
                        <div className="slaEdit_content_middle_top" style={{"width":"928px","height":"52px","lineHeight":"52px"}}>
                            <span style={{"display":"inline-block","border":"6px solid transparent","borderLeftColor":"#379eed"}}></span>
                            服务级别协议
                        </div>
                        <div className="slaEdit_content_middle_bottom" style={{"width":"928px"}}>
                            <div className="slaEdit_content_middle_left" style={{"width":"445px","display":"inline-block","height":"343px"}}>
                                <form className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <label htmlFor="SlaTitleEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>SLA标题</label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px"}} id="SlaTitleEdit" className="form-control" name="SlaTitleEdit" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectNameEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>项目</label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px"}} className="form-control" id="projectNameEdit" data={projectUnitDataArr} value={projectUnitDataArr[projectUnitIndex]} textField='name' onSelect={this.setProjectUnitDataId} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="statussEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>状态</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="status" className="form-control" name="status" placeholder=""/>*/}
                                            <ReactWidgets.DropdownList style={{"width":"340px"}} className="form-control" id="statussEdit" data={slaStatusArr} value={slaStatusArr[slaStatusIndex]} textField='Name' onSelect={this.setSlaStatusId} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceSubEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务细项</label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px"}} className="form-control" id="serviceSubEdit" data={serviceItemDataArr} value={serviceItemDataArr[serviceItemDataIndex]} textField='Name' onSelect={this.setserviceItemDataId}  defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="responseTimeEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>响应时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px"}} id="responseTimeEdit" className="form-control" name="responseTimeEdit" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="workTimeEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>工作时长</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workTime" className="form-control" name="workTime" placeholder=""/>*/}
                                            <ReactWidgets.DropdownList style={{"width":"340px"}} className="form-control" id="workTimeEdit" data={ecctaskplanArr} value={ecctaskplanArr[ecctaskplanIndex]} textField='Instruction' onSelect={this.setEcctaskPlanId} defaultValue={"请选择"} AutoPostBack={true}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="endTimeEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务结束时间</label>
                                        <div className="col-sm-9">
                                            <input type="date" style={{"width":"340px"}} id="endTimeEdit" className="form-control" name="endTimeEdit" placeholder=""/>
                                            {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="slaEdit_content_middle_right" style={{"width":"445px","display":"inline-block","height":"343px","margin-left":"38px"}}>
                                <form className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <label htmlFor="organizationEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>运维单位</label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px"}} className="form-control" id="organizationEdit" data={companyDataArr} value={companyDataArr[companyDataIndex]} textField='FDNAME' onSelect={this.setCompanyDataId} defaultValue={"请选择"} AutoPostBack={true} onChange={this._selectProjectUnit}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="unitTypeEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>单位类型</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="unitType" className="form-control" name="unitType" placeholder=""/>*/}
                                            <ReactWidgets.DropdownList style={{"width":"340px"}} className="form-control" id="unitTypeEdit" data={unitTypeArr} value={unitTypeArr[unitTypeIndex]} textField='Name' onSelect={this.setunitTypeId} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bigServiceEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务大类</label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px"}} className="form-control" id="bigServiceEdit" data={serviceCatalogDataArr} value={serviceCatalogDataArr[serviceCatalogDataIndex]} textField='Name' onSelect={this.setserviceCatalogDataId} onChange={this._selectServiceItem} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceProjectEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务项</label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px"}} id="serviceProjectEdit" className="form-control" name="serviceProjectEdit" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="solutionTimeEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>解决时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px"}} id="solutionTimeEdit" className="form-control" name="solutionTimeEdit" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="startTimeEdit" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务开始时间</label>
                                        <div className="col-sm-9">
                                            <input type="date" style={{"width":"340px"}} id="startTimeEdit" className="form-control" name="startTimeEdit" placeholder=""/>
                                            {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="slaEdit_content_bottom" style={{"width":"928px"}}>
                        <div className="slaEdit_content_bottom_top" style={{"width":"928px","height":"52px","lineHeight":"52px"}}>
                            <span style={{"display":"inline-block","border":"6px solid transparent","borderLeftColor":"#379eed"}}></span>
                            响应时间、解决时间
                        </div>
                        <div id="slaTab" className="nav nav-tabs">
                            <ul id="myTab">
                                <li className='active' style={{"display":"inline-block"}}><a href="#serviceTimer" data-toggle="tab" style={{"display":"inline-block","width":"83px","height":"31px","textAlign":"center","lineHeight":"31px","border":"1px solid #ccc"}}>服务计时</a></li>
                                <li style={{"display":"inline-block"}}><a href="#serviceNumber" data-toggle="tab" style={{"display":"inline-block","width":"83px","height":"31px","textAlign":"center","lineHeight":"31px","border":"1px solid #ccc"}}>服务记次</a></li>
                            </ul>
                        </div>
                        <div id="slaTabContent" className="tab-content">
                            <div className="tab-pane fade in active" id="serviceTimer">
                                <div style={{"width":"928px","height":"25","borderTop":"1px solid #787878","borderBottom":"1px solid #787878","lineHeight":"25px","textAlign":"center"}}>响应时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解决时间</div>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>优先级</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>默认值</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>偏移量</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>总耗时</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>1</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumberEdit1"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>2</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumberEdit2"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>3</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumberEdit3"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>4</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumberEdit4"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>5</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumberEdit5"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>1</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumberEdit1"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>2</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumberEdit2"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>3</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumberEdit3"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>4</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumberEdit4"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>5</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumberEdit5"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="serviceNumber" style={{"marginTop":"30px"}}>
                                <span style={{"marginLeft":"20px"}}>服务总次数 <input type="text" defaultValue={0} id="totalTimeEdit"/></span>
                                <span style={{"marginLeft":"80px"}}>剩余次数 <input type="text" defaultValue={0} id="residueTimeEdit"/></span>
                            </div>
                        </div>
                    </div>
                    <div id="reviewed" className="alert alert-success" role="alert" style={{"display":"none"}}><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;<span>审核已通过</span></div>
                    <div id="published" className="alert alert-success" role="alert" style={{"display":"none"}}><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;<span>已发布</span></div>
                    <div id="noReview" className="alert alert-danger" role="alert" style={{"display":"none"}}><span className="glyphicon glyphicon-remove"></span>&nbsp;&nbsp;<span>审核未通过：</span>&nbsp;<span id="soluText"></span></div>
                </div>
            </div>
        )
    }
});
function myStateToProps(state) {
    const { slaStatusData,slaStatusId,ecctaskplanData,ecctaskplanId,unitTypeData,unitTypeId,serviceCatalogData,serviceCatalogId,serviceItemData,serviceItemId,companyData,companyId,projectUnitData,projectUnitId,slaRowId,slaStatusCode,slaRowCompanyId,slaRowProjectId,slaRowUnitTypeId,slaRowStatusId,slaRowBigServiceId,slaRowServiceSubId,slaRowWorkTimeId,slaRowStartTimeVal,slaRowEndTimeVal,slaRowServiceType,flowPicData} =state.operationReducer;
    return{
        slaStatusData:slaStatusData,
        slaStatusId:slaStatusId,
        ecctaskplanData:ecctaskplanData,
        ecctaskplanId:ecctaskplanId,
        unitTypeData:unitTypeData,
        unitTypeId:unitTypeId,
        serviceCatalogData:serviceCatalogData,
        serviceCatalogId:serviceCatalogId,
        serviceItemData:serviceItemData,
        serviceItemId:serviceItemId,
        companyData:companyData,
        companyId:companyId,
        projectUnitData:projectUnitData,
        projectUnitId:projectUnitId,
        slaRowId:slaRowId,
        slaStatusCode:slaStatusCode,
        slaRowCompanyId:slaRowCompanyId,
        slaRowProjectId:slaRowProjectId,
        slaRowUnitTypeId:slaRowUnitTypeId,
        slaRowStatusId:slaRowStatusId,
        slaRowBigServiceId:slaRowBigServiceId,
        slaRowServiceSubId:slaRowServiceSubId,
        slaRowWorkTimeId:slaRowWorkTimeId,
        slaRowStartTimeVal:slaRowStartTimeVal,
        slaRowEndTimeVal:slaRowEndTimeVal,
        slaRowServiceType:slaRowServiceType,
        flowPicData:flowPicData
    }
}
export default connect(myStateToProps)(SlaEditDetail);