## Project 2

In our second project, you'll dive into machine learning and get a sense for what modern techniques are capable of today.

The goals are:
- Learn about some of the crazy, freaky, and inspiring artistic potential of machine learning.
- Get familiar with some libraries for "Deep Learning".
- Develop comfort with running other people's code from the web that contains a lot of advanced stuff you may not understand.
- Get experience in a non-JavaScript programming language.

### Week 1

In class, I introduced a [bunch of concepts and examples of things](machine-learning.pdf) that you can do with modern machine learning. In this first assignment, you'll explore some of those things.

Start by exploring [these p5.js sketches](https://editor.p5js.org/ml5/sketches) that use the ml5.js library for machine learning. Try a few of them out. Observe that they can be somewhat flaky and slow. Welcome to machine learning! (Please note: some of these only work in Chrome! Please use Chrome for this assignment.)

Make sure to try out the Style Transfer, YOLO, and PoseNet examples from the ml5.js examples above. Learn about what the [ml5.js](https://ml5js.org) library is capable of by visiting that link and reading through.

Next, I want you to make a change to the [YOLO - webcam](https://editor.p5js.org/ml5/sketches/IE_P4q2m0LV) example -- make sure you "duplicate" the sketch into your account first:

**Assignment**: Modify the `draw()` function so that when a **person** is detected, the camera image goes blank and instead you only see the text **STOP LOOKING AT ME**. You should not need much more than an `if` statement -- but you will need to find where the category, or "class name", can be found, so that you can compare it with `"person"` and derermine whether to blank the screen and display the text.

**Assignment**: Make another modification, based on another class of object that might be detected. Or, two of the same object? 

**Assignment**: Btw, what kinds of objects does the YOLO sketch detect, exactly? Where does that list come from? Do some research and answer the two previous questions.