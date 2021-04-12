
var Name = document.getElementById('te1');
var te3 = document.querySelector('.te2');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


var storyText = "There was a girl in :insx: .Who always belived in  :insy:,So whenever she would go to any place she was always scared for her life that something wrong will happen and she will be in trouble  :insz:. ";
var insX =['India','Usa','Australia'];
var insY = ['ghost', 'witch', 'black magic'];
var insZ = ['so she never stayed in new place', 'she started running away from new people', 'she started to panic whenever she would meet any person'];

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insX);
  var yItem = randomValueFromArray(insY);
  var zItem = randomValueFromArray(insZ);

  newStory = newStory.replace(/:insx:/g, xItem).replace(/:insy:/g, yItem).replace(/:insz:/g, zItem);

  if(Name.value !== '') {
    var name = Name.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    newStory = newStory.replace(/Bob/g, name);
  }
  

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

te3.addEventListener('click', result);