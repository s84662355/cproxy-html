   
 
    function GetNewVersionInfo(callback){
    var data = {
      route: "GetNewVersionInfo",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
    }

  function WinClose() {
    var data = {
      route: "WinClose",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
       
    });
  }
  function WinMinimize() {
    var data = {
      route: "WinMinimize",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
       
    });
  }
  function WinMaximize() {
    var data = {
      route: "WinMaximize",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
       
    });
  }
  function Close() {
    var data = {
      route: "Close",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
       
    });
  }
  function CheckProxyIpStatus(id, ip, port, username, passwd, typ, callback) {
    var data = {
      route: "CheckProxyIpStatus",
      task_id: randomString(32),
      data: { "id": id, "ip": ip, "port": port, "username": username, "passwd": passwd, "type": Number(typ) },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function ClipboardStaticIp(data, callback) {
    var data = {
      route: "ClipboardStaticIp",
      task_id: randomString(32),
      data: data,
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function CheckNewVersion(callback) {
     
    var data = {
      route: "CheckNewVersion",
      task_id: randomString(32),
      data: data,
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function NewVersion(callback) {
    var data = {
      route: "NewVersion",
      task_id: randomString(32),
      data: data,
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  //自动登录后用来获取用户信息
  function GetLoginInfo(callback) {
    var data = {
      route: "GetLoginInfo",
      task_id: randomString(32),
      data: data,
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function SetSoftwareSetting(data, callback) {
    var data = {
      route: "SetSoftwareSetting",
      task_id: randomString(32),
      data: data,
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function GetSoftwareSetting(callback) {
    var data = {
      route: "GetSoftwareSetting",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  //池四
  function GetPoolFourBrokerIp(country_code, protocol, last_time, number, callback) {
    var data = {
      route: "GetPoolFourBrokerIp",
      task_id: randomString(32),
      data: { country_code: country_code, protocol: protocol, last_time: last_time, number: number },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  ///池二
  function GetListDynamicBrokerIp(country, region, change, twoPooltimeType, protocol, senior, callback) {
    var data = {
      route: "GetListDynamicBrokerIp",
      task_id: randomString(32),
      data: { country: country, region: region, type: 1, change_type: twoPooltimeType, change: change, protocol: protocol, count: 10, senior: senior },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function GetUseIpInfo( callback) {
    var data = {
      route: "GetUseIpInfo",
      task_id: randomString(32),
      data: { },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function GetPoolTwoCity(callback) {
    var data = {
      route: "GetPoolTwoCity",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function GetPoolFourCountry(callback) {
    var data = {
      route: "GetPoolFourCountry",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function GetPoolTwoCountry(callback) {
    var data = {
      route: "GetPoolTwoCountry",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function CloseProxy(callback) {
    var data = {
      route: "CloseProxy",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function SetStaticIp(row, callback) {
    var data = {
      route: "SetStaticIp",
      task_id: randomString(32),
      data: {
        "id": row.id,
        "ip": row.ip,
        "port": row.port,
        "username": row.username,
        "password": row.password,
        "type": row.protocol_type
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function GetProxyUrlInfo(id, ip, port, username, passwd, typ, callback) {
    var data = {
      route: "GetProxyUrlInfo",
      task_id: randomString(32),
      data: { "id": id, "ip": ip, "port": port, "username": username, "passwd": passwd, "type": Number(typ) },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function GetListStaticIpSort(sortField,sort,page, per_page, callback) {
    var data = {
      route: "GetListStaticIp",
      task_id: randomString(32),
      data: { "page": page, "per_page": per_page,sort:sort,sortField:sortField},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function GetListStaticIp(page, per_page, callback) {
    var data = {
      route: "GetListStaticIp",
      task_id: randomString(32),
      data: { "page": page, "per_page": per_page},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }



  function GetInterNetInfo(callback) {
    var data = {
      route: "GetInterNetInfo",
      task_id: randomString(32),
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function GoLogin(username, passwd, autoLogin, callback) {
    var data = {
      route: "Login",
      task_id: randomString(32),
      data: { "username": username, "passwd": passwd, "autoLogin": autoLogin },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function LoginOut(callback) {
    var data = {
      route: "LoginOut",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
  function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

  function GetIpInfo(callback) {
    var data = {
      route: "GetIpInfo",
      task_id: randomString(32),
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
 
  function GetDynamicsProxyGeoDatas(callback) {
    var data = {
      route: "GetDynamicsProxyGeoDatas",
      task_id: randomString(32),
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function GetCountry(callback) {
    var data = {
      route: "GetCountry",
      task_id: randomString(32),
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function GetCountryCity(callback) {
    var data = {
      route: "GetCountryCity",
      task_id: randomString(32),
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function GetDynamicsProxyData(country,city,protocol,time,ipMode,callback) {
    var data = {
      route: "GetDynamicsProxyData",
      task_id: randomString(32),
      data: { 
          "country": country, 
          "city": city, 
          "protocol": protocol,
          "time":time,
          "ipMode": ipMode
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function GetUserInfo(callback) {
    var data = {
      route: "GetUserInfo",
      task_id: randomString(32),
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function UpdateAutoDynamic(autoBuy ,autoBuyFlow ,lastBuy,callback) {
    var data = {
      route: "UpdateAutoDynamic",
      task_id: randomString(32),
      data: { 
          "autoBuy": autoBuy, 
          "autoBuyFlow": autoBuyFlow, 
          "lastBuy": lastBuy
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function GetAutoDynamic(callback) {
    var data = {
      route: "GetAutoDynamic",
      task_id: randomString(32),
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function SendEmailCode(email,type,callback) {
    var data = {
      route: "SendEmailCode",
      task_id: randomString(32),
      data: { 
          "email": email, 
          "type": type
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function ForgetPassword(email,password,verify_code,callback) {
    var data = {
      route: "ForgetPassword",
      task_id: randomString(32),
      data: {
          "email":email,
          "password":password,
          "verify_code":verify_code
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }
 
  function GetStaticIpList(page,per_page,protocol,remark,country,ip_type,network_status,callback) {
    var data = {
      route: "GetStaticIpList",
      task_id: randomString(32),
      data: {
         page:page,
         per_page:per_page,
         protocol:protocol,
         remark:remark,
         country:country,
         ip_type:ip_type,
         network_status:network_status
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }


  function GetStaticCountry(callback){
    var data = {
      route: "GetStaticCountry",
      task_id: randomString(32),
      data: {
 
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function UpdateRemark(id,remark,pageKey,callback){
    var data = {
      route: "UpdateRemark",
      task_id: randomString(32),
      data: {
      "id": id,
      "remark": remark,
      "pageKey":pageKey
      },
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
      callback(message)
    });
  }

  function GetStaticCountIp(callback){
    var data = {
      route: "GetStaticCountIp",
      task_id: randomString(32),
      data: {},
      type: 1
    }
    astilectron.sendMessage(data, function (message) {
        callback(message)
    });
  }

   
 


export {
GetSoftwareSetting,
GoLogin,
GetInterNetInfo,
LoginOut,
GetIpInfo,
WinClose,
WinMinimize,
WinMaximize,
Close,
SetSoftwareSetting,
GetPoolTwoCountry,
GetPoolTwoCity,
GetDynamicsProxyGeoDatas,
GetListDynamicBrokerIp,
GetPoolFourBrokerIp,
GetPoolFourCountry,
GetListStaticIpSort,
GetCountry,
GetCountryCity,
GetDynamicsProxyData,
CloseProxy,
GetUserInfo,
UpdateAutoDynamic,
GetAutoDynamic,
SendEmailCode,
ForgetPassword,
GetStaticIpList,
GetStaticCountry,
UpdateRemark,
GetStaticCountIp,
SetStaticIp
}


