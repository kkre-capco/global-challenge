/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
    name: String,
    username: String,
    email: String,
    app: String,
    location: String,
    level: String,
    challengeName: String,
    access_token: String,
    token_type: String,
    refresh_token: String,
    expires_in: Date,
    expires_at: Number,
    user_id: String,
    activities: {},
    picName: String,
    totalDistance: Number,
    totalDistanceConverted: Number,
    totalCalories: Number,
    totalDuration: Number,
    totalSteps: Number,
    totalWalk: Number,
    totalRun: Number,
    totalYoga: Number,
    totalSwim: Number,
    totalCycling: Number,
    totalCyclingConverted: Number,
    totalRowing: Number,
}, {strict: false});

UserSchema.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).exec(cb);
  }
};

var User = mongoose.model('User', UserSchema);
