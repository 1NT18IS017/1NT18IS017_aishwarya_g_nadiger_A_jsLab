function my() {
    var x;
    x = 8;
    try { 
      if(isNaN(x)) throw "not a number";
      if(x < 0)  throw "Negative number";
      if(x > 0)   throw "Positive number";
    }
    catch(err) {
      console.log(err);
    }
  }
  function my1() {
    var x;
    x = 'e';
    try { 
      if (x='b'||'c'||'d'||'f'||'g'||'h'||'j'||'k'||'l'||'m') throw "consonants";
      if(x ='a'||'e'||'i'||'o'||'u')  throw "vowels";
    }
    catch(error) {
      console.log(error);
    }
  }
my();
my1();