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

    // check if missing field(s)
    if (!this.text | !this.locale) {
      return { isValid: false, error: 'Required field(s) missing' };
    }

    // check if locale is invalid value
    if (!((this.locale===usToUk)|(this.locale===ukToUs))) {
      return { isValid: false, error: 'Invalid value for locale field' };
    }

    // if all ok return true
    return { isValid: true }
  }

  compareText(textToCompare) {
    return this.text.toLowerCase()===textToCompare.toLowerCase() ? true: false;
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
    let regexUk = /(([0|1]?[0-9])|(2[0-4]))(\.)([0-5][0-9])/g;
    let regexUs = /(([0|1]?[0-9])|(2[0-4]))(:)([0-5][0-9])/g;
    let result = [];
    let newStringList = [];
    
    if (this.locale === usToUk) {
      result = this.text.match(regexUs);
      if (result!==null) {
        newStringList = result.map(e=> e.replace(":","."));
        result.forEach((e,i)=>{
          this.text = this.text.replace(e, `<span class="highlight">${newStringList[i]}</span>`);
      })
    }
    }else {
      result = this.text.match(regexUk);
      if (result!==null) { 
        newStringList = result.map(e=> e.replace(".",":"));
        result.forEach((e,i)=>{
          this.text = this.text.replace(e, `<span class="highlight">${newStringList[i]}</span>`);
      });
    }
      }

    return this;
  }

  reverseKeyAndValue(dictionary) {
    return Object.fromEntries(Object.entries(dictionary).map(([key, value])=> {
      return [value, key]
    }))
  }
  
  searchAndReplaceText(dictionary, locale) {
    let dictionaryObjectList = Object.entries(dictionary);
    dictionaryObjectList.forEach(([us, uk]) => {
      this.text = this.text.replace(us, `<span class="highlight">${uk}</span>`);
    });
  }

  useDictionaries(dictionaryCollection) {
    dictionaryCollection.forEach(dictionary => {
      this.searchAndReplaceText(dictionary, this.locale)
    });
  }
  
  translate() {

    const usToUkDictionaryCollection = [americanOnly, americanToBritishSpelling, americanToBritishTitles];

    const ukToUsDictionaryCollection = [britishOnly, this.reverseKeyAndValue(americanToBritishSpelling), this.reverseKeyAndValue(americanToBritishTitles)]
    
    if (this.locale === usToUk) {
      this.useDictionaries(usToUkDictionaryCollection);
    } else if (this.locale === ukToUs) {
      this.useDictionaries(ukToUsDictionaryCollection);
    }
    return this;
  }
}

module.exports = Translator;