# tic-tac-toe

### Project Description

---

This website features a fully functional and playable version of Tic-Tac-Toe!

---


### Contributors

> Jordan Skomal

GitHub: [@jskomal](https://github.com/jskomal)

---

### Languages used

This project was written from the scratch using HTML, CSS, and vanilla JavaScript.

---

### Deployment

This project can be viewed by cloning the repo locally:

```js
clone the project down: `git clone git@github.com:jskomal/tic-tac-toe.git`
change directories: `cd tic-tac-toe`
run `open index.html`
```

---

### Features

- [x] Randomized starting player
- [x] Functional Tic-Tac-Toe
- [x] Ending modal popup with automatic restart of game

---

### Wins and Challenges

##### Wins

Completed the functionality even when confronted with ideas I was uncertain about, began to strech and reach for more complex iterator methods to more easily complete each iteration.

##### Challenges

Code could be more DRY, and my choice to use a static image for the background board instead of building the board in CSS caused undue complications.

---

### Code Structure

This project revolved around manipulating arrays in different ways and mapping them in specific orientations to check their win/draw statuses.

This was accomplished in the `game.js` file mostly, updating the data model to reflect the status of the game.

I labeled each of the 9 tic tac toe tiles with an id of 0-8 respectively, which served as a convenient way to access the correct index easily from my visual components to my data model. 

This, coupled with the `splice()` array method allowed me to click on a particular square, and have my data model know where to add the `currentPlayer` text.

Following the addition of the strings to the array, I decided to split out the array into two sub-arrays mapped by their token, which I then reached for the `map()` array method and an incrementer variable to help match the 8 possible win conditions.

After the creation of the sub-arrays, each sub-array was tested against the possible winning combinations that would end in 2 possible scenarios, win or continue.

I then checked for draw conditions and would update a boolean value for wins or draws based on the latest two results, which triggered certain ending conditions based on their statuses.


---

### Gallery

Default View

![image](https://user-images.githubusercontent.com/90876852/150032739-3ea11e4e-6d7a-41ac-ab34-594282c8c20d.png)
