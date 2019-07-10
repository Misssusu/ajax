window.jQuery.ajax = function (url, method, body, success, fail) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.send(body)
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            success.call(undefined,request)
        } else if (request.readyState >= 400) {
            fail.call(undefined,request)
        }
    }
}
function success(request) {
    console.log(request)
    console.log('请求成功')
    let string = request.responseText;
    let obj = JSON.parse(string)
    let name = obj.name;
    console.log(name)
}
function fail() {
    console.log('请求失败')
}
btn.addEventListener('click', function () {
    jQuery.ajax('/xxx','post','a=1&b=2',success,fail)
})