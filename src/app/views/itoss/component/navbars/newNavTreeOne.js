/*
一级导航条
*/

// var React = require('react');
import React from 'react'
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;

// var Fluxxor = require('fluxxor');
//
// var FluxMixin = Fluxxor.FluxMixin(React),
//     StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Ztreeview1 = React.createClass({
    mixins: [History],
    // getStateFromFlux: function() {
    //     var flux = this.getFlux();
    //     return {
    //         itoss:flux.store("NavbarStore").getState()
    //     }
    // },
    getInitialState:function(){
        return({
          isDefault:0
        })
    },
    // propTypes: {
    //   dispatch: React.PropTypes.func.isRequired
    // },
    initTree:function(){
        var zTree;
        var that = this;
        var treeData = this.props.data;
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
          var t = $("#navbarTree");
          t = $.fn.zTree.init(t, setting, tlist);
          var zTree = $.fn.zTree.getZTreeObj("navbarTree");
        });
    },
    componentDidMount:function(){
      this.initTree();
      // console.log(this.props.);
      var that = this;
      var zTree = $.fn.zTree.getZTreeObj("navbarTree");
//    var nodes = zTree.getNodes();//权限值
      var navBefore = this.props.curOneNode; //前一个节点;
      var propMude = this.props.firstModu;
     
      $(function () {
      $(".navbarTreeDiv #navbarTree>li").click(function () {
        $(this).addClass("firstHover").siblings().removeClass("firstHover");
      });
      $(".navbarTreeDiv #navbarTree li a span").click(function () {
        $(this).addClass("navOneClicked").siblings().removeClass("navOneClicked");
      });
    });
    },
    onClickChild:function(treeNode){
      var toUrl = treeNode.toUrl;
      this.props.onSetCurThreeNode("");
      this.history.pushState(null,toUrl);
    },
    //程艳鸿更改div-className
    render:function(){
        return(
            <div className="zTreeMonitor navbarTreeDiv">
              <ul id="navbarTree"></ul>
            </div>
        );
    }
});

module.exports = Ztreeview1;
