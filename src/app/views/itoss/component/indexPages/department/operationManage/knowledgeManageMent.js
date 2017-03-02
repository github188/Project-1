import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, link, IndexRoute, History} from 'react-router';
var ReactWidgets = require('react-widgets');
import Store from '../../../../../../server/store';
import * as OperationManage from "../../../../../../actions/operation_action";
import * as dictActions from '../../../../../../actions/dataDict_action';
import { connect } from 'react-redux';
function editPic(value, row) {    
        if (row.STATUSCODE == 0) {
            return '<a class="RevEditKnowledge" href="javascript:void(0)" title="待审核"><img src="img/lefticon/knowledgeRes.png"/></a>';
        }else if (row.STATUSCODE == 2) {
            return '<a class="EditKnowledge" href="javascript:void(0)" title="发布"><img src="img/lefticon/knowledgePut.png"/></a>';
        } else if (row.STATUSCODE == 1){
            return '<a class="EditKnowledgeNopass" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
        }else{
        	return ''
        }
}
function deletePic() {
    return '<a class="DelKnowledge" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.knowledgeTableEvent = {
	//审核知识库
    'click .RevEditKnowledge':function(e, value, row, index){
           _this.props.get_faultTypeDetailAllData();
            var pName = row.FNAME;
            var cName = row.FFNAME;
    //      var fName = row.FFNAME;
    	 _this.history.pushState(null,'operationManage/knowledgeMangeMentReviewed');    	 	
    	 	 $("#reviewedknowledgeFaultBigClass").find(".rw-input").text(row.FNAME);
    	 	 $("#reviewedknowledgeFaultSmallClass").find(".rw-input").text(row.FFNAME);
		     $("#reviewedknowledgeTheme").val(row.THEME);
		     $("#reviewedknowledgePhenomenon").val(row.FAULTPHENOMENON);
		     $("#reviewedknowledgeAnalysis").val(row.FAULTANALYSIS);
		     $("#reviewedknowledgeSolution").val(row.SOLVINGSTEPS);
		     $("#reviewedknowledgeAnalysisSum").val(row.ANALYSISSUMMARY);
    	
    	    var  reviewStatusCode = row.STATUSCODE
    	    console.log('状态码')
    	    console.log(reviewStatusCode)
    	    
    	   var deleteKnowledgeId = row.KLGBID;
    	    console.log('编辑id')
  		    console.log(deleteKnowledgeId)
  		  _this.props.setReviewStatusCode(reviewStatusCode);
          _this.props.setDeleteKnowledgeId(deleteKnowledgeId);
    },
    //发布知识库	
    'click .EditKnowledge':function(e, value, row, index){
        _this.props.get_faultTypeDetailAllData();
        var pName = row.FNAME;
        var cName = row.FFNAME;
  //      var fName = row.FFNAME;
    	 _this.history.pushState(null,'operationManage/knowledgeMangeMentPut');
    	 	
    	 	 $("#putknowledgeFaultBigClass").find(".rw-input").text(row.FNAME);
    	 	 $("#putknowledgeFaultSmallClass").find(".rw-input").text(row.FFNAME);
		     $("#putknowledgeTheme").val(row.THEME);
		     $("#putknowledgePhenomenon").val(row.FAULTPHENOMENON);
		     $("#putknowledgeAnalysis").val(row.FAULTANALYSIS);
		     $("#putknowledgeSolution").val(row.SOLVINGSTEPS);
		     $("#putknowledgeAnalysisSum").val(row.ANALYSISSUMMARY);
		   var  reviewStatusCode = row.STATUSCODE
		    console.log('rowd的值')
		    console.log(row)
    	    console.log('knowledge的状态码')
    	    console.log(reviewStatusCode)
    	 
    	    var deleteKnowledgeId = row.KLGBID;
    	    console.log('编辑id')
  		    console.log(deleteKnowledgeId)
  		  _this.props.setReviewStatusCode(reviewStatusCode);
         _this.props.setDeleteKnowledgeId(deleteKnowledgeId);
    },
    //删除知识库
    'click .DelKnowledge':function(e, value, row, index){
		$("#deleteKnowledgeModal").modal("show");	           
         var deleteKnowledgeId = row.KLGBID;
        _this.props.setDeleteKnowledgeId(deleteKnowledgeId);
    },
    //审核不通过，再次 编辑
    'click .EditKnowledgeNopass':function(e, value, row, index){
            _this.props.get_faultTypeDetailAllData();
    	    _this.history.pushState(null,'operationManage/knowledgeMangeMentEdit');   	 	
    	 	 $("#editknowledgeFaultBigClass").find(".rw-input").text(row.FNAME);
    	 	 $("#editknowledgeFaultSmallClass").find(".rw-input").text(row.FFNAME);
		     $("#editknowledgeTheme").val(row.THEME);
		     $("#editknowledgePhenomenon").val(row.FAULTPHENOMENON);
		     $("#editknowledgeAnalysis").val(row.FAULTANALYSIS);
		     $("#editknowledgeSolution").val(row.SOLVINGSTEPS);
		     $("#editknowledgeAnalysisSum").val(row.ANALYSISSUMMARY);
    	    var  reviewStatusCode = row.STATUSCODE
    	    console.log('状态码')
    	    console.log(reviewStatusCode)
    	    
    	   var deleteKnowledgeId = row.KLGBID;
    	    console.log('编辑id')
  		    console.log(deleteKnowledgeId)
  		  _this.props.setReviewStatusCode(reviewStatusCode);
          _this.props.setDeleteKnowledgeId(deleteKnowledgeId);
          _this.props.setFaultSubPid(row.FAULTID);
          _this.props.setFaultSubId(row.FAULTSUBID);    
    },
}

var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;

var KnowledgeManageMent = React.createClass({
   mixins: [History],
    getInitialState: function () {
        _this = this;
        return {
            isOk: 1,
            parentIndex: 0,
//          parentIndexEdit:0
        }
    },

    componentDidUpdate:function(){   	
       var bdata = this.props.knowledgeManagerData;
      $("#knowledgeTableList").bootstrapTable("load",bdata);
    },   
     onDblClickRow:function(row){
     	 	const { dispatch } = this.props;
     	 dispatch(OperationManage.get_knowledgeManagerData());
     	 _this.history.pushState(null,'operationManage/knowledgeMangeMentDetail');
     	     $("#detailknowledgeFaultBigClass").val(row.FNAME);
		     $("#detailknowledgeFaultSmallClass").val(row.FFNAME);
		     $("#detailknowledgeTheme").val(row.THEME);
		     $("#detailknowledgePhenomenon").val(row.FAULTPHENOMENON);
		     $("#detailknowledgeAnalysis").val(row.FAULTANALYSIS);
		     $("#detailknowledgeSolution").val(row.SOLVINGSTEPS);
		     $("#detailknowledgeAnalysisSum").val(row.ANALYSISSUMMARY);
		    			  
		},
  		componentDidMount:function(){ 			
  		   $("#knowledgeTableList").bootstrapTable({
            columns: [
                      {
                      	field:'state',
                     	checkbox:true
                      },
	                  {
			            title: '主题',
			            field: 'THEME',
			            halign: 'left',
			            align: 'left',     
			            sortable: true
			          },{
			          	title: '提交人',
			            field: 'LASTMODBY',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '故障大类',
			            field: 'FNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '故障细类',
			            field: 'FFNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },
			          {
			          	title: '点击次数',
			            field: 'CLICKNUMBER',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },
			          {
			          	title: '时间',
			            field: 'LASTMODDATETIME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },
			          {
			          	title: '状态',
			            field: 'STATUSNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },
			          {
			            title: '流程',
			            halign: 'left',
			            align: 'left',
			            events: knowledgeTableEvent,
			            formatter: editPic
			          },{
			            title: '删除',
			            halign: 'left',
			            align: 'left',
			            events:knowledgeTableEvent,
			            formatter: deletePic
			          }
            ],
            data: [],
            onDblClickRow: this.onDblClickRow,
            exportDataType: "all"
        });
       
        titleBoxObj =document.createElement("div");
        let titleBoxObjA = document.createElement("a");
        let titleBoxObjW = document.createElement("span");
        titleBoxObjW.innerHTML = "知识库管理";
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
            _this.props.get_knowledgeManagerData();
            
        };
        // refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';

        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建知识库');
        addBtnObj.innerHTML = "新建知识库";
        addBtnObj.onclick = function () {   
            $("#knowledgeFaultBigClass").find(".rw-input").text("请选择");
			$("#knowledgeFaultSmallClass").find(".rw-input").text("请选择");
			 _this.history.pushState(null,'operationManage/knowledgeMangeMentNew');
           _this.props.get_faultTypeDetailAllData();
        };
        // addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
            var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
            btnGroup1.appendChild(titleBoxObj,btnGroup1);
        $(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#knowledgeTableList thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
        $(".btn").css({"margin-bottom":"4px"});
        $(".fixed-table-toolbar").css({"padding-top":"4px"});
        $(".btn-refresh").css({"background":"#d8e1e5"});
    },
    //删除知识库
     deleteKnowledgeData:function () {
        this.props.delete_knowledgeData();
        $("#deleteKnowledgeModal").modal("hide");
    },    
  render: function() {
        var parents = this.props.faultSubData;
        var parentIndex = this.state.parentIndex;
        var parentIndexEdit = this.state.parentIndexEdit;
        var subIndex = this.state.subIndex;
        var subIndexEdit = this.state.subIndexEdit;
        var list = [],list1=[];
        var list = parents;
        for (var i = 0; i < parents.length; i++) {
            list1.push(parents[i].list1);
        };
    return (
    		 <div className='orginMag'>      
                {/*删除知识库管理------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteKnowledgeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除知识库</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此知识库吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteKnowledgeData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <table id="knowledgeTableList"
                    	  
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
 function mapStateToProps(state) {
	  const {knowledgeManagerData,faultid,faultsubid,flowPicData} = state.operationReducer
	  const {faultSubData} = state.dataDictReducer
	
		  return {
		    knowledgeManagerData:knowledgeManagerData,
		    faultid:faultid,
		    faultsubid:faultsubid,
			faultSubData,
			flowPicData:flowPicData
		  }
		}
export default connect(mapStateToProps)(KnowledgeManageMent)
