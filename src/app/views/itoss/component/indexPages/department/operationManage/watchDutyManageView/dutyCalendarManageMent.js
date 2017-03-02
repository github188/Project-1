/**
* xuexue.yin  2016/02/24.
* 值班管理
*/
import React, { PropTypes } from 'react'
import $ from "jquery";
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var EventCalendar = require('react-event-calendar');
var ReactWidgets = require('react-widgets');
var moment = require('moment');
var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var Popover = require('react-bootstrap/lib/PopOver');
var Overlay = require('react-bootstrap/lib/Overlay');
var base64 = require('../../../../../../../utils/base64');

let _this;
var DutyCalendarManageMent = React.createClass({
    getInitialState: function () {
        return {
            moment: moment(),
            showPopover: false,
            popoverTitle: null,
            popoverContent: null,
            popoverTarget: null,
            dutyDataSelect:"",
            selectedDay: moment().year() + '-' + moment().month() + '-' + moment().date(),
        }
    },

    componentDidMount: function() {
    	const {setSelectedCalendarDate} = this.props;
    	 setSelectedCalendarDate(moment().year()+'-'+moment().month()+'-'+moment().date());
    	 //选择日期插件
    	 $("#dutyDataSelect").on("change",function () {
            let dutyDataSelect = $(this).val();
            _this.setState({dutyDataSelect:dutyDataSelect});
        });
    	 
    },

//  componentDidUpdate: function() {
//  		var filter = [{key:"TIME", value:"2017-01-01"}];
//      this.props.get_calendarData(filter);
//  },

//  handleSelectDate: function(e) {
//      this.setState({
//          moment: moment(value)
//      });
//      this.props.setGetCalendarDataFlag(true);
//  },

    handleNextMonth: function() {
        this.setState({
            moment: this.state.moment.add(1, 'M')
        });
        this.props.setGetCalendarDataFlag(true);
    },

    handlePreviousMonth: function() {
        this.setState({
            moment: this.state.moment.subtract(1, 'M')
        });
        this.props.setGetCalendarDataFlag(true);
    },

    handleToday: function() {
        const {setGetCalendarDataFlag, setSelectedCalendarDate} = this.props;
        this.setState({
            moment: moment(),
            selectedDay: moment().year() + '-' + moment().month() + '-' + moment().date()
        });
        setGetCalendarDataFlag(true);
        setSelectedCalendarDate(moment().year()+'-'+moment().month()+'-'+moment().date());
    },
    handleEventMouseOver: function(target, data) {
           this.setState({
               showPopover: true,
               popoverTarget: () => ReactDOM.findDOMNode(target),
               popoverTitle: data.title,
               popoverContent: data.description
           });
    },

     handleEventMouseOut: function() {
           this.setState({
               showPopover: false
           });
    },

    handleEventClick: function(ref, data) {
        alert('正在火热开发中!');
    },

    handleDayClick: function(data, ref) {
        const {setSelectedCalendarDate} = this.props;
        this.setState({
            selectedDay: data.year + '-' + data.month + '-' + data.day
        });
        alert(this.state.selectedDay);
        setSelectedCalendarDate(data.year+'-'+data.month+'-'+data.day);
    },
    getHumanDate: function() {
        return [moment.months('MM', this.state.moment.month()), this.state.moment.year(), ].join(' ');
    },

    render:function(){
      const {calendarData} = this.props;
        return (
            <div id='dutyListView_desView' className='overviewDesViewDiv dutyListView_desView'>
                <div className='operationCreateTableDiv col-md-12'>

                    <div style={{"width":"inherit","font-size":"16px","margin":"10px 0"}}>
                        <a style={{"width":"3px","height":"16px","display":"block","float":"left","margin-top":"10px","background-color":"#8eddf2"}}></a>
                        <span style={{"margin-left":"10px","margin-top":"6px","float":"left"}}>值班日历</span>
                    </div>
                    <div className="table-basic-h2 col-md-12 rightBottomBorder" style={{"height":"48px","background":"#daf1f8","width":"inherit","padding-bottom":"10px","padding-top":"8px","margin-top":"10px"}}>
                        <div className="col-md-6 calendarDateDiv" style={{"padding-left":"0","padding-right":"0","margin-top":"6px"}}>
                            {this.getHumanDate()}
                        </div>
                        <div className="col-md-6" style={{"padding-left":"0","padding-right":"0","text-align":"right"}}>
                            {/*<input type="month" id="endTime" className="form-control" name="endTime" value={this.state.moment.toDate()} onChange={this.handleSelectDate}/>*/}
                            {/*<ReactWidgets.DateTimePicker className='dateTimePickerStyle' initialView={"year"} time={false} format={"yyyy-MM"} value={this.state.moment.toDate()} onChange={this.handleSelectDate}/>*/}
                            <input type="date" id="dutyDataSelect" name="dutyDataSelect" style={{"width":"180px","border-radius":"4px","padding":"5px","border":"1px solid #ccc","margin-right":"6px"}}/>
                            <ButtonToolbar style={{"float":"right"}}>
                                <Button onClick={this.handlePreviousMonth}>&lt;</Button>
                                <Button onClick={this.handleNextMonth}>&gt;</Button>
                                <Button onClick={this.handleToday}>今天</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                    <div id="dutyCalendarDiv" className="rightBottomBorder" style={{"width":"inherit"}}>
                        <EventCalendar
                            ref={(component) => this.eventCalendar = component}
                            month={this.state.moment.month()}
                            year={this.state.moment.year()}
                            events={calendarData}
                            onEventClick={this.handleEventClick}
                            onEventMouseOver={this.handleEventMouseOver}
                            onEventMouseOut={this.handleEventMouseOut}
                            onDayClick={this.handleDayClick}
                            selectedDay={this.state.selectedDay} />
                    </div>
                </div>
            </div>
          
        );
    }
});
export default DutyCalendarManageMent;
