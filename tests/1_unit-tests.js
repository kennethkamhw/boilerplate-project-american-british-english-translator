const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  
  suite('1. Translate American English to British', () => {
    const translator = new Translator();
    translator.setLocale('american-to-british');
    let textToTest = "";
    let expectedText = "";
    //Translate Mangoes are my favorite fruit. to British English
    test('1.1. Translate Mangoes are my favorite fruit. to British English', () => {
      translator.setText('Translate Mangoes are my favorite fruit. to British English');
      assert.equal(translator.translate().text, 'Translate Mangoes are my <span class="highlight">favourite</span> fruit. to British English')
    });

    //Translate I ate yogurt for breakfast. to British English
    test('1.2. Translate I ate yogurt for breakfast. to British English', () => {
      translator.setText('Translate I ate yogurt for breakfast. to British English');
      assert.equal(translator.translate().text, 'Translate I ate <span class="highlight">yoghurt</span> for breakfast. to British English')
    })
    
    //Translate We had a party at my friend's condo. to British English
    test("1.3. Translate We had a party at my friend's condo. to British English", () => {
      translator.setText("We had a party at my friend's condo.");
      assert.equal(translator.translate().text, "We had a party at my friend's <span class=\"highlight\">flat</span>.")
    })
    
    //Translate Can you toss this in the trashcan for me? to British English
    test("1.4. Translate Can you toss this in the trashcan for me? to British English", () => {
      translator.setText("Can you toss this in the trashcan for me?");
      assert.equal(translator.translate().text, 'Can you toss this in the <span class="highlight">rubbish</span>can for me?')
    })
    
    //Translate The parking lot was full. to British English
    test("1.5. Translate The parking lot was full. to British English", () => {
      translator.setText("The parking lot was full.");
      assert.equal(translator.translate().text, 'The <span class="highlight">car park</span> was full.')
    })

    //Translate Like a high tech Rube Goldberg machine. to British English    
    textToTest = "Like a high tech Rube Goldberg machine.";
    expectedText = 'Like a high tech <span class="highlight">Heath Robinson</span> machine.';
    test("1.6. Translate Like a high tech Rube Goldberg machine. to British English", () => {
      translator.setText(textToTest);
      assert.equal(translator.translate().text, expectedText)
    })
    
    //Translate To play hooky means to skip class or work. to British English
    textToTest = "To play hooky means to skip class or work.";
    expectedText = 'To <span class="highlight">bunk off</span> means to skip class or work.';
    test("1.7. To play hooky means to skip class or work.", () => {
      translator.setText(textToTest);
      assert.equal(translator.translate().text, expectedText)
    })
    
    //Translate No Mr. Bond, I expect you to die. to British English
    textToTest = "No Mr. Bond, I expect you to die.";
    expectedText = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
    test("1.8. Translate No Mr. Bond, I expect you to die. to British English", () => {
      translator.setText(textToTest);
      assert.equal(translator.translate().text, expectedText)
    })
    
    //Translate Dr. Grosh will see you now. to British English
    textToTest = "Dr. Grosh will see you now.";
    expectedText = '<span class="highlight">Dr</span> Grosh will see you now.';
    test("1.9. Translate Dr. Grosh will see you now. to British English", () => {
      translator.setText(textToTest);
      assert.equal(translator.translate().text, expectedText)
    })
    
    //Translate Lunch is at 12:15 today. to British English
    test("1.10. Translate Lunch is at 12:15 today. to British English", () => {
      translator.setText("Lunch is at 12:15 today.");
      assert.equal(translator.convertTime().translate().text, 'Lunch is at <span class="highlight">12.15</span> today.');
    })

  });

  suite('2. Translate British to American English', () => {
    const translator = new Translator();
    translator.setLocale('british-to-american');
    
    //Translate We watched the footie match for a while. to American English
    test("2.1. Translate We watched the footie match for a while. to American English", () => {
      translator.setText('We watched the footie match for a while.');
      assert.equal(translator.translate().text, 'We watched the <span class="highlight">soccer</span> match for a while.');
    })
    
    //Translate Paracetamol takes up to an hour to work. to American English
    test("2.2. Translate Paracetamol takes up to an hour to work. to American English", () => {
      translator.setText('Paracetamol takes up to an hour to work.');
      assert.equal(translator.translate().text, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    })
    
    //Translate First, caramelise the onions. to American English
    test("2.3. First, caramelise the onions. to American English", () => {
      translator.setText('First, caramelise the onions.');
      assert.equal(translator.translate().text, 'First, <span class="highlight">caramelize</span> the onions.');
    })
    
    //Translate I spent the bank holiday at the funfair. to American English
    test("2.4. Translate I spent the bank holiday at the funfair. to American English", () => {
      translator.setText('I spent the bank holiday at the funfair.');
      assert.equal(translator.translate().text, 'I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.');
    })
    
    //Translate I had a bicky then went to the chippy. to American English
    test("2.5. Translate I had a bicky then went to the chippy. to American English", () => {
      translator.setText('I had a bicky then went to the chippy.');
      assert.equal(translator.translate().text, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    })
    
    //Translate I've just got bits and bobs in my bum bag. to American English
    test("2.6. Translate I've just got bits and bobs in my bum bag. to American English", () => {
      translator.setText("I've just got bits and bobs in my bum bag.");
      assert.equal(translator.translate().text, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    })
    
    //Translate The car boot sale at Boxted Airfield was called off. to American English
    test("2.7. Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
      translator.setText('The car boot sale at Boxted Airfield was called off.');
      assert.equal(translator.translate().text, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    })
    
    //Translate Have you met Mrs Kalyani? to American English
    test("2.8. Translate Have you met Mrs Kalyani? to American English", () => {
      translator.setText('Have you met Mrs Kalyani?');
      assert.equal(translator.translate().text, 'Have you met <span class="highlight">Mrs. </span>Kalyani?');
    })
    
    //Translate Prof Joyner of King's College, London. to American English
    test("2.9. Translate Prof Joyner of King's College, London. to American English", () => {
      translator.setText('Prof Joyner of King\'s College, London.');
      assert.equal(translator.translate().text, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    })
    
    //Translate Tea time is usually around 4 or 4.30. to American English
    test("2.10. Tea time is usually around 4 or 4.30. to American English", () => {
      translator.setText('Tea time is usually around 4 or 4.30.');
      assert.equal(translator.convertTime().translate().text, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.')
    })
    
  });

  suite('3. Highlight translation',  () => {

    //Highlight translation in Mangoes are my favorite fruit.
    test("3.1. Highlight translation in Mangoes are my favorite fruit.", () => {
      const translator = new Translator();
      translator.setLocale('american-to-british');
      translator.setText('Mangoes are my favorite fruit.');
      assert.equal(translator.translate().text, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    
    })
    
    //Highlight translation in I ate yogurt for breakfast.
    test("3.2 Highlight translation in I ate yogurt for breakfast.", () => {
      const translator = new Translator();
      translator.setLocale('american-to-british');
      translator.setText('I ate yogurt for breakfast.');
      assert.equal(translator.translate().text, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    })
    
    //Highlight translation in We watched the footie match for a while.
    test("3.2 Highlight translation in We watched the footie match for a while.", () => {
      const translator = new Translator();
      translator.setLocale('british-to-american');
      translator.setText('We watched the footie match for a while.');
      assert.equal(translator.translate().text, 'We watched the <span class="highlight">soccer</span> match for a while.');
    })
    
    //Highlight translation in Paracetamol takes up to an hour to work.
      test("3.2 Highlight translation in Paracetamol takes up to an hour to work.", () => {
      const translator = new Translator();
      translator.setLocale('british-to-american');
      translator.setText('Paracetamol takes up to an hour to work.');
      assert.equal(translator.translate().text, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    })
    
    
  });
  
  
});
