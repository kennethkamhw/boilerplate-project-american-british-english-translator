const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const ukToUs = 'british-to-american';
const usToUk = 'american-to-british';

class Translator {
  constructor() {
    this.text = "";
    this.locale = ""
  }

  checkValid() {
    // check if text is empty string
    if (this.text==="") {
      return { isValid: false, error: 'No text to translate' };
    }

    // check if locale is invalid value
    if (!((this.locale===usToUk)|(this.locale===ukToUs))) {
      return { isValid: false, error: 'Invalid value for locale field' };
    }

    // check if missing field(s)
    if (!this.text | !this.locale) {
      return { isValid: false, error: 'Required field(s) missing' };
    }

    // if all ok return true
    return { isValid: true }
  }

  compareText(textToCompare) {
    return this.text===textToCompare ? true: false;
  }
  
  setText(text) {
    this.text = text;
    return this;
  }

  setLocale(input) {
    this.locale = input;
    return this;
  }

  convertTime() {
    let regexUS = /(([0|1][0-9])|(2[0-4]))(\.)([0-5][0-9])/g;
    let regexUK = /(([0|1][0-9])|(2[0-4]))(:)([0-5][0-9])/g;
    let result = [];
    let newStringList = [];
    
    if (this.locale === usToUk) {
      result = this.text.match(regexUS);
      if (result!==null) {
        newStringList = result.map(e=> e.replace(".",":"));
        result.forEach((e,i)=>{
          this.text = this.text.replace(e, `<span class="highlight">${newStringList[i]}</span>`);
      })
    }
    }else {
      result = this.text.match(regexUK);
      if (result!==null) { 
        newStringList = result.map(e=> e.replace(":","."));
        result.forEach((e,i)=>{
          this.text = this.text.replace(e, `<span class="highlight">${newStringList[i]}</span>`);
      });
    }
      }

    return this;
  }

  translate() {

    if (this.locale === usToUk) {
      Object
        .entries(americanOnly)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(us, `<span class="highlight">${uk}</span>`);
        });
      Object
        .entries(americanToBritishSpelling)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(us, `<span class="highlight">${uk}</span>`);
        });
      Object
        .entries(americanToBritishTitles)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(us, `<span class="highlight">${uk}</span>`);
        });
      Object
        .entries(britishOnly)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(us, `<span class="highlight">${uk}</span>`);
        });
      
    } else if (this.locale===ukToUs) {
      Object
        .entries(americanOnly)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(uk, `<span class="highlight">${us}</span>`);
        });
      Object
        .entries(americanToBritishSpelling)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(uk, `<span class="highlight">${us}</span>`);
        });
      Object
        .entries(americanToBritishTitles)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(uk, `<span class="highlight">${us}</span>`);
        });
      Object
        .entries(britishOnly)
        .forEach(([us, uk]) => {
          this.text = this.text.replace(uk, `<span class="highlight">${us}</span>`);
        });
    }
    
    return this;
  }
}

module.exports = Translator;