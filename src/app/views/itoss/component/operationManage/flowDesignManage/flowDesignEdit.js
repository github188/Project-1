var React = require('react');
var ReactWidgets = require('react-widgets');

import FlowDesignPanel from '../../flowDesign/flowdesignpanel.js';

var FlowDesignEdit = React.createClass ({
  selectitem :function(tag,name,data1){
  },
  componentDidMount: function() {
  },
  render :function() {
       var statedata=[];
       var BOdata = [];
       var resultdata = [];
       var tempresultdata  = [];
       try {
         var data = this.props.flowDesignPicData;
         if(!data){
           return <div></div>;
         }
         
         statedata = eval(data.STATUS);
         //[{"name":"ffwt","boid":"boid0","desc":"分服务台"}, {"name":"sss","boid":"boid1","desc":"sss"}, {"name":"工程师","boid":"boid2","desc":"工程师"}, {"name":"公安局视频监控管理人员","boid":"boid3","desc":"公安局视频监控管理人员"}, {"name":"公告审核人员","boid":"boid4","desc":"公告审核人员"}, {"name":"管理员","boid":"boid5","desc":"管理员"}, {"name":"甲方","boid":"boid6","desc":"甲方"}, {"name":"监理","boid":"boid7","desc":"监理"}, {"name":"派出所视频监控管理人员","boid":"boid8","desc":"派出所视频监控管理人员"}, {"name":"维护人员","boid":"boid9","desc":"维护人员"}, {"name":"关闭","boid":"boid10","desc":""}]
         BOdata = eval(data.ROLES);
         if (data.DETAILS) {
            resultdata=eval(data.DETAILS);
         }
         console.log(data);
       } catch (e) {
       } finally {
       }
       if(typeof(BOdata) == "undefined"){
         statedata=[];
         BOdata =[];
         resultdata=[];
       }
       if(typeof(resultdata) == "undefined"){
         resultdata=[];
       }
       var flowv ="graph LR;";
       var flowname =this.props.flowName;
       var isokedit = this.props.isEdit1;
       return <div style={{"position":"relative"}}><FlowDesignPanel Flowv={flowv} Statedata={statedata} Businessobjects={BOdata} Resultdata={resultdata} flowName={flowname} isOkEdit={isokedit} selectitem={this.selectitem}/> </div>;
     }
});

module.exports = FlowDesignEdit;
