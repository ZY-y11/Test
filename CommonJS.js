
function  requestMethod( par1, par2, par3, callback) {

//第一步：创建一个网络请求
    var xhr = new XMLHttpRequest();
//第二步：与服务端建立连接
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
//设置请求头
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//第三步：向服务器传递参数
    xhr.send(par3);

//第四步;接收服务器返回的数据
    xhr.onreadystatechange = function () {
        if (
            xhr.readyState == 4 && xhr.status == 200) {
            var responseData = JSON.parse(xhr.responseText);
            var obj = responseData.data;

            callback(obj, xhr.responseText);

        }
    }
}
