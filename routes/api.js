"use strict";

const Translator = require("../components/translator.js");

module.exports = function(app) {
    const translator = new Translator();

    app.route("/api/translate").post((req, res) => {
        let { text, locale } = req.body;
        let translation = `translation of ${text}`;

        translator.setLocale(locale);
        console.log(translator.getLocale);

        translator.checkTime(text);

        res.json({
            text: text,
            translation: translation,
        });
        console.log(`result = ${result}`);
    });
};