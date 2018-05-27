/**
 * Created by svend on 27/05/2018.
 */

const fileRead = require('../fileRead');
const userList = require('../userList');

module.exports = (function () {

    let renderAdmin = function (res, otherData) {
        fileRead.doFileReading()
            .then(function (data) {
                    res.render('adminpage', {
                        data: {
                            message: data.split(new RegExp(['\n', '\t'].join('|'), 'g'))
                        },
                        username: otherData
                    })
                }
            )
    };

    let renderToLandingPage = function (res, data) {
        res.render('home', {
            username: data
        })
    };

    let renderToGenericPage = function (res, data) {
        res.render('generic', {
            username: data
        })
    };

    let renderToElementsPage = function (res, data) {
        res.render('elements', {
            username: data
        })
    };

    let renderToAllPage = function (res, data) {
        console.log(userList.usernames)
          res.render('all', {
              username: data,
              data: userList.usernames
          })
        };

    return {
        renderAdmin: renderAdmin,
        renderToLandingPage: renderToLandingPage,
        renderToGenericPage: renderToGenericPage,
        renderToElementsPage: renderToElementsPage,
        renderToAllPage: renderToAllPage
    }

})();
