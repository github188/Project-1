import "bootstrap"
import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import $ from "jquery";
import {Router, Route, Link, IndexRoute,History} from 'react-router';
import * as operationAction from "../../../../../../../actions/operation_action";
let _this;
var ComplaintEditManagement = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return {
            isOk:1
        }
    },
    componentWillMount:function () {

    },
    componentDidMount:function () {
        $("#complaintEditTab li").on('click', function () {
            $(this).css({
                "borderBottomColor": "#349ff1",
                "color": "#349ff1"
            }).find("a").css({"color":"#349ff1","fontSize":"18px"}).parent().siblings("li").css({"borderBottomColor": "transparent", "color": "#aeaeae"}).find("a").css({"color": "#aeaeae","fontSize":"14px"})
        });
    },
    render:function () {
        return (
            <div className="complaintEdit" style={{"width":"100%","height":"100%","backgroundColor":"#edf5f8", "paddingTop": "16px", "paddingBottom": "16px"}}>
                <div className="complaintEdit_content" style={{
                    "width": "1000px",
                    "margin": "0 auto",
                    "backgroundColor": "#fff",
                    "padding": "0 26px 0 26px"
                }}>
                    <ul id="complaintEditTab" className="complaintEdit_content_head" style={{
                        "width": "100%",
                        "position": "relative",
                        "borderBottom": "1px solid #ebecee",
                        "margin": "0"
                    }}>
                        <li className="complaintEdit_newCreat" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#newComplaintCreate" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉详情</a></li>
                        <li className="complaintEdit_process" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#processComplaint" data-toggle="tab" style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉处理</a>
                        </li>
                        <li className="complaintEdit_evaluation" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#evaluationComplaint" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉评价</a></li>
                        <li className="complaintEdit_conversion" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#conversionComplaint" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>投诉流转</a></li>
                    </ul>
                    <div id="complaintTabEditContent" className="tab-content">
                        <div className="tab-pane fade in active" id="newComplaintCreate">
                            <div className="complaintEdit_saveBtn" id="savecomplaintEdit" onClick={this.savecomplaintEdit} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                <span style={{
                                    "display": "inline-block",
                                    "border": "6px solid transparent",
                                    "borderLeftColor": "#349ef0",
                                    "marginRight": "10px"
                                }}></span>基本信息
                            </div>
                            <div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintThemeEdit" className="col-sm-3">投诉主题</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintThemeEdit" name="complaintThemeEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintLevelEdit" className="col-sm-3">投诉级别</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintLevelEdit" name="complaintLevelEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintAnalystEdit" className="col-sm-3">调研人</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintAnalystEdit" name="complaintAnalystEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintPhoneEdit" className="col-sm-3">投诉电话</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintPhoneEdit" name="complaintPhoneEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintUnitEdit" className="col-sm-3">被投诉单位</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintUnitEdit" name="complaintUnitEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintProjectNameEdit" className="col-sm-3">项目名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintProjectNameEdit" name="complaintProjectNameEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintAreaEdit" className="col-sm-3">区域</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintAreaEdit" name="complaintAreaEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintChildAreaEdit" className="col-sm-3">子区域</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintChildAreaEdit" name="complaintChildAreaEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintUnitTypeEdit" className="col-sm-3">单位类型</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintUnitTypeEdit" name="complaintUnitTypeEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintUnitNameEdit" className="col-sm-3">单位名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintUnitNameEdit" name="complaintUnitNameEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintLeaderEdit" className="col-sm-3">负责人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintLeaderEdit" name="complaintLeaderEdit" style={{"width":"338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintLeaderPhoneEdit" className="col-sm-3">负责人电话</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintLeaderPhoneEdit" name="complaintLeaderPhoneEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="complaintUnitAddressEdit" className="col-sm-2">单位地址</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintUnitAddressEdit" name="complaintUnitAddressEdit" style={{"width":"811px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="complaintDescriptionEdit" className="col-sm-2">描述</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px","left":"120px"}}>*</b>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="complaintDescriptionEdit" id="complaintDescriptionEdit" cols="113" rows="9"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="processComplaint">
                            <div className="complaintEdit_saveBtn" id="saveComplaintProcess" onClick={this.saveComplaintProcess} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div style={{"marginTop": "16px"}}>
                                <form>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintCurPeopleEdit" className="col-sm-2">处理人</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintCurPeopleEdit" name="complaintCurPeopleEdit"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintResolveTimeEdit" className="col-sm-3">处理时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="complaintResolveTimeEdit" name="complaintResolveTimeEdit"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintResolveTypeEdit" className="col-sm-3">解决方式</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="complaintResolveType" name="complaintResolveType"*/}
                                            {/*style={{"width": "338px"}}/>*/}
                                            <select name="complaintResolveTypeEdit" id="complaintResolveTypeEdit" style={{"width": "338px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="远程解决">远程解决</option>
                                                <option value="现场解决">现场解决</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintProcessEdit" className="col-sm-2">处理过程</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea rows="7" cols="113" id="complaintProcessEdit" name="complaintProcessEdit"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="evaluationComplaint">
                            <div className="complaintEdit_saveBtn" id="saveComplaintEvaluation" onClick={this.saveComplaintEvaluation} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div style={{"marginTop":"16px"}}>
                                <form>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintAppraiserEdit" className="col-sm-2">评价人</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintAppraiserEdit" name="complaintAppraiserEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="complaintAppraiseTimeEdit" className="col-sm-2">评价时间</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="complaintAppraiseTimeEdit" name="complaintAppraiseTimeEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="complaintAppraiseEdit" className="col-sm-2">投诉评价</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="complaintAppraiseEdit" id="complaintAppraiseEdit" cols="113" rows="7" placeholder="说点什么吧..."></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="conversionComplaint">
                            <div className="complaintEdit_saveBtn" id="saveComplaintConversion" onClick={this.saveComplaintConversion} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
function myStateToProps(state) {
    const {} =state.operationReducer;
    return{

    }
}
export default connect(myStateToProps)(ComplaintEditManagement);