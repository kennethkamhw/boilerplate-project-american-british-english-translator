'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.use((req, res, next) => {
    console.log(`Method = ${req.method}, Path = ${req.originalUrl}, Body = ${JSON.stringify(req.body)}`);
    next();
  })
  
  app.route('/api/translate')
    .post((req, res) => { 
      translator
        .setText(req.body.text)
        .setLocale(req.body.locale);

      if (!translator.checkValid().isValid) {
        console.log(translator.checkValid())
        res.json({ error: translator.checkValid().error });
        return;
      }
      
      let result = {
        text: req.body.text,
        translation: translator.convertTime().translate().text
      };

      if (translator.compareText(req.body.text)) {
        res.json({
          text: req.body.text,
          translation: 'Everything looks good to me!'
        });
        return;
      }

      console.log(result);
      
      res.json(result);
      
    });
};
