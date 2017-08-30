const request = require('request');
const chalk = require('chalk');

function search(moduleName,existlist=[],nonelist=[] ) {
    return new Promise(function(resolve, reject) {
        request('https://www.npmjs.org/package/' + moduleName, function(error, response, body) {
            if (error) {
                return reject(error);
            } 
            if (response.statusCode === 200) {
								existlist.push(moduleName);
								// 忽略单条信息反馈
                return resolve(`{${moduleName}: '已存在'}`);
            }
						nonelist.push(moduleName);
						// 忽略单条信息反馈
            resolve(`{${moduleName}: '暂时不存在'}`);
        });
    });
};

module.exports = search;
