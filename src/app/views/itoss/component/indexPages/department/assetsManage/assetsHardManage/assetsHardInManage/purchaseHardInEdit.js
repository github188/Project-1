//我是采购入库页面页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import * as assetAction from "../../../../../../../../actions/assetManage_action";

const PurchaseHardInEdit = React.createClass({
	mixins: [History],
	getInitialState: function () {
        return {
            projectIndex: 0,
            operatUnitIndex:0,
            brandIndex:0,
            locationIndex:0,
            magUnitIndex:0,
            productTypeIndex:0,
            productChildTypeIndex:0,
            projectId:"",
            operatUnitId:"",
            brandId:"",
            locationId:"",
            magUnitId:"",
            productTypeId:"",
            productChildTypeId:"",
            productChildTypeList:[],
            assetCode:""
            
        }
    },
    componentWillMount:function(){
    	this.setState({projectId:this.props.projectId});
    	this.setState({operatUnitId:this.props.organizationId});
    	this.setState({brandId:this.props.brandId});
    	this.setState({locationId:this.props.locationId});
    	this.setState({magUnitId:this.props.magUnitId});
    	this.setState({productTypeId:this.props.productTypeId});
    	this.setState({productChildTypeId:this.props.productChildTypeId})
    },
    componentDidMount:function(){
//  	$("#projectNameSelect").find(".rw-input").text("请选择");
//  	$("#operatUnitSelect").find(".rw-input").text("请选择");
//  	$("#brandNameSelect").find(".rw-input").text("请选择");
//  	$("#locationNameSelect").find(".rw-input").text("请选择");
//  	$("#magUnitSelect").find(".rw-input").text("请选择");
//  	$("#productTypeSelect").find(".rw-input").text("请选择");
//  	$("#productChildTypeSelect").find(".rw-input").text("请选择");
    	
    	$(document).ready(function() {
            var options = {
              maxValue: 10,
              minValue: 0,
              step: 1,
              inputWidth: 54,
              start: 0,
              plusClick: function(val) {
                console.log(val);
              },
              minusClick: function(val) {
                console.log(val);
              },
              exceptionFun: function(val) {
                console.log("excep: " + val);
              },
              valueChanged: function(val) {
                console.log('change: ' + val);
                console.log($(".wan-spinner").find("input").val());
                var plus = $(".wan-spinner").find("input").val();
                if(plus>0){
                    $("#addDevice").show();
                }else{
                    $("#addDevice").hide();
                }
              }
            }
            $(".wan-spinner-1").WanSpinner(options);        
            //
            $("#assetsHardSwiOFF").click(function(){    
                $("#assetsHardSwiON").show();
                $("#assetsHardSwiOFF").hide();
//              $("#barCodeHardInPur").show();
               // alert("Hello World assetsHardSwiOFF");
            });
            $("#assetsHardSwiON").click(function(){    
                $("#assetsHardSwiOFF").show();
                $("#assetsHardSwiON").hide();
//              $("#barCodeHardInPur").hide();
             //   alert("Hello World assetsHardSwiON");
            });
        });
        var assetCode = this.props.assetCode;
		this.setState({assetCode:assetCode});
		var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 96,//设置宽高
        height : 96
	    });
	    qrcode.makeCode(this.state.assetCode);
    	
    },
	handleQRClick:function(){
		$("#assetsHardInQR").show();
		$("#assetsHardInQRBuild").hide();
	},
	//项目名称回显
	setProjectId:function(e){
		var projectData = this.props.projectData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<projectData.length;i++){
            var projectId = projectData[i].RecId;
            if(pid == projectId){
                that.setState({projectIndex:i+1});
            };
        };
        // console.log(e)
        $("#projectNameSelect").find(".rw-input").text(e.Name);
        this.setState({projectId:pid});
	},
	//运维单位回显
	setOperatUnitId:function(e){
		var organizationData = this.props.organizationData;
        var pid = e.DEFRECID;
        var that = this;
        for(var i=0;i<organizationData.length;i++){
            var operatUnitId = organizationData[i].DEFRECID;
            if(pid == operatUnitId){
                that.setState({operatUnitIndex:i+1});
            };
        };
        // console.log(e)
        $("#operatUnitSelect").find(".rw-input").text(e.FDNAME);
        this.setState({operatUnitId:pid});
	},
	//品牌名称回显
	setBrandId:function(e){
		var brandData = this.props.brandData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<brandData.length;i++){
            var brandId = brandData[i].RecId;
            if(pid == brandId){
                that.setState({brandIndex:i+1});
            };
        };
        $("#brandNameSelect").find(".rw-input").text(e.BrandName);
        this.setState({brandId:pid});
	},
	//物理位置回显
	setLocationId:function(e){
		var locationData = this.props.locationData;
        var pid = e.RecId;
        var that = this;
        for(var i=0;i<locationData.length;i++){
            var locationId = locationData[i].RecId;
            if(pid == locationId){
                that.setState({locationIndex:i+1});
            };
        };
        $("#locationNameSelect").find(".rw-input").text(e.LocationName);
        this.setState({locationId:pid});
	},
	//资产归属回显
	setMagUnitId:function(e){
		var magUnitData = this.props.magUnitData;
        var pid = e.RECID;
        var that = this;
        for(var i=0;i<magUnitData.length;i++){
            var magUnitId = magUnitData[i].RECID;
            if(pid == magUnitId){
                that.setState({magUnitIndex:i+1});
            };
        };
        $("#magUnitSelect").find(".rw-input").text(e.UNITNAME);
        this.setState({magUnitId:pid});
	},
	//产品类型回显
	setProductTypeId:function(e){
		var productType = this.props.productType;
        var pid = e.recId;
        var that = this;
        for(var i=0;i<productType.length;i++){
            var productTypeId = productType[i].recId;
            if(pid == productTypeId){
                that.setState({productTypeIndex:i+1});
            };
        };
        $("#productTypeSelect").find(".rw-input").text(e.typeName);
        this.setState({productTypeId:pid});
	},
	//产品子类型回显
	setProductChildTypeId:function(e){
		var productChildType = this.props.productChildType;
        var pid = e.recId;
        var that = this;
        var productChildTypeList = [];
        productChildTypeList.push({recId:"",typeName:""});
        for(var i=0;i<productChildType.length;i++){
            var productTypeId = productChildType[i].recId;
            if(pid == productTypeId){
//              that.setState({productChildTypeIndex:i+1});
				productChildTypeList.push(productChildType[i]);
            };
        };
        for(var i=0;i<productChildTypeList.length;i++){
            var productPId = productChildTypeList[i].recId;
            if(pid == productPId){
                that.setState({productChildTypeIndex:i+1});
            };
        };
        $("#productChildTypeSelect").find(".rw-input").text(e.typeName);
        this.setState({productChildTypeId:pid});
	},
	goBack:function(){
		const {dispatch} = this.props;
	  	dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
	},
	assetSave:function(){
		alert("开始保存" + this.state.projectId);
		let filter = [];
		filter.push({key: "STORAGETYPE", value: "采购入库"});
		var assetHandleTime = $("#assetHandleTime").val();
		if(assetHandleTime == null || assetHandleTime.trim() == ""){
			$.showPublicDialog('提示','请您填写经办时间!');
			$("#assetHandleTime").focus();
            $("#assetHandleTime").css("outline", "none");
            $("#assetHandleTime").css("border", "1px solid red");
            return;
		}else{
			$("#assetHandleTime").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CREATETIME", value: assetHandleTime});
		var assetHandler = $("#assetHandler").val();
		if(assetHandler.trim() == null || assetHandler.trim() == ""){
			$.showPublicDialog('提示','请您填写经办人!');
			$("#assetHandler").focus();
            $("#assetHandler").css("outline", "none");
            $("#assetHandler").css("border", "1px solid red");
            return;
		}else{
			$("#assetHandler").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CREATEBY", value: assetHandler});
		var assetCode = $("#assetCode").val();
		if(assetCode.trim() == null || assetCode.trim() == ""){
			$.showPublicDialog('提示','请您填写资产编码!');
			$("#assetCode").focus();
            $("#assetCode").css("outline", "none");
            $("#assetCode").css("border", "1px solid red");
            return;
		}else{
			$("#assetCode").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "ASSETSCODE", value: assetCode});
		var assetName = $("#assetName").val();
		if(assetName.trim() == null || assetName.trim() == ""){
			$.showPublicDialog('提示','请您填写设备名称!');
			$("#assetName").focus();
            $("#assetName").css("outline", "none");
            $("#assetName").css("border", "1px solid red");
            return;
		}else{
			$("#assetName").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "ASSETSNAME", value: assetName});
		var constructType = $("#constructType").val();
		if(constructType.trim() == "请选择"){
			$.showPublicDialog('提示','请您选择承建类型!');
			$("#constructType").focus();
            $("#constructType").css("outline", "none");
            $("#constructType").css("border", "1px solid red");
            return;
		}else{
			$("#constructType").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CONSTRUCTIONTYPE", value: constructType});
		var projectId = this.state.projectId;
		if(projectId.trim() == null || projectId.trim() == ""){
			$.showPublicDialog('提示','请您选择项目名称!');
			$("#projectNameSelect").focus();
            $("#projectNameSelect").css("outline", "none");
            $("#projectNameSelect").css("border", "1px solid red");
            return;
		}else{
			$("#projectNameSelect").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "PROJECTID", value: projectId});
		var magUnitId = this.state.magUnitId;
		if(magUnitId.trim() == null || magUnitId.trim() == ""){
			$.showPublicDialog('提示','请您选择资产归属!');
			$("#magUnitSelect").focus();
            $("#magUnitSelect").css("outline", "none");
            $("#magUnitSelect").css("border", "1px solid red");
            return;
		}else{
			$("#magUnitSelect").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "ASSETSATTRIBUTION", value: magUnitId});
		var operatUnitId = this.state.operatUnitId;
		if(operatUnitId.trim() == null || operatUnitId.trim() == ""){
			$.showPublicDialog('提示','请您选择运维单位!');
			$("#operatUnitSelect").focus();
            $("#operatUnitSelect").css("outline", "none");
            $("#operatUnitSelect").css("border", "1px solid red");
            return;
		}else{
			$("#operatUnitSelect").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "UNITID", value: operatUnitId});
		var contractNum = $("#contractNum").val();
		if(contractNum == null || contractNum.trim() == ""){
			$.showPublicDialog('提示','请您填写合同单号!');
			$("#contractNum").focus();
            $("#contractNum").css("outline", "none");
            $("#contractNum").css("border", "1px solid red");
            return;
		}else{
			$("#contractNum").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CONTRACTNUMBER", value: contractNum});
		var operatPeople = $("#operatPeople").val();
		if(operatPeople == null || operatPeople.trim() == ""){
			$.showPublicDialog('提示','请您填写运维负责人!');
			$("#operatPeople").focus();
            $("#operatPeople").css("outline", "none");
            $("#operatPeople").css("border", "1px solid red");
            return;
		}else{
			$("#operatPeople").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "UNITPEOPLE", value: operatPeople});
		var chargeOwner = $("#chargeOwner").val();
		if(chargeOwner != undefined && chargeOwner != null && chargeOwner.trim() != ""){
			filter.push({key: "PARTYA", value: chargeOwner});
		}
//		if(operatPeople == null || operatPeople.trim() == ""){
//			$.showPublicDialog('提示','请您填写业主负责人!');
//			$("#chargeOwner").focus();
//          $("#chargeOwner").css("outline", "none");
//          $("#chargeOwner").css("border", "1px solid red");
//          return;
//		}else{
//			$("#chargeOwner").css("border", "1px solid #d0d0d0");
//		}
		var operatPhone = $("#operatPhone").val();
		if(operatPhone == null || operatPhone.trim() == ""){
			$.showPublicDialog('提示','请您填写运维负责人电话!');
			$("#operatPhone").focus();
            $("#operatPhone").css("outline", "none");
            $("#operatPhone").css("border", "1px solid red");
            return;
		}else{
			$("#operatPhone").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "UNITPHONE", value: operatPhone});
		var phoneOwner = $("#phoneOwner").val();
//		if(phoneOwner == null || phoneOwner.trim() == ""){
//			$.showPublicDialog('提示','请您填写业主负责人电话!');
//			$("#phoneOwner").focus();
//          $("#phoneOwner").css("outline", "none");
//          $("#phoneOwner").css("border", "1px solid red");
//          return;
//		}else{
//			$("#phoneOwner").css("border", "1px solid #d0d0d0");
//		}
		if(phoneOwner != undefined && phoneOwner != null && phoneOwner.trim() != ""){
			filter.push({key: "PARTYAPHONE", value: phoneOwner});
		}
		var buyer = $("#buyer").val();
		if(buyer == null || buyer.trim() == ""){
			$.showPublicDialog('提示','请您填写采购人!');
			$("#buyer").focus();
            $("#buyer").css("outline", "none");
            $("#buyer").css("border", "1px solid red");
            return;
		}else{
			$("#buyer").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "PURCHASER", value: buyer});
		var purchasePhone = $("#purchasePhone").val();
		if(purchasePhone != undefined && purchasePhone != null && purchasePhone.trim() != ""){
			filter.push({key: "PURCHASERPHONE", value: purchasePhone});
		}
//		if(purchasePhone == null || purchasePhone.trim() == ""){
//			$.showPublicDialog('提示','请您填写采购人电话!');
//			$("#purchasePhone").focus();
//          $("#purchasePhone").css("outline", "none");
//          $("#purchasePhone").css("border", "1px solid red");
//          return;
//		}else{
//			$("#purchasePhone").css("border", "1px solid #d0d0d0");
//		}
		var buyDate = $("#buyDate").val();
		if(buyDate == null || buyDate.trim() == ""){
			$.showPublicDialog('提示','请您填写采购日期!');
			$("#buyDate").focus();
            $("#buyDate").css("outline", "none");
            $("#buyDate").css("border", "1px solid red");
            return;
		}else{
			$("#buyDate").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "ASSERTYEAR", value: buyDate});
		var purchaseMoney = $("#purchaseMoney").val();
		if(purchaseMoney == null || purchaseMoney.trim() == ""){
			$.showPublicDialog('提示','请您填写采购费用!');
			$("#purchaseMoney").focus();
            $("#purchaseMoney").css("outline", "none");
            $("#purchaseMoney").css("border", "1px solid red");
            return;
		}else{
			$("#purchaseMoney").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "COST", value: purchaseMoney});
		var maintenTime = $("#maintenTime").val();
		if(maintenTime == null || maintenTime.trim() == ""){
			$.showPublicDialog('提示','请您填写维保期!');
			$("#maintenTime").focus();
            $("#maintenTime").css("outline", "none");
            $("#maintenTime").css("border", "1px solid red");
            return;
		}else{
			$("#maintenTime").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "WARRANTYPERIOD", value: maintenTime});
//		var productTypeId = this.state.productTypeId;
//		if(productTypeId == null || productTypeId.trim() == ""){
//			$.showPublicDialog('提示','请您选择产品类型!');
//			$("#productTypeSelect").focus();
//          $("#productTypeSelect").css("outline", "none");
//          $("#productTypeSelect").css("border", "1px solid red");
//          return;
//		}else{
//			$("#productTypeSelect").css("border", "1px solid #d0d0d0");
//		}
		var brandId = this.state.brandId;
		if(brandId == null || brandId.trim() == ""){
			$.showPublicDialog('提示','请您选择品牌名称!');
			$("#brandNameSelect").focus();
            $("#brandNameSelect").css("outline", "none");
            $("#brandNameSelect").css("border", "1px solid red");
            return;
		}else{
			$("#brandNameSelect").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "ASSETSBRAND", value: brandId});
		var productChildTypeId = this.state.productChildTypeId;
		if(productChildTypeId == null || productChildTypeId.trim() == ""){
			$.showPublicDialog('提示','请您选择产品子类型!');
			$("#productChildTypeSelect").focus();
            $("#productChildTypeSelect").css("outline", "none");
            $("#productChildTypeSelect").css("border", "1px solid red");
            return;
		}else{
			$("#productChildTypeSelect").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "PRODUCTTYPE", value: productChildTypeId});
		var serialNum = $("#serialNum").val();
		if(serialNum == null || serialNum.trim() == ""){
			$.showPublicDialog('提示','请您填写序列号!');
			$("#serialNum").focus();
            $("#serialNum").css("outline", "none");
            $("#serialNum").css("border", "1px solid red");
            return;
		}else{
			$("#serialNum").css("border", "1px solid #d0d0d0");
		}
		var num = $(".wan-spinner").find("input").val();
		if(num > 0){
			
		}
		filter.push({key: "SERIALNUMBER", value: serialNum});
		var productTypeNum = $("#productTypeNum").val();
		if(productTypeNum != undefined && productTypeNum != null && productTypeNum.trim() != ""){
			filter.push({key: "PRODUCTMODEL", value: productTypeNum.trim()});
		}
//		if(productTypeNum == null || productTypeNum.trim() == ""){
//			$.showPublicDialog('提示','请您填写产品型号!');
//			$("#productTypeNum").focus();
//          $("#productTypeNum").css("outline", "none");
//          $("#productTypeNum").css("border", "1px solid red");
//          return;
//		}else{
//			$("#productTypeNum").css("border", "1px solid #d0d0d0");
//		}
		var ipAddress = $("#ipAddress").val();	//IP地址
		if(productTypeNum != undefined && productTypeNum != null && productTypeNum.trim() != ""){
			filter.push({key: "IPADDRESS", value: ipAddress.trim()});
		}
		var installAddress = $("#installAddress").val();	//安装地址
		if(installAddress != undefined && installAddress != null && installAddress.trim() != ""){
			filter.push({key: "INSTALLADDRESS", value: installAddress.trim()});
		}
		var locationId = this.state.locationId;	//物理位置
		if(locationId != undefined && locationId != null && locationId.trim() != ""){
			filter.push({key: "PHYSICALLOCATION", value: locationId.trim()});
		}
		var equipmentInit = $("#equipmentInit").val();	//设备原厂商
		if(equipmentInit != undefined && equipmentInit != null && equipmentInit.trim() != ""){
			filter.push({key: "MANUFACTRUEINFO", value: equipmentInit.trim()});
		}
		var supPhone = $("#supPhone").val();	//设备供应商电话
		if(supPhone != undefined && supPhone != null && supPhone.trim() != ""){
			filter.push({key: "SUPPLIERPHONE", value: supPhone.trim()});
		}
		var moduleCount = $("#moduleCount").val();	//模块数
		if(moduleCount != undefined && moduleCount != null && moduleCount.trim() != ""){
			filter.push({key: "MODELNUMBER", value: moduleCount.trim()});
		}
		var assetUse = $("#assetUse").val();	//资产用途
		if(assetUse != undefined && assetUse != null && assetUse.trim() != ""){
			filter.push({key: "ASSERTUSE", value: assetUse.trim()});
		}
		var remark = $("#remark").val();
		if(remark != undefined && remark != null && remark.trim() != ""){
			filter.push({key: "NOTEINFO", value: remark.trim()});
		}
		var prorecId = $("#prorecId").val();
		if(prorecId == null || prorecId.trim() == ""){
			$.showPublicDialog('提示','请您填写流程ID!');
			$("#prorecId").focus();
            $("#prorecId").css("outline", "none");
            $("#prorecId").css("border", "1px solid red");
            return;
		}else{
			$("#prorecId").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "PROCESSID", value: prorecId});
		var recId = $("#recId").val();
		if(recId == null || recId.trim() == ""){
			$.showPublicDialog('提示','请您填写RecId!');
			$("#recId").focus();
            $("#recId").css("outline", "none");
            $("#recId").css("border", "1px solid red");
            return;
		}else{
			$("#recId").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "RECID", value: recId});
		filter.push({key: "ISEDIT", value: "true"});
		const {dispatch} = this.props;
		dispatch(assetAction.edit_hardWareStorageData(filter));
	  	dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
	},
	render:function(){
		//项目名称下拉选择
		var projectIndex = this.state.projectIndex;
        var parents = this.props.projectData;
        var list = [];
        list.push({RecId:"",Name:""});
        for(var i=0;i<parents.length;i++){
            list.push(parents[i]);
        };
        //运维单位下拉选择
        var operatUnitIndex = this.state.operatUnitIndex;
        var parents = this.props.organizationData;
        var operatUnitList = [];
        operatUnitList.push({DEFRECID:"",FDNAME:""});
        for(var i=0;i<parents.length;i++){
            operatUnitList.push(parents[i]);
        };
        //品牌名称选择
        var brandIndex = this.state.brandIndex;
        var parents = this.props.brandData;
        var brandList = [];
        brandList.push({RecId:"",BrandName:""});
        for(var i=0;i<parents.length;i++){
            brandList.push(parents[i]);
        };
        //物理位置选择
        var locationIndex = this.state.locationIndex;
        var parents = this.props.locationData;
        var locationList = [];
        locationList.push({RecId:"",LocationName:""});
        for(var i=0;i<parents.length;i++){
            locationList.push(parents[i]);
        };
        //资产归属选择
        var magUnitIndex = this.state.magUnitIndex;
        var parents = this.props.magUnitData;
        var magUnitList = [];
        magUnitList.push({RECID:"",UNITNAME:""});
        for(var i=0;i<parents.length;i++){
            magUnitList.push(parents[i]);
        };
        //产品类型选择
        var productTypeIndex = this.state.productTypeIndex;
        var parents = this.props.productType;
        var productTypeList = [];
        productTypeList.push({recId:"",typeName:""});
        for(var i=0;i<parents.length;i++){
            productTypeList.push(parents[i]);
        };
        //产品子类型选择
        var productChildTypeIndex = this.state.productChildTypeIndex;
        var parents = this.props.productChildType;
        var parentId = this.state.productTypeId;
        var productChildTypeList = [];
        productChildTypeList.push({recId:"",typeName:""});
        for(var i=0;i< parents.length; i++){
        	if(parents[i].pId == parentId){
        		productChildTypeList.push(parents[i]);
        	}
        }
		return(
		    <div className="assetsHardInPurchaseAdd" style={{"width":"100%","height":"auto","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
		        <div className="assetsHardInPurchaseAdd_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
		            <div className="assetsHardInPurchaseAdd_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
		                <div className="assetsHardInPurchaseAdd_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
		                    硬件采购入库
		                </div>
		                <div style={{"display":"inline-block","position":"absolute","margin-top":"-34px","margin-left":"140px"}}>
                            <span style={{"margin-right":"10px","color":"#999999","margin-left":"14px"}}>扫码录入</span>
                            <img id="assetsHardSwiOFF" src="./img/assets/assetsSwitchOFF.png" style={{"margin-top":"-4px"}} />
                            <img id="assetsHardSwiON" src="./img/assets/assetsSwitchON.png" style={{"display":"none","margin-top":"-4px"}}/>
                    </div>
						<div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
		                <div className="assetsHardInPurchaseAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"66px","top":"17px","cursor":"pointer"}} onClick={this.assetSave}>保存</div>
		            </div>
		            <div className="assetsHardInPurchaseAdd_content_middle" style={{"width":"966px","margin-top":"20px"}}>
		                <form className="form-horizontal" role="form">
		                    <div className="assetsHardInPurchaseAdd_content_middle_left" style={{"width":"424px","display":"inline-block","height":"776px"}}>
		                            <div className="form-group">
		                                <label htmlFor="assetHandleTime" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办时间
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="date" style={{"width":"340px","margin-left":"-20px"}} id="assetHandleTime" className="form-control" name="assetHandleTime" placeholder="" disabled="true"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="assetCode" className="col-sm-4 control-label" style={{"textAlign":"left"}}>资产编码
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="assetCode" className="form-control" name="assetCode" placeholder="" disabled="true"/>
		                                    {/*<ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} id="projectName" className="form-control" data={projectUnitDataArr} value={projectUnitDataArr[projectUnitIndex]} textField='name' onSelect={this.setProjectUnitDataId} defaultValue={"请选择"}/>*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="constructType" className="col-sm-4 control-label" style={{"textAlign":"left"}}>承建类型
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
			                                <select id="constructType" className="form-control" style={{"width":"340px","margin-left":"-20px"}}>
						                        <option>请选择</option> 
						                        <option value="统建">统建</option>
						                        <option value="自建">自建</option>
			                            	</select>
                            			</div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="assetOwner" className="col-sm-4 control-label" style={{"textAlign":"left"}}>资产归属
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                               <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={magUnitList} value={magUnitList[magUnitIndex]} textField="UNITNAME" onSelect={this.setMagUnitId} onChange={this.onChangeDropDown} id="magUnitSelect"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="contractNum" className="col-sm-4 control-label" style={{"textAlign":"left"}}>合同单号
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="contractNum" className="form-control" name="contractNum" placeholder=""/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="chargeOwner" className="col-sm-4 control-label" style={{"textAlign":"left"}}>业主负责人
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="chargeOwner" className="form-control" name="chargeOwner" placeholder=""/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="phoneOwner" className="col-sm-4 control-label" style={{"textAlign":"left"}}>业主负责人电话
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" id="phoneOwner" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="phoneOwner" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="purchasePhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购人电话
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="" id="purchasePhone" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="purchasePhone" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="purchaseMoney" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购费用
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" id="purchaseMoney" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="purchaseMoney" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="productParentType" className="col-sm-4 control-label" style={{"textAlign":"left"}}>产品类型
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={productTypeList} value={productTypeList[productTypeIndex]} textField="typeName" onSelect={this.setProductTypeId} onChange={this.onChangeDropDown} id="productTypeSelect"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="productChildType" className="col-sm-4 control-label" style={{"textAlign":"left"}}>产品子类型
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={productChildTypeList} value={productTypeList[productChildTypeIndex]} textField="typeName" onSelect={this.setProductChildTypeId} onChange={this.onChangeDropDown} id="productChildTypeSelect"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="productTypeNum" className="col-sm-4 control-label" style={{"textAlign":"left"}}>产品型号
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" id="productTypeNum" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="productTypeNum" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="installAddress" className="col-sm-4 control-label" style={{"textAlign":"left"}}>安装地址
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" id="installAddress" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="installAddress" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="equipmentInit" className="col-sm-4 control-label" style={{"textAlign":"left"}}>设备原厂商
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" id="equipmentInit" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="equipmentInit" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="moduleCount" className="col-sm-4 control-label" style={{"textAlign":"left"}}>模块数
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="number" id="moduleCount" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="moduleCount" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="endTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                        {/*</form>*/}
		                    </div>
		                    <div className="slaAdd_content_middle_right" style={{"width":"424px","display":"inline-block","height":"776px","margin-left":"74px"}}>
		                            <div className="form-group">
		                                <label htmlFor="assetHandler" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办人
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" id="assetHandler" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetHandler" placeholder="" disabled="true"/>
		                                    {/*<ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="organization" data={companyDataArr} value={companyDataArr[companyDataIndex]} textField='FDNAME' onSelect={this.setCompanyDataId} defaultValue={"请选择"} AutoPostBack={true} onChange={this._selectProjectUnit}/>*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="assetName" className="col-sm-4 control-label" style={{"textAlign":"left"}}>设备名称
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" id="assetName" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetName" placeholder=""/>
		                                    {/*<input type="text" id="unitType" className="form-control" name="unitType" placeholder=""/>*/}
		                                    {/*<ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="unitType" data={unitTypeArr} value={unitTypeArr[unitTypeIndex]} textField='Name' onSelect={this.setunitTypeId} defaultValue={"请选择"}/>*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="projectName" className="col-sm-4 control-label" style={{"textAlign":"left"}}>项目名称
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={list} value={list[projectIndex]} textField="Name" onSelect={this.setProjectId} onChange={this.onChangeDropDown} id="projectNameSelect"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="operatUnit" className="col-sm-4 control-label" style={{"textAlign":"left"}}>运维单位
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={operatUnitList} value={operatUnitList[operatUnitIndex]} textField="FDNAME" onSelect={this.setOperatUnitId} onChange={this.onChangeDropDown} id="operatUnitSelect"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="operatPeople" className="col-sm-4 control-label" style={{"textAlign":"left"}}>运维负责人
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="operatPeople" className="form-control" name="operatPeople" placeholder=""/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="operatPhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>运维负责人电话
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="operatPhone" className="form-control" name="operatPhone" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="buyer" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购人
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="buyer" className="form-control" name="buyer" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="buyDate" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购日期
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="date" style={{"width":"340px","margin-left":"-20px"}} id="buyDate" className="form-control" name="" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="maintenTime" className="col-sm-4 control-label" style={{"textAlign":"left"}}>维保期
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="date" style={{"width":"340px","margin-left":"-20px"}} id="maintenTime" className="form-control" name="maintenTime" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="brandName" className="col-sm-4 control-label" style={{"textAlign":"left"}}>品牌名称
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={brandList} value={brandList[brandIndex]} textField="BrandName" onSelect={this.setBrandId} onChange={this.onChangeDropDown} id="brandNameSelect"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="serialNum" className="col-sm-4 control-label" style={{"textAlign":"left"}}>序列号
		                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="serialNum" className="form-control" name="serialNum" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="ipAddress" className="col-sm-4 control-label" style={{"textAlign":"left"}}>IP地址
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="ipAddress" className="form-control" name="ipAddress" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="phyAddress" className="col-sm-4 control-label" style={{"textAlign":"left"}}>物理位置
		                                </label>
		                                <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={locationList} value={locationList[locationIndex]} textField="LocationName" onSelect={this.setLocationId} onChange={this.onChangeDropDown} id="locationNameSelect"/>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="supPhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>设备供应商电话
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="supPhone" className="form-control" name="supPhone" placeholder=""/>
		                                    {/*<ReactWidgets.DateTimePicker format={"yyyy-MM-dd HH:mm:ss"} id="startTime" defaultValue={new Date()} />*/}
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label htmlFor="assetUse" className="col-sm-4 control-label" style={{"textAlign":"left"}}>资产用途
		                                </label>
		                                <div className="col-sm-6">
		                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="assetUse" className="form-control" name="assetUse" placeholder=""/>
		                                    <input type="hidden" id="prorecId"/>
		                                    <input type="hidden" id="recId" />
		                                </div>
		                            </div>
		                    </div>
		                </form>
		            </div>
		            <div className="slaAdd_content_bottom" style={{"width":"928px"}}>
		                <div className="slaAdd_content_middle_bottom" style={{"width":"966px"}}>
	                        <div className="form-group">
                                <label htmlFor="remark" className="col-sm-4 control-label" style={{"textAlign":"left"}}>备注
                                </label>
                                <div className="col-sm-6">
                                    <textarea type="text" style={{"width":"842px","margin-left":"-204px"}} id="remark" className="form-control" name="remark" placeholder=""/>
                                </div>
	                        </div>
	                        <div className="form-group" style={{"width":"452px","display":"inline-block","margin-left":"2px","margin-top":"20px"}}>
	                            <label htmlFor="" className="col-sm-4 control-label" style={{"textAlign":"left"}}>二维码
	                            </label>
	                            <button id="assetsHardInQRBuild" style={{"width":"140px","height":"34px","border":"1px solid #74ce84","color":"#74ce84","display":"inline-block","background-color":"#fff","margin-left":"-20px"}} onClick={this.handleQRClick}>
	                            生成二维码
	                            </button>
	                            <div id="assetsHardInQR" style={{"display":"none","width":"600px"}}>
	                                <div id="qrcode" style={{"display":"inline-block","float":"left"}}>
	                                	<span style={{"display":"block","margin-top":"10px","font-size":"13px"}} id="">{this.state.assetCode}</span>
	                                </div>
	                            </div>
                        	</div>
                        	<div className="form-group">
                                <label htmlFor="reviewDesc" className="col-sm-4 control-label" style={{"textAlign":"left"}}>审核不通过原因
                                </label>
                                <div className="col-sm-6">
                                    <textarea type="text" style={{"width":"842px","margin-left":"-204px"}} id="reviewDesc" className="form-control" name="reviewDesc" placeholder="" disabled="true"/>
                                </div>
	                        </div>
		                </div>
		            </div>
		        </div>
		    </div>
		)
	}
})
//export default PurchaseNewView;
function myStateToProps(state) {
  	const {projectData,brandData,locationData,magUnitData,productType,productChildType,projectId,brandId,magUnitId,productTypeId,productChildTypeId,locationId} = state.dataDictReducer;
  	const {organizationData,organizationId} = state.systemReducer;
  	const {assetCode} =state.assetManageReducer;
    return{
    	projectData:projectData,
    	organizationData:organizationData,
    	locationData:locationData,
    	brandData:brandData,
    	magUnitData:magUnitData,
    	productType:productType,
    	productChildType:productChildType,
    	projectId:projectId,
    	organizationId:organizationId,
    	brandId:brandId,
    	locationId:locationId,
    	magUnitId:magUnitId,
    	productTypeId:productTypeId,
    	productChildTypeId:productChildTypeId,
    	assetCode:assetCode
    }
}
export default connect(myStateToProps)(PurchaseHardInEdit);