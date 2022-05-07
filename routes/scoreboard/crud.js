// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const express = require('express');
function fmt_title(username, datestr, description) {
    description = description.split("\n")[0];
    //description = description.length > 10 ? description.substring(0, 10) : description;
    datestr = datestr.length > 10 ? datestr.substring(0, 10) : datestr;
    return username + ":" + datestr + ":" + description;
}
function fmt_now() {
    var d = new Date();
    var dstr = d.getFullYear() + "-";
    if (d.getMonth() < 9) dstr += "0";
    dstr += d.getMonth()+1 + "-";
    if (d.getDate() < 9) dstr += "0";
    dstr += d.getDate();
    return dstr;
}
function fmt_time() {
    var d = new Date();
    var dstr = d.getFullYear() + "-";
    if (d.getMonth() < 10) dstr += "0";
    dstr += d.getMonth() + 1 + "-";
    if (d.getDate() < 10) dstr += "0";
    dstr += d.getDate();
    dstr += " "+d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
    return dstr;
}
const router = express.Router();
// Use the oauth middleware to automatically get the user's profile
// information and expose login/logout URLs to templates.
// Set Content-Type for all responses for these routes

/**
 * GET /books/add
 *
 * Display a page of books (up to ten at a time).
 */
router.get('/', (req, res, next) => {
        res.render('scoreboard/scoreboard.pug', {
        });
});

/**
 * Errors on "/books/*" routes.
 */
router.use((err, req, res, next) => {
  // Format error and forward to generic error handler for logging and
  // responding to the request
  err.response = err.message;
  next(err);
});
module.exports = router;