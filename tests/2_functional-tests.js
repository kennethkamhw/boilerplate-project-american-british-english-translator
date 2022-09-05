const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  //Translation with text and locale fields: POST request to /api/translate
  test('Translation with text and locale fields: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/json')
      .send({
        text: "test the text",
        locale: "american-to-british"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          text: "test the text",
          translation: "Everything looks good to me!"
        });
        console.log(res.body);
        done();
      })
  })
  
  //Translation with text and invalid locale field: POST request to /api/translate
  test('Translation with text and invalid locale fields: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/json')
      .send({
        text: "test the text",
        locale: "american-to-banana"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "Invalid value for locale field"
        });
        console.log(res.body);
        done();
      })
  })
  
  //Translation with missing text field: POST request to /api/translate
  test('Translation with missing text field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/json')
      .send({
        locale: "american-to-british"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "Required field(s) missing"
        });
        console.log(res.body);
        done();
      })
  })
  
  //Translation with missing locale field: POST request to /api/translate
  test('Translation with missing locale field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/json')
      .send({
        text: "test the text",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "Required field(s) missing"
        });
        console.log(res.body);
        done();
      })
  })
  
  //Translation with empty text: POST request to /api/translate
  test('Translation with empty text: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/json')
      .send({
        text: "",
        locale: "american-to-british"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "No text to translate"
        });
        console.log(res.body);
        done();
      })
  })
  
  //Translation with text that needs no translation: POST request to /api/translate
  test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .set('content-type', 'application/json')
      .send({
        text: "banana!",
        locale: "american-to-british"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
         text: "banana!",
          translation: "Everything looks good to me!"
        });
        console.log(res.body);
        done();
      })
  })
  
});
