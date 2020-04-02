/**
 * @name testController
 * @description This module handles redirects from routes
 *
 */

const controller = {
    async testGet(req, res) {
        const response = 'hello';

        res.json({
            response
        });
    },

    async testPost(req, res) {
        console.log('Post: ', req);

        const response = 'ok';

        return res.json({
            response
        });
    },
};

module.exports = controller;
