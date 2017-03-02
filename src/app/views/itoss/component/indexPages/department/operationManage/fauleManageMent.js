import React, {PropTypes} from "react";
import ReactDom from "react-dom";
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var ReactWidgets = require('react-widgets');
import {connect} from "react-redux";
function editPic(value,row){
    if(row.STATUS == "待处理"){
        return '<a class="fauleEdit" href="javascript:void(0)" title="待处理"><img src="img/images/dcl_03.png"/></a>';
    }else if(row.STATUS == "待评价"){
        return '<a class="fauleEdit" href="javascript:void(0)" title="待评价"><img src="img/images/dpj_03.png"/></a>';
    }else if(row.STATUS == "待关闭"){
        return '<a class="fauleEdit" href="javascript:void(0)" title="待关闭"><img src="img/images/dgb_03.png"/></a>';
    }else {
        return "";
    }
    /* return '<a class="slaMentEdit" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';*/
}
function flowPic(){
    return '<a class="fauleFlow" href="javascript:void(0)" title="流转"><img src="img/images/lz_03.png"/></a>';
}
var _this;
window.fauleManageMentTableEvent = {
    'click .fauleEdit':function (e, value, row, index) {

    },
    'click .fauleFlow':function (e, value, row, index) {

    }
};
let refreshBtnObj,addBtnObj,moreBtnObj;
var FauleManageMent = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this = this;
        return{
            isOk:1,
            fauleStatusDataIndex:0,
            createTime:"",
            fauleWorkOrderTypeDataIndex:0,
            serviceLevelVal:""
        }
    },
    componentDidUpdate:function () {
      let bdata = this.props.workOrderList;
       $("#fauleTableList").bootstrapTable("load",bdata);
    },
    componentDidMount:function () {
        $("#fauleTableList").bootstrapTable({
            columns: [
                {
                    field: 'state',
                    checkbox: true
                },
                {
                    title: '故障号',
                    field: 'WORKORDERNUM',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '故障主题',
                    field: 'SUBJECT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '服务级别',
                    field: 'FAULTLEVELID',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '学校名称',
                    field: 'UNITNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '创建人',
                    field: 'CREATEBY',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '创建日期',
                    field: 'CREATEDATA_TIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '处理人',
                    field: 'CURRENT_HANDLE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '剩余响应时间',
                    field: 'RESPONSETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '剩余解决时间',
                    field: 'COMPLETETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '服务类型',
                    field: 'WORKFLOW_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '评分',
                    field: 'SCORE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '状态',
                    field: 'STATUS',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    //events: slaManageMentTableEvent,
                    formatter: editPic
                }, {
                    title: '流程',
                    halign: 'left',
                    align: 'left',
                    //events: slaManageMentTableEvent,
                    formatter: flowPic
                }
            ],
            data: [],
            //onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
          let filters = [
            {key:"PARAM",value:4}
          ]
          _this.props.get_workOrderList(filters);
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '故障新建');
        addBtnObj.innerHTML = "故障新建";
        addBtnObj.onclick = function () {
            /*----新建SLA--*/
     //       alert("新建++++++++++++++++++++");
            _this.history.pushState(null,"operationManage/fauleAddManageMent")
        };
        moreBtnObj = document.createElement('button');
        moreBtnObj.setAttribute('class', 'btn btn-refresh');
        moreBtnObj.setAttribute('id', 'moreBtn');
        moreBtnObj.setAttribute('type', 'button');
        moreBtnObj.setAttribute('name', 'add');
        moreBtnObj.setAttribute('title', '更多条件');
        moreBtnObj.innerHTML = "更多条件";
        moreBtnObj.onclick = function () {
            /*----新建SLA--*/
          $("#workOrderStatus").find(".rw-input").text("请选择");
          $("#workOrderType").find(".rw-input").text("请选择");
            $("#moreModal").show();

        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(moreBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        $(".fixed-table-toolbar").css({ "margin-top": "-30px"});
        $(".form-control").css({ "display": "inline-block", "width": "243px" });
        $("#fauleTableList thead>tr").css({ "background": "#d8e1e5" });
        $("#moreBtn").css({"backgroundColor":"#aac0ae"});
        $(".btn").css({"margin-bottom":"4px"});
        $(".btn-refresh").css({"background":"#d8e1e5"});
        $("#moreBtn").click(function () {
            $(this).css({"height":"43px"});
        });
        $("#createDate").on("change",function () {
            let createTime = $(this).val();
            //startTime = $(this).val();
            _this.setState({createTime:createTime});
        });
        $("#serviceLevel").on("change",function () {
          let val = $(this).val();
          if(val == "请选择"){
            _this.setState({serviceLevelVal:""})
          }
          _this.setState({serviceLevelVal:val})
        })
    },
    _closeMoreModal:function () {
      $("#moreModal").hide();
      $("#moreBtn").css({"height":"34px"});
    },
    setFauleStatusId:function (e) {
      let fauleStatusData = this.props.fauleStatusData;
      let curId = e.RecId;
      let that = this;
      for (let i=0;i<fauleStatusData.length;i++){
          let fauleStatusDataId = fauleStatusData[i].RecId;
          if(curId == fauleStatusDataId){
              that.setState({fauleStatusDataIndex:i+1});
          }
      }
      $("#workOrderStatus").find(".rw-input").text(e.DictDataName);
      _this.props.setFauleStatusId(curId);
    },
    setFauleWorkOrderTypeId:function (e) {
      let fauleWorkOrderTypeData = this.props.fauleWorkOrderTypeData;
      let curId = e.RecId;
      let that = this;
      for (let i=0;i<fauleWorkOrderTypeData.length;i++){
          let fauleWorkOrderTypeDataId = fauleWorkOrderTypeData[i].RecId;
          if(curId == fauleWorkOrderTypeDataId){
              that.setState({fauleWorkOrderTypeDataIndex:i+1});
          }
      }
      $("#workOrderType").find(".rw-input").text(e.DictDataName);
      _this.props.setFauleWorkOrderTypeId(curId);
    },
    _checkMoreCondition:function () {
        const {fauleStatusId,fauleWorkOrderTypeId} = this.props;
        let workOrderNum = $("#workOrderNum").val();
        let actorUser = $("#actorUser").val();
        let workOrderTheme = $("#workOrderTheme").val();
        let creater = $("#creater").val();
        let schoolName = $("#schoolName").val();
        let filters = [
          {key:"PARAM",value:4},
          {key:"WORKORDERNUM",value:workOrderNum},
          {key:"FAULTLEVELID",value:_this.state.serviceLevelVal},
          {key:"CURRENT_HANDLE",value:actorUser},
          {key:"SUBJECT",value:workOrderTheme},
          {key:"CREATEBY",value:creater},
          {key:"UNITNAME",value:schoolName},
          {key:"CREATEDATA_TIME",value:_this.state.createTime}
        ]
        if(fauleStatusId != undefined || fauleStatusId != null || fauleStatusId != ""){
          filters.push({key:"STATUSID",value:fauleStatusId});
        }
        if(fauleWorkOrderTypeId != undefined || fauleWorkOrderTypeId != null || fauleWorkOrderTypeId != ""){
          filters.push({key:"WORKFLOW_ID",value:fauleWorkOrderTypeId});
        }else {
          filters.push({key:"WORKFLOW_ID",value:0});
        }
        _this.props.get_workOrderList(filters);
        $("#moreModal").hide();
        $("#moreBtn").css({"height":"34px"});
    },
    _resetMoreModal:function () {
      $("#workOrderNum").val("");
      $("#actorUser").val("");
      $("#workOrderTheme").val("");
      $("#creater").val("");
      $("#schoolName").val("");
      $("#workOrderType").find(".rw-input").text("请选择");
      $("#workOrderStatus").find(".rw-input").text("请选择");
      $("#createDate").val("");
    },
    render:function () {
      const {fauleStatusData,fauleWorkOrderTypeData} = this.props;
      let _this = this;
      let fauleStatusDataIndex = this.state.fauleStatusDataIndex;
      let fauleStatusDataArr = [];
      fauleStatusDataArr.push({RecId:"",DictDataName:""});
      for(let i = 0;i < fauleStatusData.length; i++){
          fauleStatusDataArr.push(fauleStatusData[i]);
      }
      let fauleWorkOrderTypeDataIndex = this.state.fauleWorkOrderTypeDataIndex;
      let fauleWorkOrderTypeDataArr = [];
      fauleWorkOrderTypeDataArr.push({RecId:"",DictDataName:""});
      for(let i = 0;i < fauleWorkOrderTypeData.length; i++){
          fauleWorkOrderTypeDataArr.push(fauleWorkOrderTypeData[i]);
      }
        return(
            <div className="fauleManger">
                <div className="fauleTitle" style={{"font-size":"16px","height":"20px","margin":"16px 0 0 16px"}}>
                <span style={{"width":"4px","height":"16px","background-color":"#8eddf2","display":"inline-block","margin-right":"10px"}}></span>
                故障管理（待办 <span style={{"color":"#8eddf2"}}>11</span> ）
            </div>
            <div id="moreModal" style={{"width":"136.3rem","border":"1px solid #aac0ae","position":"absolute","zIndex":"1","backgroundColor":"#fff","top":"105px","left":"233px","display":"none"}}>
                <div id="moreModalLeft" style={{"display":"inline-block","width":"32%","marginLeft":"4%"}}>
                    <div className="form-group">
                        <label htmlFor="workOrderNum" className="col-sm-2 control-label" style={{"margin":"15px 0 15px 0"}}>工单号</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            <input type="text" className="form-control" id="workOrderNum" name="workOrderNum" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceLevel" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">服务级别</label>
                        <div className="col-sm-10 " style={{"margin":"15px 0 15px 0"}}>
                          <select name="serviceLevel" id="serviceLevel" className="form-control" style={{"width":"243px"}}>
                              <option value="请选择">请选择</option>
                              <option value="一级">一级</option>
                              <option value="二级">二级</option>
                              <option value="三级">三级</option>
                              <option value="四级">四级</option>
                              <option value="五级">五级</option>
                          </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="actorUser" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">处理人</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            <input type="text" className="form-control" id="actorUser" name="actorUser" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div id="moreModalMiddle" style={{"display":"inline-block","width":"32%"}}>
                    <div className="form-group">
                        <label htmlFor="workOrderTheme" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">工单主题</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            <input type="text" className="form-control" id="workOrderTheme" name="workOrderTheme" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="creater" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">创建人</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            <input type="text" className="form-control" id="creater" name="creater" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="workOrderType" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">服务类型</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            {/*<input type="text" className="form-control" id="workOrderType" name="workOrderType" placeholder=""/>*/}
                            <ReactWidgets.DropdownList id="workOrderType" data={fauleWorkOrderTypeDataArr} value={fauleWorkOrderTypeDataArr[fauleWorkOrderTypeDataIndex]} textField='DictDataName' onSelect={this.setFauleWorkOrderTypeId}/>
                        </div>
                    </div>
                </div>
                <div id="moreModalRight" style={{"display":"inline-block","width":"32%"}}>
                    <div className="form-group">
                        <label htmlFor="workOrderStatus" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">状态</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            {/*<input type="text" className="form-control" id="workOrderStatus" name="workOrderStatus" placeholder=""/>*/}
                            <ReactWidgets.DropdownList className="form-control" style={{"width":"60%"}} id="workOrderStatus" data={fauleStatusDataArr} value={fauleStatusDataArr[fauleStatusDataIndex]} textField='DictDataName' onSelect={this.setFauleStatusId}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="schoolName" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">学校名称</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            <input type="text" className="form-control" id="schoolName" name="schoolName" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="createDate" style={{"margin":"15px 0 15px 0"}} className="col-sm-2 control-label">创建日期</label>
                        <div className="col-sm-10" style={{"margin":"15px 0 15px 0"}}>
                            <input type="date" className="form-control" id="createDate" name="createDate" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div id="buttonGroups" style={{"margin":"0 auto","width":"13%","marginBottom":"16px"}}>
                    <button type="button" className="btn btn-default" style={{"color":"#85c5f6"}} onClick={this._checkMoreCondition}>查询</button>
                    <button type="reset" className="btn btn-default" style={{"marginLeft":"10%","color":"#85c5f6"}} onClick={this._resetMoreModal}>重置</button>
                    <button type="button" className="btn btn-default" style={{"marginLeft":"10%"}} onClick={this._closeMoreModal}>取消</button>
                </div>
            </div>
                <div className="col-md-12">
                    <table id="fauleTableList"
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
function myStateToProps(state) {
    const {workOrderList,fauleStatusData,fauleStatusId,fauleWorkOrderTypeData,fauleWorkOrderTypeId} = state.operationReducer;
    return {
      workOrderList:workOrderList,
      fauleStatusData:fauleStatusData,
      fauleWorkOrderTypeData:fauleWorkOrderTypeData,
      fauleStatusId:fauleStatusId,
      fauleWorkOrderTypeId:fauleWorkOrderTypeId
    }
}
export default connect(myStateToProps)(FauleManageMent);
