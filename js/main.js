function makeStory(form) {
  const adjectiveOne = form.adjective1.value;

  const adjectiveTwo = form.adjective2.value;

  const verbIng = form.verbing.value;

  const place = form.Place.value;

  const adjectiveThree = form.adjective3.value;

  const pNounOne = form.pnoun1.value;

  const pNounTwo = form.pnoun2.value;

  const verbOne = form.verb1.value;

  const adjectiveFour = form.adjective4.value;

  const pobPlural = form.pobplural.value;

  const verbTwo = form.verb2.value;

  const pob = form.pobinput.value;

  const sillyWord = form.sillyword.value;

  const adjectiveFive = form.adjective5.value;

  const pNounThree = form.pnoun3.value;

  const story = `Putting on a newscast might look easy, but it takes a lot of ${adjectiveOne} work. Go 
behind the scenes, and you'll see dozens of ${adjectiveTwo} workers ${verbIng} in every direction! 
Reporters run back and forth between the studio and locations all around (the) ${place} to cover ${adjectiveThree} 
stories and interview ${pNounOne}. They are joined by videographers who operate handheld ${pNounTwo} to 
capture all the action. The anchors are the people who ${verbOne} behind the news desk and read the stories 
during the newscast. They have to look ${adjectiveFour} on air, so they can often be found getting makeup 
applied to their ${pobPlural}. The director tells everyone where and when to ${verbTwo}. It's easy to spot a 
director because he wears a headset on his ${pob} and yells things like "Camera two!" and "Cut to commercial!" 
and "${sillyWord}!" A newscast is live television, so if you make a/an ${adjectiveFive} mistake, everyone 
watching at home on their ${pNounThree} will know!`;

  document.getElementById("story").innerHTML = story;
  console.log(sillyWord);
}
