const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const {Schema} = mongoose;

const MovieSchema = new Schema({
  title: {type: String, required: true},
  overview: {type: String, required: true},
  release_date: {type: String, required: true},
  genres: [{type: String, required: true}],
  vote_average: Number,
  budget: Number,
  original_language: {type: String, required: true},
  poster_path: String
}, {
  versionKey: false
});

MovieSchema.plugin(AutoIncrement, {inc_field: 'movie_id'});

module.exports = mongoose.model('Movie', MovieSchema);