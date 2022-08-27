const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    constructor() {
        this.locale = "american-to-british";
    }

    setLocale(locale) {
        if (!locale) {
            return { error: "No locale selected" };
        }

        if (locale === "american-to-british") {
            this.locale = "american-to-british";
        } else if (locale === "british-to-american") {
            this.locale = "british-to-american";
        } else {
            return { error: "Invalid Locale" };
        }
    }

    getLocale(locale) {
        return this.locale;
    }

    checkTime(inputStr) {
        const timeRegEx = /[0-9]{2}(.|:)[0-9]{2}/g;
        let timeStr = inputStr.match(timeRegEx);
        if (timeStr) {
            let result = timeStr[0].match(/[0-9]{2}/g);
            let hours = result[0];
            let minutes = result[1];
            if (this.locale === "american-to-british") {
                return hours + "." + minutes;
            } else {
                return hours + ":" + minutes;
            }
        }
    }
}

module.exports = Translator;