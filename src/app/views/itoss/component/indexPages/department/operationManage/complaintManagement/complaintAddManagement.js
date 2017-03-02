import "bootstrap"
import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import {Router, Route, Link, IndexRoute,History} from 'react-router';
import * as operationAction from "../../../../../../../actions/operation_action";
import * as dataDictAction from "../../../../../../../actions/dataDict_action";
import * as Store from "../../../../../../../server/store";
let _this;
var ComplaintAddManagement = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return {
            isOk:1,
            complaintLevelVal:"",
            complaintAreaDataIndex:0,
            complaintChildAreaDataIndex:0,
            complaintUnitTypeDataIndex:0,
            complaintUnitStaffInfoDatasIndex:0,
            complaintProjectDataIndex:0,
            curWorkOrderId:"",
            complaintWorkOrderTypeId:"",
            complaintUnitNumber:""
        }
    },
    componentWillMount:function () {
        const {dispatch} = this.props;
        let filters = [];
        dispatch(operationAction.get_complaintArea());
        dispatch(dataDictAction.get_projectData());
        dispatch(operationAction.get_unitTypeData());
        dispatch(operationAction.get_unitStaffInfoDatas(filters));
        dispatch(operationAction.get_complaintWorkOrderType());
    },
    componentDidMount:function () {
        $('#complaintTab a[href="#newComplaintCreate"]').tab('show');
        $("#newComplaintCreateLi").css({"borderBottomColor": "#349ff1"}).find("a").css({"color":"#349ff1","fontSize":"18px"});
        $("#complaintArea").find(".rw-input").text("请选择");
        $("#complaintChildArea").find(".rw-input").text("请选择");
        $("#complaintUnitName").find(".rw-input").text("请选择");
        $("#complaintUnitType").find(".rw-input").text("请选择");
        $("#complaintProjectName").find(".rw-input").text("请选择");
        $("#complaintTab li").on('click', function () {
            $(this).css({
                "borderBottomColor": "#349ff1",
                "color": "#349ff1"
            }).find("a").css({"color":"#349ff1","fontSize":"18px"}).parent().siblings("li").css({"borderBottomColor": "transparent", "color": "#aeaeae"}).find("a").css({"color": "#aeaeae","fontSize":"14px"})
        });
        $("#complaintLevel").on("change",function () {
            if($(this).val() == "轻微"){
                _this.setState({complaintLevelVal:"轻微"});
            }else if($(this).val() == "严重"){
                _this.setState({complaintLevelVal:"严重"});
            }else if($(this).val() == "一般"){
                _this.setState({complaintLevelVal:"一般"});
            }
        });
        _this.setState({complaintWorkOrderTypeId:this.props.complaintWorkOrderTypeId});
    },
    setComplaintAreaDataId:function (e) {
        const {dispatch,complaintAreaData} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i=0;i<complaintAreaData.length;i++){
            let complaintAreaDataId = complaintAreaData[i].RecId;
            if(curId == complaintAreaDataId){
                that.setState({complaintAreaDataIndex:i+1});
            }
        }
        dispatch(operationAction.setComplaintAreaId(curId));
        dispatch(operationAction.get_complaintChildArea(curId));
    },
    setComplaintChildAreaDataId:function (e) {
        const {dispatch,complaintChildAreaData} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i=0;i<complaintChildAreaData.length;i++){
            let complaintChildAreaDataId = complaintChildAreaData[i].RecId;
            if(curId == complaintChildAreaDataId){
                that.setState({complaintChildAreaDataIndex:i+1});
            }
        }
        dispatch(operationAction.setComplaintChildAreaId(curId));
    },
    setComplaintUnitTypeId:function (e) {
        const {dispatch,unitTypeData,complaintAreaId,complaintChildAreaId} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i = 0;i<unitTypeData.length;i++){
            let unitTypeDataId = unitTypeData[i].RecId;
            if(curId == unitTypeDataId){
                that.setState({complaintUnitTypeDataIndex:i+1});
            }
        }
        $("#complaintUnitType").find(".rw-input").text(e.Name);
        dispatch(operationAction.setUnitTypeId(curId));
        let filters=[];
        if(complaintChildAreaId){
            filters.push({key:"AREA_ID",value:complaintChildAreaId})
        }else {
            if(complaintAreaId){
                filters.push({key:"AREA_ID",value:complaintAreaId})
            }
        }
        filters.push({key:"UNITTYPE_ID",value:curId});
        dispatch(operationAction.get_unitStaffInfoDatas(filters));
    },
    setComplaintUnitNameId:function (e) {
        const {dispatch,unitStaffInfoDatas} = this.props;
        let curId = e.UNIT_ID;
        let that = this;
        let complaintTypeName = e.TYPENAME;
        let complaintLeader = e.USERNAME;
        let complaintLeaderPhone = e.PHONE;
        let complaintUnitAddress = e.UNITADDRESS;
        let complaintUnitTypeId = e.TYPEID;
        let complaintArea = e.PAREANAME;
        let complaintAreaId = e.PAREAID;
        let complaintChildAreaId = e.AREAID;
        let complaintChildArea = e.AREANAME;
        let complaintUnitNumber = e.UNIT_Number;
        for(let i=0;i<unitStaffInfoDatas.length;i++){
            let unitStaffInfoDatasId = unitStaffInfoDatas[i].UNIT_ID;
            if(curId == unitStaffInfoDatasId){
                that.setState({taskUnitStaffInfoDatasIndex:i+1});
                $("#complaintUnitType").find(".rw-input").text(complaintTypeName);
                $("#complaintLeader").val(complaintLeader);
                $("#complaintLeaderPhone").val(complaintLeaderPhone);
                $("#complaintUnitAddress").val(complaintUnitAddress);
                $("#complaintArea").find(".rw-input").text(complaintArea);
                $("#complaintChildArea").find(".rw-input").text(complaintChildArea);
            }
        }
        $("#complaintUnitName").find(".rw-input").text(e.UNIT_NAME);
        _this.setState({complaintUnitNumber:complaintUnitNumber});
        dispatch(operationAction.setUnitStaffInfoIds(curId));
        dispatch(operationAction.setUnitTypeId(complaintUnitTypeId));
        dispatch(operationAction.setComplaintAreaId(complaintAreaId));
        dispatch(operationAction.setComplaintChildAreaId(complaintChildAreaId));
    },
    setComplaintProjectNameId:function (e) {
        const {dispatch,projectData} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i = 0;i<projectData.length;i++){
            let projectDataId = projectData[i].RecId;
            if(curId == projectDataId){
                that.setState({complaintProjectDataIndex:i+1});
            }
        }
        $("#complaintProjectName").find(".rw-input").text(e.Name);
        dispatch(dataDictAction.setProjectId(curId));
    },
    getCurWorkOrderId:function () {
        alert(this.props.curWorkOrderId);
      _this.setState({curWorkOrderId:this.props.curWorkOrderId});
    },
    saveComplaintAdd:function () {
       const {dispatch,complaintWorkOrderTypeId,projectId,unitStaffInfoIds,unitTypeId,complaintChildAreaId,complaintAreaId} = _this.props;
       let filters = [];
       //投诉主题验证
       let complaintTheme = $.trim($("#complaintTheme").val());
        if(complaintTheme != null && complaintTheme != ""){
            $("#complaintTheme").css("border", "1px solid #d0d0d0");
            filters.push({key:"SUBJECT",value:complaintTheme})
        }else {
            $("#complaintTheme").focus();
            $("#complaintTheme").css("outline", "none");
            $("#complaintTheme").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写投诉主题!');
            return false;
        }
        //投诉级别验证
       let complaintLevel = this.state.complaintLevelVal;
        if(complaintLevel != null && complaintLevel != ""){
            $("#complaintLevel").css("border", "1px solid #d0d0d0");
            filters.push({key:"COMPLAINTLEVEL",value:complaintLevel});
        }else {
            $("#complaintLevel").focus();
            $("#complaintLevel").css("outline", "none");
            $("#complaintLevel").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择投诉级别!');
            return false;
        }

        //投诉人验证
       let complaintAnalyst = $.trim($("#complaintAnalyst").val());
       if(complaintAnalyst != null && complaintAnalyst != ""){
           $("#complaintAnalyst").css("border", "1px solid #d0d0d0");
           filters.push({key:"CONTACTS",value:complaintAnalyst});
       }else {
           $("#complaintAnalyst").focus();
           $("#complaintAnalyst").css("outline", "none");
           $("#complaintAnalyst").css("border", "1px solid red");
           $.showPublicDialog('提示','请您填写投诉人!');
           return false;
       }
       //手机号码验证
       let complaintPhone = $.trim($("#complaintPhone").val());
       let complaintPhoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        /*if(complaintPhone == null && complaintPhone == "") {
            $("#complaintPhone").focus();
            $("#complaintPhone").css("outline", "none");
            $("#complaintPhone").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写电话号码!');
            return false;
        }else */if(!complaintPhoneReg.test(complaintPhone)){
            $("#complaintPhone").focus();
            $("#complaintPhone").css("outline", "none");
            $("#complaintPhone").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写正确的电话号码!');
            return false;
        }else{
            $("#complaintPhone").css("border", "1px solid #d0d0d0");
            filters.push({key:"CONTACTNUMBER",value:complaintPhone});
        }
        //被投诉单位验证
       let complaintUnit = $.trim($("#complaintUnit").val());
        if(complaintUnit != null && complaintUnit != ""){
            $("#complaintUnit").css("border", "1px solid #d0d0d0");
            filters.push({key:"COMPLAINTUNIT",value:complaintUnit});
        }else {
            $("#complaintUnit").focus();
            $("#complaintUnit").css("outline", "none");
            $("#complaintUnit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写被投诉单位!');
            return false;
        }
        //项目名称验证
        let complaintProjectName = $("#complaintProjectName").find(".rw-input").text();
        if(complaintProjectName == ""||complaintProjectName == null||complaintProjectName == "请选择"){
            $("#complaintProjectName").css("outline", "none");
            $("#complaintProjectName").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择项目名称!');
            return false;
        }else {
            $("#complaintProjectName").css("border", "1px solid #d0d0d0");
            filters.push({key:"PROJECTID",value:projectId});
        }
        //区域
        let complaintArea = $.trim($("#complaintArea").find(".rw-input").text());
        if(complaintArea != null && complaintArea != "" && complaintArea != "请选择"){
            filters.push({key:"AREAID",value:complaintAreaId});
        }

        //子区域
        let complaintChildArea = $.trim($("#complaintChildArea").find(".rw-input").text());
        if(complaintChildArea != null && complaintChildArea != "" && complaintChildArea != "请选择"){
            filters.push({key:"SUBAREAID",value:complaintChildAreaId});
        }

        //单位类型
        let complaintUnitType = $.trim($("#complaintUnitType").find(".rw-input").text());
        if(complaintUnitType != null && complaintUnitType != "" && complaintUnitType != "请选择"){
            filters.push({key:"UNITTYPEID",value:unitTypeId});
        }
       //单位名称验证
        let complaintUnitName = $.trim($("#complaintUnitName").find(".rw-input").text());
        if(complaintUnitName == ""||complaintUnitName == null||complaintUnitName == "请选择"){
            $("#complaintUnitName").css("outline", "none");
            $("#complaintUnitName").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择单位名称!');
            return false;
        }else {
            $("#complaintUnitName").css("border", "1px solid #d0d0d0");
            filters.push({key:"UNITID",value:unitStaffInfoIds});
        }

        let complaintLeader = $.trim($("#complaintLeader").val());
        if(complaintLeader !="" && complaintLeader !=null){
            filters.push({key:"UNITHEAD",value:complaintLeader});
        }
        let complaintLeaderPhone = $.trim($("#complaintLeaderPhone").val());
        if(complaintLeaderPhone != null && complaintLeaderPhone != ""){
            filters.push({key:"UNITHEADPHONE",value:complaintLeaderPhone});
        }
        let complaintUnitAddress = $.trim($("#complaintUnitAddress").val());
        if(complaintUnitAddress != null && complaintUnitAddress !=""){
            filters.push({key:"ADDRESS",value:complaintUnitAddress});
        }
       //投诉描述验证
       let complaintDescription = $.trim($("#complaintDescription").val());
        if(complaintDescription != null && complaintDescription != ""){
            $("#complaintDescription").css("border", "1px solid #d0d0d0");
            filters.push({key:"WORKORDERDESC",value:complaintDescription});
        }else {
            $("#complaintDescription").focus();
            $("#complaintDescription").css("outline", "none");
            $("#complaintDescription").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写投诉描述!');
            return false;
        }

       let currentHandle = Store.get("USERNAME");
        filters.push({key:"CURRENTHANDLE",value:currentHandle});

       alert(complaintWorkOrderTypeId);
       filters.push({key:"WORKORDERTYPE",value:complaintWorkOrderTypeId});

        filters.push({key:"PARENTID",value:Store.get("GROUP_ID")});

        filters.push({key:"STATUS",value:"dcl"});

        filters.push({key:"SERIALNUMBER",value:this.state.complaintUnitNumber});

        dispatch(operationAction.save_workOrderCommon(filters));

    },
    render:function () {
        const {projectData,complaintAreaData,complaintChildAreaData,unitTypeData,unitStaffInfoDatas} = this.props;
        let complaintProjectDataIndex = this.state.complaintProjectDataIndex;
        let complaintProjectDataArr = [];
        complaintProjectDataArr.push({RecId:"",Name:""});
        for (let i = 0;i<projectData.length;i++){
            complaintProjectDataArr.push(projectData[i])
        }
        let complaintAreaDataIndex = this.state.complaintAreaDataIndex;
        let complaintAreaDataArr = [];
        complaintAreaDataArr.push({RecId:"",Name:""});
        for(let i=0;i<complaintAreaData.length;i++){
            complaintAreaDataArr.push(complaintAreaData[i])
        }
        let complaintChildAreaDataIndex = this.state.complaintChildAreaDataIndex;
        let complaintChildAreaDataArr = [];
        complaintChildAreaDataArr.push({RecId:"",Name:""});
        for(let i=0;i<complaintChildAreaData.length;i++){
            complaintChildAreaDataArr.push(complaintChildAreaData[i])
        }
        let complaintUnitTypeDataIndex = this.state.complaintUnitTypeDataIndex;
        let complaintUnitTypeDataArr = [];
        complaintUnitTypeDataArr.push({RecId:"",Name:""});
        for(let i = 0;i<unitTypeData.length;i++){
            complaintUnitTypeDataArr.push(unitTypeData[i])
        }
        let complaintUnitStaffInfoDatasIndex = this.state.complaintUnitStaffInfoDatasIndex;
        let complaintUnitStaffInfoDatasArr = [];
        complaintUnitStaffInfoDatasArr.push({UNIT_ID:"",UNIT_NAME:"",USERNAME:"",PHONE:"",UNITADDRESS:"",TYPENAME:"",TYPEID:"",AREANAME:"",AREAID:"",PAREANAME:"",PAREAID:"",UNIT_Number:""});
        for(let i=0;i<unitStaffInfoDatas.length;i++){
            complaintUnitStaffInfoDatasArr.push(unitStaffInfoDatas[i])
        }
        return (
            <div className="complaintAdd" style={{"width":"100%","height":"100%","backgroundColor":"#edf5f8", "paddingTop": "16px", "paddingBottom": "16px"}}>
                <div className="complaintAdd_content" style={{
                    "width": "1000px",
                    "margin": "0 auto",
                    "backgroundColor": "#fff",
                    "padding": "0 26px 0 26px"
                }}>
                    <ul id="complaintTab" className="complaintAdd_content_head" style={{
                        "width": "100%",
                        "position": "relative",
                        "borderBottom": "1px solid #ebecee",
                        "margin": "0"
                    }}>
                        <li className="complaintAdd_newCreat" id="newComplaintCreateLi" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#newComplaintCreate" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉新建</a></li>
                        <li className="complaintAdd_process" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#processComplaint" data-toggle="tab" style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉处理</a>
                        </li>
                        <li className="complaintAdd_evaluation" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#evaluationComplaint" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉评价</a></li>
                        <li className="complaintAdd_conversion" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#conversionComplaint" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉流转</a></li>
                    </ul>
                    <div id="complaintTabContent" className="tab-content">
                        <div className="tab-pane fade in active" id="newComplaintCreate">
                            <div className="complaintAdd_saveBtn" id="saveComplaintAdd" onClick={this.saveComplaintAdd} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
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
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintTheme" className="col-sm-3">投诉主题</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintTheme" name="complaintTheme" style={{"width": "337px","border":"1px solid #d0d0d0"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintLevel" className="col-sm-3">投诉级别</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintLevel" name="complaintLevel" style={{"width": "337px"}}/>*/}
                                            <select name="complaintLevel" id="complaintLevel" style={{"width": "337px","border":"1px solid #d0d0d0"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="严重">严重</option>
                                                <option value="轻微">轻微</option>
                                                <option value="一般">一般</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintAnalyst" className="col-sm-3">投诉人</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintAnalyst" name="complaintAnalyst" style={{"width": "338px","border":"1px solid #d0d0d0"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintPhone" className="col-sm-3">投诉电话</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintPhone" name="complaintPhone" style={{"width": "338px","border":"1px solid #d0d0d0"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintUnit" className="col-sm-3">被投诉单位</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintUnit" name="complaintUnit" style={{"width": "338px","border":"1px solid #d0d0d0"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintProjectName" className="col-sm-3">项目名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintProjectName" name="complaintProjectName" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="complaintProjectName" data={complaintProjectDataArr}
                                                                       value={complaintProjectDataArr[complaintProjectDataIndex]}
                                                                       textField='Name' onSelect={this.setComplaintProjectNameId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintArea" className="col-sm-3">区域</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintArea" name="complaintArea" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="complaintArea" data={complaintAreaDataArr}
                                                                       value={complaintAreaDataArr[complaintAreaDataIndex]}
                                                                       textField='Name' onSelect={this.setComplaintAreaDataId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintChildArea" className="col-sm-3">子区域</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintChildArea" name="complaintChildArea" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="complaintChildArea" data={complaintChildAreaDataArr}
                                                                       value={complaintChildAreaDataArr[complaintChildAreaDataIndex]}
                                                                       textField='Name' onSelect={this.setComplaintChildAreaDataId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintUnitType" className="col-sm-3">单位类型</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintUnitType" name="complaintUnitType" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="complaintUnitType" data={complaintUnitTypeDataArr}
                                                                       value={complaintUnitTypeDataArr[complaintUnitTypeDataIndex]}
                                                                       textField='Name' onSelect={this.setComplaintUnitTypeId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintUnitName" className="col-sm-3">单位名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintUnitName" name="complaintUnitName" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="complaintUnitName" data={complaintUnitStaffInfoDatasArr}
                                                                       value={complaintUnitStaffInfoDatasArr[complaintUnitStaffInfoDatasIndex]}
                                                                       textField='UNIT_NAME' onSelect={this.setComplaintUnitNameId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintLeader" className="col-sm-3">负责人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintLeader" name="complaintLeader" style={{"width":"338px","border":"1px solid #d0d0d0"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintLeaderPhone" className="col-sm-3">负责人电话</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintLeaderPhone" name="complaintLeaderPhone" style={{"width": "338px","border":"1px solid #d0d0d0"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="complaintUnitAddress" className="col-sm-2">单位地址</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintUnitAddress" name="complaintUnitAddress" style={{"width":"811px","border":"1px solid #d0d0d0"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintDescription" className="col-sm-2">描述</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px","left":"120px"}}>*</b>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="complaintDescription" id="complaintDescription" cols="113" rows="9" style={{"border":"1px solid #d0d0d0"}}></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="processComplaint">
                            <div className="complaintAdd_saveBtn" id="saveComplaintProcess" onClick={this.saveComplaintProcess} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div style={{"marginTop": "16px"}}>
                                <form>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintCurPeople" className="col-sm-2">处理人</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintCurPeople" name="complaintCurPeople"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintResolveTime" className="col-sm-3">处理时间</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintResolveTime" name="complaintResolveTime"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintResolveType" className="col-sm-3">解决方式</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintResolveType" name="complaintResolveType"*/}
                                            {/*style={{"width": "338px"}}/>*/}
                                            <select name="complaintResolveType" id="complaintResolveType" style={{"width": "338px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="远程解决">远程解决</option>
                                                <option value="现场解决">现场解决</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintProcess" className="col-sm-2">处理过程</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea rows="7" cols="113" id="complaintProcess" name="complaintProcess"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="evaluationComplaint">
                            <div className="complaintAdd_saveBtn" id="saveComplaintEvaluation" onClick={this.saveComplaintEvaluation} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div style={{"marginTop":"16px"}}>
                                <form>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintAppraiser" className="col-sm-2">评价人</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintAppraiser" name="complaintAppraiser" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintAppraiseTime" className="col-sm-2">评价时间</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintAppraiseTime" name="complaintAppraiseTime" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="complaintAppraise" className="col-sm-2">投诉评价</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="complaintAppraise" id="complaintAppraise" cols="113" rows="7" placeholder="说点什么吧..."></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="conversionComplaint">
                            <div className="complaintAdd_saveBtn" id="saveComplaintConversion" onClick={this.saveComplaintConversion} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
function myStateToProps(state) {
    const {complaintAreaData,complaintAreaId,complaintChildAreaData,complaintChildAreaId,unitTypeData,unitTypeId,unitStaffInfoIds,unitStaffInfoDatas,complaintWorkOrderTypeData,complaintWorkOrderTypeId,curWorkOrderId} =state.operationReducer;
    const {projectData,projectId} =state.dataDictReducer;
    return{
        projectData:projectData,
        projectId:projectId,
        complaintAreaId:complaintAreaId,
        complaintAreaData:complaintAreaData,
        complaintChildAreaData:complaintChildAreaData,
        complaintChildAreaId:complaintChildAreaId,
        unitTypeData:unitTypeData,
        unitTypeId:unitTypeId,
        unitStaffInfoDatas:unitStaffInfoDatas,
        unitStaffInfoIds:unitStaffInfoIds,
        complaintWorkOrderTypeData:complaintWorkOrderTypeData,
        complaintWorkOrderTypeId:complaintWorkOrderTypeId,
        curWorkOrderId:curWorkOrderId
    }
}
export default connect(myStateToProps)(ComplaintAddManagement);