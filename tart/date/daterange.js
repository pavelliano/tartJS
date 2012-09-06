// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview This file provides utility functions and classes for dateranges.
 */



goog.require('goog.date.DateRange');

goog.provide('tart.date.DateRange');


/**
 * @constructor
 * @extends {goog.date.DateRange}
 */
tart.date.DateRange = function() {
    goog.base(this);
};
goog.inherits(tart.date.DateRange, goog.date.DateRange);


/**
 * Returns the range that includes the thirty days that end yesterday.
 * @param {goog.date.Date=} opt_today The date to consider today.
 *     Defaults to today.
 * @return {goog.date.DateRange} The range that includes the thirty days that
 *     end yesterday.
 */
tart.date.DateRange.last30Days = function(opt_today) {
    var today = goog.date.DateRange.cloneOrCreate_(opt_today);
    var yesterday = goog.date.DateRange.offsetInDays_(today, -1);
    return new goog.date.DateRange(goog.date.DateRange.offsetInDays_(today, -30), yesterday);
};
