import "bootstrap"
import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import $ from "jquery";
import {Router, Route, Link, IndexRoute,History} from 'react-router';
import * as operationAction from "../../../../../../actions/operation_action";
let _this;
var SlaAddDetail = React.createClass({
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
            endTime:""
        }
    },
    componentWillMount:function () {
        const {dispatch} = this.props;
        dispatch(operationAction.get_slaStatusData());
        dispatch(operationAction.get_ecctaskplanData());
        dispatch(operationAction.get_unitTypeData());
        dispatch(operationAction.get_serviceCatalog());
        dispatch(operationAction.get_companyData());
    },
    componentDidMount:function () {
        $("#statuss").find(".rw-input").text("请选择");
        $("#workTime").find(".rw-input").text("请选择");
        $("#unitType").find(".rw-input").text("请选择");
        $("#bigService").find(".rw-input").text("请选择");
        $("#serviceSub").find(".rw-input").text("请选择");
        $("#organization").find(".rw-input").text("请选择");
        $("#projectName").find(".rw-input").text("请选择");
        $("#myTab li>a").click(function () {
            console.log($(this));
            if($(this).text() == "服务计时"){
                //dataVal = "计时"
                _this.setState({dataVal:"计时"});
            }else if($(this).text() == "服务记次"){
                _this.setState({dataVal:"计次"});
            }
        });
        $("#startTime").on("change",function () {
            let startTime = $(this).val();
            //startTime = $(this).val();
            _this.setState({startTime:startTime});
        });
        $("#endTime").on("change",function () {
            let endTime = $(this).val();
            _this.setState({endTime:endTime});
        });
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
    _saveSlaAdd:function () {
        const {dispatch,projectUnitId,unitTypeId,serviceCatalogId,serviceItemId,ecctaskplanId,companyId,slaStatusId} = this.props;
        let SlaTitle = $("#SlaTitle").val();
        if(SlaTitle == null || SlaTitle == "" || SlaTitle == undefined){
        	$.showPublicDialog('提示','请您填写SLA标题!');
        	return false;
        }
        let organization = $("#organization").find(".rw-input").text();
        if(organization == null || organization == "" || organization == undefined){
        	$.showPublicDialog('提示','请您选择运维单位!');
        	return false;
        }
        let projectName = $("#projectName").find(".rw-input").text();
        if(projectName == null || projectName == "" || projectName == undefined){
        	$.showPublicDialog('提示','请您选择项目名称!');
        	return false;
        }
        let bigService = $("#bigService").find(".rw-input").text();
        if(bigService == null || bigService == "" || bigService == undefined){
        	$.showPublicDialog('提示','请您选择服务大类!');
        	return false;
        }
        let statuss = $("#statuss").find(".rw-input").text();
        let serviceSub = $("#serviceSub").find(".rw-input").text();
        if(serviceSub == null || serviceSub == "" || serviceSub == undefined){
        	$.showPublicDialog('提示','请您选择服务细项!');
        	return false;
        }
        let serviceProject = $("#serviceProject").val();
        if(serviceProject == null || serviceProject == "" || serviceProject == undefined){
        	$.showPublicDialog('提示','请您填写服务项!');
        	return false;
        }
        let responseTime = $("#responseTime").val();
        if(responseTime == null || responseTime == "" || responseTime == undefined){
        	$.showPublicDialog('提示','请您填写响应时间!');
        	return false;
        }
        let workTime = $("#workTime").find(".rw-input").text();
        //let endTime = $("#endTime").val();
        let unitType = $("#unitType").find(".rw-input").text();
        let solutionTime = $("#solutionTime").val();
        if(solutionTime == null || solutionTime == "" || solutionTime == undefined){
        	$.showPublicDialog('提示','请您填写解决时间!');
        	return false;
        }
        //let startTime = $("#startTime").val();
        let resNumber1 = $("#resNumber1").val();
        let resNumber2 = $("#resNumber2").val();
        let resNumber3 = $("#resNumber3").val();
        let resNumber4 = $("#resNumber4").val();
        let resNumber5 = $("#resNumber5").val();
        let sulNumber1 = $("#sulNumber1").val();
        let sulNumber2 = $("#sulNumber2").val();
        let sulNumber3 = $("#sulNumber3").val();
        let sulNumber4 = $("#sulNumber4").val();
        let sulNumber5 = $("#sulNumber5").val();
        let totalTime = $("#totalTime").val();
        let residueTime = $("#residueTime").val();
        let filters = [
            {key:"SLA_TITLE",value:SlaTitle},
            {key:"PROJECT_ID",value:projectUnitId},
            {key:"UNITTYPE_ID",value:unitTypeId},
            {key:"SCLID",value:serviceCatalogId},
            {key:"SITID",value:serviceItemId},
            {key:"SERVICECONTENT",value:serviceProject},
            {key:"WORKTIME_ID",value:ecctaskplanId},
            {key:"ORGANIZATION_ID",value:companyId},
            {key:"SLA_STATUS",value:slaStatusId},
            {key:"RESPONSETIME",value:responseTime},
            {key:"SOLUTIONTIME",value:solutionTime},
            {key:"RESPONSE1",value:resNumber1},
            {key:"RESPONSE2",value:resNumber2},
            {key:"RESPONSE3",value:resNumber3},
            {key:"RESPONSE4",value:resNumber4},
            {key:"RESPONSE5",value:resNumber5},
            {key:"SOLUTION1",value:sulNumber1},
            {key:"SOLUTION2",value:sulNumber2},
            {key:"SOLUTION3",value:sulNumber3},
            {key:"SOLUTION4",value:sulNumber4},
            {key:"SOLUTION5",value:sulNumber5},
            {key:"TOTALCOUNT",value:totalTime},
            {key:"EXECOUNT",value:residueTime},
            {key:"STARTTIME",value:_this.state.startTime},
            {key:"ENDTIME",value:_this.state.endTime},
            {key:"UNIT",value:_this.state.dataVal},
        ];
        dispatch(operationAction.add_slaInfo(filters));
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
            <div className="slaAdd" style={{"width":"100%","height":"100%","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
                <div className="slaAdd_content" style={{"margin":"16px auto","height":"inherit","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="slaAdd_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="slaAdd_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            新建SLA
                        </div>
                        <div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"66px","top":"17px","cursor":"pointer"}} onClick={this._saveSlaAdd}>保存</div>
                    </div>
                    <div className="slaAdd_content_middle" style={{"width":"966px"}}>
                        <div className="slaAdd_content_middle_top" style={{"width":"928px","height":"52px","lineHeight":"52px"}}>
                            <span style={{"display":"inline-block","border":"6px solid transparent","borderLeftColor":"#379eed"}}></span>
                            服务级别协议
                        </div>
                        <div className="slaAdd_content_middle_bottom" style={{"width":"966px"}}>
                        	<form className="form-horizontal" role="form">
                            <div className="slaAdd_content_middle_left" style={{"width":"464px","display":"inline-block","height":"343px"}}>
                                {/*<form className="form-horizontal" role="form">*/}
                                    <div className="form-group">
                                        <label htmlFor="SlaTitle" className="col-sm-3 control-label" style={{"textAlign":"left"}}>SLA标题
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="SlaTitle" className="form-control" name="SlaTitle" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectName" className="col-sm-3 control-label" style={{"textAlign":"left"}}>项目
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} id="projectName" className="form-control" data={projectUnitDataArr} value={projectUnitDataArr[projectUnitIndex]} textField='name' onSelect={this.setProjectUnitDataId} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="statuss" className="col-sm-3 control-label" style={{"textAlign":"left"}}>状态
                                        </label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="status" className="form-control" name="status" placeholder=""/>*/}
                                            <ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="statuss" data={slaStatusArr} value={slaStatusArr[slaStatusIndex]} textField='Name' onSelect={this.setSlaStatusId} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceSub" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务细项
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="serviceSub" data={serviceItemDataArr} value={serviceItemDataArr[serviceItemDataIndex]} textField='Name' onSelect={this.setserviceItemDataId}  defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="responseTime" className="col-sm-3 control-label" style={{"textAlign":"left"}}>响应时间
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="responseTime" className="form-control" name="responseTime" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="workTime" className="col-sm-3 control-label" style={{"textAlign":"left"}}>工作时长
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workTime" className="form-control" name="workTime" placeholder=""/>*/}
                                            <ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="workTime" data={ecctaskplanArr} value={ecctaskplanArr[ecctaskplanIndex]} textField='Instruction' onSelect={this.setEcctaskPlanId} defaultValue={"请选择"} AutoPostBack={true}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="endTime" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务结束时间
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="date" id="endTime" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="endTime" placeholder=""/>
                                            {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
                                        </div>
                                    </div>
                                {/*</form>*/}
                            </div>
                            <div className="slaAdd_content_middle_right" style={{"width":"464px","display":"inline-block","height":"343px","margin-left":"38px"}}>
                               {/* <form className="form-horizontal" role="form">*/}
                                    <div className="form-group">
                                        <label htmlFor="organization" className="col-sm-3 control-label" style={{"textAlign":"left"}}>运维单位
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="organization" data={companyDataArr} value={companyDataArr[companyDataIndex]} textField='FDNAME' onSelect={this.setCompanyDataId} defaultValue={"请选择"} AutoPostBack={true} onChange={this._selectProjectUnit}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="unitType" className="col-sm-3 control-label" style={{"textAlign":"left"}}>单位类型
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="unitType" className="form-control" name="unitType" placeholder=""/>*/}
                                            <ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="unitType" data={unitTypeArr} value={unitTypeArr[unitTypeIndex]} textField='Name' onSelect={this.setunitTypeId} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bigService" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务大类
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="bigService" data={serviceCatalogDataArr} value={serviceCatalogDataArr[serviceCatalogDataIndex]} textField='Name' onSelect={this.setserviceCatalogDataId} onChange={this._selectServiceItem} defaultValue={"请选择"}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceProject" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务项
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="serviceProject" className="form-control" name="serviceProject" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="solutionTime" className="col-sm-3 control-label" style={{"textAlign":"left"}}>解决时间
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="solutionTime" className="form-control" name="solutionTime" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="startTime" className="col-sm-3 control-label" style={{"textAlign":"left"}}>服务开始时间
                                        </label>
                                        <div className="col-sm-9">
                                            <input type="date" style={{"width":"340px","margin-left":"-20px"}} id="startTime" className="form-control" name="startTime" placeholder=""/>
                                            {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
                                        </div>
                                    </div>
                                {/*</form>*/}
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="slaAdd_content_bottom" style={{"width":"928px"}}>
                        <div className="slaAdd_content_bottom_top" style={{"width":"928px","height":"52px","lineHeight":"52px"}}>
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
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumber1"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>2</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumber2"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>3</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumber3"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>4</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumber4"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>5</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="resNumber5"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>1</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumber1"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>2</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumber2"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>3</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumber3"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>4</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumber4"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                                <ul style={{"display":"inline-block","marginLeft":"30px"}}>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>5</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>240</li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}><input type="text" style={{"width":"50px","height":"20px"}} defaultValue={20} id="sulNumber5"/></li>
                                    <li style={{"marginTop":"15px","textAlign":"center"}}>260</li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="serviceNumber" style={{"marginTop":"30px"}}>
                                <span style={{"marginLeft":"20px"}}>服务总次数 <input type="text" defaultValue={0} id="totalTime"/></span>
                                <span style={{"marginLeft":"80px"}}>剩余次数 <input type="text" defaultValue={0} id="residueTime"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
function myStateToProps(state) {
    const { slaStatusData,slaStatusId,ecctaskplanData,ecctaskplanId,unitTypeData,unitTypeId,serviceCatalogData,serviceCatalogId,serviceItemData,serviceItemId,companyData,companyId,projectUnitData,projectUnitId,flowPicData} =state.operationReducer;
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
        flowPicData:flowPicData
    }
}
export default connect(myStateToProps)(SlaAddDetail);