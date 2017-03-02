/**
* 曹志强
* 新建公告
*/
require('bootstrap');
var React = require('react');
import { connect } from 'react-redux';
var operationAction = require('../../../../../../../actions/operation_action');

import AnnounceManageAddView from "./announceManageAddView";
import AnnounceManageEditView from "./announceManageEditView";

var AnnounceManageView = React.createClass({
    initTopicObjectTree:function(param){
    	const {dispatch} = this.props;
    	dispatch(operationAction.initTopicObjectTree(param));
    },
    setTopicObjectTreeData:function(param){
    	const {dispatch} = this.props;
    	dispatch(operationAction.setTopicObjectTreeData(param));
    },
    saveTopicInfoData:function(param){
    	const {dispatch} = this.props;
    	dispatch(operationAction.saveTopicInfoData(param));
    },
    getTopicObjectData:function(param, topicId, flag){
    	const {dispatch} = this.props;
    	dispatch(operationAction.getTopicObjectData(param, topicId, flag));
    },
    render:function(){
      var isEdit = this.props.isEditTopicObjectData;
      const {dispatch} = this.props;
      if(!isEdit){
      	return(
          <div className='repositoryOverview' style={{"height":"inherit"}}>
			<AnnounceManageAddView 
				setTopicObjectTreeData={this.setTopicObjectTreeData}
				saveTopicInfoData={this.saveTopicInfoData}
				getTopicObjectData={this.getTopicObjectData}
				topicName={this.props.topicName}
				topicContent={this.props.topicContent}
				topicInfoListId={this.props.topicInfoListId}
				isEditTopicObjectData={this.props.isEditTopicObjectData}
			/>
          </div>
      	);
      }else{
      	return(
          <div className='repositoryOverview' style={{"height":"inherit"}}>
			<AnnounceManageEditView 
				setTopicObjectTreeData={this.setTopicObjectTreeData}
				saveTopicInfoData={this.saveTopicInfoData}
				getTopicObjectData={this.getTopicObjectData}
				topicName={this.props.topicName}
				topicContent={this.props.topicContent}
				topicInfoListId={this.props.topicInfoListId}
				isEditTopicObjectData={this.props.isEditTopicObjectData}
				topicStatus={this.props.topicStatus}
				edit_topicInfoData={(param)=>dispatch(operationAction.edit_topicInfoData(param))}
				edit_topicDataNoTip={(param)=>dispatch(operationAction.edit_topicDataNoTip(param))}
				topicReviewDesc={this.props.topicReviewDesc}
			/>
          </div>
      	);
      }
      
    }
});
function mapTopicAddInfo(state) {
  const {topicObjectData,topicName,topicContent,topicInfoListId,isEditTopicObjectData,topicStatus,topicReviewDesc} = state.operationReducer;

  return {
  	topicObjectData:topicObjectData,
  	topicName:topicName,
  	topicContent:topicContent,
  	topicInfoListId:topicInfoListId,
  	isEditTopicObjectData:isEditTopicObjectData,
  	topicStatus:topicStatus,
  	topicReviewDesc:topicReviewDesc
  }
}
export default connect(mapTopicAddInfo)(AnnounceManageView);
