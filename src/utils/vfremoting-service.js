'use strict'

const VFRemotingConstant = window.VFRemotingConstant;

function request(remoteAction, params, options) {

    var invokeActionArgs = [];
    invokeActionArgs.push(VFRemotingConstant[remoteAction]);

    if (typeof params !== 'string' && typeof params !== 'function') {
        params.forEach(function(v) {
            invokeActionArgs.push(v);
        });
    } else {
        invokeActionArgs.push(params);
    }

    //callback
    invokeActionArgs.push(function(result, event) {

        return new Promise((resolve, reject) => {
            if (event.status) {
                try {
                    resolve(JSON.parse(result));
                } catch (e) {
                    resolve(result);
                }
            } else {
                reject(event);
            }
        });


    });

    var vfOptions = { escape: false, buffer: false };

    if (typeof options !== 'undefined') {
        Object.assign(vfOptions, options);
    }
    invokeActionArgs.push(vfOptions);

    VFRemotingConstant.VRMInvokeAction.apply(Visualforce.remoting.Manager, invokeActionArgs);
}

export default request;