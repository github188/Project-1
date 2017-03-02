require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute} from 'react-router';
import { connect } from 'react-redux';
import ApplicationLevel from "./ApplicationLevel";
import AssetStatus from "./AssetStatus";
import ParentAssetType from "./ParentAssetType";
import ChildAssetType from "./ChildAssetType";
import BrandMag from "./BrandMag";
import CatgoryMag from "./CatgoryMag";
import ClaMag from "./ClaMag";
import DepartMag from "./DepartMag";
import EventType from "./EventType";
import FaultClass from "./FaultClass";
import FaultClassSmall from "./FaultClassSmall";
import FaultLevel from "./FaultLevel";
import FaultType from "./FaultType";
import MagUnit from "./MagUnit";
import ParentMag from "./ParentMag";
import PersonnelMag from "./PersonnelMag";
import PhyPos from "./PhyPos";
import PosMag from "./PosMag";
import ProductType from "./ProductType";
import ProductChildType from "./ProductChildType";
import ProMag from "./ProMag";
import SingleMag from "./SingleMag";
import SingleSource from "./SingleSource";
import SLARemind from "./SLARemind";
import SubMag from "./SubMag";
import TypeMag from "./TypeMag";
import UpgradeLevel from "./UpgradeLevel";
import * as dictActions from '../../../../../../../actions/dataDict_action';
var Store = require('../../../../../../../server/store');
var base64 = require('../../../../../../../utils/base64');
var util = require('../../../../../../../utils/util');
var operationAction = require('../../../../../../../actions/operation_action');
var DataDic = React.createClass({
    getInitialState: function () {
        return {
            page: "ParentMag",
			canDelete:0
        }
    },
    componentWillMount:function (){
    	//判断用户是否有队数据字典的编辑权限
			var temp = Store.get("PERMISSIONS");
			if(temp&&temp!=null&&temp!=""){
				temp = base64.base64decode(temp);
				temp = decodeURI(temp);
				temp = eval(temp);
			}
			var valid1 = util.hasPermission(temp,"/systemmanage/datadict/edit");
			if(valid1==null || valid1==""){
				// console.log("1111")
				$("#dataDictPage").find(".buttonInfo").find("button").hide();
				this.setState({canDelete:1});
			};
    	
    	//调用父区域管理查询列表接口
			const { dispatch } = this.props;
			dispatch(dictActions.get_areaData());
			dispatch(dictActions.get_departMentData());
    },
    componentDidMount: function (){
        $(".dataMenu .level1>h5").click(function () {
            $(this).find("i").addClass("ro").parent().next().slideDown().parent().siblings().children("h5").find("i").removeClass("ro").parent().next().slideUp();
            return false;
        });
        $(".dataMenu .level1>.level2>li").click(function () {
            $(this).addClass("on").siblings().removeClass("on").parent().parent().siblings().find("ul").find("li").removeClass("on")
        })
    },
    saveAreaData:function(){
        var areas = this.props.areaData;
        var name = $("#areaNameInput").val();
        if(name == null || name == ""){
            setTimeout(function(){
                // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('parentModalContent').innerHTML = "请输入区域名称";
                // $('#publicMessageModal').modal('show');
            },100);
            return false;
        }else {
            document.getElementById('parentModalContent').innerHTML = "";
        };
        var code = $("#areaCodeInput").val();
        if(code == null || code == ""){
            setTimeout(function(){
                // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('parentModalCode').innerHTML = "请输入区域代号";
                // $('#publicMessageModal').modal('show');
            },100);
            return false;
        }else {
            document.getElementById('parentModalCode').innerHTML = "";
        };
        var desc = $("#areaDescInput").val();
        var param = [name,code,desc];
        const { dispatch } = this.props;
        dispatch(dictActions.save_areaData(param));
    },
    editAreaData:function(){
        var areas = this.props.areaData;
        var name = $("#editAreaNameInput").val();
        if(name == null || name == ""){
            setTimeout(function(){
                // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('parentModalContent').innerHTML = "请输入区域名称";
                // $('#publicMessageModal').modal('show');
            },100);
            return false;
        }else {
            document.getElementById('parentModalContent').innerHTML = "";
        };
        var code = $("#editAreaCodeInput").val();
        if(code == null || code == ""){
            setTimeout(function(){
                // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('parentModalCode').innerHTML = "请输入区域代号";
                // $('#publicMessageModal').modal('show');
            },100);
            return false;
        }else {
            document.getElementById('parentModalCode').innerHTML = "";
        };
        var desc = $("#editAreaDescInput").val();
        var param = [name,code,desc];
        const { dispatch } = this.props;
        dispatch(dictActions.save_areaData(param));
    },
    saveChildAreaData:function(){
        var areaChilds = this.props.childAreaData;

        var name = $("#childNameInput").val();
        /*if(name == null || name == ""){
         setTimeout(function(){
         // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
         document.getElementById('parentModalContent').innerHTML = "请输入区域名称";
         // $('#publicMessageModal').modal('show');
         },100);
         return false;
         }else {
         document.getElementById('parentModalContent').innerHTML = "";
         };*/
        var code = $("#childCodeInput").val();
        /* if(code == null || code == ""){
         setTimeout(function(){
         // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
         document.getElementById('parentModalCode').innerHTML = "请输入区域代号";
         // $('#publicMessageModal').modal('show');
         },100);
         return false;
         }else {
         document.getElementById('parentModalCode').innerHTML = "";
         };*/
        var desc = $("#childDescInput").val();
        var param = [name,code,desc];
        const { dispatch } = this.props;
        dispatch(dictActions.save_childAreaData(param));
    },
    saveFaultType:function(){
        var faultTypes = this.props.faultType;
        var name = $("#faultClaNameInput").val();
        const { dispatch } = this.props;
        dispatch(dictActions.save_sysFaultType(name));
    },
    saveFaultTypeDetailData:function(){
        var faultTypes = this.props.faultTypeDetailData;
        var name = $("#faultTypeDetailNameInput").val();
        const { dispatch } = this.props;
        dispatch(dictActions.save_faultTypeDetailData(name));
    },
    editFaultType:function () {
        var faultTypes = this.props.faultType;
        var name = $("#editFaultClaNameInput").val();
        const { dispatch } = this.props;
        dispatch(dictActions.save_sysFaultType(name));
    },
    saveFaultSubData:function(){
        var faultSubDatas = this.props.faultSubData;
        var name = $("#faultClaSmaNameInput").val();
        const { dispatch } = this.props;
        dispatch(dictActions.save_sysFaultSubType(name));
    },
    saveEventCategoryData:function(){
        var name = $("#eventCategoryNameAddInput").val();
    	var desc = $("#eventCategoryDescAddInput").val();
        var param = [name,desc];
        const { dispatch } = this.props;
        dispatch(dictActions.save_eventCategoryData(param));
    },
    saveWorkOrderSourceData:function(){
        var name = $("#workOrderSourceNameAddInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_workOrderSourceData(param));
    },
    saveMagProData:function(){
        var projectName = $("#projectNameInput").val();
        var projectCode = $("#projectCodeInput").val();
        var projectCodeName = $("#projectCodeNameInput").val();
        var proMag = [];
		var proMagTree = this.props.proMagTree;
		var nodes = proMagTree.getChecked();
		var fdRecId = "";
		for(var i=0;i<nodes.length;i++){
			var value = nodes[i].value;
			if(value != null && value != "" && value != undefined){
				if(i != nodes.length-1){
				fdRecId = fdRecId + value + ",";
				}else if(i == nodes.length-1){
					fdRecId = fdRecId + value;
				}
			}
		};
        var param = [projectName, projectCode, projectCodeName, fdRecId];
        const { dispatch } = this.props;
        dispatch(dictActions.save_saveMagProData(param));
    },
     //曹志强	20161214	保存单位类型数据信息
    saveUnitTypeData:function(){
    	var unitTypeName = $("#unitTypeNameInput").val();
		var proMagTree = this.props.proMagTree;
		var nodes = proMagTree.getChecked();
		var fdRecId = "";
		for(var i=0;i<nodes.length;i++){
			var value = nodes[i].value;
			if(value != null && value != "" && value != undefined){
				if(i != nodes.length-1){
				fdRecId = fdRecId + value + ",";
				}else if(i == nodes.length-1){
					fdRecId = fdRecId + value;
				}
			}
		};
        var param = [unitTypeName, fdRecId];
        const { dispatch } = this.props;
        dispatch(dictActions.save_unitTypeData(param));
   },
		editFaultSubData:function () {
        var faultTypes = this.props.faultSubData;
        var name = $("#editFaultClaSmaNameInput").val();
        const { dispatch } = this.props;
        dispatch(dictActions.save_sysFaultSubType(name));
    },
    editFaultTypeDetailData:function () {
        var faultTypes = this.props.faultTypeDetailData;
        var name = $("#editFaultTypeDetailNameInput").val();
        const { dispatch } = this.props;
        dispatch(dictActions.save_faultTypeDetailData(name));
    },
    editWorkOrderSourceData:function () {
        var name = $("#workOrderSourceNameEditInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_workOrderSourceData(param));
    },
    editChildAreData:function () {
        var areaChilds = this.props.childAreaData;

        var name = $("#editChildNameInput").val();
        /*if(name == null || name == ""){
         setTimeout(function(){
         // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
         document.getElementById('parentModalContent').innerHTML = "请输入区域名称";
         // $('#publicMessageModal').modal('show');
         },100);
         return false;
         }else {
         document.getElementById('parentModalContent').innerHTML = "";
         };*/
        var code = $("#editChildCodeInput").val();
        /* if(code == null || code == ""){
         setTimeout(function(){
         // document.getElementById('publicMessageModelTitle').innerHTML = "提示"
         document.getElementById('parentModalCode').innerHTML = "请输入区域代号";
         // $('#publicMessageModal').modal('show');
         },100);
         return false;
         }else {
         document.getElementById('parentModalCode').innerHTML = "";
         };*/
        var desc = $("#editChildDescInput").val();
        var param = [name,code,desc];
        const { dispatch } = this.props;
        dispatch(dictActions.save_childAreaData(param));
    },
    editEventCategoryData:function(){
    	var name = $("#eventCategoryNameEditInput").val();
    	var desc = $("#eventCategoryDescEditInput").val();
        var param = [name,desc];
        const { dispatch } = this.props;
        dispatch(dictActions.save_eventCategoryData(param));
    },
    deleteAreaData:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_areaData());
    },
    saveBigServiceData:function(){
        var bigServiceDatas = this.props.bigServiceData;
        var name = $("#catgoryInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_bigServiceData(param));
    },
    editBigServiceData:function () {
        var bigServiceDatas = this.props.bigServiceData;
        var name = $("#editCatgoryInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_bigServiceData(param));
    },
    saveSmallServiceData: function () {
        var smallServiceDatas = this.props.smallServiceData;
        var name = $("#smallServiceNameInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_smallServiceData(param));
    },
    editSmallServiceData: function () {
        var smallServiceDatas = this.props.smallServiceData;
        var name = $("#editSmallServiceNameInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_smallServiceData(param));
    },
    saveFaultLevelData: function () {
        var faultLevelDatas = this.props.faultLevelData;
        var name = $("#faultLevelNameAddInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_faultLevelData(param));
    },
    editFaultLevelData: function () {
        var faultLevelDatas = this.props.faultLevelData;
        var name = $("#faultLevelNameEditInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_faultLevelData(param));
    },
    editMagProData:function(){
    	//项目名称
        var projectName = $("#projectNameInput").val();
        var projectCode = $("#projectCodeInput").val();
        var projectCodeName = $("#projectCodeNameInput").val();
        var proMag = [];
		var proMagTree = this.props.proMagTree;
		var nodes = proMagTree.getChecked();
		var fdRecId = "";
		for(var i=0;i<nodes.length;i++){
			var value = nodes[i].value;
			if(value != null && value != "" && value != undefined){
				if(i != nodes.length-1){
				fdRecId = fdRecId + value + ",";
				}else if(i == nodes.length-1){
					fdRecId = fdRecId + value;
				}
			}
		};
        var param = [projectName, projectCode, projectCodeName, fdRecId];
        const { dispatch } = this.props;
        dispatch(dictActions.save_saveMagProData(param));
    },
    editUnitTypeData:function(){
    	//项目名称
        var unitTypeName = $("#unitTypeNameInput").val();
        var proMag = [];
		var proMagTree = this.props.proMagTree;
		var nodes = proMagTree.getChecked();
		var fdRecId = "";
		for(var i=0;i<nodes.length;i++){
			var value = nodes[i].value;
			if(value != null && value != "" && value != undefined){
				if(i != nodes.length-1){
				fdRecId = fdRecId + value + ",";
				}else if(i == nodes.length-1){
					fdRecId = fdRecId + value;
				}
			}
		};
        var param = [unitTypeName, fdRecId];
        const { dispatch } = this.props;
        dispatch(dictActions.save_unitTypeData(param));
    },
    saveUpgradeLevelData:function () {
        var upgradeLevelDatas = this.props.upgradeLevelData;
        var name = $("#upgradeLevelNameAddInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_upgradeLevelData(param));
    },
    saveBrandData:function(){
        var brandName = $("#brandNameAddInput").val();
        var param = [brandName];
        const { dispatch } = this.props;
        dispatch(dictActions.save_brandData(param));
    },
    savepAssetsTypeData:function(){
    	var pAssetsTypeName = $("#pAssetsTypeNameInput").val();
		var pAssetsTypeDes = $("#pAssetsTypeDesInput").val();
        var param = [pAssetsTypeName, pAssetsTypeDes];
        const { dispatch } = this.props;
        dispatch(dictActions.save_pAssetsTypeData(param));
    },
    saveCAssetsTypeData:function(){
    	var cAssetsTypeName = $("#cAssetsTypeNameInput").val();
		var cAssetsTypeDes = $("#cAssetsTypeDesInput").val();
        var param = [cAssetsTypeName, cAssetsTypeDes];
        const { dispatch } = this.props;
        dispatch(dictActions.save_cAssetsTypeData(param));
    },
    saveAssetsStatusData:function(){
    	var assetsStatus = $("#assetsStatusAddInput").val();
        var param = [assetsStatus];
        const { dispatch } = this.props;
        dispatch(dictActions.save_assetsStatus(param));
    },
    save_locationData:function(){
    	var phyPosAddInput = $("#phyPosAddInput").val();
        var param = [phyPosAddInput];
        const { dispatch } = this.props;
        dispatch(dictActions.save_locationData(param));
    },
    save_applicationLevel:function(){
    	var appNumber = $("#appNumberInput").val();
    	var appType = $("#appTypeInput").val();
    	var appLevelInput = $("#appLevelInput").val();
        var param = [appNumber,appType,appLevelInput];
        const { dispatch } = this.props;
        dispatch(dictActions.save_applevreSponse(param));
    },
    save_productType:function(){
    	var productTypeName = $("#productTypeNameInput").val();
    	var productTypeCode = $("#productTypeCodeInput").val();
        var param = [productTypeName,productTypeCode];
        const { dispatch } = this.props;
        dispatch(dictActions.save_productType(param));
    },
    saveProductChildType:function(){
    	var productChildTypeName = $("#productChildTypeNameInput").val();
    	var productChildTypeCode = $("#productChildTypeCodeInput").val();
        var param = [productChildTypeName,productChildTypeCode];
        const { dispatch } = this.props;
        dispatch(dictActions.save_productChildType(param));
    },
    editUpgradeLevelData:function () {
        var upgradeLevelDatas = this.props.upgradeLevelData;
        var name = $("#upgradeLevelNameEditInput").val();
        var param = [name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_upgradeLevelData(param));
    },
    editBrandData:function(){
    	var brandName = $("#editBrandNameInput").val();
        var param = [brandName];
        const { dispatch } = this.props;
        dispatch(dictActions.save_brandData(param));
    },
    editPAssetsTypeData:function(){
    	var pAssetsTypeName = $("#pAssetsTypeNameEditInput").val();
		var pAssetsTypeDes = $("#pAssetsTypeDesEditInput").val();
        var param = [pAssetsTypeName, pAssetsTypeDes];
        const { dispatch } = this.props;
        dispatch(dictActions.save_pAssetsTypeData(param));
    },
    editCAssetsTypeData:function(){
    	var cAssetsTypeName = $("#cAssetsTypeNameEditInput").val();
		var cAssetsTypeDes = $("#cAssetsTypeDesEditInput").val();
        var param = [cAssetsTypeName, cAssetsTypeDes];
        const { dispatch } = this.props;
        dispatch(dictActions.save_cAssetsTypeData(param));
    },
    editAssetsStatusData:function(){
    	var assetsStatus = $("#editAssetsStatusInput").val();
        var param = [assetsStatus];
        const { dispatch } = this.props;
        dispatch(dictActions.save_assetsStatus(param));
    },
    editLocationData:function(){
    	var editPhyPosInput = $("#editPhyPosInput").val();
        var param = [editPhyPosInput];
        const { dispatch } = this.props;
        dispatch(dictActions.save_locationData(param));
    },
    editApplicationLevel:function(){
    	var appNumber = $("#appNumberEditInput").val();
    	var appType = $("#appTypeEditInput").val();
    	var appLevelInput = $("#appLevelEditInput").val();
        var param = [appNumber,appType,appLevelInput];
        const { dispatch } = this.props;
        dispatch(dictActions.save_applevreSponse(param));
    },
    editProductType:function(){
    	var productTypeName = $("#productTypeNameEditInput").val();
    	var productTypeCode = $("#productTypeCodeEditInput").val();
        var param = [productTypeName,productTypeCode];
        const { dispatch } = this.props;
        dispatch(dictActions.save_productType(param));
    },
    editProductChildType:function(){
    	var productChildTypeName = $("#productChildTypeNameEditInput").val();
    	var productChildTypeCode = $("#productChildTypeCodeEditInput").val();
        var param = [productChildTypeName,productChildTypeCode];
        const { dispatch } = this.props;
        dispatch(dictActions.save_productChildType(param));
    },
    //20161216程艳鸿SLA颜色提醒编辑
    editSLAColorData:function () {
        const { dispatch } = this.props;
        var VERIFYTIME = $("#editSLATimePointInput").val();
        var TIMEUNIT = $("#editSLATimeUnitInput").val();
        var slaColor_name = $("#editSLAColorInput").val();
        var RGB1 = "";
        var RGB2 = "";
        var RGB3 = "";
        var arry_gb = [];
        if (slaColor_name != null && slaColor_name != "" && slaColor_name != undefined) {
            var left = slaColor_name.indexOf("("); //
            var right = slaColor_name.indexOf(")");
            slaColor_name = slaColor_name.substring(left + 1, right); //提取字符串中介于两个指定下标之间的字符
            arry_gb = slaColor_name.split(","); //把一个字符串分割成字符串数组
            for (var i = 0; i < arry_gb.length; i++) {
                if (i == 0) {
                    RGB1 = arry_gb[0].trim();
                } else if (i == 1) {
                    RGB2 = arry_gb[1].trim();
                } else if (i == 2) {
                    RGB3 = arry_gb[2].trim();
                }
            }
        }
        var param = [RGB1,RGB2,RGB3,VERIFYTIME,TIMEUNIT];
        dispatch(dictActions.save_slaData(param));
    },
    //20161216程艳鸿SLA颜色提醒增加保存
    saveSLAColorData:function(){
    	const { dispatch } = this.props;
        var VERIFYTIME = $("#sLATimePointInput").val();
        var TIMEUNIT = $("#sLATimeUnitInput").val();
        var slaColor_name = $("#sLAColorInput").val();
        var RGB1 = "";
        var RGB2 = "";
        var RGB3 = "";
        var arry_gb = [];
        if (slaColor_name != null && slaColor_name != "" && slaColor_name != undefined) {
            var left = slaColor_name.indexOf("("); //
            var right = slaColor_name.indexOf(")");
            slaColor_name = slaColor_name.substring(left + 1, right); //提取字符串中介于两个指定下标之间的字符
            arry_gb = slaColor_name.split(","); //把一个字符串分割成字符串数组
            for (var i = 0; i < arry_gb.length; i++) {
                if (i == 0) {
                    RGB1 = arry_gb[0].trim();
                } else if (i == 1) {
                    RGB2 = arry_gb[1].trim();
                } else if (i == 2) {
                    RGB3 = arry_gb[2].trim();
                }
            }
        }
        var param = [RGB1,RGB2,RGB3,VERIFYTIME,TIMEUNIT];
        dispatch(dictActions.save_slaData(param));
    },
    saveWorkOrderTypeData:function () {
        var workOrderTypeDatas = this.props.workOrderTypeData;
        var name = $("#singleNameInput").find(".rw-input").text();
        var code = $("#singleCodeInput").val();
        var param = [name,code];
        const { dispatch } = this.props;
        dispatch(dictActions.save_workOrderTypeData(param));
    },
    editWorkOrderTypeData:function () {
        var workOrderTypeDatas = this.props.workOrderTypeData;
        var name = $("#editSingleNameInput").find(".rw-input").text();
        var code = $("#editSingleCodeInput").val();
        var param = [name,code];
        const { dispatch } = this.props;
        dispatch(dictActions.save_workOrderTypeData(param));
    },
    saveUnitStaffInfoData:function () {
        var CNAME = $("#nameInput").val();
        var ACRONYM = $("#abbInput").val();
        var PHONE = $("#telInput").val();
        var UNITADDRESS = $("#adressInput").val();
        var ISMAIN = Number($("#headInput").is(":checked"));
        var personnelMagTree = this.props.personnelMagTree;
        var nodes = personnelMagTree.getChecked();
        var URecId = "";
        for (var i = 0;i < nodes.length; i++){
            var value = nodes[i].value;
            if(i != nodes.length-1){
                URecId = URecId + value + ",";
            }else if(i == nodes.length - 1){
                URecId = URecId + value;
            }
        }
        var param = [CNAME,ACRONYM,PHONE,ISMAIN,UNITADDRESS,URecId];
        const { dispatch } = this.props;
        dispatch(dictActions.save_unitStaffInfoData(param));
    },
    editUnitStaffInfoData:function () {
        var CNAME = $("#nameInput").val();
        var ACRONYM = $("#abbInput").val();
        var PHONE = $("#telInput").val();
        var UNITADDRESS = $("#adressInput").val();
        var ISMAIN = Number($("#headInput").is(":checked"));
        var personnelMagTree = this.props.personnelMagTree;
        var nodes = personnelMagTree.getChecked();
        var URecId = "";
        for (var i = 0;i < nodes.length; i++){
            var value = nodes[i].value;
            if(i != nodes.length-1){
                URecId = URecId + value + ",";
            }else if(i == nodes.length - 1){
                URecId = URecId + value;
            }
        }
        var param = [CNAME,ACRONYM,PHONE,ISMAIN,UNITADDRESS,URecId];
        const { dispatch } = this.props;
        dispatch(dictActions.save_unitStaffInfoData(param));
    },
    deleteSmallServiceData: function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_smallServiceData());
    },
    deleteChildAreaData:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_childAreaData());
    },
    deleteSysFaultType:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_sysFaultType());
    },
    deleteSysFaultSubType:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_sysFaultSubType());
    },

    deleteBigServiceData:function () {
      const { dispatch } = this.props;
      dispatch(dictActions.delete_bigServiceData());
    },
		deleteFaultTypeDetailData:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_faultTypeDetailData());
    },
    deleteEventCategoryData:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_eventCategoryData());
    },
    deleteWorkOrderSourceData:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_workOrderSourceData());
    },
    deleteFaultLevelData:function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_faultLevelData());
    },
    deleteUpgradeLevelData:function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_upgradeLevelData());
    },
    deleteBrandData:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_brandData());
    },
    deletepAssetsTypeData:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_pAssetsTypeData());
    },
    deleteCAssetsTypeData:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_cAssetsTypeData());
    },
    deleteAssetsStatusData:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_assetsStatus());
    },
    deleteLocationData:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_locationData());
    },
    deleteApplicationLevel:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_applevreSponse());
    },
    deleteProductType:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_productType());
    },
    deleteProductChildType:function(){
    	const { dispatch } = this.props;
        dispatch(dictActions.delete_productChildType());
    },
    deleteWorkOrderTypeData: function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_workOrderTypeData());
    },
    deleteUnitStaffInfoData: function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_unitStaffInfoData());
    },
    deleteProjectFirmData:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_projectFirmData());
    },
    deleteUnitTypeData:function(){
        const { dispatch } = this.props;
        dispatch(dictActions.delete_unitTypeData());
    },
    //20161215程艳鸿SLA颜色提醒管理
    deleteSlaColorData:function(){
    	const { dispatch } = this.props;
    	dispatch(dictActions.delete_SLAColorData());
    },
    delete_areaData:function (pageId) {
      switch (pageId){
          case 1:
              this.deleteAreaData();
              break;
          case 2:
              this.deleteChildAreaData();
          case 3:
              this.deleteProjectFirmData();
              break;
          case 7:
              this.deleteEventCategoryData();
              break;
          case 4:
              this.deleteWorkOrderTypeData();
              break;
          case 5:
              this.deleteBigServiceData();
              break;
          case 6:
              this.deleteSmallServiceData();
              break;
          case 8:
              this.deleteWorkOrderSourceData();
              break;
          case 9:
              this.deleteFaultLevelData();
              break;
          case 10:
              this.deleteUpgradeLevelData();
              break;
          case 11:
              this.deleteBrandData();
              break;
          case 12:
              this.deletepAssetsTypeData();
              break;
          case 13:
              this.deleteAssetsStatusData();
              break;
          case 14:
              this.deleteLocationData();
              break;
          case 15:
              this.deleteApplicationLevel();
              break;
          case 16:
              this.deleteProductType();
              break;
          case 17:
              this.deleteSysFaultType();
              break;
          case 18:
              this.deleteSysFaultSubType();
              break;
		  case 19:
              this.deleteFaultTypeDetailData();
              break;
          case 20:
              this.deleteUnitStaffInfoData();
              break;
          case 22:
              this.deleteMagUnit();
              break; 
          case 21:
              this.deleteUnitTypeData();
              break; 
          case 23:
              this.deleteDepartMentData();
              break;   
          case 24:
              this.deletePositionData();
              break;   
          case 25:
              this.deleteSlaColorData();
              break;  
          case 26:
              this.deleteCAssetsTypeData();
              break;
          case 27:
              this.deleteProductChildType();
              break;
      }
    },
    setAreaId:function setAreaId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setAreaId(data));
    },
    setFaultTypeId:function setFaultTypeId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setFaultTypeId(data));
    },
    setFaultSubId:function setFaultSubId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setFaultSubId(data));
    },
		setFaultSubPid:function setFaultSubPid(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setFaultSubPid(data));
    },
    setFaultTypeDetailId:function setFaultTypeDetailId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setFaultTypeDetailId(data));
    },
    setEventCategoryId:function setEventCategoryId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setEventCategoryId(data));
    },
    setWorkOrderSourceId:function setWorkOrderSourceId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setWorkOrderSourceId(data));
    },
    setFaultLevelId:function setFaultLevelId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setFaultLevelId(data));
    },
    setUpgradeLevelId:function setUpgradeLevelId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setUpgradeLevelId(data))
    },
    setProjectFirmId:function setProjectFirmId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setProjectFirmId(data));
    },
    setProjectId:function setProjectId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setProjectId(data));
    },
    setWorkOrderBot:function (data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setWorkOrderBot(data));
    },
    setUnitStaffInfoPid:function () {
      const { dispatch } = this.props;
      dispatch(dictActions.setUnitStaffInfoPid(data));
    },
    setUnitStaffInfoCid:function () {
      const { dispatch } = this.props;
      dispatch(dictActions.setUnitStaffInfoCid(data));
    },
    //1215程艳鸿SLA颜色提醒
    setSlaColorId:function setSlaColorId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setSlaColorId(data));
    },
    //刘家顺  20161208添加部门管理
    saveDepartMentData: function () {
        var departMentData = this.props.departMentData;
        var  DepartmentName = $("#departNameInput").val();
        var  DepartmentCode = $("#departCodeInput").val();
        var param = [DepartmentCode, DepartmentName];
        const { dispatch } = this.props;
        dispatch(dictActions.save_departMentData(param));
    },
    //刘家顺  20161208添加职位管理
    savePositionData: function () {
        var position_name = $("#posDepartInput").val();
        var param = [position_name];
        const { dispatch } = this.props;
        dispatch(dictActions.save_positionData(param));
    },
    //刘家顺    20161208删除部门管理
    deleteDepartMentData: function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_departMentData());
    },
    //刘家顺    20161208删除职位管理
    deletePositionData: function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_positionData());
    },
    //刘家顺	   201612.08编辑部门管理
    editDepartMentData: function () {
        var DepartmentName = $("#editDepartNameInput").val();
        var DepartmentCode = $("#editDepartCodeInput").val();
        var param = [DepartmentCode, DepartmentName];
        const { dispatch } = this.props;
        dispatch(dictActions.save_departMentData(param));
    },
    //刘家顺	   201612.09编辑职位管理
    editPositionData: function () {
        var POSITION_NAME = $("#editPosDepartInput").val();
        console.log(POSITION_NAME)
        var param = [POSITION_NAME];
        const { dispatch } = this.props;
        dispatch(dictActions.save_positionData(param));
    },
    //刘家顺   20161209部门ID
    setDepartMentId: function setDepartMentId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setDepartMentId(data));
    },
    //刘家顺    1209职位ID
    setPositionId: function setPositionId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setPositionId(data));
    },
    //刘家顺 20161211职位管理的 部门名字id
    setDepartMentPid: function setDepartMentPid(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setDepartMentPid(data));
    },
    //刘家顺   20161211职位管理的 部门名字
    setDepartMentPname: function setDepartMentPname(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setDepartMentPname(data));
    },
    //刘家顺	  20161213 删除单位管理 值方法
    deleteMagUnit: function () {
        const { dispatch } = this.props;
        dispatch(dictActions.delete_magUnitData());

    },
    //刘家顺 20161213删除单位管理ID
    setMagUnitId: function setMagUnitId(data) {
        const { dispatch } = this.props;
        dispatch(dictActions.setMagUnitId(data));
    },
    //刘家顺 20161213编辑单位管理 传值接口值
    //接口文档单位名称
    setUnitName:function setUnitName(data){
    	const { dispatch } = this.props;
    	dispatch(dictActions.setUnitName(data));
    },
    //刘家顺 20161213编辑单位管理 传值接口值
      //接口文档单位编码或者序号
    setUnitNumber:function setUnitNumber(data){
    	const { dispatch } = this.props;
    	dispatch(dictActions.setUnitNumber(data));
    },
    //接口文档单位地址
    setUnitAddress:function setUnitAddress(data){
    	const { dispatch } = this.props;
    	dispatch(dictActions.setUnitAddress(data));
    },
//    //父区域的id
//  setEditAreaId:function setEditAreaId(data){
//  	const { dispatch } = this.props;
//  	dispatch(dictActions.setEditAreaId(data));
//  },
    //接口文档子区域id 监听子区域的id川子
    setEditAreasId:function setEditAreasId(data){
    	const { dispatch } = this.props;
    	dispatch(dictActions.setEditAreasId(data));
    },
    //文档类型id组
//  setEditMagUnitTypesId:function setEditMagUnitTypesId(data){
//  	const { dispatch } = this.props;
//  	dispatch(dictActions.setEditMagUnitTypesId(data));
//  },
    //编辑单位管理 recId
   	setEditMagUnitRecId:function setEditMagUnitRecId(data){
    	const { dispatch } = this.props;
    	dispatch(dictActions.setEditMagUnitRecId(data));
    },
    setEditMagUnitIdTree:function setEditMagUnitIdTree(data){
    	const { dispatch } = this.props;
    	dispatch(dictActions.setEditMagUnitIdTree(data));
    },
    setUnitTypeNodesChecked:function setUnitTypeNodesChecked(data){
    	const { dispatch } = this.props;
    	dispatch(dictActions.setUnitTypeNodesChecked(data));
    },
     //刘家顺  20161213编辑单位管理
      editMagUnitData:function (){
      	//序号
       var UNITNUMBER = $("#editMagUnitNumberInput").val();
       //编辑单位名称
       var UNITNAME = $("#editMagUnitlNameInput").val();
       //父区域区域名字
       var AREANAME= $("#editMagUnitlAreaInput").find(".rw-input").text();
       //子区域名字
       var AREASNAME = $("#editMagUnitlChildAreaInput").find(".rw-input").text();
       //单位类型名字，不用传
       var UNITADDRESS = $("#editMagUnitAdressInput").val();
        var param = [UNITNUMBER,UNITNAME,AREANAME,AREASNAME,UNITADDRESS];
        console.log('点击编辑 确定事件 传的值')
        console.log(param)
        const { dispatch } = this.props;
        dispatch(dictActions.save_magUnitData(param));
        
    },
   
     //刘家顺  20161213添加单位管理 保存 
   
    saveMagUnitData:function(){
	   //序号
       var UNITNUMBER = $("#magUnitNumberInput").val();
       //编辑单位名称
       var UNITNAME = $("#magUnitlNameInput").val();
      // var PNAME = $("#editMagUnitlHeadInput").val();
       //var PPHONE = $("#editMagUnitlAreaInput").val();
       //区域名字
       var AREANAME = $("#magUnitlAreaInput").find(".rw-input").text();		
//     var AREANAME = $("#magUnitlAreaInput").find(".rw-input").text();
       //子区域名字
       var AREASNAME = $("#magUnitlAreaInputChildren").find(".rw-input").text();
       //单位地址
       var UNITADDRESS = $("#magUnitAdressInput").val();  
        //单位类型名字，不用传 
       var param = [UNITNUMBER,UNITNAME,AREANAME,AREASNAME,UNITADDRESS];  
        console.log('点击保存事件 传的值')
        console.log(param)
        const { dispatch } = this.props;
        dispatch(dictActions.save_magUnitData(param));
        dispatch(dictActions.setEditMagUnitIdTree(''));
    },
    onClickSave:function(pageId){
        // console.log(pageId);
        switch (pageId) {
            case 1:
                this.saveAreaData();
                break;
            case 2:
                this.saveChildAreaData();
                break;
			case 3:
                this.saveMagProData();
                break;
            case 4:
                this.saveWorkOrderTypeData();
                break;
            case 5:
                this.saveBigServiceData();
                break;
            case 6:
                this.saveSmallServiceData();
                break;
            case 7:
	            this.saveEventCategoryData();
	            break;
	        case 8:
	            this.saveWorkOrderSourceData();
	            break;
            case 9:
                this.saveFaultLevelData();
                break;
            case 10:
                this.saveUpgradeLevelData();
                break;
            case 11:
                this.saveBrandData();
                break;
            case 12:
                this.savepAssetsTypeData();
                break;
            case 13:
                this.saveAssetsStatusData();
                break;
            case 14:
                this.save_locationData();
                break;
            case 15:
                this.save_applicationLevel();
                break;
            case 16:
                this.save_productType();
                break;
            case 17:
                this.saveFaultType();
                break;
            case 18:
                this.saveFaultSubData();
                break; 
			case 19:
                this.saveFaultTypeDetailData();
				break;
            case 20:
                this.saveUnitStaffInfoData();
                break;
		    case 21:
                this.saveUnitTypeData();
                break;
            case 22:
                this.saveMagUnitData();
                break; 
            case 23:
                this.saveDepartMentData();
                break;   
            case 24:
                this.savePositionData();
                break; 
            case 25:
            	this.saveSLAColorData();
            	break; 
            case 26:
                this.saveCAssetsTypeData();
                break;
            case 27:
                this.saveProductChildType();
                break;
        }
    },
    onClickEdit:function(pageId){
        switch (pageId) {
            case 1:
                this.editAreaData();
                break;
            case 2:
                this.editChildAreData();
                break;
			case 3:
                this.editMagProData();
                break;
            case 4:
                this.editWorkOrderTypeData();
				break;
            case 5:
                this.editBigServiceData();
                break;
            case 6:
                this.editSmallServiceData();
                break;
            case 7:
	            this.editEventCategoryData();
	            break;
	        case 8:
	            this.editWorkOrderSourceData();
	            break;
            case 9:
                this.editFaultLevelData();
                break;
            case 10:
                this.editUpgradeLevelData();
                break;
            case 11:
                this.editBrandData();
            case 12:
                this.editPAssetsTypeData();
                break;
            case 13:
                this.editAssetsStatusData();
                break;
            case 14:
                this.editLocationData();
                break;
            case 15:
                this.editApplicationLevel();
                break;
            case 16:
                this.editProductType();
                break;
            case 17:
                this.editFaultType();
                break;
            case 18:
                this.editFaultSubData();
                break; 
			case 19:
                this.editFaultTypeDetailData();
				break;
            case 20:
                this.editUnitStaffInfoData();
                break;
			case 21:
                this.editUnitTypeData();
                break;
            case 22:
                this.editMagUnitData();
                break;  
            case 23:
                this.editDepartMentData();
              break;    
            case 24:
                this.editPositionData();
                break;  
            case 25:
            	this.editSLAColorData();    
            case 26:
            	this.editCAssetsTypeData();
            case 27:
            	this.editProductChildType();    
        }
    },
    //action调用方法
    actionCall:function(param){
        const { dispatch } = this.props;
        this.setState({page:param});
        switch (param) {
            case "ParentMag":
                dispatch(dictActions.get_areaData());
                break;
            case "ApplicationLevel":
            	dispatch(dictActions.get_applevreSponse());
                break;
            case "AssetStatus":
            	dispatch(dictActions.get_assetsStatus());
                break;
            case "ParentAssetType":
            	dispatch(dictActions.get_pAssetsTypeData());
                break;
            case "ChildAssetType":
            	dispatch(dictActions.get_pAssetsTypeData());
            	dispatch(dictActions.get_cAssetsTypeData());
                break;
            case "BrandMag":
            	dispatch(dictActions.get_brandData());
                break;
            case "CatgoryMag":
                dispatch(dictActions.get_projectData());
                dispatch(dictActions.get_bigServiceData());
                break;
            case "ClaMag":
                dispatch(dictActions.get_bigServiceData());
                dispatch(dictActions.get_smallServiceData());
                break;
            case "DepartMag":
                dispatch(dictActions.get_departMentData());
                break;
            case "EventType":
            		dispatch(dictActions.get_eventCategoryData());
                break;
            case "FaultClass":
	            	dispatch(dictActions.get_sysFaultType());
                break;
            case "FaultClassSmall":
            		dispatch(dictActions.get_sysFaultType());
	            	dispatch(dictActions.get_sysFaultSubType());
                break;
            case "FaultLevel":
                    dispatch(dictActions.get_faultLevelData());
                break;
            case "FaultType":
            	  dispatch(dictActions.get_faultTypeDetailData());
            		dispatch(dictActions.get_faultTypeDetailAllData());
                break;
            case "MagUnit":
                dispatch(dictActions.get_areaSubData());
                dispatch(dictActions.get_magUnitData());
                dispatch(dictActions.get_unitTypeDataTree());
                break;
            case "PersonnelMag":
                // dispatch(dictActions.get_unitData());
                dispatch(dictActions.get_unitStaffInfoData());
                break;
            case "PhyPos":
            	dispatch(dictActions.get_locationData());
                break;
            case "PosMag":
                dispatch(dictActions.get_positionData());
                break;
            case "ProductType":
            	dispatch(dictActions.get_productTypes());
                break;
            case "ProductChildType":
            	dispatch(dictActions.get_productTypes());
            	dispatch(dictActions.get_productChildTypes());
                break;    
            case "ProMag":
            	dispatch(dictActions.get_projectFirmData());
                break;
            case "SingleMag":
                dispatch(dictActions.get_workOrderNameData());
                dispatch(dictActions.get_workOrderTypeAllData());
                dispatch(dictActions.get_projectData());
                break;
            case "SingleSource":
            	dispatch(dictActions.get_workOrderSourceData());
                break;
            case "SLARemind":
            	dispatch(dictActions.get_slaColorData(""));
                break;
            case "SubMag":
                dispatch(dictActions.get_areaData());
                dispatch(dictActions.get_childAreaData());
                break;
            case "TypeMag":
            		dispatch(dictActions.get_unitTypeData());
                break;
            case "UpgradeLevel":
                dispatch(dictActions.get_upgradeLevelData());
                break;
        }
    },
    //子组件加载方法
    dataDicFunction:function(){
        const { dispatch } = this.props;
        let param = this.state.page;
        var canDelete = this.state.canDelete;
        switch (param) {
            case "ParentMag":
                return(
                    <ParentMag
                    	canDelete={canDelete}
                        areaData={this.props.areaData}
                        onClickSave={this.onClickSave}
                        delete_areaData={this.delete_areaData}
                        setAreaId={this.setAreaId}
                        onClickEdit={this.onClickEdit}
                        get_areaData={()=>dispatch(dictActions.get_areaData())}
                    />
                );
                break;
            case "ApplicationLevel":
                return(
                	<ApplicationLevel
                		canDelete={canDelete}
                		applevreSponseData={this.props.applevreSponseData}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                		get_applevreSponse={()=>dispatch(dictActions.get_applevreSponse())}
                		setApplevreSponseId={(param)=>dispatch(dictActions.setApplevreSponseId(param))}
                		delete_applevreSponse={this.delete_areaData}
                	/>
                );
                break;
            case "AssetStatus":
                return(
                	<AssetStatus
                		canDelete={canDelete}
                		assetsStatus={this.props.assetsStatus}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                		get_assetsStatus={()=>dispatch(dictActions.get_assetsStatus())}
                		setAssetsStatuId={(param)=>dispatch(dictActions.setAssetsStatuId(param))}
                		delete_assetStatusData={this.delete_areaData}
                	/>
                );
                break;
            case "ParentAssetType":
                return(
                	<ParentAssetType
                		canDelete={canDelete}
                		assetsType={this.props.assetsType}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                		get_pAssetsTypeData={()=>dispatch(dictActions.get_pAssetsTypeData())}
                		setAssetsTypeId={(param)=>dispatch(dictActions.setAssetsTypeId(param))}
                		delete_assetsTypeData={this.delete_areaData}
                	/>
                );
                break;
            case "ChildAssetType":
                return(
                	<ChildAssetType
                		canDelete={canDelete}
                		assetsType={this.props.assetsType}
                		childAssetsType={this.props.childAssetsType}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                		get_cAssetsTypeData={()=>dispatch(dictActions.get_cAssetsTypeData())}
                		setChildAssetsTypeId={(param)=>dispatch(dictActions.setChildAssetsTypeId(param))}
                		setAssetsTypeId={(param)=>dispatch(dictActions.setAssetsTypeId(param))}
                		delete_childAssetsTypeData={this.delete_areaData}
                	/>
                );
                break;
            case "BrandMag":
                return(
                	<BrandMag
                		canDelete={canDelete}
                		brandData={this.props.brandData}
                		delete_brandData={this.delete_areaData}
                		get_brandData={()=>dispatch(dictActions.get_brandData())}
                		setBrandId={(param)=>dispatch(dictActions.setBrandId(param))}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                	/>
                );
                break;
            case "CatgoryMag":
                return(
                    <CatgoryMag
                    		canDelete={canDelete}
                        bigServiceData={this.props.bigServiceData}
                        projectData={this.props.projectData}
                        delete_areaData={this.delete_areaData}
                        onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        setProjectId={(data)=>dispatch(dictActions.setProjectId(data))}
                        setBigServiceId={(data)=>dispatch(dictActions.setBigServiceId(data))}
                        get_bigServiceData={()=>dispatch(dictActions.get_bigServiceData())}
                    />
                );
                break;
            case "ClaMag":
                return (
                    <ClaMag
                    		canDelete={canDelete}
                        smallServiceData={this.props.smallServiceData}
                        bigServiceData={this.props.bigServiceData}
                        delete_areaData={this.delete_areaData}
                        onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        setBigServicePid={(data) => dispatch(dictActions.setBigServicePId(data))}
                        setSmallServiceId={(data) => dispatch(dictActions.setSmallServiceId(data))}
                        get_smallServiceData={() => dispatch(dictActions.get_smallServiceData())}
                    />
                );
                break;
            case "DepartMag":
                return(<DepartMag
		                		canDelete={canDelete}
		                		departMentData={this.props.departMentData}
                        onClickSave={this.onClickSave}
                        delete_departMentData={this.delete_areaData}
                        setDepartMentId={this.setDepartMentId}
                        onClickEdit={this.onClickEdit}
                        get_departMentData={()=>dispatch(dictActions.get_departMentData())}
                	/>);
                break;
            case "EventType":
                return(<EventType 
                	canDelete={canDelete}
                	eventCategoryData={this.props.eventCategoryData}
                	onClickSave={this.onClickSave}
                	delete_areaData={this.delete_areaData}
                	setEventCategoryId={this.setEventCategoryId}
                	onClickEdit={this.onClickEdit}
                	get_eventCategoryData={()=>dispatch(dictActions.get_eventCategoryData())}
                	/>
                );
                break;
            case "FaultClass":
                return(
                	<FaultClass
                		canDelete={canDelete}
                		faultType={this.props.faultType}
                		onClickSave={this.onClickSave}
                		delete_sysFaultType={this.delete_areaData}
                		setFaultTypeId={this.setFaultTypeId}
                		onClickEdit={this.onClickEdit}
                		get_sysFaultType={()=>dispatch(dictActions.get_sysFaultType())}
                	/>
                );
                break;
            case "FaultClassSmall":
                return(
                	<FaultClassSmall
                		canDelete={canDelete}
                		faultSubData={this.props.faultSubData}
                		faultType={this.props.faultType}
                		onClickSave={this.onClickSave}
                		delete_sysFaultSubType={this.delete_areaData}
                		setFaultTypeId={this.setFaultTypeId}
                		setFaultSubId={this.setFaultSubId}
                		setFaultSubPid={this.setFaultSubPid}
                		onClickEdit={this.onClickEdit}
                		get_sysFaultType={()=>dispatch(dictActions.get_sysFaultType())}
                		get_sysFaultSubType={()=>dispatch(dictActions.get_sysFaultSubType())}
                	/>
                );
                break;
            case "FaultLevel":
                return(
                    <FaultLevel
                    		canDelete={canDelete}
                        faultLevelData={this.props.faultLevelData}
                        delete_areaData={this.delete_areaData}
                        onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        faultLevelId={(data) => dispatch(dictActions.setFaultLevelId(data))}
                        get_faultLevelData={() => dispatch(dictActions.get_faultLevelData())}
                    />
                );
                break;
            case "FaultType":
                return(<FaultType
                		canDelete={canDelete}
                	  faultSubData={this.props.faultSubData}
                		faultTypeDetailData={this.props.faultTypeDetailData}
                		onClickSave={this.onClickSave}
                		delete_faultTypeDetailData={this.delete_areaData}
                		setFaultSubId={this.setFaultSubId}
                		setFaultSubPid={this.setFaultSubPid}
                		setFaultTypeId={this.setFaultTypeId}
                		setFaultTypeDetailId={this.setFaultTypeDetailId}
                		onClickEdit={this.onClickEdit}
                		get_faultTypeDetailData={()=>dispatch(dictActions.get_faultTypeDetailData())}
                		get_faultTypeDetailAllData={()=>dispatch(dictActions.get_faultTypeDetailAllData())}
                	/>
                );
                break;
            case "MagUnit":
                return(<MagUnit
                		canDelete={canDelete}
                    magUnitData={this.props.magUnitData}
                	  onClickSave={this.onClickSave}
                	  onClickEdit={this.onClickEdit}
                	  delete_magUnit={this.delete_areaData}
                	  setMagUnitId={this.setMagUnitId}
                	  setUnitName={this.setUnitName}
                	  setUnitNumber={this.setUnitNumber}
                	  setUnitAddress={this.setUnitAddress}
                	  setEditAreasId={this.setEditAreasId}
//              	  setEditMagUnitTypesId={this.setEditMagUnitTypesId}
                	  setEditMagUnitRecId={this.setEditMagUnitRecId}
                	  setEditMagUnitIdTree={this.setEditMagUnitIdTree}
                	  get_magUnitData={()=>dispatch(dictActions.get_magUnitData())}
                	  get_areaSubData={()=>dispatch(dictActions.get_areaSubData())}
                	  areaData={this.props.areaData}
                	  setAreaId={this.setAreaId}
                	  setUnitTypeNodesChecked={this.setUnitTypeNodesChecked}
                	  unitTypeNodesChecked={this.props.unitTypeNodesChecked}
                	 get_unitTypeDataTree={()=>dispatch(dictActions.get_unitTypeDataTree())}
                	  unitTypeDataTree={this.props.unitTypeDataTree}
                	 get_unitTypeDataTreeId={()=>dispatch(dictActions.get_unitTypeDataTreeId())}
                	 unitTypeDataTreeId={this.props.unitTypeDataTreeId}
//              	 editTreeId_unitTypeDataTree={()=>dispatch(dictActions.editTreeId_unitTypeDataTree())}
                />);
                break;
            case "PersonnelMag":
                return(
                    <PersonnelMag
                    		canDelete={canDelete}
                        unitStaffInfoData={this.props.unitStaffInfoData}
                        personnelMagTree={this.props.personnelMagTree}
                        delete_areaData={this.delete_areaData}
                        onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        setUnitStaffInfoCid = {(data) => dispatch(dictActions.setUnitStaffInfoCid(data))}
                        setUnitStaffInfoPid = {(data) => dispatch(dictActions.setUnitStaffInfoPid(data))}
                        setUnitId = {(data) => dispatch(dictActions.setUnitId(data))}
                        get_unitData = {(data) => dispatch(dictActions.get_unitData(data))}
                        init_personnelEditMagTree = {(data) => dispatch(dictActions.init_editPersonnelMagTree(data))}
                        get_unitStaffInfoData = {() => dispatch(dictActions.get_unitStaffInfoData())}
                    />
                );
                break;
            case "PhyPos":
                return(
                	<PhyPos
                		canDelete={canDelete}
                		locationData={this.props.locationData}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                		get_locationData={()=>dispatch(dictActions.get_locationData())}
                		setLocationId={(param)=>dispatch(dictActions.setLocationId(param))}
                		delete_locationData={this.delete_areaData}
                	/>
                );
                break;
            case "PosMag":
                 return(<PosMag
                 		canDelete={canDelete}
                	    positionData={this.props.positionData}
                	    departMentData={this.props.departMentData}
                        onClickSave={this.onClickSave}
                        delete_positionData={this.delete_areaData}
                        setPositionId={this.setPositionId}
                        setDepartMentPid={this.setDepartMentPid}
                        setDepartMentPname={this.setDepartMentPname}
                        onClickEdit={this.onClickEdit}
                        get_positionData={()=>dispatch(dictActions.get_positionData())}                	
                	/>);
                break;
            case "ProductType":
                return(
                	<ProductType
                		canDelete={canDelete}
                		productType={this.props.productType}
                		delete_ProductTypeData={this.delete_areaData}
                		get_productTypes={()=>dispatch(dictActions.get_productTypes())}
                		setProductTypeId={(param)=>dispatch(dictActions.setProductTypeId(param))}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                	/>
                );
                break;
            case "ProductChildType":
                return(
                	<ProductChildType
                		canDelete={canDelete}
                		productType={this.props.productType}
                		productChildType={this.props.productChildType}
                		delete_productChildTypeData={this.delete_areaData}
                		get_productChildTypes={()=>dispatch(dictActions.get_productChildTypes())}
                		setProductChildTypeId={(param)=>dispatch(dictActions.setProductChildTypeId(param))}
                		setProductTypeId={(param)=>dispatch(dictActions.setProductTypeId(param))}
                		onClickEdit={this.onClickEdit}
                		onClickSave={this.onClickSave}
                	/>
                );
                break;
            case "ProMag":
                return(<ProMag 
                		canDelete={canDelete}
	                	projectFirmData={this.props.projectFirmData}
	                	delete_areaData={this.delete_areaData}
	                	setProjectFirmId={this.setProjectFirmId}
	                	proMagTree={this.props.proMagTree}
	                	onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
	                	get_siteviewasdData={(param)=>dispatch(dictActions.get_siteviewasdData(param))}
	                	init_editProMagTree={(param)=>dispatch(dictActions.init_editProMagTree(param))}
                	/>
                );
                break;
            case "SingleMag":
                return(<SingleMag
                        setWorkOrderBot={(data) => dispatch(dictActions.setWorkOrderBot(data))}
                        setWorkOrderTypeId={(data) => dispatch(dictActions.setWorkOrderTypeId(data))}
                        setProjectId={(data) => dispatch(dictActions.setProjectId(data))}
                        get_workOrderTypeAllData={() => dispatch(dictActions.get_workOrderTypeAllData())}
                        get_workOrderNameData={() => dispatch(dictActions.get_workOrderNameData())}
                        get_projectData={() => dispatch(dictActions.get_projectData())}
                        onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        delete_areaData={this.delete_areaData}
                        workOrderTypeAllData={this.props.workOrderTypeAllData}
                        workOrderNameData={this.props.workOrderNameData}
                        projectData={this.props.projectData}
                        setWorkOrderNameId={(data) => dispatch(dictActions.setWorkOrderNameId(data))}
                    />
                );
                break;
            case "SingleSource":
                return(<SingleSource 
                		canDelete={canDelete}
                		workOrderSourceData={this.props.workOrderSourceData}
                		delete_areaData={this.delete_areaData}
                		onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        setWorkOrderSourceId={this.setWorkOrderSourceId}
                        get_workOrderSourceData={()=>dispatch(dictActions.get_workOrderSourceData())}
                	/>
                );
                break;
            case "SLARemind":
                return(<SLARemind
                		slaColorData={this.props.slaColorData}
                		setSlaColorId={this.setSlaColorId}
                		slaColorId={(data) => dispatch(dictActions.setSlaColorId(data))}
                		get_slaColorData={(param)=>dispatch(dictActions.get_slaColorData(param))}
                		onClickSave={this.onClickSave}
                    onClickEdit={this.onClickEdit}
                    delete_areaData={this.delete_areaData}
                	/>);
                break;
            case "SubMag":
                return(
                    <SubMag
                    	canDelete={canDelete}
                        childAreaData={this.props.childAreaData}
                        areaData={this.props.areaData}
                        delete_areaData={this.delete_areaData}
                        onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        setChildAreaPid={(data)=>dispatch(dictActions.setChildAreaPid(data))}
                        setChildAreaId={(data)=>dispatch(dictActions.setChildAreaId(data))}
                        get_childAreaData={()=>dispatch(dictActions.get_childAreaData())}
                    />
                );
                break;
            case "TypeMag":
                return(
                	<TypeMag
                		canDelete={canDelete}
                		unitTypeData={this.props.unitTypeData}
                		delete_areaData={this.delete_areaData}
                		onClickSave={this.onClickSave}
                		onClickEdit={this.onClickEdit}
                		setUnitTypeId={(data)=>dispatch(dictActions.setUnitTypeId(data))}
                		get_siteviewasdData={(param)=>dispatch(dictActions.get_siteviewasdData(param))}
                		init_editProMagTree={(param)=>dispatch(dictActions.init_editProMagTree(param))}
                		get_unitTypeData={(param)=>dispatch(dictActions.get_unitTypeData(param))}
                	/>
                );
                break;
            case "UpgradeLevel":
                return(
                    <UpgradeLevel
                    		canDelete={canDelete}
                        upgradeLevelData={this.props.upgradeLevelData}
                        delete_areaData={this.delete_areaData}
                        onClickSave={this.onClickSave}
                        onClickEdit={this.onClickEdit}
                        upgradeLevelId={(data) => dispatch(dictActions.setUpgradeLevelId(data))}
                        get_upgradeLevelData={() => dispatch(dictActions.get_upgradeLevelData())}
                    />
                );
                break;
        }
    },
    render: function () {
        return (
            <div className='dataDic'>
                <ul className="dataMenu">
                    <li className="level1">
                        <h5><i></i>区域管理</h5>
                        <ul className="level2">
                            <li className="on" onClick={this.actionCall.bind(this, 'ParentMag')}>父区域管理</li>
                            <li onClick={this.actionCall.bind(this,'SubMag')}>子区域管理</li>
                        </ul>
                    </li>
                    <li className="level1">
                        <h5><i></i>项目管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'ProMag')}>项目管理</li>
                            <li onClick={this.actionCall.bind(this,'SingleMag')}>工单类型管理</li>
                        </ul>

                    </li>
                    <li className="level1">
                        <h5><i></i>SLA管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'CatgoryMag')}>服务大类管理</li>
                            <li onClick={this.actionCall.bind(this,'ClaMag')}>服务细类管理</li>
                        </ul>
                    </li>
                    <li className="level1">
                        <h5><i></i>事件管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'EventType')}>事件类型管理</li>
                            <li onClick={this.actionCall.bind(this,'SingleSource')}>工单来源管理</li>
                            <li onClick={this.actionCall.bind(this,'FaultLevel')}>故障级别管理</li>
                            <li onClick={this.actionCall.bind(this,'UpgradeLevel')}>升级级别管理</li>
                        </ul>
                    </li>
                    <li className="level1">
                        <h5><i></i>资产管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'BrandMag')}>品牌管理</li>
                            <li onClick={this.actionCall.bind(this,'ParentAssetType')}>父级资产类型管理</li>
                            <li onClick={this.actionCall.bind(this,'ChildAssetType')}>子级资产类型管理</li>
                            <li onClick={this.actionCall.bind(this,'AssetStatus')}>资产状态管理</li>
                            <li onClick={this.actionCall.bind(this,'PhyPos')}>物理位置管理</li>
                            <li onClick={this.actionCall.bind(this,'ApplicationLevel')}>应用响应级别管理</li>
                            <li onClick={this.actionCall.bind(this,'ProductType')}>产品类型管理</li>
                            <li onClick={this.actionCall.bind(this,'ProductChildType')}>产品子类型管理</li>
                        </ul>
                   </li>
                    <li className="level1">
                        <h5><i></i>故障管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'FaultClass')}>故障大类管理</li>
                            <li onClick={this.actionCall.bind(this,'FaultClassSmall')}>故障细类管理</li>
                            <li onClick={this.actionCall.bind(this,'FaultType')}>故障类型管理</li>
                        </ul>
                    </li>
                    <li className="level1">
                        <h5><i></i>单位信息管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'PersonnelMag')}>单位人员管理</li>
                            <li onClick={this.actionCall.bind(this,'TypeMag')}>单位类型管理</li>
                            <li onClick={this.actionCall.bind(this,'MagUnit')}>单位管理</li>
                        </ul>
                    </li>
                    <li className="level1">
                        <h5><i></i>部门管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'DepartMag')}>部门管理</li>
                            <li onClick={this.actionCall.bind(this,'PosMag')}>职位管理</li>
                        </ul>
                    </li>
                    <li className="level1">
                        <h5><i></i>提醒管理</h5>
                        <ul className="level2">
                            <li onClick={this.actionCall.bind(this,'SLARemind')}>提醒管理</li>
                        </ul>
                    </li>
                </ul>
                <div className="dataContent">{this.dataDicFunction()}</div>
            </div>
        )
    }
});
function mapStateToProps(state) {

  const {areaData, childAreaData, faultType, faultSubData, eventCategoryData, workOrderSourceData, projectData, bigServiceData, smallServiceData, faultLevelData, faultLevelId, upgradeLevelData, upgradeLevelId, departMentData, positionData, departMentPname, projectFirmData, siteviewasdData, proMagTree, faultTypeDetailData, unitTypeData, magUnitData,workOrderBot, workOrderTypeData, unitStaffInfoData, unitStaffInfoCid, unitStaffInfoPid, unitData, unitId, workOrderNameData, workOrderNameId, workOrderTypeAllData, personnelMagTree,slaColorData,slaColorId, editAreasId, editMagUnitTypesId, editMagUnitRecId,editMagUnitId,unitTypeDataTree,editMagUnitIdTree,unitTypeDataTreeId,brandData,assetsStatus,locationData,applevreSponseData,productType,assetsType,childAssetsType,productChildType} = state.dataDictReducer;
  return {
        areaData:areaData,
        departMentData:departMentData,
        childAreaData:childAreaData,
        faultType:faultType,
        faultSubData:faultSubData,
        projectData:projectData,
        bigServiceData:bigServiceData,
        smallServiceData:smallServiceData,
        eventCategoryData:eventCategoryData,
        workOrderSourceData:workOrderSourceData,
        faultLevelData:faultLevelData,
        faultLevelId:faultLevelId,
        upgradeLevelData:upgradeLevelData,
        upgradeLevelId:upgradeLevelId,
        workOrderBot:workOrderBot,
        workOrderTypeData:workOrderTypeData,
        unitStaffInfoData:unitStaffInfoData,
        unitStaffInfoPid:unitStaffInfoPid,
        unitStaffInfoCid:unitStaffInfoCid,
      unitData:unitData,
      unitId:unitId,
      workOrderNameData:workOrderNameData,
      workOrderNameId:workOrderNameId,
      workOrderTypeAllData:workOrderTypeAllData,
      personnelMagTree: personnelMagTree,
      positionData: positionData,
      departMentPname: departMentPname,
      projectFirmData: projectFirmData,
      siteviewasdData: siteviewasdData,
      proMagTree: proMagTree,
      faultTypeDetailData: faultTypeDetailData,
      unitTypeData: unitTypeData,
      magUnitData: magUnitData,
      slaColorData:slaColorData,
      slaColorId:slaColorId,
      editAreasId:editAreasId,
      editMagUnitTypesId:editMagUnitTypesId,
      editMagUnitRecId:editMagUnitRecId,
      editMagUnitId:editMagUnitId,
      editMagUnitIdTree:editMagUnitIdTree,
      unitTypeDataTree:unitTypeDataTree,
   unitTypeDataTreeId:unitTypeDataTreeId,
   brandData:brandData,
   assetsStatus:assetsStatus,
   locationData:locationData,
   applevreSponseData:applevreSponseData,
   productType:productType,
   assetsType:assetsType,
   childAssetsType:childAssetsType,
   productChildType:productChildType
  }
}
export default connect(mapStateToProps)(DataDic)
