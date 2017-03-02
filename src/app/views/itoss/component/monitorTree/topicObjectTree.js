/**
 * tianzhuo.nie  2015/12/11.
 * onClickChild 左键点击方法
 */

var React = require('react');
var ReactRouter = require('react-router');
var util = require('./../../../../utils/util.js');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
var Navigation = require('react-router').Navigation;

var treenodeIndex=0, initialSelectedGroupId="", initialSelectedGroupName="";

var Ztreeview1 = React.createClass({
    mixins: [History],
    getInitialState:function(){
        return({
        })
    },
    componentWillMount:function(){
		var flag = this.props.isEditTopicObjectData;
		console.log("isEditTopicObjectData=====" + flag);
		if(flag == true){
			console.log("topicId=====" + this.props.topicInfoListId);
			this.props.getTopicObjectData(this, this.props.topicInfoListId, true);
		}else{
			this.props.getTopicObjectData(this, "", false);
		}
       
    },
    initTree:function(treeData){
        var zTree;
        var treeDatas;
        var that = this;
        var check = {
            enable: true,
            //是否无法选择
            chkDisabledInherit: true,
            chkboxType:{"Y":"ps","N":"s"},
            //是否单选框
            chkStyle: "checkbox"
        }
        var setting = {
            view: {
                dblClickExpand: false,
                showLine: true,
                nameIsHTML: true,
                selectedMulti: false
            },
            data: {
                simpleData: {
                    enable:true,
                    idKey: "resourceId",
                    pIdKey: "parentId",
                    rootPid: ""
                },
                key:{
                  name:"resourceName"
                }
            },
            check: check,
            callback: {
                beforeClick: function(treeId, treeNode) {
                    that.onClickChild(treeNode);
                },
                onRightClick: function(event, treeId, treeNode){
                    return false;
                },
                onCheck :function(event,treeId,treeNode){
                    that.onCheckTree(event,treeId,treeNode);
                }
            }
        };
        treeDatas = treeData;
        $(document).ready(function(){
            var t = $("#leftObjectTree");
            t = $.fn.zTree.init(t, setting, treeDatas);
            var zTree = $.fn.zTree.getZTreeObj("leftObjectTree");
        });
    },
    checkTree:function(data){
      var zTree = $.fn.zTree.getZTreeObj("leftObjectTree");
      for(var i=0;i<data.length;i++){
        zTree.checkNode(data[i],true,true);
      };
    },
    componentDidMount:function(){
      var height = $(window).height() -400 + 'px';
      var height2 = $(window).height() - 440 + 'px';
      $("#leftObjectTree").css("height",height2);
      $(".topicObjectTree").css("height",height);
    },
    onClickChild:function(treeNode){
        var zTree = $.fn.zTree.getZTreeObj("leftObjectTree");
        var checkedState = treeNode.checked;
        if(checkedState){
          checkedState = false;
        }else{
          checkedState = true;
        };
        zTree.checkNode(treeNode,checkedState,true);
        var checkedList = zTree.getCheckedNodes(true);
        this.props.setTopicObjectTreeData(checkedList);

        this.setState({curNode:treeNode});
    },
    onCheckTree:function(event,treeId,treeNode){
      var zTree = $.fn.zTree.getZTreeObj("leftObjectTree");
      var checkedList = zTree.getCheckedNodes(true);
      this.props.setTopicObjectTreeData(checkedList);
    },
    render:function(){
        return(
            <div className="zTreeMonitor topicObjectTree">
                <ul id="leftObjectTree" className="ztree" style={{"backgroundColor":"#fff"}}></ul>
            </div>
        );
    }
});

module.exports = Ztreeview1;
