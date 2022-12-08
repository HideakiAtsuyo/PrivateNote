var mongoose = globalThis.PN.mongoose;

const noteSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  has_manual_pass: {
    type: String,
    required: true
  },
  data_type: {
    type: String,
    required: false,
    default: "T"
  },
});

module.exports = mongoose.model("Note", noteSchema);