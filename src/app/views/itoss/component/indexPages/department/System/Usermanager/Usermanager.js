require('bootstrap');
import React , { PropTypes }  from 'react';
import ReactDOM from 'react-dom';
var ReactWidgets = require('react-widgets');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Navigation = require('react-router').Navigation;
import * as SystemAction from "../../../../../../../actions/system_action";

function editPic(){
  return '<a class="dataDictTable1Edit" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
};
function deletePic(){
  return '<a class="dataDictTable1Delete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
};

var _this;
window.systemUserTable10Event = {
  'click .dataDictTable1Edit':function(e, value, row, index){
  	const { set_selectedUser, setUserInfoChangeFlag, get_userOrganization} = _this.props;
  	var loginId = row.LOGIN_ID;
    if(row.LOGIN_ID == "admin") {
    	setTimeout(function(){
            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
            document.getElementById('publicMessageModalcontent').innerHTML = "不能编辑管理员admin用户"
            $('#publicMessageModal').modal('show');
      },100);
      return false;
    }else if(row.LOGIN_ID == localStorage.getItem("localUserName")) {
        setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "不能编辑当前登陆用户"
                $('#publicMessageModal').modal('show');
            },100);
      return false;
    }
      _this.props.set_Roles("");
      $("#userEdit_username").val(row.LOGIN_ID);
      $("#userEdit_name").val(row.USER_NAME);
      $("#schoolEdit").find(".rw-input").text(row.COMPANYNAME);
      $("#userEdit_mail").val(row.EMAIL);
      $("#userEdit_phone").val(row.PHONE);
      $("#userEdit_password").val("******");
      $("#userEdit_confirmPassword").val("******");
      $("#statusEdit").val(row.STATUS);
      $("#leaderEdit").find(".rw-input").text(row.SUPERVISOR);
      $("#userEdit_group").find(".rw-input").text(row.ORANIZATION_NAME);
      $("#userEdit_area").find(".rw-input").text(row.AREANAME);
      $("#userEdit_department").find(".rw-input").text(row.DEPARTMENT);
      _this.props.set_Roles(eval(row.ROLE_NAME));
      $("#userEdit_position").find(".rw-input").text(row.TITLE);
      $("#hideEdit").hide();
      $("#hidEdit").hide();
    set_selectedUser({user:row, flag:"edit"});
    setUserInfoChangeFlag(false);
    get_userOrganization([{key:"LOGIN_ID", value:row.LOGIN_ID}]);
      $('#editUserModel').modal('show');
  },
  'click .dataDictTable1Delete':function(e, value, row, index){
    var loginId = row.LOGIN_ID;
    if(loginId == "admin") {
        setTimeout(function(){
            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
            document.getElementById('publicMessageModalcontent').innerHTML = "不能删除管理员admin用户"
            $('#publicMessageModal').modal('show');
      },100);
      return false;
    }
    if(confirm("确定要删除吗？")){
    	_this.props.delete_user(loginId);
    	_this.props.get_allUser();
    }else{
    	return false;
    }
  }
};

function roleFormatter(value, row) {
    var roles = eval(value);
    var strRoles = "";
    if(roles != null) {
        for(var i = 0; i < roles.length; i++) {
            if(roles[i].checked=="true")
                strRoles += (strRoles.length==0?"":",") + roles[i].roleName;
        }
    }
    return strRoles;
}

var refreshBtnObj, deleteBtnObj, addBtnObj,titleBoxObj;
var Usermanager = React.createClass({
	//mixins: [History],
	getInitialState: function () {
        _this = this;
        return {
            isOk:1
        }
    },
	componentDidUpdate:function(){
      var bdata = this.props.users;
      $("#systemUserManagerTable10").bootstrapTable("load",bdata);
    },
	componentDidMount:function(){
      $('#systemUserManagerTable10').bootstrapTable({
        columns: [
          {
            title: '用户名',
            field: 'LOGIN_ID',
            halign: 'left',
            align: 'left',
            sortable: true
          },{
            title: '姓名',
            field: 'USER_NAME',
            halign: 'left',
            align: 'left',
            sortable: true
          },{
            title: '群组',
            field: 'ORANIZATION_NAME',
            halign: 'left',
            align: 'left',
            sortable: true
          },{
            title: '角色名称',
            field: 'ROLE_NAME',
            formatter: roleFormatter,
            sortable: true
          },{
            title: '编辑',
            halign: 'left',
            align: 'left',
            events: systemUserTable10Event,
            formatter: editPic
          },{
            title: '删除',
            halign: 'left',
            align: 'left',
            events: systemUserTable10Event,
            formatter: deletePic
          }
        ],
        data: [],
   //     onClickRow: this._onClickRow,
        exportDataType: "all"
      });
      	var _this = this;
      	titleBoxObj =document.createElement("div");
        let titleBoxObjA = document.createElement("a");
        let titleBoxObjW = document.createElement("span");
        titleBoxObjW.innerHTML = "用户管理信息";
        titleBoxObj.appendChild(titleBoxObjA);
        titleBoxObj.setAttribute("class","pull-left");
        
      	refreshBtnObj= document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function() {
	        _this.props.get_allUser();
        };
        //refreshBtnObj.innerHTML = '<i class="glyphicon glyphicon-refresh icon-refresh"></i>';
        
        addBtnObj= document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建用户');
        addBtnObj.innerHTML = "新建用户";
        addBtnObj.onclick = function() {
     //   	  alert("开始增加新的用户信息！！");
//          return (<NewUser add_user={ _this.props.add_user} />);
						/*----新建用户--*/
            $("#userAdd_username").val("");
            $("#userAdd_name").val("");
            $("#userAdd_password").val("");
            $("#userAdd_confirmPassword").val("");
            $("#school").find(".rw-input").text("请选择");
            $("#userAdd_mail").val("");
            $("#userAdd_phone").val("");
            $("#leader").find(".rw-input").text("请选择");
            $("#userAdd_group").find(".rw-input").text("请选择");
            $("#userAdd_area").find(".rw-input").text("请选择");
            $("#userAdd_department").find(".rw-input").text("请选择");
            $("#userAdd_role").find(".rw-input").text("请选择");
            $("#userAdd_position").find(".rw-input").text("请选择");
            $("#status").val("请选择");
            _this.props.set_Roles("");
            $("#hideEdit").show();
            $("#hidEdit").show();
            _this.props.set_selectedUser({user:null, flag:"add"});
            _this.props.setUserInfoChangeFlag(true);
						setTimeout(function(){
		            $('#newUserModel').modal('show');
		      	},100);
	      };
    //    addBtnObj.innerHTML = '<i class="glyphicon glyphicon-plus icon-plus"></i>';
        
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);//insertBefore
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        var btnGroup1 = document.getElementsByClassName('fixed-table-toolbar')[0];
						btnGroup1.appendChild(titleBoxObj,btnGroup1);
				$(".form-control").css({"display": "inline-block", "width": "243px"});
        $("#systemUserManagerTable10 thead>tr").css({"background": "#d8e1e5"});
        $(".pull-left").css({"font-size":"16px","margin":"10px 0"});
        $(".pull-left").append(titleBoxObjA);
        $(".pull-left").append(titleBoxObjW);
        $(".pull-left>span").css({"margin-left":"10px","margin-top":"6px","float":"left"});
        $(".pull-left>a").css({"width":"3px","height":"16px","background":"#8eddf2","display":"block","float":"left","margin-top":"10px"});
   		  $(".btn").css({"margin-bottom":"4px"});
    	  $(".fixed-table-toolbar").css({"padding-top":"4px"});
    	  $(".btn-refresh").css({"background":"#d8e1e5"});
    },
  render: function() {
    return (
    		<div className = 'usermanager'>
				<section className='sectionOut'>
					<div className='sectionright'> 
						<table id="systemUserManagerTable10"
               data-toggle='table'
               data-search='true'
               data-classes='table table-no-bordered table-hover'
               data-show-export="true"
               data-show-refresh='false'
               data-show-toggle='true'
               data-show-columns='true'
               data-pagination='true'
               data-page-size='10'
               data-resizable='true'
             >
			      </table>
					</div>
				</section>	
		    </div>				
  )}
});

Usermanager.propTypes = {
    users: PropTypes.array.isRequired,
    delete_user:PropTypes.func.isRequired,
    get_allUser: PropTypes.func.isRequired
}
module.exports = Usermanager;
