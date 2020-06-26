# Assessing class performance

- [Assessing class performance](#assessing-class-performance)
  - [Learning objectives](#learning-objectives)
  - [Exercise](#exercise)
  - [- Come up with a strategy to puncture these misconceptions. Live coding, worked example, peer instruction. Write everything down.](#ullicome-up-with-a-strategy-to-puncture-these-misconceptions-live-coding-worked-example-peer-instruction-write-everything-downliul)
  - [2. Watch this video. Do you think this can be applied to teaching software? What does that mean for our teaching?](#2-watch-this-video-do-you-think-this-can-be-applied-to-teaching-software-what-does-that-mean-for-our-teaching)
  - [3. Create examples and questions that visualize the students misconceptions regarding promises.](#3-create-examples-and-questions-that-visualize-the-students-misconceptions-regarding-promises)
  - [Class struggles example](#class-struggles-example)
  - [Learning Paths](#learning-paths)

---

## Learning objectives

- Assess a class from their homework
- Draw out misconceptions

---

## Exercise

1. With a bunch of 7 homeworks, identify what this class struggle with. Check [this example](#class-struggles-example) before starting
 - Write down a list of topics that needs to be retaught for this class
 - Come up with a strategy to puncture these misconceptions. Live coding, worked example, peer instruction. Write everything down.
---
2. Watch this [video](https://www.youtube.com/watch?v=eVtCO84MDj8). Do you think this can be applied to teaching software? What does that mean for our teaching?
---
3. Create examples and questions that visualize the students misconceptions regarding promises.
---
4. Present the coach with an exercise and ask them to solve it 5 ways incorrectly, with mistakes a student would make. Again to draw out misconceptions.

---

## Class struggles example
This is an example of a alumni Zuhair Taha going through a classes homework and making a list of misconceptions/struggles of the class

After following class 14 homework for javascript 1 week 2 here are some notes:
- Many students have a problem with understanding return at functions.
- The most difficult question for them was the fourth student manager
- Many students don't know that they can use <= and >= is available when they compare at if condition.
- There is still a problem with understanding the goal of functions. What is the function, why do we use it, and when?
- When I told students at the feedback that they can give the parameter at the function a default value at:
function getFullname(firstname, surname, useFormalName = false) {
I noticed confusion and difficulty understanding this.
- Using a lot of redundant `console.log` even if not mentioned in the question to log something. Also, I've seen at many homework that the return it like
return console.log(..)
- Using unclear or non-expressive names for the variables like x, a and I have told them that it is preferable to use clear, meaningful names for variables and functions.
- At question 4 to check if the student exists or not. Very few were thinking of using includes of indexOf at the array. Many used complex loops to implement it.
-There was no clear understanding of how to use codepen to test the code. (edited)

## Learning Paths

- [Teaching the class](../learning-paths/teaching-the-class.md)
