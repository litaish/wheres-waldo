# Game 'Wheres Waldo?'

[Live game demo](https://wheres-waldo-64002.web.app/)

---
### Goal of the game
The goal of the game is to find all given characters within a photo. When you see one of the characters, click
on them and select their icon.

---
### Recording scores
Best scores for each level are shown in the 'Leaderboards' page. When you find all characters within a level,
you can add your own name with your time.

---
### How it works
When a player clicks on a character within an image, the coordinates of that click get recorded. All characters have a
'bounding box' drawn around them. These bounding boxes are created with the 'Labelimg' tool, that returns points xmin, xmax, ymin, ymax.
If a correct character click point is within these points, then the character is tagged as found.

---
### Game built with

Game is built with:
1. React
2. React Context API
3. Firestore Database
4. Firebase Storage
5. Firebase Hosting
