const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const {Schema} = mongoose;

const TVSchema = new Schema({
  name: {type: String, required: true},
  overview: {type: String, required: true},
  vote_average: Number,
  number_of_episodes: Number,
  spoken_languages: [{type: String, required: true}],
  poster_path: String
}, {
  versionKey: false
});

TVSchema.plugin(AutoIncrement, {inc_field: 'tv_id'});

module.exports = mongoose.model('TV', TVSchema);