/**
* 曹志强
* 新建公告
*/
require('bootstrap');
var React = require('react');
var ReactWidgets = require('react-widgets');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Util = require('../../../../../../../utils/util');
import { connect } from 'react-redux';
var operationAction = require('../../../../../../../actions/operation_action');
var TopicObjectTree = require('../../../../monitorTree/topicObjectTree');

$(window).resize(function(){
  $.panelHeight(".panelBasic",150);
});

function createMarkup() { 
	return {
  	__html: '<textarea id="editor_id" name="content" style="width:100%;height:600px;visibility:hidden;"></textarea>'
	}; 
};

function Shade(){
  var s = document.getElementById("shade");
  s.style.display = "none";
};

var _this;
var setAnnBtnObj;
var AnnounceManageAddView = React.createClass({
		mixins: [History],
    getInitialState: function() {
    	_this = this;
      return {
        faultId: "",
        faultSubId:""
      };
    },
    componentDidMount: function() {
      $.panelHeight(".panelBasic",150);
        KindEditor.ready(function(K) {
            window.editor = K.create('#editor_id');
        });
        $("#noticeTheme").mouseover(function(){
            $(this).find(".alert-block").hide();
        });
        $("#topicInfo,#topicArea").mouseover(function(){
            $(this).find(".alert-block").hide();
        });

    },
    saveTopicInfo:function(){
    	var param = [];
    	editor.sync();
      var topicTile = $('#noticeTheme').val();
      var tContent = $('#editor_id').val();
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
      param = [topicTile,ttValue,"aaa"];
      //如果页面数据参数合理则开始保存
      this.props.saveTopicInfoData(param);
    },
    setReceiveUser:function(){
    	$("#setUserModal").modal("show")
    },
    goBack:function(){
    	const {dispatch} = this.props;
  		dispatch(operationAction.setFlowPicData("AnnounceManageMent"));
  		this.history.goBack();
    },
    render:function(){
      return(
            <div className="annAdd" style={{"width":"100%","height":"100%","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
            {/*模态窗*/}
                <div className="modal fade" id="setUserModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                            <TopicObjectTree getTopicObjectData={this.props.getTopicObjectData} setTopicObjectTreeData={this.props.setTopicObjectTreeData} isEditTopicObjectData={this.props.isEditTopicObjectData}/>
                                        </div>
                                    </div>
                                		</form>
                                </div>
                            </div>
                            <div className="modal-footer">
                            		<button type="button" className="btn btn-success">保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/*新建公告*/}
                <div className="annAdd_content" style={{"margin":"16px auto","height":"inherit","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="annAdd_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="annAdd_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            新建公告
                        </div>
                        <div className="setRecUser" style={{"width":"124px","height":"32px","backgroundColor":"#D8E1E5","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"140px","top":"17px","cursor":"pointer"}}  onClick={this.setReceiveUser}>设置接收用户</div>
                        <div id="publishSla" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"70px","top":"17px","cursor":"pointer"}} onClick={this.saveTopicInfo}>保存</div>
                        <div id="publishSla" style={{"width":"60px","height":"32px","backgroundColor":"#D8E1E5","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                   </div>
                    <div className="annAdd_content_middle" style={{"width":"966px"}}>
                        <div className="form-group">
                            <label htmlFor="noticeTheme" className="col-sm-2 control-label" style={{"textAlign":"center"}}>主题</label>
                            <div className="col-sm-10">
                            		<input type="text" id="noticeTheme" className="form-control"/>
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
function mapStateToProps(state) {
  const {flowPicData} = state.operationReducer;

  return {
  	flowPicData:flowPicData
  }
}
//module.exports = AnnounceManageAddView;
export default connect(mapStateToProps)(AnnounceManageAddView)
