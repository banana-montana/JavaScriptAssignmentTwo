# JavaScriptAssignmentTwo

Programming Fundamentals Assignment (Unassisted) : 
The Crystal Ball and Magical Numbers


The Daily Prophet is a fortune telling site where users can receive their fortune (The Crystal Ball) and their lucky numbers (Magical Numbers) for the day. 

The Crystal Ball is a simple fortune generator that consists of two buttons and a results box. Users will find out their fortune by selecting a button called “Ask the Gods” which links to a function that generates a random fortune reading from an array and feeds it into a box. 
If the user is unhappy with the first fortune they have received they have another chance to ask the gods to rethink their fate by selecting the button “Ask the Gods to rethink it”. “Ask the Gods to rethink it” works just like “Ask the Gods” in that it links to a function that generates a random fortune reading from an array. They can press the button “Ask the Gods to rethink it” as many times as necessary (the button will continuously pull a different fortune at random from the array) until they are satisfied with their fortune.

Once the user has received their fortune they can find their magical lucky numbers for the day. Users will find out what their lucky numbers for the day are by selecting the button “Lucky Numbers”. The page will immediately scroll down once the button is pressed to create space for the results box that will appear below the button. The numbers will appear in the results box.


Epic:
A simple fortune generator and random lucky number generator. 


User Story:
- User wants to find out their fortune and selects “Ask the Gods” button.
	- “Ask the Gods” button random pulls a fortune listed in an array.
	- The fortune is displayed in the results box (peach box).
	- “Ask the Gods” button can only be used once.
- User is dissatisfied with their results
	- The first button “Ask the Gods” is now grey. Only the button “Ask the Gods to rethink it” can be 	used.
- User selects the button “Ask the Gods to rethink it”.
	- “Ask the Gods to rethink it” calls a function that randomly pulls a fortune listed in an array and 	replaces it in the  display box in place of the previous fortune.
	- If user is still unhappy with their fortune they can keep selecting the “Ask the Gods to rethink it” 	button.
  The “Ask the Gods to rethink it” button will keep pulling random fortunes from the array list until the user is satisfied   with their fortune.


- User wants numbers that are randomly selected for them
	- User selects “lucky numbers” button
 	- The page window automatically scrolls down to reveal a results box once the button is clicked	- The button “Lucky     Numbers” calls a function that randomly selects 6 numbers between the 	numbers 1 and 60
	- The numbers generated will not be repeated in the sequence
- User now has their daily fortune as well as lucky numbers for the day
