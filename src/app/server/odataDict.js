var $ = require('jquery');
var Store = require('./store.js');
var base64 = require('../utils/base64.js');
var serviceAddress = Store.get("serviceUrl");
var tokenVerify = Store.get("tokenUrl");
var servletAddress = Store.get("servletServiceUrl");
var Util = require('../utils/util.js');

var oDataHandle = function(){}
var token ="";

Object.defineProperty(oDataHandle, 'getBrandData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentBrand";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'addBrandData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentBrand";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'editBrandData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentBrand";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'deleteBrandData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentBrand";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强	  20170214	 获取产品父类型管理数据
Object.defineProperty(oDataHandle, 'getProductTypes',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetProductType?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20170214	增加产品父类型
Object.defineProperty(oDataHandle, 'addProductTypes',{
  value: function(data, callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
    		var requestUrl = "";
    		if(data.PARENTID == "" || data.PARENTID == null){
    			requestUrl = serviceAddress+"AddProductType?token="+token+"&TYPENAME='"+data.TYPENAME+"'&CODENAME='"+data.CODENAME+"'";
    		}else{
    			requestUrl = serviceAddress+"AddProductType?token="+token+"&TYPENAME='"+data.TYPENAME+"'&CODENAME='"+data.CODENAME+"'&PARENTID='"+data.PARENTID+"'";
    		}
        requestUrl = encodeURI(requestUrl);
        $.ajax({
            type: "get",
            async: true,
            url:requestUrl,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20170214	编辑产品父类型
Object.defineProperty(oDataHandle, 'editProductTypes',{
  value: function(data, callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    var rquesrequestUrltUril = "";
    if(token != '') {
    		if(data.PARENTID == "" || data.PARENTID == null){
    			requestUrl = serviceAddress+"EditProductType?token="+token+"&TYPENAME='"+data.TYPENAME+"'&CODENAME='"+data.CODENAME+"'&RECID='"+data.RECID+"'";
    		}else{
    			requestUrl = serviceAddress+"EditProductType?token="+token+"&TYPENAME='"+data.TYPENAME+"'&CODENAME='"+data.CODENAME+"'&PARENTID='"+data.PARENTID+"'&RECID='"+data.RECID+"'";
    		}
        requestUrl = encodeURI(requestUrl);
        $.ajax({
            type: "get",
            async: true,
            url:requestUrl,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20170214	删除产品父类型
Object.defineProperty(oDataHandle, 'deleteProductTypes',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="ProductType";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

//曹志强	  20170214	 获取产品子类型管理数据
Object.defineProperty(oDataHandle, 'getProductChildTypes',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetSubProductType?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

Object.defineProperty(oDataHandle, 'getSysFaultType',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultClassification";
          newObj.type = "query";
          newObj.filter = {"key":"ParentID","value":""};
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'addSysFaultType',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultClassification";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'editSysFaultType',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultClassification";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'deleteSysFaultType',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultClassification";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'getAreaData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "query";
          newObj.filter = {"key":"ParentGroupId","value":""};
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//20161222 刘家顺获取二级联动单位信息
Object.defineProperty(oDataHandle, 'getAreaSubData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"ParentGroupId",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'addAreaData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'addProjectData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Project";
            newObj.type = "add";
            newObj.token = token;
            newObj.updateObjec =data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

Object.defineProperty(oDataHandle, 'addChildAreaData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'addBigServiceData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="servicecatalog";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'addSmallServiceData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="serviceitem";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'addLocationData',{
  value: function(data,callback) { 
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentLocation";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'addFaultTypeDetailData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultType";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});


Object.defineProperty(oDataHandle, 'editAreaData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'editProjectData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Project";
            newObj.type = "update";
            newObj.token = token;
            newObj.recId = data.RecId;
            newObj.updateObjec = data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

Object.defineProperty(oDataHandle, 'editChildAreaData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'editBigServiceData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="servicecatalog";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'editSmallServiceData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="serviceitem";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'editLocationData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentLocation";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'editFaultTypeDetailData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultType";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'deleteFaultTypeDetailData',{
  value: function(id,callback) {
      token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultType";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'deleteAreaData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'deleteProjectData',{
    value: function(id,callback) {
        var token = Store.get("token");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Project";
            newObj.type = "delete";
            newObj.token = token;
            newObj.recId = id;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

Object.defineProperty(oDataHandle, 'deleteBigServiceData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="servicecatalog";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'deleteSmallServiceData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="serviceitem";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'deleteChildAreaData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Area";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'deleteLocationData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentLocation";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'getTpData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "query";
          newObj.filter = {"key":"DictNo","value":"tptjb"};
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'getWorkOrderStatusData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "query";
          newObj.filter = {"key":"DictNo","value":"gdzt"};
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

//添加数据字典值
Object.defineProperty(oDataHandle, 'addDictionaryData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//修改数据字典值
Object.defineProperty(oDataHandle, 'editDictionaryData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'deleteDictionaryData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'addTpData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'editTpData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
Object.defineProperty(oDataHandle, 'deleteTpData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="DictionaryData";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'getSysFaultSubType',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetFaultClassification?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

Object.defineProperty(oDataHandle, 'getChildAreaData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetChildAreaData?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

Object.defineProperty(oDataHandle, 'getProjectData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="Project";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'getBigServicePData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="servicecatalog";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

Object.defineProperty(oDataHandle, 'getLocationData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EquipmentLocation";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

//故障子类型
Object.defineProperty(oDataHandle, 'getFaultSubBType',{
  value: function(id,callback) {
      token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="FaultClassification";
          newObj.type = "query";
          newObj.filter = {"key":"ParentID","value":id};
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(code,resp) {
              callback(code,resp);
          });
      }
  }
});

Object.defineProperty(oDataHandle, 'getFaultTypeDetailData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetFaultTypeDetail?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});


Object.defineProperty(oDataHandle, 'getBigServiceData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetBigServiceData?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

Object.defineProperty(oDataHandle, 'getSmallServiceData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetSmallServiceData?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});


Object.defineProperty(oDataHandle, 'getSystemInfoData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetLicenseInfo?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

Object.defineProperty(oDataHandle, 'getFaultTypeData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetFaultTypeInfo?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

//明长然  20161209 增加故障级别数据GET接口
Object.defineProperty(oDataHandle, 'getFaultLevelData',{
    value: function(callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
            var rquestUri = serviceAddress+"Faultlevel?token="+token;
            //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
            rquestUri = encodeURI(rquestUri);
            $.ajax({
                type: "get",
                async: true,
                url:rquestUri,
                dataType: "json",
                cache:false,
                success : function(result){
                    callback(result.d);
                },error : function(result){
                    Util.customInterfaceInfo(result);
                }
            });
        }
    }
});

//明长然  20161209  增加故障级别数据ADD接口
Object.defineProperty(oDataHandle, 'addFaultLevelData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Faultlevel";
            newObj.type = "add";
            newObj.token = token;
            newObj.updateObjec =data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加故障级别数据EDIT接口
Object.defineProperty(oDataHandle, 'editFaultLevelData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Faultlevel";
            newObj.type = "update";
            newObj.token = token;
            newObj.recId = data.RecId;
            newObj.updateObjec = data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加故障级别数据DELETE接口
Object.defineProperty(oDataHandle, 'deleteFaultLevelData',{
    value: function(id,callback) {
        var token = Store.get("token");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Faultlevel";
            newObj.type = "delete";
            newObj.token = token;
            newObj.recId = id;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加升级级别数据GET接口
Object.defineProperty(oDataHandle, 'getUpgradeLevelData',{
    value: function(callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Faultlevel";
            newObj.type = "query";
            newObj.filter = {"key":"LevelType","value":"Update"};
            newObj.token = token;
            newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加升级级别数据Add接口
Object.defineProperty(oDataHandle, 'addUpgradeLevelData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Faultlevel";
            newObj.type = "add";
            newObj.token = token;
            newObj.updateObjec =data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加升级级别数据Edit接口
Object.defineProperty(oDataHandle, 'editUpgradeLevelData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Faultlevel";
            newObj.type = "update";
            newObj.token = token;
            newObj.recId = data.RecId;
            newObj.updateObjec = data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加升级级别数据Delete接口
Object.defineProperty(oDataHandle, 'deleteUpgradeLevelData',{
    value: function(id,callback) {
        var token = Store.get("token");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Faultlevel";
            newObj.type = "delete";
            newObj.token = token;
            newObj.recId = id;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加工单类型数据GET接口
Object.defineProperty(oDataHandle, 'getWorkOrderNameData',{
    value: function(callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Dictionarydata";
            newObj.type = "query";
            newObj.token = token;
            newObj.filter = {"key":"DictNo","value":"gdlx"};
            newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

Object.defineProperty(oDataHandle, 'getWorkOrderTypeData',{
    value: function(callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="workordertype";
            newObj.type = "query";
            newObj.token = token;
            newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加工单类型数据Add接口
Object.defineProperty(oDataHandle, 'addWorkOrderTypeData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="workordertype";
            newObj.type = "add";
            newObj.token = token;
            newObj.updateObjec =data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加工单类型数据Edit接口
Object.defineProperty(oDataHandle, 'editWorkOrderTypeData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="workordertype";
            newObj.type = "update";
            newObj.token = token;
            newObj.recId = data.RecId;
            newObj.updateObjec = data;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

//明长然  20161209  增加工单类型数据Delete接口
Object.defineProperty(oDataHandle, 'deleteWorkOrderTypeData',{
    value: function(id,callback) {
        var token = Store.get("token");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="workordertype";
            newObj.type = "delete";
            newObj.token = token;
            newObj.recId = id;
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

Object.defineProperty(oDataHandle, 'getWorkOrderTypeAllData',{
    value: function(callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
            var rquestUri = serviceAddress+"GetWorkOrderTypes?token="+token;
            //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
            rquestUri = encodeURI(rquestUri);
            $.ajax({
                type: "get",
                async: true,
                url:rquestUri,
                dataType: "json",
                cache:false,
                success : function(result){
                    callback(result.d);
                },error : function(result){
                    Util.customInterfaceInfo(result);
                }
            });
        }
    }
});

//明长然  20161212  增加单位人员数据GET接口
Object.defineProperty(oDataHandle, 'getUnitStaffInfoData',{
    value: function(callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
            var rquestUri = serviceAddress+"GetUnitStaffInfo?token="+token;
            //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
            rquestUri = encodeURI(rquestUri);
            $.ajax({
                type: "get",
                async: true,
                url:rquestUri,
                dataType: "json",
                cache:false,
                success : function(result){
                    callback(result.d);
                },error : function(result){
                    Util.customInterfaceInfo(result);
                }
            });
        }
    }
});

//明长然  20161212  增加单位人员数据DELETE接口
Object.defineProperty(oDataHandle, 'deleteUnitStaffInfoData',{
    value: function(id,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
            var rquestUri = serviceAddress+"DeleteUnitStaffInfo?token="+token+"&CID='"+id+"'";
            //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
            rquestUri = encodeURI(rquestUri);
            $.ajax({
                type: "get",
                async: true,
                url:rquestUri,
                dataType: "json",
                cache:false,
                success : function(result){
                    callback(result.d);
                },error : function(result){
                    Util.customInterfaceInfo(result);
                }
            });
        }
    }
});

//明长然  20161212  增加单位人员数据ADD接口
Object.defineProperty(oDataHandle, 'addUnitStaffInfoData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
            var rquestUri = serviceAddress+"AddUnitStaffInfo?token="+token+"&CNAME='"+data.CNAME+"'"+"&ACRONYM='"+data.ACRONYM+"'"+"&PHONE='"+data.PHONE+"'"+"&ISMAIN='"+data.ISMAIN+"'"+"&PID='"+data.PID+"'"+"&UNITADDRESS='"+data.UNITADDRESS+"'";
            //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
            rquestUri = encodeURI(rquestUri);
            $.ajax({
                type: "get",
                async: true,
                url:rquestUri,
                dataType: "json",
                cache:false,
                success : function(result){
                    callback(result.d);
                },error : function(result){
                    Util.customInterfaceInfo(result);
                }
            });
        }
    }
});

//明长然  20161212  增加单位人员数据EDIT接口
Object.defineProperty(oDataHandle, 'editUnitStaffInfoData',{
    value: function(data,callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
            var rquestUri = serviceAddress+"EditUnitStaffInfo?token="+token+"&CID='"+data.CID+"'"+"&CNAME='"+data.CNAME+"'"+"&ACRONYM='"+data.ACRONYM+"'"+"&PHONE='"+data.PHONE+"'"+"&ISMAIN='"+data.ISMAIN+"'"+"&PID='"+data.PID+"'"+"&UNITADDRESS='"+data.UNITADDRESS+"'";
            //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
            rquestUri = encodeURI(rquestUri);
            $.ajax({
                type: "get",
                async: true,
                url:rquestUri,
                dataType: "json",
                cache:false,
                success : function(result){
                    callback(result.d);
                },error : function(result){
                    Util.customInterfaceInfo(result);
                }
            });
        }
    }
});


Object.defineProperty(oDataHandle, 'getUnitData',{
    value: function(callback) {
        token = Store.get("token");
        serviceAddress = Store.get("serviceUrl");
        if(token != '') {
            var newObj = {};
            newObj.tableName ="Unit";
            newObj.type = "query";
            newObj.token = token;
            newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
            oDataHandle.handle(newObj, function(resp) {
                callback(resp);
            });
        } else {
            //console.log('token -  not null');
        }
    }
});

Object.defineProperty(oDataHandle,'handle',{
    value: function(object, callback, errorCallback){
        var joint="",
            recid="";
        if(object.recId){
            recid = "('"+object.recId+"')";
        };
        if(object.filter){
            if(object.filter.length > 1){
                var tempstring="&$filter="
                object.filter.map(function(obj,i){
                    if(i==0){
                        tempstring += obj.key+" eq'"+obj.value+"' ";
                    }else{
                        tempstring += "and "+obj.key+" eq'"+obj.value+"' ";
                    };
                });
                joint += tempstring
            }else{
                joint += "&$filter="+object.filter.key+" eq'"+object.filter.value+"' ";
            };
        };
        if(object.orderby){
            joint += "&$orderby="+object.orderby.key+" "+object.orderby.sort;
        };
        serviceAddress = Store.get("serviceUrl");
        var rquestUri = serviceAddress+object.tableName+recid+"?token="+token+joint;
        console.log("查询地址",rquestUri);
        var headers = { 'Cache-Control': 'no-cache', Pragma: 'no-cache' };
        switch(object.type){
            case "query":
                OData.request({
                        requestUri: rquestUri,
                        method: "GET",
                        headers: headers
                    },
                    function success(data, response) {
                        //console.log("查询成功",data);
                        callback(data);
                    },
                    function error(err) {
                        //console.log("查询失败",err.message);
                        if(errorCallback) errorCallback(err.message||err);
                        Util.oDataInterfaceInfo(err);
                    });
                break;
            case "update":
                OData.request({
                        requestUri:rquestUri,
                        method: "PUT",
                        headers: headers,
                        data:object.updateObjec
                    },
                    function success(data, response) {
                        console.log("更新成功","success");
                        callback("success");
                    },
                    function error(err) {
                        console.log("更新失败",err.message);
                        if(errorCallback) errorCallback(err.message||err);
                        Util.oDataInterfaceInfo(err);
                    });
                break;
            case "add":
                OData.request({
                        requestUri: rquestUri,
                        method: "POST",
                        headers: headers,
                        data:object.updateObjec
                    },
                    function success(data, response) {
                        console.log("添加成功",data);
                        callback(data);
                    },
                    function error(err) {
                        console.log("添加失败",err.message);
                        if(errorCallback) errorCallback(err.message||err);
                        Util.oDataInterfaceInfo(err);
                    });
                break;
            case "delete":
                OData.request({
                        requestUri: rquestUri,
                        headers: headers,
                        method: "DELETE"
                    },
                    function success(data, response) {
                        //console.log("删除成功",data);
                        callback(data);
                    },
                    function error(err) {
                        //console.log("删除失败",err.message);
                        if(errorCallback) errorCallback(err.message||err);
                        Util.oDataInterfaceInfo(err);
                    });
                break;
        }
    }
});
//曹志强 20161208 获取事件类型数据接口
Object.defineProperty(oDataHandle, 'getEventCategoryData',{
  value: function(callback) {
      token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EventCategory";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      }
  }
});
//曹志强 20161208 增加事件类型数据接口
Object.defineProperty(oDataHandle, 'addEventCategoryData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EventCategory";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强 20161208 编辑事件类型数据接口
Object.defineProperty(oDataHandle, 'editEventCategoryData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EventCategory";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强 20161208 删除事件类型数据接口
Object.defineProperty(oDataHandle, 'deleteEventCategoryData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="EventCategory";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强 20161208 获取工单来源数据接口
Object.defineProperty(oDataHandle, 'getWorkOrderSourceData',{
  value: function(callback) {
      token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="WorkOrderSource";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      }
  }
});
//曹志强 20161208 增加工单来源数据接口
Object.defineProperty(oDataHandle, 'addWorkOrderSourceData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="WorkOrderSource";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强 20161208 编辑工单来源数据接口
Object.defineProperty(oDataHandle, 'editWorkOrderSourceData',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="WorkOrderSource";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强 20161208 删除工单来源数据接口
Object.defineProperty(oDataHandle, 'deleteWorkOrderSourceData',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="WorkOrderSource";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//刘家顺1208获取部门管理
Object.defineProperty(oDataHandle, 'getDepartMentData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetDepartment?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

//刘家顺1208添加部门管理

Object.defineProperty(oDataHandle, 'addDepartMentData',{
  value: function(param,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"AddDepartment?token="+token+"&DEPARTMENT_NAME='"+param.DEPARTMENT_NAME+"'&DEPARTMENT_CODE='"+param.DEPARTMENT_CODE+"'";
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

//编辑刘家顺1208部门管理
Object.defineProperty(oDataHandle, 'editDepartMentData',{
  value: function(param,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"EditDepartment?token="+token+"&DEPARTMENT_ID='"+param.DEPARTMENT_ID+"'&DEPARTMENT_NAME='"+param.DEPARTMENT_NAME+"'&DEPARTMENT_CODE='"+param.DEPARTMENT_CODE+"'";
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

//刘家顺1208删除部门管理
Object.defineProperty(oDataHandle, 'deleteDepartMentData',{
  value: function(id,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"DeleteDepartment?token="+token+"&DEPARTMENT_ID='"+id+"'";
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});



//刘家顺1209获取职位管理
Object.defineProperty(oDataHandle, 'getPositionData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetPosition?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//刘家顺1209添加职位管理
Object.defineProperty(oDataHandle, 'addPositionData',{
  value: function(data	,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"AddPosition?DEPARTMENT_ID='"+data.DEPARTMENT_ID+"'&POSITION_NAME='"+data.POSITION_NAME+"'&DEPARTMENT_NAME='"+data.DEPARTMENT_NAME+"'&token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//刘家顺1209编辑职位管理
Object.defineProperty(oDataHandle, 'editPositionData',{
  value: function(param,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"EditPosition?DEPARTMENT_ID='"+param.DEPARTMENT_ID+"'&POSITION_ID='"+param.RecId+"'&POSITION_NAME='"+param.POSITION_NAME+"'&DEPARTMENT_NAME='"+param.DEPARTMENT_NAME+"'&token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//刘家顺1209删除职位管理
Object.defineProperty(oDataHandle, 'deletePositionData',{
  value: function(id,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"DeletePosition?POSITION_ID='"+id+"'&token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20161208 查询项目管理数据接口
Object.defineProperty(oDataHandle, 'getProjectFirmData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetProjectNew?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20161208 删除项目管理数据接口
Object.defineProperty(oDataHandle, 'deleteProjectFirmData',{
  value: function(id,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"DeleteProject?PROJECTID='"+id+"'&token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20161208 查询项目管理数据接口
Object.defineProperty(oDataHandle, 'addProjectFirmData',{
  value: function(data,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"AddProject?token="+token+"&NAME='"+data.NAME+"'&CODE='"+data.CODE+"'&CODENAME='"+data.CODENAME+"'&FDRECID='"+data.FDRECID+"'";
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20161208 编辑项目管理数据接口
Object.defineProperty(oDataHandle, 'editProjectFirmData',{
  value: function(data,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"EditProject?token="+token+"&NAME='"+data.NAME+"'&CODE='"+data.CODE+"'&CODENAME='"+data.CODENAME+"'&FDRECID='"+data.FDRECID+"'&PROJECTID='"+data.RecId+"'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强 20161208 获取厂商信息数据接口    GetVendoInfo
Object.defineProperty(oDataHandle, 'getSiteviewasdData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetVendoInfo?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强 20161208 获取工单类型数据接口
Object.defineProperty(oDataHandle, 'getUnitTypeData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetUnitType?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强 20161208 删除工单类型数据接口    GetVendoInfo
Object.defineProperty(oDataHandle, 'deleteUnitTypeData',{
  value: function(id, callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"DeleteUnitType?token="+token+"&RECID='"+id+"'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20161214	 添加单位类型接口数据接口
Object.defineProperty(oDataHandle, 'addUnitTypeData',{
  value: function(data,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"AddUnitType?token="+token+"&UNITTYPENAME='"+data.UNITTYPENAME+"'&ORGIDS='"+data.ORGIDS+"'";
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20161214	 编辑单位类型接口数据接口
Object.defineProperty(oDataHandle, 'editUnitTypeData',{
  value: function(data,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"EditUnitType?token="+token+"&UNITTYPENAME='"+data.UNITTYPENAME+"'&ORGIDS='"+data.ORGIDS+"'&RECID='"+data.RECID+"'";
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//20161215程艳鸿获取颜色提醒接口
Object.defineProperty(oDataHandle, 'getColorData',{
  value: function(param,callback) {
  	var rquestUri = "";
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
       	if(param == null || param == ""){
       		rquestUri = serviceAddress+"GetColor?token="+token;
       	}else{
       		rquestUri = serviceAddress+"GetColor?token="+token+"&ISASSETS='"+param+"'";
       	}
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: false,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//程艳鸿 20161215 删除SLA颜色提醒数据接口
Object.defineProperty(oDataHandle, 'deleteColorData',{
  value: function(id,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"DeleteColor?token="+token+"&COLOR_ID='"+id+"'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//程艳鸿		20161216添加SLA颜色提醒数据接口
Object.defineProperty(oDataHandle, 'addColorData',{
  value: function(data,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"AddColor?token="+token+"&RGB1='"+data.RGB1+"'&RGB2='"+data.RGB2+"'&RGB3='"+data.RGB3+"'&VERIFYTIME='"+data.VERIFYTIME+"'&TIMEUNIT='"+data.TIMEUNIT+"'";
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//程艳鸿		20161216 编辑SLA颜色提醒数据接口
Object.defineProperty(oDataHandle, 'editColorData',{
  value: function(data,callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"EditColor?token="+token+"&COLOR_ID='"+data.COLOR_ID+"'&RGB1='"+data.RGB1+"'&RGB2='"+data.RGB2+"'&RGB3='"+data.RGB3+"'&VERIFYTIME='"+data.VERIFYTIME+"'&TIMEUNIT='"+data.TIMEUNIT+"'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//刘家顺  20161213获取单位管理
Object.defineProperty(oDataHandle, 'getMagUnitData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetUnitInfo?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});

//刘家顺 20161213删除单位管理
Object.defineProperty(oDataHandle, 'deleteMagUnitData',{
  value: function(id,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"DeleteUnit?token="+token+"&RECID='"+id+"'"; 
        console.log(rquestUri);
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//刘家顺  20161213添加单位管理
Object.defineProperty(oDataHandle, 'addMagUnitData',{
  value: function(param,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码 
        var rquestUri = serviceAddress+"AddUnit?token="+token+"&UNITTYPEINFO='"+param.UNITTYPEINFO+"'&UNITNAME='"+param.UNITNAME+"'&UNITNUMBER='"+param.UNITNUMBER+"'&UNITADDRESS='"+param.UNITADDRESS+"'&AREASID='"+param.AREASID+"'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
          console.log(rquestUri)
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//刘家顺  20161213编辑单位管理
Object.defineProperty(oDataHandle, 'editMagUnitData',{
  value: function(param	,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"EditUnit?token="+token+"&UNITTYPEINFO='"+param.UNITTYPEINFO+"'&UNITNAME='"+param.UNITNAME+"'&UNITNUMBER='"+param.UNITNUMBER+"'&UNITADDRESS='"+param.UNITADDRESS+"'&AREASID='"+param.AREASID+"'&RECID='"+param.RECID+"'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
          console.log(rquestUri)
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
////刘家顺  20161220 获取单位管理树
Object.defineProperty(oDataHandle, 'unitTypeDataTree',{
value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"UnitTypeTree?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        console.log('单位管理树接口')
        console.log(rquestUri)
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
}
});
//刘家顺  2016122 传值单位管理树 id
Object.defineProperty(oDataHandle, 'unitTypeDataTreeId',{
  value: function(param,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");       
       if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"UnitTypeTree?token="+token+"&UNITID='"+param.UNITID+"'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        console.log('编辑单位数 传id后 获取的树值 单位管理树接口')
        console.log(rquestUri)
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: false,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//刘家顺  20161220 获取单位管理区域下边的子区域
//明长然  注册-单位数据获取
Object.defineProperty(oDataHandle, 'getLoginUnit',{
    value: function(FDNAME,callback) {
        serviceAddress = Store.get("serviceUrl");
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetLoginUnit?FDNAME='"+FDNAME+"'&anonymouslogin&OPERATOR_TYPE='GET'";
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });

    }
});
//曹志强		20170203	获取资产状态数据
Object.defineProperty(oDataHandle, 'getAssetsStatus',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsStatuss";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170203	添加资产状态数据
Object.defineProperty(oDataHandle, 'addAssetsStatus',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsStatuss";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170203	编辑资产状态数据
Object.defineProperty(oDataHandle, 'editAssetsStatus',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsStatuss";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170203	删除资产状态数据
Object.defineProperty(oDataHandle, 'deleteAssetsStatus',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsStatuss";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});

//曹志强		20170203	获取应用响应级别数据
Object.defineProperty(oDataHandle, 'getApplevreSponse',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="ApplevreSponse";
          newObj.type = "query";
          newObj.token = token;
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170203	添加应用响应级别数据
Object.defineProperty(oDataHandle, 'addApplevreSponse',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="ApplevreSponse";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170203	编辑应用响应级别数据
Object.defineProperty(oDataHandle, 'editApplevreSponse',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="ApplevreSponse";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170203	删除资产状态数据
Object.defineProperty(oDataHandle, 'deleteApplevreSponse',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="ApplevreSponse";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170206	获取父级资产类型数据
Object.defineProperty(oDataHandle, 'getPAssetsTypeData',{
  value: function(callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsTypess";
          newObj.type = "query";
          newObj.token = token;
          newObj.filter = {"key":"ParentID","value":""};
          newObj.orderby ={key:"CreatedDateTime",sort:"desc"};
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170206	获取子级资产类型数据
Object.defineProperty(oDataHandle, 'getCAssetsTypeData',{
  value: function(callback) {
    token = Store.get("token");
    serviceAddress = Store.get("serviceUrl");
    if(token != '') {
        //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
        var rquestUri = serviceAddress+"GetChildAssetsType?token="+token;
        //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
        rquestUri = encodeURI(rquestUri);
        $.ajax({
            type: "get",
            async: true,
            url:rquestUri,
            dataType: "json",
            cache:false,
            success : function(result){
                callback(result.d);
            },error : function(result){
                Util.customInterfaceInfo(result);
            }
        });
    }
  }
});
//曹志强		20170206	添加父级资产类型数据
Object.defineProperty(oDataHandle, 'addPAssetsType',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsTypess";
          newObj.type = "add";
          newObj.token = token;
          newObj.updateObjec =data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170206	编辑父级资产类型数据
Object.defineProperty(oDataHandle, 'editPAssetsType',{
  value: function(data,callback) {
      token = Store.get("token");
      serviceAddress = Store.get("serviceUrl");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsTypess";
          newObj.type = "update";
          newObj.token = token;
  				newObj.recId = data.RecId;
  				newObj.updateObjec = data;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
//曹志强		20170206	删除父级资产类型数据
Object.defineProperty(oDataHandle, 'deletePAssetsType',{
  value: function(id,callback) {
      var token = Store.get("token");
      if(token != '') {
          var newObj = {};
          newObj.tableName ="AssetsTypess";
          newObj.type = "delete";
          newObj.token = token;
          newObj.recId = id;
          oDataHandle.handle(newObj, function(resp) {
              callback(resp);
          });
      } else {
          //console.log('token -  not null');
      }
  }
});
module.exports = oDataHandle;
