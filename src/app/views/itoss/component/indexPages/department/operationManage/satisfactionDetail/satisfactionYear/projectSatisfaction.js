import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ProjectSatisfaction = React.createClass({
  	componentDidUpdate:function(){
          var bdata = this.props.customeSatisfactionScoreData;
          console.log("satisfactionRDataYearProject")
          console.log(bdata)
    	 $("#satisfactionRDataYearProject thead>tr").css({"background":"#daf1f8"});
      $("#satisfactionRDataYearProject").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {

        $("#satisfactionRDataYearProject").bootstrapTable({
            columns: [
                        {
			            title: '项目名称',
			            field: 'NAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '客户评分',
			            field: 'COUNT',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          }
            ],
            data: [],
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
       },
  render: function() {

    return (
    		<div className = ''>				  
				     {/*单位管理排名*/}
                <div className="col-md-12">
                    <table id="satisfactionRDataYearProject"
                             data-toggle='table'
                           data-search='false'
                           data-classes='table table-no-bordered table-hover'
                           data-show-export="false"
                           data-show-refresh='false'
                           data-show-toggle='false'
                           data-show-columns='false'
                           data-pagination='true'
                           data-page-size='10'
                           data-resizable='false'>
                    </table>
                </div>
				  
		    </div>				
  )}
});
export default ProjectSatisfaction