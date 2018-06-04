'use strict'

import request from './vfremoting-service';

let getObjectGraphHandlers = function() {
    return new Promise((resolve, reject) => {
        try {
            request("getObjectGraphHandlers", [])
                .then(function(response) {
                	console.log(response);
                    resolve(response);

                }, function(error) {

                });
            // resp = SharedService.stripNamespace(resp, packagePrefix);

        } catch (result) {
            reject(result.message.substring(0, 110));
        }
    });
}

let remoteActions = {
    getObjectGraphHandlers: getObjectGraphHandlers
};


export default remoteActions;