import 'whatwg-fetch'
import 'es6-promise'



export function obj2params(obj){
    var result = '';
    for(let item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item])
    }

    if(result) {
        result = result.slice(1);
    }

    return result;
}


export default function get(url, params, token) {
    if (params) {
        let stringifyParams = obj2params(params);
        var urlWithUrl = url + '?' + stringifyParams;
        // console.log(urlWithUrl);
    }
    // console.log('params', params);
    var result = fetch(urlWithUrl || url, {
        headers: {
            'Authorization': token
        }
    });
    return result;
}