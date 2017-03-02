import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
// var MagUnitTree = require('../../../../monitorTree/magUnitTree');
//import { connect } from 'react-redux';
//import * as dictActions from '../../../../../../../actions/dataDict_action';
//var Store = require('../../../../../../../server/store');
var ReactWidgets = require('react-widgets');
function editPic() {
    return '<a class="EditMagUnit" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
}
function deletePic() {
    return '<a class="DelMagUnit" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.magUnitTableEvent = {
    'click .EditMagUnit':function(e, value, row, index){
        //接口文档单位编码或者序号
        var unitNumber =row.UNITNUMBER
        //接口文档单位名称
        var unitName =row.UNITNAME
          //接口文档单位地址
        var unitAddress = row.UNITADDRESS   
//      var editMagUnitId = 999
        var editMagUnitIdTree = 999
        
        
        //接口文档单位类型id组
        var editMagUnitTypesId = row.UNITTYPEIDS
        var editMagUnitRecId = row.RECID
        var pName = row.PNAME
        var pPhone = row.PPHONE
        var areaName = row.parentAreaName
        var unitTypesName = row.UNITTYPENAME
        var RecId = row.RecId;
        //接口文档子区域id 最有用
        var editAreasId = row.AREASID
        console.log('编辑的全部值')
        console.log(row)
        console.log('子区域的id')
        console.log(editAreasId)
         //接口文档单位编码或者序号
        $("#editMagUnitNumberInput").val(unitNumber);
        $("#editMagUnitlNameInput").val(unitName);
        $("#editMagUnitlHeadInput").val(pName);
        $("#editMagUnitlTelInput").val(pPhone);
        $("#editMagUnitlAreaInput").find(".rw-input").text(row.AREANAME);		
        $("#editMagUnitlChildAreaInput").find(".rw-input").text(row.AREASNAME);
        $("#editMagUnitAdressInput").val(unitAddress);  
        //子区域的id值
        console.log('editMagUnitRecId 单位类型id组')
        console.log(editMagUnitRecId)
        
        _this.props.setEditAreasId(editAreasId); 
//      _this.props.setEditMagUnitTypesId(editMagUnitTypesId);  
        _this.props.setEditMagUnitRecId(editMagUnitRecId);  
//      _this.props.setEditMagUnitId(editMagUnitIdTree);
        _this.props.setEditMagUnitIdTree(editMagUnitIdTree);
        //编辑单位信息 获取 穿过
//      _this.props.editTreeId_unitTypeDataTree();
        _this.props.get_unitTypeDataTreeId();
//       const { dispatch } = _this.props;
//  	dispatch(dictActions.setEditMagUnitRecId(editMagUnitRecId));
//      dispatch(dictActions.get_unitTypeDataTreeId())
        var unitTypeDataTreeId = _this.props.unitTypeDataTreeId
		  	console.log('unitTypeDataTreeId  tree 编辑单位信息 页面')
		  	console.log(unitTypeDataTreeId)
			  			var setting = {
							check: {
								enable: true
							},
							data: {
								simpleData: {
									enable: true
								}
							},
							 callback:{
					                onCheck:onCheck
					            }
						};
				   function onCheck(event,treeId,treeNode){
			            var treeObjEdit=$.fn.zTree.getZTreeObj("unitTypeTreeEdit"),
			            unitTypeNodesEdit=treeObjEdit.getCheckedNodes(true),
			            unitTypeNodesChecked="[";
			            for(var i=0;i<unitTypeNodesEdit.length;i++){
			            	var unitTypeNodesObjEdit = "{'resourceId':'" + unitTypeNodesEdit[i].id + "','resourceName':'" + unitTypeNodesEdit[i].name + "','parentId':'" + unitTypeNodesEdit[i].pId + "'},";
			            	  if (i == unitTypeNodesEdit.length - 1) {
				                    var unitTypeNodesObjEdit = "{'resourceId':'" + unitTypeNodesEdit[i].id + "','resourceName':'" + unitTypeNodesEdit[i].name + "','parentId':'" + unitTypeNodesEdit[i].pId + "'}]";
				                }
			               unitTypeNodesChecked += unitTypeNodesObjEdit
			            }
			             console.log("unitTypeNodesChecked")
			             console.log(unitTypeNodesChecked)
			             _this.props.setUnitTypeNodesChecked(unitTypeNodesChecked)
			             //unitTypeNodesChecked 和获取增加用的是一个
//			             this.props.setUnitTypeNodesChecked(unitTypeNodesChecked)
		            }
				var unitTypeDataTreePid=[]
				var unitTypeDataTreeResId=[]
				var unitTypeDataTreeName=[]
				var unitTypeDataTreeChecked=[]
				for(var i=0;i<unitTypeDataTreeId.length;i++){
					unitTypeDataTreePid.push(unitTypeDataTreeId[i].parentId)
					unitTypeDataTreeResId.push(unitTypeDataTreeId[i].resourceId)
					unitTypeDataTreeName.push(unitTypeDataTreeId[i].resourceName)
					unitTypeDataTreeChecked.push(unitTypeDataTreeId[i].checked)
				}
				var unitTypeDataTreeList = []
				for(var i=0;i<unitTypeDataTreePid.length;i++){
					unitTypeDataTreeList.push({id:unitTypeDataTreeResId[i],pId:unitTypeDataTreePid[i],name:unitTypeDataTreeName[i],checked:unitTypeDataTreeChecked[i]})
				}
//				console.log("unitTypeDataTreeList")
//				console.log(unitTypeDataTreeList)
				var zNodesUnitType = unitTypeDataTreeList
				$(document).ready(function(){
					 $.fn.zTree.init($("#unitTypeTreeEdit"), setting, zNodesUnitType);
				});
        
        $("#editMagUnitModal").modal("show"); 
//      
    },
    'click .DelMagUnit':function(e, value, row, index){
		$("#deleteMagUnitModal").modal("show");    
        var id = row.RECID;
        console.log(id)
        _this.props.setMagUnitId(id);
    }
};
//	function unitTypeFormatter(value, row){
//		var unitTypes = eval(value);
//		var organizations = "";
//		if(unitTypes != null && unitTypes.length > 0){
//			for(var i = 0; i< unitTypes.length; i++){
//				if(i != unitTypes.length - 1){
//					organizations = organizations + unitTypes[i].FDNAME + ",";
//				}else if(i == unitTypes.length - 1){
//					organizations = organizations + unitTypes[i].FDNAME;
//				}
//			}
//		}
//		return organizations;
//	};
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
var setAnnBtnObj;
var MagUnit = React.createClass({
    // mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            parentIndex: 0,
            parentIndexEdit:0,
            subIndex:0,
	        	subIndexEdit:0,
	        	faultId: "",
	        	faultSubId:""
        }
    },
    componentDidUpdate:function(){
//      var unitTypeDataTreeId = this.props.unitTypeDataTreeId
      var bdata = this.props.magUnitData;
      $("#magUnitTableList").bootstrapTable("load",bdata);
    },
//	 componentWillMount:function(){
//	 	const { dispatch } = _this.props;
//      dispatch(dictActions.get_unitTypeDataTreeId())
//      var unitTypeDataTreeId = this.unitTypeDataTreeId
//      console.log("unitTypeDataTreeId 更新")
//      console.log(unitTypeDataTreeId)
//	 },
    componentDidMount: function () {
    	$('#editMagUnitlChildAreaInput').css({"border":"1px solid #ccc","line-height":"34px","height":"34px","border-radius":"4px","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .075)"})
    	$('#editMagUnitlAreaInput').css({"border":"1px solid #ccc","line-height":"34px","height":"34px","border-radius":"4px","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .075)"})
    	$('#magUnitlAreaInputChildren').css({"border":"1px solid #ccc","line-height":"34px","height":"34px","border-radius":"4px","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .075)"})
    	$('#magUnitlAreaInput').css({"border":"1px solid #ccc","line-height":"34px","height":"34px","border-radius":"4px","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .075)"})
    	   //20120129 单位管理树
        $("#magUnitTableList").bootstrapTable({
            columns: [
	                  {
			            title: '序号',
			            field: 'UNITNUMBER',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '名称',
			            field: 'UNITNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '负责人',
			            field: 'PNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '联系电话',
			            field: 'PPHONE',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '区域',
			            field: 'AREANAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '子区域',
			            field: 'AREASNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '单位类型',
			            field: 'UNITTYPENAME',
			            halign: 'left',
			            align: 'left',
			           // formatter: unitTypeFormatter,
			            sortable: true
			          },{
			            title: '地址',
			            field: 'UNITADDRESS',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '编辑',
			            halign: 'left',
			            align: 'left',
			            events: magUnitTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events: magUnitTableEvent,
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
        titleBoxObjW.innerHTML = "单位管理";
        titleBoxObj.appendChild(titleBoxObjA);
        // console.log(titleBoxObj.appendChild(titleBoxObjA));
        titleBoxObj.setAttribute("class","pull-left");
        // titleBoxObj.innerHTML = "父区域管理";
            // var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-info');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
            _this.props.get_magUnitData();
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-danger');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '添加单位');
        addBtnObj.innerHTML = "添加单位";
        addBtnObj.onclick = function () {
            /*----新建单位单位--*/
            $("#magUnitlAreaInput").find(".rw-input").text("请选择");
            $("#magUnitlAreaInputChildren").find(".rw-input").text("请选择");
            $("#addMagUnitModal").modal("show")
             _this.props.get_unitTypeDataTree();
             var unitTypeDataTree = _this.props.unitTypeDataTree
		  	console.log('unitTypeDataTree  tree 页面')
		  	console.log(unitTypeDataTree)
		  		var setting = {
						check: {
							enable: true
						},
						data: {
							simpleData: {
								enable: true
							}
						},
						 callback:{
				                onCheck:zTreeOnCheck
				            }
					};
				   function zTreeOnCheck(event,treeId,treeNode){
			            var treeObj=$.fn.zTree.getZTreeObj("unitTypeTree"),
			            unitTypeNodes=treeObj.getCheckedNodes(true),
			            unitTypeNodesChecked="[";
			            for(var i=0;i<unitTypeNodes.length;i++){
			            	var unitTypeNodesObj = "{'resourceId':'" + unitTypeNodes[i].id + "','resourceName':'" + unitTypeNodes[i].name + "','parentId':'" + unitTypeNodes[i].pId + "'},";
			            	  if (i == unitTypeNodes.length - 1) {
				                    var unitTypeNodesObj = "{'resourceId':'" + unitTypeNodes[i].id + "','resourceName':'" + unitTypeNodes[i].name + "','parentId':'" + unitTypeNodes[i].pId + "'}]";
				                }
			               unitTypeNodesChecked += unitTypeNodesObj
			            }
			             console.log("unitTypeNodesChecked")
			             console.log(unitTypeNodesChecked)
			             _this.props.setUnitTypeNodesChecked(unitTypeNodesChecked)
//			             this.props.setUnitTypeNodesChecked(unitTypeNodesChecked)
		            }
				var unitTypeDataTreePid=[]
				var unitTypeDataTreeResId=[]
				var unitTypeDataTreeName=[]
				var unitTypeDataTreeChecked=[]
				for(var i=0;i<unitTypeDataTree.length;i++){
					unitTypeDataTreePid.push(unitTypeDataTree[i].parentId)
					unitTypeDataTreeResId.push(unitTypeDataTree[i].resourceId)
					unitTypeDataTreeName.push(unitTypeDataTree[i].resourceName)
					unitTypeDataTreeChecked.push(unitTypeDataTree[i].checked)
				}
				var unitTypeDataTreeList = []
				for(var i=0;i<unitTypeDataTreePid.length;i++){
					unitTypeDataTreeList.push({id:unitTypeDataTreeResId[i],pId:unitTypeDataTreePid[i],name:unitTypeDataTreeName[i],checked:unitTypeDataTreeChecked[i]})
				}
//				console.log("unitTypeDataTreeList")
//				console.log(unitTypeDataTreeList)
				var zNodesUnitType = unitTypeDataTreeList
				$(document).ready(function(){
					 $.fn.zTree.init($("#unitTypeTree"), setting, zNodesUnitType);
				});
        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(titleBoxObj, btnGroup.childNodes[0]);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#magUnitTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"float":"left","font-size":"16px","margin-left":"-376px"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
    },
	     //添加下拉父区域
	    setMagUnitAdd:function(e){
	    	const { dispatch } = this.props;
		    var areaData = this.props.areaData;
		    var RecId = e.pId;
		    var that = this;
		    for(var i=0;i<areaData.length;i++){
		        var areaDataId = areaData[i].pId;
		        if(RecId == areaDataId){
		            that.setState({parentIndex:i});
		        };
		    };
		    $("#magUnitlAreaInput").find(".rw-input").text(e.pName);	
		    $("#magUnitlAreaInputChildren").find(".rw-input").text('请选择');
	    },
	    //添加下拉子区域
	    setMagSubUnitAdd:function(e){
	    	const { dispatch } = this.props;
		    var areaData = this.props.areaData;
		    var RecId = e.cId;
		    var that = this;
		    if(RecId==''){
		    	  $("#magUnitlAreaInputChildren").find(".rw-input").text('没有子区域');	
		    }else{
		    	for(var i=0;i<areaData.length;i++){
		        var areaDataId = areaData[i].cId;
		        if(RecId == areaDataId){
		            that.setState({subIndex:i});
		        };
		         $("#magUnitlAreaInputChildren").find(".rw-input").text(e.cName);	
		     };
		    };	      
	       this.props.setEditAreasId(RecId); 
	    },
	    //编辑父区域下拉
	    setMagUnitEdit:function(e){
		    var areaData = this.props.areaData;
		    var RecId = e.RecId;
		    var that = this;
		    for(var i=0;i<areaData.length;i++){
		        var areaDataId = areaData[i].RecId;
		        if(RecId == areaDataId){
		            that.setState({parentIndexEdit:i+1});
		        };
		    };
		    $("#editMagUnitlAreaInput").find(".rw-input").text(e.pName);
		    $("#editMagUnitlChildAreaInput").find(".rw-input").text('请选择');
	    },
	    //编辑子区域下拉
        setMagSubUnitEdit:function(e){
	    var areaData = this.props.areaData;
	    var RecId = e.cId;
	    var that = this;
	    if(RecId==''){
	    	  $("#editMagUnitlChildAreaInput").find(".rw-input").text('没有子区域');	
	    }else{
	    	for(var i=0;i<areaData.length;i++){
	        var areaDataId = areaData[i].cId;
	        if(RecId == areaDataId){
	            that.setState({subIndex:i});
	        };
	         $("#editMagUnitlChildAreaInput").find(".rw-input").text(e.cName);	
	     };
	    };	      
	    console.log('添加下拉子区域的id')
	    console.log(RecId)
         _this.props.setEditAreasId(RecId); 
    },
    saveMagUnitData:function(){
       var UNITNUMBER = $("#magUnitNumberInput").val();
       var UNITNAME = $("#magUnitlNameInput").val();
       var AREANAME = $("#magUnitlAreaInput").find(".rw-input").text();		
       var AREASNAME = $("#magUnitlAreaInputChildren").find(".rw-input").text();
       var UNITADDRESS = $("#magUnitAdressInput").val();  
    	if(UNITNUMBER == '' || UNITNAME == ''|| AREANAME=='请选择'|| AREASNAME=='请选择'|| UNITADDRESS=='' ){
          $("#addMagUnitModal").modal("hide");
	      $('#publicMessageModal').modal('show');
	      document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	      document.getElementById('publicMessageModalcontent').innerHTML = "请填全部名称"
	      $("#magUnitNumberInput").val('');
	      $("#magUnitlNameInput").val('');
	      $("#magUnitlAreaInput").find(".rw-input").text("请选择");
          $("#magUnitlAreaInputChildren").find(".rw-input").text("请选择");
	      $("#magUnitAdressInput").val(''); 
	      return false;
	    }
    	else{
	      this.props.onClickSave(22);
          $("#addMagUnitModal").modal("hide");
	    }
    	
    },
    onChangeDropDown:function () {   	
    },
    //保存
    editMagUnitData:function(){
        this.props.onClickEdit(22);
        $("#editMagUnitModal").modal("hide");
    },
    deleteMagUnit:function () {
        this.props.delete_magUnit(22);
        $("#deleteMagUnitModal").modal("hide");
    },
    render: function () {
    	var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var subIndex = this.state.subIndex;
        var subIndexEdit = this.state.subIndexEdit;
        var areaData = this.props.areaData;
        var magList = [];
        var magSubList =[];
        var magList = areaData;
        console.log(magList)
        for(var i=0;i<magList.length;i++){
            magSubList.push(magList[i].magSubList);            
        };
        return (
            <div className='magUnitMag'>
                {/*添加单位管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="addMagUnitModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">添加单位</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="magUnitNumberInput" className="col-sm-6 control-label">序号</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="magUnitNumberInput" name="magUnitNumberInput" placeholder="填写序号"/>
                                        </div>
                                        <p id="magUnitModalNumber" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="magUnitlNameInput" className="col-sm-6 control-label">名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="magUnitlNameInput" name="magUnitlNameInput" placeholder=""/>
                                        </div>
                                        <p id="magUnitModalName" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                   {/* <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="magUnitlHeadInput" className="col-sm-6 control-label">负责人</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="magUnitlHeadInput" name="magUnitlHeadInput"   placeholder=""/>
                                        </div>
                                        <p id="magUnitModalHead" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="magUnitlTelInput" className="col-sm-6 control-label">联系电话</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="magUnitlTelInput" name="magUnitlTelInput"  placeholder=""/>
                                        </div>
                                        <p id="magUnitModalTel" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                   </div>*/}
                                   <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="magUnitlAreaInput" className="col-sm-6 control-label">区域</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                           <ReactWidgets.DropdownList className="dataDictDropDown" data={magList} value={magList[parentIndex]} textField="pName" onSelect={this.setMagUnitAdd} onChange={this.onChangeDropDown} name='magUnitlAreaInput' id="magUnitlAreaInput" />
                                        </div>
                                   </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="magUnitlAreaInputChildren" className="col-sm-6 control-label">子区域</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                       		<ReactWidgets.DropdownList className="dataDictDropDown" data={magSubList[parentIndex]} textField="cName" value={magSubList[subIndex]}  onSelect={this.setMagSubUnitAdd} onChange={this.onChangeDropDown} name='magUnitlAreaInputChildren' id="magUnitlAreaInputChildren" />
                                       </div>
                                        <p id="magUnitModalChildArea" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group">
                                        <label for="magUnitTypeInput" className="col-sm-6 control-label">单位类型</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                        		 <div className="content_wrap">
																								<div className="zTreeDemoBackground left">
																									<ul id="unitTypeTree" className="ztree"></ul>
																								</div>
																							</div>
                                        </div>
                                        <p id="magUnitModalType" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="magUnitAdressInput" className="col-sm-6 control-label">详细地址</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="magUnitAdressInput" name="magUnitAdressInput" placeholder=""/>
                                        </div>
                                        <p id="magUnitModalAdress" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.saveMagUnitData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*编辑单位管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="editMagUnitModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">编辑单位</h4>
                            </div>
                            <div className="modal-body">
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <label for="editMagUnitNumberInput" className="col-sm-6 control-label">序号</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="editMagUnitNumberInput" name="editMagUnitNumberInput" placeholder="填写序号"/>
                                        </div>
                                        <p id="editMagUnitModalNumber" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="editMagUnitlNameInput" className="col-sm-6 control-label">名称</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="editMagUnitlNameInput" name="editMagUnitlNameInput" placeholder=""/>
                                        </div>
                                        <p id="editMagUnitModalName" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="editMagUnitlHeadInput" className="col-sm-6 control-label">负责人</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="editMagUnitlHeadInput" name="editMagUnitlHeadInput" disabled={true}  placeholder=""/>
                                        </div>
                                        <p id="editMagUnitModalHead" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="editMagUnitlTelInput" className="col-sm-6 control-label">联系电话</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="editMagUnitlTelInput" name="editMagUnitlTelInput" disabled={true}  placeholder=""/>
                                        </div>
                                        <p id="editMagUnitModalTel" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group  magUnkitListCss"  style={{"position":"relative"}}>
                                        <label for="editMagUnitlAreaInput" className="col-sm-6 control-label">区域</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                           <ReactWidgets.DropdownList className="dataDictDropDown" data={magList} value={magList[parentIndex]} textField="pName" onSelect={this.setMagUnitEdit} onChange={this.onChangeDropDown} name='editMagUnitlAreaInput' id="editMagUnitlAreaInput" />
                                        
                                     { /*<input type="text" className="form-control" id="editMagUnitlAreaInput" name="editMagUnitlAreaInput" placeholder=""/>*/}
                                       </div>
                                        <p id="editMagUnitModalArea" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group magUnkitListCss"  style={{"position":"relative"}}>
                                        <label for="editMagUnitlChildAreaInput" className="col-sm-6 control-label">子区域</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                       		<ReactWidgets.DropdownList className="dataDictDropDown" data={magSubList[parentIndex]} textField="cName" value={magSubList[subIndex]}  onSelect={this.setMagSubUnitEdit} onChange={this.onChangeDropDown} name='editMagUnitlChildAreaInput' id="editMagUnitlChildAreaInput" />
                                        
                                         { /* <input type="text" className="form-control" id="editMagUnitlChildAreaInput" name="editMagUnitlChildAreaInput" placeholder=""/>*/}
                                        </div>
                                        <p id="editMagUnitModalChildArea" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group">
                                        <label for="editMagUnitTypeInput" className="col-sm-6 control-label">单位类型</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                        			 <div className="content_wrap">
															<div className="zTreeDemoBackground left">
																	<ul id="unitTypeTreeEdit" className="ztree"></ul>
															</div>
													</div>
                                        </div>
                                        <p id="editMagUnitModalType" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                    <div className="form-group"  style={{"position":"relative"}}>
                                        <label for="editMagUnitAdressInput" className="col-sm-6 control-label">详细地址</label>
                                        <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="editMagUnitAdressInput" name="editMagUnitAdressInput" placeholder=""/>
                                        </div>
                                        <p id="editMagUnitModalAdress" style={{"position":"absolute","left":"358px","color":"red"}}></p>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.editMagUnitData}>保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除单位管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteMagUnitModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除单位</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此单位吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteMagUnit}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*单位管理列表*/}
                <div className="col-md-12">
                    <table id="magUnitTableList"
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
export default MagUnit
//function mapStateToProps(state) {
//const {unitTypeDataTreeId} = state.systemReducer;
//
//return {
//  unitTypeDataTreeId:unitTypeDataTreeId
//}
//}
//
//export default connect(mapStateToProps)(MagUnit)