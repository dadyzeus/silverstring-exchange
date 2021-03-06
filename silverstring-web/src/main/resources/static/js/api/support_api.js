function SupportApi () {
    this.call = function(uri, callback, resultProcFunc, params) {
        $.ajax({
            url: uri
            , type: "POST"
            , dataType: 'json'
            , contentType:"application/json; charset=UTF-8"
            , data: JSON.stringify(params)
            , success: function (result) {
                resultProcFunc(result.data);
                return callback(result);
            }
            , error:function(e){
                var data = new Object();
                data.code = 1000;
                data.msg = JSON.parse(e.responseText).message;
                return callback(data);
            }
        });
        return true;
    };

    this.getSupports = function(callback, params) {
        return this.call("/api/support/getSupports", callback, function(data) {
        }, params);
    }

    this.regist = function(callback, params) {
        return this.call("/api/support/regist", callback, function(data) {
        }, params);
    }
}

var supportApi = new SupportApi();