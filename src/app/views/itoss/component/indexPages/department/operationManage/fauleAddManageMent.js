import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import {Router, Route, Link, IndexRoute, History} from 'react-router';
import * as operationAction from "../../../../../../actions/operation_action";
import * as dataDictActions from "../../../../../../actions/dataDict_action";
function searchPic() {
    return '<a class="conversionSearch" href="javascript:void(0)" style="text-decoration:none">查看</a>'
}
var _this;
const FauleAddManageMent = React.createClass({
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            fauleProjectDataIndex: 0,
            fauleWorkOrderNameDataIndex: 0,
            workOrderSourceDataIndex: 0,
            unitTypeDataIndex: 0,
            slaInfoDatasIndex:0,
            areaDataIndex:0,
            childAreaDataIndex:0,
            unitStaffInfoDatasIndex:0,
            fauleFaultSubTypeDataIndex:0,
            fauleBigFaultTypeDataIndex:0,
            fauleFaultTypeDataIndex:0,
            orderTime:"",
            resTime:"",
            rolTime:"",
            respTime:"",
            soluTime:"",
            fauleServiceLevelVal:""
        }
    },
    componentWillMount: function () {
        const {dispatch} = this.props;
        dispatch(dataDictActions.get_projectData());
        dispatch(operationAction.get_workOrderSourceData());
        dispatch(dataDictActions.get_unitTypeData());
        dispatch(operationAction.get_serviceCatalog());
        dispatch(dataDictActions.get_areaData());
        dispatch(dataDictActions.get_childAreaData());
        dispatch(operationAction.get_fauleBigFaultTypeData());
        dispatch(operationAction.get_fauleFaultTypeData());
    },
    componentDidMount: function () {
        /*$("#conversionTableList").bootstrapTable({
         columns: [
         {
         title: '流程操作',
         field: 'PROJECT_NAME',
         halign: 'left',
         align: 'left',
         sortable: true
         },
         {
         title: '处理人',
         field: 'UNITTYPE_NAME',
         halign: 'left',
         align: 'left',
         sortable: true
         },
         {
         title: '处理时间',
         field: 'SERVICECONTENT',
         halign: 'left',
         align: 'left',
         sortable: true
         },
         {
         title: '处理过程',
         halign: 'left',
         align: 'left',
         //events: slaManageMentTableEvent,
         formatter: searchPic
         }
         ],
         data: [],
         //onClickRow: this._onClickRow,
         exportDataType: "all"
         });*/
        $("#projectName").find(".rw-input").text("请选择");
        $("#workOrderType").find(".rw-input").text("请选择");
        $("#fauleResources").find(".rw-input").text("请选择");
        $("#fauleUnitType").find(".rw-input").text("请选择");
        $("#fauleServiceProject").find(".rw-input").text("请选择");
        $("#fauleArea").find(".rw-input").text("请选择");
        $("#fauleChildArea").find(".rw-input").text("请选择");
        $("#fauleUnitName").find(".rw-input").text("请选择");
        $("#fauleBigFault").find(".rw-input").text("请选择");
        $("#fauleSubFault").find(".rw-input").text("请选择");
        $("#fauleFaultType").find(".rw-input").text("请选择");
        $("#fauleOrderTime").val((new Date()).Format("yyyy-MM-ddThh:mm"));
        $("#dispatchTime").val((new Date()).Format("yyyy-MM-dd hh:mm:ss"));
        /*let disTimer = setInterval(function () {
            $("#dispatchTime").val((new Date()).Format("yyyy-MM-ddThh:mm:ss"));
        },1000);*/
        let that =_this;
        let orderTimer = setInterval(function () {
            $("#fauleOrderTime").val(new Date().Format("yyyy-MM-ddThh:mm"));
            $("#dispatchTime").val(new Date().Format("yyyy-MM-dd hh:mm:ss"));

            var time = new Date($("#fauleOrderTime").val().replace("-","/").replace("T"," "));
            var time1 = new Date($("#fauleOrderTime").val().replace("-","/").replace("T"," "));
            var b = that.state.respTime;
            var b1 = that.state.soluTime;
            time.setMinutes(time.getMinutes()+ b);
            time1.setMinutes(time1.getMinutes()+ b1);
            $("#fauleResTime").val(time.Format("yyyy-MM-dd hh:mm").replace(" ", "T"));
            $("#fauleRolTime").val(time1.Format("yyyy-MM-dd hh:mm").replace(" ", "T"));

        },1000);
        $("#fauleResTime").val($("#fauleOrderTime").val());
        $("#fauleRolTime").val($("#fauleOrderTime").val());
        $("#fauleTab li").on('click', function () {
            $(this).css({
                "borderBottomColor": "#349ff1",
                "color": "#349ff1"
            }).siblings("li").css({"borderBottomColor": "transparent", "color": "#aeaeae"})
        });
        $("#fauleOrderTime").on("change",function () {
            var orderTime = $(this).val();
            var time = new Date(orderTime.replace("-", "/").replace("T", " "));
            var time1 = new Date(orderTime.replace("-", "/").replace("T", " "));
            var b = that.state.respTime;
            var b1 = that.state.soluTime;
            time.setMinutes(time.getMinutes() + b);
            time1.setMinutes(time1.getMinutes() + b1);
            $("#fauleResTime").val(time.Format("yyyy-MM-dd hh:mm").replace(" ", "T"));
            $("#fauleRolTime").val(time1.Format("yyyy-MM-dd hh:mm").replace(" ", "T"));

            $("#dispatchTime").val(orderTime.replace("T", " ")+":00");
            // $("#fauleRolTime").val(orderTime+that.state.soluTime);
            clearInterval(orderTimer);
            _this.setState({ orderTime: orderTime });
        });
        $("#fauleResTime").on("change",function () {
            let resTime = $(this).val();
            //startTime = $(this).val();
            _this.setState({resTime:resTime});
        });
        $("#fauleRolTime").on("change",function () {
            let rolTime = $(this).val();
            //startTime = $(this).val();
            _this.setState({rolTime:rolTime});
        });
        $("#fauleServiceLevel").on("change",function () {
            let val = $(this).val();
            if(val == "请选择"){
                _this.setState({fauleServiceLevelVal:""})
            }
            _this.setState({fauleServiceLevellVal:val})
        });
        $("#cusSerStar").raty({
            path: "img/images"
        });
        $("#cusTecStar").raty({
            path: "img/images"
        });
        $("#cusFauStar").raty({
            path: "img/images"
        });
        $("#cusAttStar").raty({
            path: "img/images"
        });
        $("#cusQuaStar").raty({
            path: "img/images"
        });
        $("#supervisionSerStar").raty({
            path: "img/images"
        });
        $("#supervisionTecStar").raty({
            path: "img/images"
        });
        $("#supervisionFauStar").raty({
            path: "img/images"
        });
        $("#supervisionAttStar").raty({
            path: "img/images"
        });
        $("#supervisionQuaStar").raty({
            path: "img/images"
        });
        $("#PASerStar").raty({
            path: "img/images"
        });
        $("#PATecStar").raty({
            path: "img/images"
        });
        $("#PAFauStar").raty({
            path: "img/images"
        });
        $("#PAAttStar").raty({
            path: "img/images"
        });
        $("#PAQuaStar").raty({
            path: "img/images"
        });
        $("#serStar").raty({
            path: "img/images"
        });
        $("#tecStar").raty({
            path: "img/images"
        });
        $("#fauStar").raty({
            path: "img/images"
        });
        $("#attStar").raty({
            path: "img/images"
        });
        $("#quaStar").raty({
            path: "img/images"
        });
    },
    setFauleProjectDataId: function (e) {
        const {dispatch, projectData} = this.props;
        let curId = e.RecId;
        let that = this;
        for (let i = 0; i < projectData.length; i++) {
            let projectDataId = projectData[i].RecId;
            if (curId == projectDataId) {
                that.setState({fauleProjectDataIndex: i + 1});
            }
        }
        $("#projectName").find(".rw-input").text(e.Name);
        dispatch(dataDictActions.setProjectId(curId));
    },
    setFauleWorkOrderNameDataId: function (e) {
        const {dispatch, fauleWorkOrderNameData} = this.props;
        let curId = e.RecId;
        let that = this;
        for (let i = 0; i < fauleWorkOrderNameData.length; i++) {
            let fauleWorkOrderNameDataId = fauleWorkOrderNameData[i].RecId;
            if (curId == fauleWorkOrderNameDataId) {
                that.setState({fauleWorkOrderNameDataIndex: i + 1});
            }
        }
        $("#workOrderType").find(".rw-input").text(e.Name);
        dispatch(operationAction.setFauleWorkOrderNameId(curId));
    },
    setFauleWorkOrderSourceDataId: function (e) {
        const {dispatch, workOrderSourceData} = this.props;
        let curId = e.RecId;
        let that = this;
        for (let i = 0; i < workOrderSourceData.length; i++) {
            let workOrderSourceDataId = workOrderSourceData[i].RecId;
            if (curId == workOrderSourceDataId) {
                that.setState({workOrderSourceDataIndex: i + 1});
            }
        }
        $("#fauleResources").find(".rw-input").text(e.Name);
        dispatch(operationAction.setWorkOrderSourceId(curId));
    },
    setFauleunitTypeDataId: function (e) {
        const {dispatch, unitTypeData} = this.props;
        let curId = e.RECID;
        let that = this;
        for (let i = 0; i < unitTypeData.length; i++) {
            let unitTypeDataId = unitTypeData[i].RECID;
            if (curId == unitTypeDataId) {
                that.setState({unitTypeDataIndex: i + 1});
            }
        }
        $("#fauleUnitType").find(".rw-input").text(e.UNITTYPENAME);
        dispatch(dataDictActions.setUnitTypeId(curId));
    },
    setFauleareaDataId:function (e) {
        const {dispatch, areaData} = this.props;
        let curId = e.RecId;
        let that = this;
        for (let i = 0; i < areaData.length; i++) {
            let areaDataId = areaData[i].RecId;
            if (curId == areaDataId) {
                that.setState({areaDataIndex: i + 1});
            }
        }
        $("#fauleArea").find(".rw-input").text(e.Name);
        dispatch(dataDictActions.setAreaId(curId));
    },
    setFauleChildAreaId:function (e) {
        const {dispatch, childAreaData} = this.props;
        let curId = e.recId;
        let that = this;
        for (let i = 0; i < childAreaData.length; i++) {
            let childAreaDataId = childAreaData[i].recId;
            if (curId == childAreaDataId) {
                that.setState({childAreaDataIndex: i + 1});
            }
        }
        $("#fauleChildArea").find(".rw-input").text(e.childAreaName);
        dispatch(dataDictActions.setChildAreaId(curId));
    },
    setFauleBigFaultTypeDataId:function (e) {
        const {dispatch, fauleBigFaultTypeData} = this.props;
        let curId = e.RecId;
        let that = this;
        for (let i = 0; i < fauleBigFaultTypeData.length; i++) {
            let fauleBigFaultTypeDataId = fauleBigFaultTypeData[i].RecId;
            if (curId == fauleBigFaultTypeDataId) {
                that.setState({fauleBigFaultTypeDataIndex: i + 1});
            }
        }
        $("#fauleBigFault").find(".rw-input").text(e.FaultName);
        dispatch(operationAction.setFauleBigFaultTypeId(curId));
    },
    setFauleFaultSubTypeDataId:function (e) {
        const {dispatch, fauleFaultSubTypeData} = this.props;
        let curId = e.RecId;
        let that = this;
        for (let i = 0; i < fauleFaultSubTypeData.length; i++) {
            let fauleFaultSubTypeDataId = fauleFaultSubTypeData[i].RecId;
            if (curId == fauleFaultSubTypeDataId) {
                that.setState({fauleFaultSubTypeDataIndex: i + 1});
            }
        }
        $("#fauleSubFault").find(".rw-input").text(e.FaultName);
        dispatch(operationAction.setFauleFaultSubTypeId(curId));
    },
    setFauleFaultTypeDataId:function (e) {
        const {dispatch, fauleFaultTypeData} = this.props;
        let curId = e.RecId;
        let that = this;
        for (let i = 0; i < fauleFaultTypeData.length; i++) {
            let fauleFaultTypeDataId = fauleFaultTypeData[i].RecId;
            if (curId == fauleFaultTypeDataId) {
                that.setState({fauleFaultTypeDataIndex: i + 1});
            }
        }
        $("#fauleFaultType").find(".rw-input").text(e.TypeName);
        dispatch(operationAction.setFauleFaultTypeId(curId));
    },
    setFauleServiceProjectId: function (e) {
        const {dispatch, slaInfoDatas} = this.props;
        let curId = e.SLAID;
        let that = this;
        let fauleCatalogName = e.SCLNAME;
        let fauleCatalogId = e.SCLID;
        let fauleItemName = e.SITNAME;
        let fauleItemId = e.SITID;
        let fauleServiceContent = e.SERVICECONTENT;
        let respTime = e.RESPONSETIME;
        let soluTime = e.SOLUTIONTIME;
        for (let i = 0; i < slaInfoDatas.length; i++) {
            let slaInfoDatasId = slaInfoDatas[i].SLAID;
            if (curId == slaInfoDatasId) {
                that.setState({slaInfoDatasIndex: i + 1});
                $("#fauleServiceCatalog").val(fauleCatalogName);
                $("#fauleServiceItem").val(fauleItemName);
                $("#fauleServiceContent").val(fauleServiceContent);
            }
        }
        $("#fauleServiceProject").find(".rw-input").text(e.SLA_TITLE);
        dispatch(operationAction.setSLAInfoIds(curId));
        dispatch(operationAction.setFauleServiceCatalogId(fauleCatalogId));
        dispatch(operationAction.setFauleServiceItemId(fauleItemId));
        _this.setState({respTime:respTime});
        _this.setState({soluTime:soluTime});
    },
    setFauleunitNameId:function (e) {
        const {dispatch, unitStaffInfoDatas} = this.props;
        let curId = e.UNIT_ID;
        let that = this;
        let fauleAddress = e.UNITADDRESS;
        let fauleArea = e.AREANAME;
        let fauleAreaId = e.AREAID;
        let fauleUnitType = e.TYPENAME;
        let fauleUnitTypeId = e.TYPEID;
        let fauleLeader = e.USERNAME;
        let leaderPhone = e.PHONE;
        for (let i = 0; i < unitStaffInfoDatas.length; i++) {
            let unitStaffInfoDatasId = unitStaffInfoDatas[i].UNIT_ID;
            if (curId == unitStaffInfoDatasId) {
                that.setState({unitStaffInfoDatasIndex: i + 1});
                $("#fauleAddress").val(fauleAddress);
                $("#fauleChildArea").find(".rw-input").text(fauleArea);
                $("#fauleUnitType").find(".rw-input").text(fauleUnitType);
                $("#fauleLeader").val(fauleLeader);
                $("#leaderPhone").val(leaderPhone);
            }
        }
        $("#fauleUnitName").find(".rw-input").text(e.UNIT_NAME);
        dispatch(operationAction.setUnitStaffInfoIds(curId));
        dispatch(operationAction.setFauleAreaId(fauleAreaId));
        dispatch(operationAction.setFauleTypeId(fauleUnitTypeId));
    },
    _selectFauleWorkOrderName: function (e) {
        const {dispatch,projectId,unitTypeId} = this.props;
        dispatch(operationAction.get_fauleWorkOrderNameData(e.RecId));
        let filters = [];
        if (projectId) {
            filters.push({key: "PROJECTID", value: projectId});
        }
        if (unitTypeId) {
            filters.push({key: "UNITTYPEID", value: unitTypeId});
        }
        dispatch(operationAction.get_slaInfoDatas(filters));
    },
    getServiceDatas:function (e) {
        const {dispatch,projectId,unitTypeId,areaId} = this.props;
        let filters = [];
        let filters1 = [];
        if (projectId) {
            filters.push({key: "PROJECTID", value: projectId});
        }
        if (unitTypeId) {
            filters.push({key: "UNITTYPEID", value: unitTypeId});
        }
        if (areaId) {
            filters1.push({key: "AREA_ID", value: areaId});
        }
        if (unitTypeId) {
            filters1.push({key: "UNITTYPEID", value: unitTypeId});
        }
        dispatch(operationAction.get_slaInfoDatas(filters));
        dispatch(operationAction.get_unitStaffInfoDatas(filters1));
    },
    getUnitDatas:function (e) {
        const {dispatch,areaId,unitTypeId} = this.props;
        let filters = [];
        if (areaId) {
            filters.push({key: "AREA_ID", value: areaId});
        }
        if (unitTypeId) {
            filters.push({key: "UNITTYPE_ID", value: unitTypeId});
        }
        dispatch(operationAction.get_unitStaffInfoDatas(filters));
    },
    getUnitDatas1:function (e) {
        const {dispatch,areaId,unitTypeId} = this.props;
        let filters = [];
        if (areaId) {
            filters.push({key: "AREA_ID", value: areaId});
        }
        if (unitTypeId) {
            filters.push({key: "UNITTYPE_ID", value: unitTypeId});
        }
        dispatch(operationAction.get_unitStaffInfoDatas(filters));
    },
    getFauleSubType:function (e) {
        const {dispatch} = this.props;
        dispatch(operationAction.get_fauleFaultSubTypeData(e.RecId));
    },
    _serchKnowledge:function () {
        const {dispatch} = this.props;
        let themVal = $("#workOrderThem").val();
        dispatch(operationAction)
    },
    /*_selectFauleServicePro: function (e) {
        const {dispatch, projectId, unitTypeId} = this.props;
        let filters = [];
        if (projectId) {
            filters.push({key: "PROJECTID", value: projectId});
        }
        if (unitTypeId) {
            filters.push({key: "UNITTYPEID", value: unitTypeId});
        }
        dispatch(operationAction.get_slaInfoDatas(filters));
    },*/
    render: function () {
        const {projectData, fauleWorkOrderNameData, workOrderSourceData, unitTypeData,slaInfoDatas,areaData,childAreaData,unitStaffInfoDatas,fauleFaultSubTypeData,fauleBigFaultTypeData,fauleFaultTypeData} = this.props;
        let _this = this;
        let fauleProjectDataIndex = this.state.fauleProjectDataIndex;
        let fauleProjectDataArr = [];
        fauleProjectDataArr.push({RecId: "", Name: ""});
        for (let i = 0; i < projectData.length; i++) {
            fauleProjectDataArr.push(projectData[i]);
        }
        let fauleWorkOrderNameDataIndex = this.state.fauleWorkOrderNameDataIndex;
        let fauleWorkOrderNameDataArr = [];
        fauleWorkOrderNameDataArr.push({RecId: "", Name: ""});
        for (let i = 0; i < fauleWorkOrderNameData.length; i++) {
            fauleWorkOrderNameDataArr.push(fauleWorkOrderNameData[i]);
        }
        let workOrderSourceDataIndex = this.state.workOrderSourceDataIndex;
        let workOrderSourceDataArr = [];
        workOrderSourceDataArr.push({RecId: "", Name: ""});
        for (let i = 0; i < workOrderSourceData.length; i++) {
            workOrderSourceDataArr.push(workOrderSourceData[i]);
        }
        let unitTypeDataIndex = this.state.unitTypeDataIndex;
        let unitTypeDataArr = [];
        unitTypeDataArr.push({RECID: "", UNITTYPENAME: ""});
        for (let i = 0; i < unitTypeData.length; i++) {
            unitTypeDataArr.push(unitTypeData[i]);
        }
        let slaInfoDatasIndex = this.state.slaInfoDatasIndex;
        let slaInfoDatasArr = [];
        slaInfoDatasArr.push({SLAID: "", SLA_TITLE: "",SCLNAME:"",SCLID:"",SITNAME:"",SITID:"",SERVICECONTENT:"",RESPONSETIME:"",SOLUTIONTIME:""});
        for (let i = 0; i < slaInfoDatas.length; i++) {
            slaInfoDatasArr.push(slaInfoDatas[i]);
        }
        let areaDataIndex = this.state.areaDataIndex;
        let areaDataArr = [];
        areaDataArr.push({RecId: "", Name: ""});
        for (let i = 0; i < areaData.length; i++) {
            areaDataArr.push(areaData[i]);
        }
        let childAreaDataIndex = this.state.childAreaDataIndex;
        let childAreaDataArr = [];
        childAreaDataArr.push({recId: "", childAreaName: ""});
        for (let i = 0; i < childAreaData.length; i++) {
            childAreaDataArr.push(childAreaData[i]);
        }
        let unitStaffInfoDatasIndex = this.state.unitStaffInfoDatasIndex;
        let unitStaffInfoDatasArr = [];
        unitStaffInfoDatasArr.push({UNIT_NAME: "", UNIT_ID: "",UNITADDRESS: "", AREANAME: "",AREAID: "", TYPENAME: "",TYPEID: "", USERNAME: "",PHONE: ""});
        for (let i = 0; i < unitStaffInfoDatas.length; i++) {
            unitStaffInfoDatasArr.push(unitStaffInfoDatas[i]);
        }
        let fauleFaultSubTypeDataIndex = this.state.fauleFaultSubTypeDataIndex;
        let fauleFaultSubTypeDataArr = [];
        fauleFaultSubTypeDataArr.push({RecId: "", FaultName: ""});
        for (let i = 0; i < fauleFaultSubTypeData.length; i++) {
            fauleFaultSubTypeDataArr.push(fauleFaultSubTypeData[i]);
        }
        let fauleBigFaultTypeDataIndex = this.state.fauleBigFaultTypeDataIndex;
        let fauleBigFaultTypeDataArr = [];
        fauleBigFaultTypeDataArr.push({RecId: "", FaultName: ""});
        for (let i = 0; i < fauleBigFaultTypeData.length; i++) {
            fauleBigFaultTypeDataArr.push(fauleBigFaultTypeData[i]);
        }
        let fauleFaultTypeDataIndex = this.state.fauleFaultTypeDataIndex;
        let fauleFaultTypeDataArr = [];
        fauleFaultTypeDataArr.push({RecId: "", TypeName: ""});
        for (let i = 0; i < fauleFaultTypeData.length; i++) {
            fauleFaultTypeDataArr.push(fauleFaultTypeData[i]);
        }
        return (
            <div className="fauleAdd"
                 style={{"width": "100%", "height": "auto", "paddingTop": "16px", "backgroundColor": "#edf5f8"}}>
                <div className="fauleAdd_content" style={{
                    "width": "1000px",
                    "margin": "0 auto",
                    "backgroundColor": "#fff",
                    "padding": "0 26px 0 26px"
                }}>
                    <ul id="fauleTab" className="fauleAdd_content_head" style={{
                        "width": "100%",
                        "position": "relative",
                        "borderBottom": "1px solid #ebecee",
                        "margin": "0"
                    }}>
                        <li className="fauleAdd_newCreat" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#newCreate" data-toggle="tab"
                              stype={{"textDecoration": "none", "color": "#aeaeae"}}>故障新建</a></li>
                        <li className="fauleAdd_process" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#process" data-toggle="tab" stype={{"textDecoration": "none", "color": "#aeaeae"}}>故障处理</a>
                        </li>
                        <li className="fauleAdd_evaluation" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#evaluation" data-toggle="tab"
                              stype={{"textDecoration": "none", "color": "#aeaeae"}}>故障评价</a></li>
                        <li className="fauleAdd_conversion" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#conversion" data-toggle="tab"
                              stype={{"textDecoration": "none", "color": "#aeaeae"}}>故障流转</a></li>
                        <div className="fauleAdd_saveBtn" style={{
                            "width": "60px",
                            "height": "32px",
                            "position": "absolute",
                            "top": "17px",
                            "right": "0",
                            "color": "#717171",
                            "lineHeight": "32px",
                            "textAlign": "center",
                            "backgroundColor": "#f6f7f9",
                            "borderRadius": "5px"
                        }}>返回
                        </div>
                        <div className="fauleAdd_saveBtn" style={{
                            "width": "60px",
                            "height": "32px",
                            "position": "absolute",
                            "top": "17px",
                            "right": "66px",
                            "color": "#717171",
                            "lineHeight": "32px",
                            "textAlign": "center",
                            "backgroundColor": "#f6f7f9",
                            "borderRadius": "5px"
                        }}>打印
                        </div>
                        <div className="fauleAdd_saveBtn" style={{
                            "width": "60px",
                            "height": "32px",
                            "position": "absolute",
                            "top": "17px",
                            "right": "134px",
                            "color": "#fff",
                            "lineHeight": "32px",
                            "textAlign": "center",
                            "backgroundColor": "#74ce84",
                            "borderRadius": "5px"
                        }}>保存
                        </div>
                    </ul>
                    <div id="fauleTabContent" className="tab-content">
                        <div className="tab-pane fade in active" id="newCreate">
                            <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                <span style={{
                                    "display": "inline-block",
                                    "border": "6px solid transparent",
                                    "borderLeftColor": "#349ef0",
                                    "marginRight": "10px"
                                }}></span>类型选择
                            </div>
                            <div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block"}}>
                                        <label htmlFor="projectName" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>项目名称</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="projectName" name="projectName" style={{"width":"338px"}}/>*/}
                                            <ReactWidgets.DropdownList
                                                                        style={{"width":"320px"}}
                                                                        className="form-control"
                                                                        id="projectName" data={fauleProjectDataArr}
                                                                       value={fauleProjectDataArr[fauleProjectDataIndex]}
                                                                       textField='Name'
                                                                       onSelect={this.setFauleProjectDataId}
                                                                       onChange={this._selectFauleWorkOrderName}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block"}}>
                                        <label htmlFor="workOrderType" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>工单类型</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workOrderType" name="workOrderType" style={{"width":"338px"}}/>*/}
                                            <ReactWidgets.DropdownList
                                                                    style={{"width":"320px"}}
                                                                     className="form-control"
                                                                     id="workOrderType"
                                                                       data={fauleWorkOrderNameDataArr}
                                                                       value={fauleWorkOrderNameDataArr[fauleWorkOrderNameDataIndex]}
                                                                       textField='Name'
                                                                       onSelect={this.setFauleWorkOrderNameDataId}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                <span style={{
                                    "display": "inline-block",
                                    "border": "6px solid transparent",
                                    "borderLeftColor": "#349ef0",
                                    "marginRight": "10px"
                                }}></span>基本信息
                            </div>
                            <div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block"}}>
                                        <label htmlFor="workOrderNumber" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>故障号</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderNumber" name="workOrderNumber" className="form-control" style={{"width":"320px"}}
                                                  />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block"}}>
                                        <label htmlFor="workOrderThem" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>故障主题</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderThem" name="workOrderThem" className="form-control"
                                                   style={{"width":"320px"}} onChange={this._serchKnowledge}/>
                                        </div>
                                    </div>
                                    <div style={{"marginTop": "15px"}}>
                                        <label htmlFor="workOrderDec" className="col-sm-2">故障描述</label>
                                        <div>
                                            <textarea rows="4" cols="110" style={{"border-radius":"4px"}}></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div style={{"width": "100%", "marginTop": "15px", "border": "1px solid #daf1f8"}}>
                                <div style={{
                                    "width": "100%",
                                    "height": "40px",
                                    "backgroundColor": "#daf1f8",
                                    "lineHeight": "40px"
                                }}>
                                    <span style={{"color": "#349ef0", "marginLeft": "16px"}}>解决方案</span>
                                </div>
                                <ol>
                                    <li style={{
                                        "width": "396px",
                                        "height": "64px",
                                        "margin": "15px 15px 0 40px",
                                        "display": "inline-block"
                                    }}>
                                        <span style={{
                                            "width": "4px",
                                            "height": "4px",
                                            "backgroundColor": "#adadad",
                                            "borderRadius": "50%",
                                            "display": "inline-block"
                                        }}></span>
                                        <a href="#" style={{"color": "#42a4f1", "marginLeft": "5px"}}>全校无法上网</a>
                                        <p style={{
                                            "textOverflow": "ellipsis",
                                            "overflow": "hidden",
                                            "height": "40px",
                                            "width": "396px"
                                        }}>
                                            学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网</p>
                                    </li>
                                    <li style={{
                                        "width": "396px",
                                        "height": "64px",
                                        "margin": "15px 15px 0 40px",
                                        "display": "inline-block"
                                    }}>
                                        <span style={{
                                            "width": "4px",
                                            "height": "4px",
                                            "backgroundColor": "#adadad",
                                            "borderRadius": "50%",
                                            "display": "inline-block"
                                        }}></span>
                                        <a href="#" style={{"color": "#42a4f1", "marginLeft": "5px"}}>全校无法上网</a>
                                        <p style={{
                                            "textOverflow": "ellipsis",
                                            "overflow": "hidden",
                                            "height": "40px",
                                            "width": "396px"
                                        }}>
                                            学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网</p>
                                    </li>
                                    <li style={{
                                        "width": "396px",
                                        "height": "64px",
                                        "margin": "15px 15px 0 40px",
                                        "display": "inline-block"
                                    }}>
                                        <span style={{
                                            "width": "4px",
                                            "height": "4px",
                                            "backgroundColor": "#adadad",
                                            "borderRadius": "50%",
                                            "display": "inline-block"
                                        }}></span>
                                        <a href="#" style={{"color": "#42a4f1", "marginLeft": "5px"}}>全校无法上网</a>
                                        <p style={{
                                            "textOverflow": "ellipsis",
                                            "overflow": "hidden",
                                            "height": "40px",
                                            "width": "396px"
                                        }}>
                                            学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网</p>
                                    </li>
                                    <li style={{
                                        "width": "396px",
                                        "height": "64px",
                                        "margin": "15px 15px 0 40px",
                                        "display": "inline-block"
                                    }}>
                                        <span style={{
                                            "width": "4px",
                                            "height": "4px",
                                            "backgroundColor": "#adadad",
                                            "borderRadius": "50%",
                                            "display": "inline-block"
                                        }}></span>
                                        <a href="#" style={{"color": "#42a4f1", "marginLeft": "5px"}}>全校无法上网</a>
                                        <p style={{
                                            "textOverflow": "ellipsis",
                                            "overflow": "hidden",
                                            "height": "40px",
                                            "width": "396px"
                                        }}>
                                            学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网</p>
                                    </li>
                                    <li style={{
                                        "width": "396px",
                                        "height": "64px",
                                        "margin": "15px 15px 0 40px",
                                        "display": "inline-block"
                                    }}>
                                        <span style={{
                                            "width": "4px",
                                            "height": "4px",
                                            "backgroundColor": "#adadad",
                                            "borderRadius": "50%",
                                            "display": "inline-block"
                                        }}></span>
                                        <a href="#" style={{"color": "#42a4f1", "marginLeft": "5px"}}>全校无法上网</a>
                                        <p style={{
                                            "textOverflow": "ellipsis",
                                            "overflow": "hidden",
                                            "height": "40px",
                                            "width": "396px"
                                        }}>
                                            学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网</p>
                                    </li>
                                    <li style={{
                                        "width": "396px",
                                        "height": "64px",
                                        "margin": "15px 15px 0 40px",
                                        "display": "inline-block"
                                    }}>
                                        <span style={{
                                            "width": "4px",
                                            "height": "4px",
                                            "backgroundColor": "#adadad",
                                            "borderRadius": "50%",
                                            "display": "inline-block"
                                        }}></span>
                                        <a href="#" style={{"color": "#42a4f1", "marginLeft": "5px"}}>全校无法上网</a>
                                        <p style={{
                                            "textOverflow": "ellipsis",
                                            "overflow": "hidden",
                                            "height": "40px",
                                            "width": "396px"
                                        }}>
                                            学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网学校全校无法上网</p>
                                    </li>
                                </ol>
                            </div>
                            <div style={{"marginTop": "15px"}}>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleResources" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}} >来源</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workOrderThem" name="workOrderThem" style={{"width":"338px"}}/>*/}
                                            <ReactWidgets.DropdownList
                                                                    className="form-control" style={{"width":"320px"}}
                                                                    id="fauleResources" data={workOrderSourceDataArr}
                                                                       value={workOrderSourceDataArr[workOrderSourceDataIndex]}
                                                                       textField='Name'
                                                                       onSelect={this.setFauleWorkOrderSourceDataId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="requestUser" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>请求用户</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="requestUser" name="requestUser"
                                                   className="form-control" style={{"width":"320px"}}
                                                   />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="faulePhone" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}} >电话</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="faulePhone" name="faulePhone"
                                                   className="form-control" style={{"width":"320px"}}
                                                  />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleArea" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>区域</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="fauleArea" name="fauleArea"
                                                   style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="fauleArea" data={areaDataArr}
                                                                       value={areaDataArr[areaDataIndex]}
                                                                       textField='Name'
                                                                       onSelect={this.setFauleareaDataId}
                                                                       onChange={this.getUnitDatas}
                                                                       className="form-control" style={{"width":"320px"}}
                                            />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleChildArea" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>子区域</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workOrderThem" name="workOrderThem"
                                                   style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="fauleChildArea" data={childAreaDataArr}
                                                                       value={childAreaDataArr[childAreaDataIndex]}
                                                                       textField='childAreaName'
                                                                       onSelect={this.setFauleChildAreaId}
                                                                       onChange={this.getUnitDatas1}
                                                                       className="form-control" style={{"width":"320px"}}
                                            />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleUnitType" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>单位类型</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workOrderThem" name="workOrderThem" style={{"width":"338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="fauleUnitType" data={unitTypeDataArr}
                                                                       value={unitTypeDataArr[unitTypeDataIndex]}
                                                                       textField='UNITTYPENAME'
                                                                       onSelect={this.setFauleunitTypeDataId}
                                                                       onChange={this.getServiceDatas}
                                                                       className="form-control" style={{"width":"320px"}}
                                            />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleUnitName" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>单位名称</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="fauleUnitName" name="fauleUnitName"
                                                   style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="fauleUnitName" data={unitStaffInfoDatasArr}
                                                                       value={unitStaffInfoDatasArr[unitStaffInfoDatasIndex]}
                                                                       textField='UNIT_NAME'
                                                                       onSelect={this.setFauleunitNameId}
                                                                       className="form-control" style={{"width":"320px"}}
                                            />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleLeader" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>负责人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="fauleLeader" name="fauleLeader"
                                                   className="form-control" style={{"width":"320px"}}
                                                  />
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleAddress" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>单位地址</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="fauleAddress" name="fauleAddress"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="leaderPhone" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>负责人电话</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="leaderPhone" name="leaderPhone"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleBigFault" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>故障大类</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="fauleBigFault" name="fauleBigFault"
                                                   style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList
                                                className="form-control" style={{"width":"320px"}}
                                                id="fauleBigFault" data={fauleBigFaultTypeDataArr} value={fauleBigFaultTypeDataArr[fauleBigFaultTypeDataIndex]} textField='FaultName' onSelect={this.setFauleBigFaultTypeDataId} onChange={this.getFauleSubType}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleSubFault" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>故障细类</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="fauleSubFault" name="fauleSubFault"
                                                   style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList
                                                className="form-control" style={{"width":"320px"}}
                                                id="fauleSubFault" data={fauleFaultSubTypeDataArr} value={fauleFaultSubTypeDataArr[fauleFaultSubTypeDataIndex]} textField='FaultName' onSelect={this.setFauleFaultSubTypeDataId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleFaultType" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>故障类型</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="fauleFaultType" name="fauleFaultType"
                                                   style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList
                                                className="form-control" style={{"width":"320px"}}
                                                id="fauleFaultType" data={fauleFaultTypeDataArr} value={fauleFaultTypeDataArr[fauleFaultTypeDataIndex]} textField='TypeName' onSelect={this.setFauleFaultTypeDataId}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                <span style={{
                                    "display": "inline-block",
                                    "border": "6px solid transparent",
                                    "borderLeftColor": "#349ef0",
                                    "marginRight": "10px"
                                }}></span>服务级别
                            </div>
                            <div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleServiceProject" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>服务标题</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workOrderNumber" name="workOrderNumber" style={{"width":"338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="fauleServiceProject" data={slaInfoDatasArr}
                                                                       value={slaInfoDatasArr[slaInfoDatasIndex]}
                                                                       textField='SLA_TITLE'
                                                                       onSelect={this.setFauleServiceProjectId} className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleServiceLevel" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>服务级别</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="workOrderThem" name="workOrderThem"
                                                   style={{"width": "338px"}}/>*/}
                                            <select name="fauleServiceLevel" id="fauleServiceLevel" className="form-control" style={{"width":"320px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="一级">一级</option>
                                                <option value="二级">二级</option>
                                                <option value="三级">三级</option>
                                                <option value="四级">四级</option>
                                                <option value="五级">五级</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleServiceCatalog" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>服务大类</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="fauleServiceCatalog" name="fauleServiceCatalog"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleOrderTime" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>预约时间</label>
                                        <div className="col-sm-9">
                                            <input type="datetime-local" id="fauleOrderTime" name="fauleOrderTime"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleServiceItem" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>服务细项</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="fauleServiceItem" name="fauleServiceItem"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleResTime" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>预计响应时间</label>
                                        <div className="col-sm-9">
                                            <input type="datetime-local" id="fauleResTime" name="fauleResTime"
                                                   className="form-control" style={{"width":"320px"}} disabled="disabled"/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleServiceContent" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>服务项</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="fauleServiceContent" name="fauleServiceContent" className="form-control" style={{"width":"320px"}}/>
                                            {/*<ReactWidgets.DropdownList id="fauleServiceProject" data={slaInfoDatasArr}
                                                                       value={slaInfoDatasArr[slaInfoDatasIndex]}
                                                                       textField='SLA_TITLE'
                                                                       onSelect={this.setFauleServiceProjectId}/>*/}
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="fauleRolTime" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>预约解决时间</label>
                                        <div className="col-sm-9">
                                            <input type="datetime-local" id="fauleRolTime" name="fauleRolTime"
                                                   className="form-control" style={{"width":"320px"}} disabled="disabled"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div style={{
                                    "width": "90px",
                                    "height": "36px",
                                    "lineHeight": "36px",
                                    "textAlign": "center",
                                    "backgroundColor": "#349ef0",
                                    "color": "#fff",
                                    "borderRadius": "5px",
                                    "marginBottom": "16px"
                                }}>人员流转
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="workOrderNumber" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>下级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderNumber" name="workOrderNumber"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="dispatchTime" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="datetime" id="dispatchTime" name="dispatchTime"
                                                   className="form-control" style={{"width":"320px"}} disabled="disabled"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div>
                                    <div style={{
                                        "width": "90px",
                                        "height": "36px",
                                        "lineHeight": "36px",
                                        "textAlign": "center",
                                        "border": "1px solid #349ef0",
                                        "color": "#349ef0",
                                        "borderRadius": "5px",
                                        "display": "inline-block",
                                        "marginRight": "10px"
                                    }}>上传图片
                                    </div>
                                    <span>可以上传3张图片，单张小于1M。图片支持的格式有：jpg,bmp,png,gif</span>
                                </div>
                                <div style={{"margin": "16px 0 0 100px"}}>
                                    <ul>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "red",
                                            "display": "inline-block"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "yellow",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "blue",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="process">
                            <div style={{"marginTop": "16px"}}>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="workOrderNumber" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>上级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderNumber" name="workOrderNumber"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="workOrderThem" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>当前处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderThem" name="workOrderThem"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="workOrderNumber" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>上级派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderNumber" name="workOrderNumber"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="workOrderThem" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>解决方式</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderThem" name="workOrderThem"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"marginTop": "15px"}}>
                                        <label htmlFor="workOrderDec" className="col-sm-2 control-label">处理过程</label>
                                        <div>
                                            <textarea rows="7" cols="111" style={{"margin-left":"-23px","border-radius":"-23px"}}></textarea>
                                        </div>
                                    </div>
                                    <div style={{"marginTop": "15px"}}>
                                        <label htmlFor="workOrderDec" className="col-sm-2 control-label" >未解决原因</label>
                                        <div>
                                            <textarea rows="7" cols="111" style={{"margin-left":"-23px"}}></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div style={{
                                    "width": "90px",
                                    "height": "36px",
                                    "lineHeight": "36px",
                                    "textAlign": "center",
                                    "backgroundColor": "#349ef0",
                                    "color": "#fff",
                                    "borderRadius": "5px",
                                    "marginBottom": "16px"
                                }}>人员流转
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="workOrderNumber" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>下级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="workOrderNumber" name="workOrderNumber"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="workOrderThem" className="col-sm-3 control-label" style={{"text-align":"center","margin-top":"5px"}}>派工时间</label>
                                        <div className="col-sm-9 ">
                                            <input type="text" id="workOrderThem" name="workOrderThem"
                                                   className="form-control" style={{"width":"320px"}}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div>
                                    <div style={{
                                        "width": "90px",
                                        "height": "36px",
                                        "lineHeight": "36px",
                                        "textAlign": "center",
                                        "border": "1px solid #349ef0",
                                        "color": "#349ef0",
                                        "borderRadius": "5px",
                                        "display": "inline-block",
                                        "marginRight": "10px"
                                    }}>上传图片
                                    </div>
                                    <span>可以上传3张图片，单张小于1M。图片支持的格式有：jpg,bmp,png,gif</span>
                                </div>
                                <div style={{"margin": "16px 0 0 100px"}}>
                                    <ul>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "red",
                                            "display": "inline-block"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "yellow",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "blue",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{"display": "none"}}>
                                <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                    <span style={{
                                        "display": "inline-block",
                                        "border": "6px solid transparent",
                                        "borderLeftColor": "#349ef0",
                                        "marginRight": "10px"
                                    }}></span>资产领用
                                </div>
                                <div style={{"overflow": "hidden"}}>
                                    <form>
                                        <div style={{"display": "block", "marginBottom": "10px", "overflow": "hidden"}}>
                                            <label htmlFor="workOrderNumber" className="col-sm-2 control-label">领取硬件</label>
                                            <div className="col-sm-10">
                                                <input type="text" id="workOrderNumber" name="workOrderNumber"
                                                       style={{"width": "97%"}}/>
                                                <img src="img/images/运维-故障处理_03.png"/>
                                            </div>
                                        </div>
                                        <div style={{"display": "block", "marginBottom": "10px", "overflow": "hidden"}}>
                                            <label htmlFor="workOrderThem" className="col-sm-2 control-label"></label>
                                            <div className="col-sm-10">
                                                <input type="text" id="workOrderThem" name="workOrderThem"
                                                       style={{"width": "97%"}}/>
                                                <img src="img/images/运维-故障处理_06.png"/>
                                            </div>
                                        </div>
                                        <div style={{"display": "block", "marginBottom": "10px", "overflow": "hidden"}}>
                                            <label htmlFor="workOrderNumber" className="col-sm-2 control-label">领取耗材</label>
                                            <div className="col-sm-10">
                                                <input type="text" id="workOrderNumber" name="workOrderNumber"
                                                       style={{"width": "97%"}}/>
                                                <img src="img/images/运维-故障处理_03.png"/>
                                            </div>
                                        </div>
                                        <div style={{"display": "block", "marginBottom": "10px", "overflow": "hidden"}}>
                                            <label htmlFor="workOrderThem" className="col-sm-2 control-label"></label>
                                            <div className="col-sm-10">
                                                <input type="text" id="workOrderThem" name="workOrderThem"
                                                       style={{"width": "97%", "height": "50px"}}/>
                                                {/*<img src="img/images/运维-故障处理_06.png"/>*/}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="evaluation">
                            <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                综合得分&nbsp;60分
                            </div>
                            <div style={{"width": "955px", "margin": "0 auto", "border": "1px solid #ccc"}}>
                                <div style={{"width": "316px", "display": "inline-block", "padding": "16px"}}>
                                    <div style={{
                                        "width": "100%",
                                        "height": "32px",
                                        "lineHeight": "32px",
                                        "borderBottom": "1px solid #ccc"
                                    }}>
                                        客户评分&nbsp;70分
                                    </div>
                                    <div>
                                        <div style={{"margin": "5px"}}><span>服务时效</span>
                                            <div id="cusSerStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>技术水平</span>
                                            <div id="cusTecStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>故障说明</span>
                                            <div id="cusFauStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>服务态度</span>
                                            <div id="cusAttStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>产品质量</span>
                                            <div id="cusQuaStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                    </div>
                                    <div style={{
                                        "width": "100%",
                                        "height": "32px",
                                        "lineHeight": "32px",
                                        "borderBottom": "1px solid #ccc"
                                    }}>
                                        客户评价
                                    </div>
                                    <p style={{"marginTop": "15px"}}>处理故障非常及时，快速查到问题所在，态度不是很好，加油吧！</p>
                                </div>
                                <div style={{
                                    "width": "316px",
                                    "display": "inline-block",
                                    "borderLeft": "1px solid #ccc",
                                    "borderRight": "1px solid #ccc",
                                    "padding": "16px"
                                }}>
                                    <div style={{
                                        "width": "100%",
                                        "height": "32px",
                                        "lineHeight": "32px",
                                        "borderBottom": "1px solid #ccc"
                                    }}>
                                        监理评分&nbsp;70分
                                    </div>
                                    <div>
                                        <div style={{"margin": "5px"}}><span>服务时效</span>
                                            <div id="supervisionSerStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>技术水平</span>
                                            <div id="supervisionTecStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>故障说明</span>
                                            <div id="supervisionFauStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>服务态度</span>
                                            <div id="supervisionAttStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>产品质量</span>
                                            <div id="supervisionQuaStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                    </div>
                                    <div style={{
                                        "width": "100%",
                                        "height": "32px",
                                        "lineHeight": "32px",
                                        "borderBottom": "1px solid #ccc"
                                    }}>
                                        监理评价
                                    </div>
                                    <p style={{"marginTop": "15px"}}>处理故障非常及时，快速查到问题所在，态度不是很好，加油吧！</p>
                                </div>
                                <div style={{"width": "316px", "display": "inline-block", "padding": "16px"}}>
                                    <div style={{
                                        "width": "100%",
                                        "height": "32px",
                                        "lineHeight": "32px",
                                        "borderBottom": "1px solid #ccc"
                                    }}>
                                        甲方评分&nbsp;70分
                                    </div>
                                    <div>
                                        <div style={{"margin": "5px"}}><span>服务时效</span>
                                            <div id="PASerStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>技术水平</span>
                                            <div id="PATecStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>故障说明</span>
                                            <div id="PAFauStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>服务态度</span>
                                            <div id="PAAttStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                        <div style={{"margin": "5px"}}><span>产品质量</span>
                                            <div id="PAQuaStar"
                                                 style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                        </div>
                                    </div>
                                    <div style={{
                                        "width": "100%",
                                        "height": "32px",
                                        "lineHeight": "32px",
                                        "borderBottom": "1px solid #ccc"
                                    }}>
                                        甲方评价
                                    </div>
                                    <p style={{"marginTop": "15px"}}>处理故障非常及时，快速查到问题所在，态度不是很好，加油吧！</p>
                                </div>
                            </div>
                            <div style={{
                                "width": "955px",
                                "margin": "0 auto",
                                "border": "1px solid #ccc",
                                "padding": "16px",
                                "marginTop": "16px"
                            }}>
                                <div style={{"width": "100%", "height": "32px", "lineHeight": "32px"}}>
                                    评分&nbsp;30分
                                </div>
                                <div style={{"margin": "10px 0 0 10px"}}>
                                    <div style={{"margin": "5px"}}><span>服务时效</span>
                                        <div id="serStar"
                                             style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                    </div>
                                    <div style={{"margin": "5px"}}><span>技术水平</span>
                                        <div id="tecStar"
                                             style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                    </div>
                                    <div style={{"margin": "5px"}}><span>故障说明</span>
                                        <div id="fauStar"
                                             style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                    </div>
                                    <div style={{"margin": "5px"}}><span>服务态度</span>
                                        <div id="attStar"
                                             style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                    </div>
                                    <div style={{"margin": "5px"}}><span>产品质量</span>
                                        <div id="quaStar"
                                             style={{"display": "inline-block", "marginLeft": "30px"}}></div>
                                    </div>
                                </div>
                                <div style={{"marginTop": "16px"}}>
                                    <span className="col-sm-2">评价</span>
                                    <textarea rows="4" cols="105" placeholder="请输入您的评价"></textarea>
                                </div>
                            </div>
                            <div style={{
                                "width": "955px",
                                "height": "151px",
                                "lineHeight": "151px",
                                "textAlign": "center",
                                "margin": "0 auto",
                                "border": "1px solid #ccc",
                                "padding": "16px",
                                "marginTop": "16px"
                            }}>
                                暂无评价
                            </div>
                        </div>
                        <div className="tab-pane fade" id="conversion">
                            <div></div>
                            <div>
                                <div className="col-md-12">
                                    <table id="conversionTableList"
                                           data-show-columns='true'
                                           data-classes='table table-no-bordered table-hover'
                                    >
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

function myStateToProps(state) {
    const {fauleWorkOrderNameData, fauleWorkOrderNameId, workOrderSourceData, workOrderSourceId, serviceCatalogId, serviceCatalogData, serviceItemId, serviceItemData,slaInfoDatas,slaInfoIds,fauleServiceCatalogId,fauleServiceItemId,unitStaffInfoDatas,unitStaffInfoIds,fauleUnitId,fauleTypeId,fauleAreaId,fauleBigFaultTypeData,fauleBigFaultTypeId,fauleFaultSubTypeData,fauleFaultSubTypeId,fauleFaultTypeData,fauleFaultTypeId,fauleKnowledgeData,fauleKnowledgeId} = state.operationReducer;
    const {projectData, projectId, unitTypeId, unitTypeData,areaData,areaId,childAreaData,childAreaId} = state.dataDictReducer;
    return {
        fauleWorkOrderNameData: fauleWorkOrderNameData,
        fauleWorkOrderNameId: fauleWorkOrderNameId,
        projectId: projectId,
        projectData: projectData,
        workOrderSourceData: workOrderSourceData,
        workOrderSourceId: workOrderSourceId,
        unitTypeId: unitTypeId,
        unitTypeData: unitTypeData,
        serviceCatalogData: serviceCatalogData,
        serviceCatalogId: serviceCatalogId,
        serviceItemData: serviceItemData,
        serviceItemId: serviceItemId,
        slaInfoDatas:slaInfoDatas,
        slaInfoIds:slaInfoIds,
        fauleServiceCatalogId:fauleServiceCatalogId,
        fauleServiceItemId:fauleServiceItemId,
        areaData:areaData,
        areaId:areaId,
        childAreaData:childAreaData,
        childAreaId:childAreaId,
        unitStaffInfoDatas:unitStaffInfoDatas,
        unitStaffInfoIds:unitStaffInfoIds,
        fauleUnitId:fauleUnitId,
        fauleTypeId:fauleTypeId,
        fauleAreaId:fauleAreaId,
        fauleFaultSubTypeId:fauleFaultSubTypeId,
        fauleFaultTypeId:fauleFaultTypeId,
        fauleFaultSubTypeData:fauleFaultSubTypeData,
        fauleFaultTypeData:fauleFaultTypeData,
        fauleBigFaultTypeData:fauleBigFaultTypeData,
        fauleBigFaultTypeId:fauleBigFaultTypeId,
        fauleKnowledgeData:fauleKnowledgeData,
        fauleKnowledgeId:fauleKnowledgeId
    }
}
export default connect(myStateToProps)(FauleAddManageMent);
