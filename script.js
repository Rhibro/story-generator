function createStory() {
  let noun = prompt("Please enter a noun (e.g., cat, car):");
  let verb = prompt("Please enter a verb (e.g., run, jump):");
  let verbTwo = prompt("Please enter another verb (e.g., run, jump):");
  let adjective = prompt("Please enter an adjective (e.g., happy, fast):");
  let adjecttiveTwo = prompt("Please enter another adjective (e.g., happy, fast):");

  let story = "Once upon a time, there lived a very " + adjective + " " + noun + "." +
     "The " + noun + " loved to " + verb + " all day long. " + "But when the " + noun + 
     " got " + adjecttiveTwo + ", " + noun + " had to " + verbTwo + ". The end.";

     document.getElementById("story").textContent = story;

}
     createStory();



