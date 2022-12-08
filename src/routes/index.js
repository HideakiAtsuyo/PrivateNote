const express = require("express"),
    router = express.Router(),
    Note = globalThis.PN.model;

router.route('/').get(function(req, res) {
    res.render("index.ejs", { title: process.env.TITLE });
});

router.route('/:toRead').get(async function(req, res) {
    const { toRead } = req.params;
    if(/\d{1,5}.*/.test(toRead)){ /* Sus Regex Ik */
        const mongoVersion = globalThis.PN.mongoose.Types.ObjectId(toRead.toString());
        const note = await Note.findOne({ _id: mongoVersion });
        if(!note) return res.send({error: true, message: "Not Found"});
        return res.render("readNote.ejs", { title: process.env.TITLE, noteId: toRead, data: note.data, has_manual_pass: note.has_manual_pass });
    } else {
        return res.redirect("/");
        //return res.send({ error: true, message: "Sad lazy to fix" });
    }

}).delete(async function(req, res){
    try{
        const { toRead } = req.params;
        const mongoVersion = globalThis.PN.mongoose.Types.ObjectId(toRead.toString());
        const note = await Note.findOne({ _id: mongoVersion });
        if(!note) return res.send({error: true, message: "Not Found"});
        const x = await Note.deleteMany({ _id: mongoVersion })
        return res.send({ data: note.data, has_manual_pass: note.has_manual_pass });
    } catch {
        res.send("NO")
    }
});

router.route('/create').post(async function(req, res) {
    const note = new Note({
        data: req.body.data,
        has_manual_pass: req.body.has_manual_pass,
        data_type: req.body.data_type
    });
    const savedNote = await note.save();
    return res.send({"has_manual_pass": req.body.has_manual_pass, "note_link": `${process.env.BASE_URL}${savedNote._id}`})
});


module.exports = router;