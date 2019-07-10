window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
window.jQuery.ajax = function (obj) {
    let promise = new Promise(function (resolve, reject) {
        let { url, method, data } = obj;
        let request = new XMLHttpRequest()
        request.open(method, url)
        request.send(data)
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                resolve.call(undefined, request)
            } else if (request.readyState >= 400) {
                reject.call(undefined, request)
            }
        }
    })
    return promise;
}
btn.addEventListener('click', function () {
    jQuery.ajax({
        url: '/xxx',
        method: 'post',
        data: 'a=1&b=2'
    }).then((request) => {
        console.log(request)
        console.log('请求成功')
        let string = request.responseText;
        let obj = JSON.parse(string)
        let name = obj.name;
        console.log(name)
    }, (request) => {
        console.log('请求失败')
    })
})