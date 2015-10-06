confirm("Hi there! Welcome to A Guide Through Harry Potter and the Sorcerer's Stone."); // user will press ok
confirm("In this adventure game we will be going through a series of tasks pertaining to the first Harry Potter movies. If you succeed in all of these tasks, the Gryffindor house will win the House Cup! Good Luck!"); // user will press ok
var choice = prompt("Are you ready to start your series of tasks? (Yes or No?)"); // user will choose if they are ready or not
if(choice === "yes")
{ confirm("Awesome! In our first task we will be saving Hermione from the troll.");
}
else if(choice === "no")
{ confirm("Well, take a deep breath and get ready!");
}
confirm("Hermione is in the bathroom stall crying, then as she walks out she encounters a troll! She goes back into the stall to hide from the troll, but that doesn't help. . . The troll uses his bat to smash the bathroom doors and almost smashes Hermione!"); // part 1 of the summary of task 1
confirm("Hermione screams when she's almost smashed by the troll, Ron and Harry run in to save her. Harry yells 'Hermione move!' as the troll swings his bat again, then Harry and Ron start throwing bricks at the troll to try to distract him but it doesn't work so Harry jumps on him but then . . . the troll grabs Harry and almost hits him with his bat."); // part 2 of the summary of     task 1
var choice2 = prompt("Is it Hermione or Ron that casts a spell to help Harry?"); // user will choose if they think it is Hermione or Ron that casted the spell
if (choice2 === "Hermione")
{
    confirm("Ahh nice try but it's Hermione we are saving so it had to be Ron.");
}
else if (choice2 === "Ron")
{ confirm("Nice job, you're correct!");
}
var choice3 = prompt("Which spell does Ron do to get the bat from the troll? Wingardium Leviosa or Obliviate?"); // user will choose which spell they think was casted
if (choice3 === "Wingardium Leviosa")
{ confirm("You're correct! Lets complete the task.");
}
else if ( choice3 === "Obliviate")
{ confirm("Ahh, nice try. But it's Wingardium Leviosa.");
}
confirm("The spell Wingardium Leviosa raised the bat from the troll and it fell on the troll's head and knocked him out!"); // tells the user what the spell did
confirm("Harry is free from the troll and Hermione is saved! Good job, you finished the first task!"); // user completed the first task
confirm("For our final task we will be getting the Sorcerer's Stone, the stone that has been trying to be protected throughout the whole movie.");
var ready = prompt("Are you ready to go through many obstacles to complete this task? (Yes or no?)");
if (ready === "yes")
{ confirm("Awesome! Lets get started.");
}
else if (ready === "no")
{ confirm("Take a deep breath and get ready, this is our biggest task!");
}
confirm("The first obstacle we mut over come is getting past the three-headed dog.");
confirm("The three-headed dog stays asleep when music is playing");
var instrument = prompt("We need to figure out which instrument is playing to keep the three-headed dog asleep, the harp or guitar? (Type 'the harp' or 'guitar')");
if(instrument === "the harp")
{ confirm("You're correct!");
}
else if(instrument === "guitar")
{ confirm("Ahh, but it is the harp.");
}
confirm("Now that we got through our first obstacle, Hermione, Ron, and Harry went through the door in through ground.");
confirm("They fell into what's called devils snare, you must relax to fall out of it or else it will kill you. Hermione falls through first, then Harry but Ron won't relax so he's stuck! Hermione casts a spell that releases light, devils snare doesn't like sunlight so this will get Ron out.");
var spell = prompt("Which spell did Hermione cast? Lumus Solem or Incendio?");
if(spell === "Lumus Solem")
{ confirm("Awesome! You're correct!");
}
else if(spell === "Incendio")
{ confirm("Nice guess, but it's Lumus Solem");
}
confirm("Now that Ron got through the devils snare, there are a bunch of flying keys flying around, we must catch the right key to get through the next door. The right key is an old fashioned looking key and the wing is broken. There is a broom there and Harry gets on it but once he starts flying, the keys go crazy. Harry gets the key to be close to Hermione and Ron.");
var whichOne = prompt("Was it Hermione or Ron that caught the key?");
if (whichOne === "Hermione")
{ confirm("You're correct!");
}
else if (whichOne === "Ron")
{ confirm("Good guess, but it's Hermione");
}
confirm("Our next obstacle is to play a real/live game of chess.");
confirm("Ron is very good at playing chess so he assigned Hermione and Harry to their positions. Hermione is playing as the Queen, Harry is playing on the empty bishop square, and Ron is playing as a knight.");
confirm("Ron was choosing the chess moves. But, someone had to be sacrificed and only one person went on the final obstacle.");
var who = prompt("Who had to be sacrificed? Ron or Hermione?");
if (who === "Ron")
{ confirm("You're correct!");
}
else if (who === "Hermione")
{ confirm("Good guess, but Ron had to be sacrificed.");
}
confirm("Now that we know it was Ron who had to be sacrificed, lets figure out who is the one that went on to the final obstacle.");
var who2 = prompt("Who was the one to go onto the final obstacle: Harry or Hermione?");
if(who2 === "Harry")
{ confirm("You're correct, it had to be Harry to go on.");
}
else if(who2 === "Hermione")
{ confirm("Nice guess, but it had to be Harry to go on.");
}
confirm("Now we are in our final obstacle. As Harry walks into the next room, his scar on his forehead starts hurting, and he sees Professor Quirrell. He has a 'head-dress' on, he takes it off and there is a face on the back of his head. . . It's Voldemort.");
confirm("There is also a mirror that shows someone what they really want. Professor Quirrell tells Harry to look in the mirror and see where the Sorcerer Stone is. Harry sees it in his pocket and it is really in his pocket. Harry refuses to tell Quirrell where it is. But Harry takes it out of his pocket and Quirrell sees it and tries to grab it. He fails and they start fighting over it. Then Harry does something . . .");
var what = prompt("What does Harry do? Does Harry use his hands to turn him into stone that crumbles or does he cast a very strong spell on Quirrell? (Type Hands or Spell)");
if(what === "Hands")
{ confirm("Correct!");
}
else if(what === "Spell")
{ confirm("Good guess, but he used his hands and turned Quirrell into stone that crumbles.");
}
confirm("You've completed all the tasks!! Gryffindor house won the House Cup!!");

var wouldYou = prompt("You've completed multiple tasks, would you like to get to know the three main characters a little bit better? (Yes or no?)");
if(wouldYou === "yes")
{ confirm("Awesome! Here are some facts about the three main charatcers: Harry Potter, Ron Weasley, and Hermione Granger. Lets start with getting to know Harry Potter. Harry is in the Gryffindor house, as a first year he made it on the house quidditch team as a seeker, he is known as the 'Boy Who Lived', and he can speak to snakes which is known as Parseltongue. Now here are some facts about Hermione Granger. Hermione is also in the Gryffindor house, she is very smart, and both of her parents are humans or known as 'muggles'. Last but not least, Ron Weasley. Ron is in the Gryffindor also, has two brothers and one sister, he has a rat for a pet, and is a pure-blood wizard.");
}
else if(wouldYou === "no")
{ confirm("Ahh you're missing out, these characters are pretty cool! Thank you for playing, play again if you'd like!");
}
var character = prompt("Which character was your favorite in the game? (Hermione, Harry Potter or Ron?)");
switch(character) {
    case 'Hermione' :
        confirm("Swish and flick!");
        break;
    case 'Harry Potter' :
        confirm("Expecto Patronum!");
        break;
    case 'Ron' :
        confirm("Wicked");
        break;
} // Switch statement asking which character was their favorite

var characters = ["Harry Potter", "Ron Weasley", "Hermione Granger", "The Troll" ];  // Character array, a list of the characters in the game
var person1 = {
    firstName:"Harry",
    lastName:"Potter",
    house: "Gryffindor"
}
var person2 = {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor"
}
var person3 = {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor"
} // object of the characters

    