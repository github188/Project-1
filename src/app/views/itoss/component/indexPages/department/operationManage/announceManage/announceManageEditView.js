/**
* 曹志强
* 新建公告
*/
require('bootstrap');
var React = require('react');
var ReactWidgets = require('react-widgets');
var Util = require('../../../../../../../utils/util');
import { connect } from 'react-redux';
var operationAction = require('../../../../../../../actions/operation_action');
var TopicObjectTree = require('../../../../monitorTree/topicObjectTree');
var ReactWidgets = require('react-widgets');
var ReactRouter = require('react-router');
var History = ReactRouter.History;

$(window).resize(function(){
  $.panelHeight(".panelBasic",150);
});

function createMarkup() { 
	return {
  	__html: '<textarea id="editor_approval" name="content" style="width:100%;height:600px;visibility:hidden;"></textarea>'
	}; 
};

function Shade(){
  var s = document.getElementById("shade");
  s.style.display = "none";
};

var _this;
var AnnounceManageEditView = React.createClass({
		mixins: [History],
    getInitialState: function() {
    	_this = this;
      return {
        topicName: "",
        topicContent:"",
        isDisable:true,
        isReview:false,
        isPublish:false,
        topicInfoListId:"",
        topicStatus:"",
        topicReviewDesc:""
      };
    },
    componentWillMount: function(){
    	let topicName = this.props.topicName;
    	let topicContent = this.props.topicContent;
    	let topicStatus = this.props.topicStatus;
    	let topicInfoListId = this.props.topicInfoListId;
    	let topicReviewDesc = this.props.topicReviewDesc;
    	this.setState({topicName:topicName});
    	this.setState({topicContent:topicContent});
    	this.setState({topicInfoListId:topicInfoListId});
    	this.setState({topicStatus:topicStatus});
    	this.setState({topicReviewDesc:topicReviewDesc})
    	if(topicStatus == "1"){
    		this.setState({isDisable:false})
    	}
    	
    },
    componentDidMount: function() {
    	
    		//审核：0；2：发布；1： 编辑
        let topicStatus = this.state.topicStatus;
        if (topicStatus == "0") {
            //待审核
            $("#reviewButton").show();
        } else if (topicStatus == "2") {
            //审核通过=待发布
            $("#publishButton").show();
        } else if (topicStatus == "1") {
            //审核不通过
            $("#saveButton").show();
            $("#topicReviewDesc").show();
        }
    	
      	$.panelHeight(".panelBasic",150);
        $("#noticeTheme").mouseover(function(){
            $(this).find(".alert-block").hide();
        });
        $("#topicInfo,#topicArea").mouseover(function(){
            $(this).find(".alert-block").hide();
        });
        // 初始化树的状态和编辑器的状态
	      try {
	        KindEditor.ready(function(K) {
	            window.editor = K.create('#editor_approval');
	        });
	        editor.html(this.state.topicContent);
	        editor.readonly(this.state.isDisable);
	      } catch (e) {
	
	      }
				$("#_select li").on("mouseover",function () {
            $(this).css("backgroundColor","#349ff1");
            $(this).css("color","#ffffff");
        });
        $("#_select li").on("mouseout",function () {
            $(this).css("backgroundColor","#ffffff");
            $(this).css("color","#349ff1");
        });
    },
    saveTopicInfo:function(){
    	var param = [];
    	editor.sync();
      var topicTile = $('#noticeTheme').val();
      var tContent = $('#editor_approval').val();
      if(tContent!= null && tContent!= "" && tContent != undefined){
      	var ttValue =tContent.replace(/&nbsp;/g,"");
//    	var tValu = ttValue.replace(/\s+/g,"");
      	if(ttValue == ""){
        	$.showPublicDialog('提示','发布信息不能为空!');
        	return;
      	}
      }else{
      		$.showPublicDialog('提示','发布信息不能为空!');
        	return;
      }
      
      if(topicTile == ""){
        $.showPublicDialog('提示','信息发布主题不能为空!');
        return;
      }
      param = [topicTile,ttValue,"aaa",this.state.topicInfoListId,"0"];
      //如果页面数据参数合理则开始保存
      this.props.saveTopicInfoData(param);
      
    },
    toggleSelect:function(){
    	$("#_select").toggle(200);
    },
    reviewShow:function(){
    	//审核通过
    	let filter=[
    		{key:"TOPICID",value:this.state.topicInfoListId},
    		{key:"TOPICSTATUS",value:"2"}
    	];
	    $("#_select").hide(200);
	    this.props.edit_topicInfoData(filter);
    },
    noReviewShow:function(){
    	  $("#reviewModal").show();
        $("#_select").hide(200);
    },
    reviewModalHide:function () {
        $("#reviewModal").hide();
    },
    reviewShowNo:function () {
        let filter = [
            {key:"TOPICID",value:this.state.topicInfoListId},
            {key:"TOPICSTATUS",value:"1"},
            {key:"REVIEWEDESC",value:$("#reviewVal").val()}
        ];
        $("#_select").hide(200);
	    	this.props.edit_topicInfoData(filter);
    },
    publishToplicInfo:function () {
        let filter = [
            {key:"TOPICID",value:this.state.topicInfoListId},
            {key:"TOPICSTATUS",value:"3"}
        ];
        this.props.edit_topicInfoData(filter);
        dispatch(operationAction.setFlowPicData("AnnounceManageMent"));
        _this.history.pushState(null,"operationManage/operationManagePage");
    },
    goBack:function(){
    	const {dispatch} = this.props;
  		dispatch(operationAction.setFlowPicData("AnnounceManageMent"));
  		this.history.goBack();
    },
    setReceiveUsers: function setReceiveUsers(){
    	$("#setReviewUserModal").modal("show")
    },
    render:function(){
      return(
          <div className="annAdd" style={{"width":"100%","height":"100%","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
          	<div className="modal fade" id="setReviewUserModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">设置接收用户</h4>
                            </div>
                            <div className="modal-body" style={{"border":"1px solid #eaedf1","width":"60%","margin-left":"20%","overflow":"auto","margin-top":"16px","margin-bottom":"16px","height":"400px"}}>
                                <div style={{"width":"300px"}}>
                                    <form className="form-horizontal" role="form">
                                    <div className="form-group" style={{"position":"relative"}}>
                                        <div className="col-sm-6">
                                            <TopicObjectTree getTopicObjectData={this.props.getTopicObjectData} setTopicObjectTreeData={this.props.setTopicObjectTreeData} isEditTopicObjectData={this.props.isEditTopicObjectData} topicInfoListId={this.props.topicInfoListId} />
                                        </div>
                                    </div>
                                		</form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
              {/*模态窗*/}
              <div id="reviewModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{"position":"absolute","left":"0","right":"0","top":"100px","zIndex":"1","display":"none"}}>
                  <div className="modal-dialog">
                      <div className="modal-content" style={{"width":"400px"}}>
                          <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true"  onClick={this.reviewModalHide}>&times;</span><span className="sr-only">Close</span></button>
                              <h4 className="modal-title" id="myModalLabel">审核不通过原因</h4>
                          </div>
                          <div className="modal-body">
                              <textarea name="reviewVal" id="reviewVal" cols="50" rows="6"></textarea>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-success" onClick={this.reviewShowNo}>确定</button>
                              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.reviewModalHide}>取消</button>
                          </div>
                      </div>
                  </div>
              </div>
              {/*新建公告*/}
              <div className="annAdd_content" style={{"margin":"16px auto","height":"inherit","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                  <div className="annAdd_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","position":"relative"}}>
                      <div className="annAdd_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                          编辑公告
                      </div>
                      <div id="reviewButton" className="slaEdit_head_right" style={{"position":"absolute","right":"68px","top":"17px","display":"none","cursor":"pointer"}}>
	                      <span style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block","cursor":"pointer"}} onClick={this.toggleSelect}>审核公告</span>
	                      <ul id="_select" style={{"position":"absolute","top":"32px","left":"0","zIndex":"12","display":"none"}}>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.reviewShow}>审核通过</li>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.noReviewShow}>审核不通过</li>
	                      </ul>
                      </div>
                      <div id="publishSla" style={{"width":"60px","height":"32px","backgroundColor":"#D8E1E5","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                      <div id="publishButton" className="slaEdit_head_right" style={{"position":"absolute","right":"68px","top":"17px","display":"none","cursor":"pointer"}}>
                          <span id="publishSla" style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block"}} onClick={this.publishToplicInfo}>发布公告</span>
                      </div>
                      <div className="reviewRecUsers" style={{"width":"124px","height":"32px","backgroundColor":"#D8E1E5","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"170px","top":"17px","cursor":"pointer"}}  onClick={this.setReceiveUsers}>设置接收用户</div>
                      <div id="saveButton" className="slaEdit_head_right" style={{"position":"absolute","right":"68px","top":"17px","display":"none","cursor":"pointer"}}>
                          <span id="publishSla" style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block"}} onClick={this.saveTopicInfo}>保存</span>
                      </div>
                  </div>
                  <div className="annAdd_content_middle" style={{"width":"966px"}}>
                      <div className="form-group">
                          <label htmlFor="noticeTheme" className="col-sm-2 control-label" style={{"textAlign":"center"}}>主题</label>
                          <div className="col-sm-10">
                              <input type="text" className="form-control" id="noticeTheme" defaultValue={this.state.topicName} disabled={this.state.isDisable}/>
                              <span className="alert-block" style={{"float":"right","display":"none","height":"0"}}>信息发布主题不能为空</span>
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlFor="projectName" className="col-sm-2 control-label" style={{"textAlign":"center","margin-top":"20px"}}>信息内容</label>
                          <div className="col-sm-10" id="topicInfo" style={{"margin-top":"20px"}}>
                              <div dangerouslySetInnerHTML={createMarkup()}></div>
                              {/*<span className="alert-block topicInfoStyle" id="topicInfo" style={{"float":"right","display":"none","height":"0"}}>发布信息不能为空</span>
                               <span className="alert-block topicAreaStyle" style={{"float":"right","display":"none","height":"0"}}>发布区域至少选择一项</span>*/}
                          </div>
                      </div>
                  </div>
                </div>
            </div>
      );
    }
});
KindEditor.ready(function(K) {
    window.editor = K.create('#editor_approval');
});
function mapStateToProps(state) {
  const {flowPicData} = state.operationReducer;

  return {
  	flowPicData:flowPicData
  }
}
export default connect(mapStateToProps)(AnnounceManageEditView)