# 🧢 Find Your Hat Game

A simple terminal-based adventure game built with **Node.js**. Navigate your way through a 2D field to find your lost hat—just be careful not to fall into a hole or wander off the edge of the map!

## 🎮 Game Concept

You are placed on a randomly generated 2D map. Your goal is to reach the hat (`^`) without:
- Falling into holes (`O`)
- Going out of bounds

Every time you play, the field is generated anew, so each session offers a different challenge!

## 🚀 How to Play

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/find-your-hat-game.git
cd find-your-hat-game
```
2. Run the Game
Make sure you have Node.js installed. Then, run:

```bash
node main.js
```
3. Controls
Use the keyboard to move your player (*) around the map:

U - Up

D - Down

L - Left

R - Right

## 🧱 Game Symbols
| Symbol | Meaning |
| -- | -- |
| *	| Your current path |
| O | A hole (game over) |
| ^ | The hat (you win!) |
| ░ | Safe ground |

## 🛠️ Technologies Used

* Node.js
* JavaScript (ES6)
* Terminal I/O (via readline-sync or similar)

## 🎓 Part of Codecademy
This game was created as part of the "Back-End Engineer" course on Codecademy, focusing on building terminal-based Node.js applications.

## 📄 License

This project is licensed for educational purposes. Feel free to fork and modify it for your own learning!

