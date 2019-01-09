import 'whatwg-fetch'
import 'es6-promise'

export default function post( ...args ) {
    const [ url, body, token, verifyKey ] = [ args[0], args[1], args[2], args[3] ];
    const params = JSON.stringify(body);

    var result = null ;
    result = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: params
    });
    return result
}
