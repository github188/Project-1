/*
二级导航条
*/
import React from 'react';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;

var Ztreeview1 = React.createClass({
    mixins: [History],
    getInitialState:function(){
        return({
          isDefault:0
        })
    },
    initTree:function(){
        var zTree;
        var that = this;
        var treeData = this.props.data;
        var treeId = this.props.treeId;
        var ttList = [];
        for(var i=0;i<treeData.length;i++){
          ttList.push(treeData[i]);
        };
        var tlist = [];
        var minData = 0;
        for(var i=0;i<ttList.length;i=0){
          var idi = ttList[i].id;
          var mark = idi;
          for(var j=0;j<ttList.length;j++){
            var idj = ttList[j].id;
            if(idj <= mark){
              mark = idj;
              minData = j;
            };
          };
          tlist.push(ttList[minData]);
          ttList.splice(minData,1);
          if(ttList.length>0){
            continue;
          };
        };
        // console.log(tlist);
        var setting = {
            view: {
                dblClickExpand: false,
                showLine: false,
                showIcon:false,
                nameIsHTML: true,
                selectedMulti: false
            },
            data: {
                simpleData: {
                    enable:true,
                    idKey: "id",
                    pIdKey: "pid",
                    rootPid: "0"
                },
                key:{
                  name:"name"
                }
            },
            callback: {
                beforeClick: function(treeId, treeNode) {
                    that.onClickChild(treeNode);
                },
                onExpand: function(event, treeId, treeNode){
                  that.onExpandNode(event, treeId, treeNode);
                }
            }
        };
        $(document).ready(function(){
          var t = $("#"+treeId);
          t = $.fn.zTree.init(t, setting, tlist);
          var zTree = $.fn.zTree.getZTreeObj(treeId);
        });
    },
    //程艳鸿添加更改strat
  componentDidMount: function componentDidMount() {
    this.initTree();
    var that = this;
    var treeId = this.props.treeId;
    var zTree = $.fn.zTree.getZTreeObj(treeId);
    //    var nodes = zTree.getNodes();
    var navOne = this.props.curOneNode; //navOne = Object {id: 1, name: "首页", pid: null, toUrl: "departmentIndex", level: 0…}
    $(function () {
      $(".navbarTreeDiv2 .systemleftlist>li").click(function () {
        $(this).addClass("hoverOn").siblings().removeClass("hoverOn");
      });
    });
    var arry_menu = $(".navbarTreeDiv2 .systemleftlist>li");
    console.log($(".navbarTreeDiv2 .systemleftlist>li"));
    if(arry_menu != null && arry_menu != undefined && arry_menu.length > 0){
    		for(var i = 0; i< arry_menu.length; i++){
    			alert("11111==" + arry_menu.length);
    			
    		}
    	}
  },
  //程艳鸿添加更改end
    onClickChild:function(treeNode){
      var toUrl = treeNode.toUrl;
      toUrl = toUrl.substring(13);
      console.log("toUrl===" + toUrl);
      switch(toUrl){
      	case "userListPage":
      		this.props.handleChildNode("Usermanager");
      		break;
      	case "groupManage":
      	 	this.props.handleChildNode("Orginsmanager");
      	 	break;
      	case "roleManagePage":
      	 	this.props.handleChildNode("Rolemanager");
      	 	break;
      	case "dataDictPage":
      	 	this.props.handleChildNode("DataDic");
      	 	break;
      	case "passwordModify":
      		this.props.handleChildNode("ChangePsd");
      		break;
      }
    },
    //程艳鸿添加更改div-className
    render:function(){
      var treeId = this.props.treeId;
      return(
    <div>  	
        <div className="zTreeMonitor navbarTreeDiv2">
          <ul id={treeId} className='systemleftlist'></ul>
        </div>
	</div>	
      );
    }
});

module.exports = Ztreeview1;


