# [Interview-Questions-Fall-2020](https://docs.google.com/document/d/1PvdwJD0eyS_xaZVGHVx5iyAz3tuv9dUA1lbZAkp7qp0/edit)

Thank you for your interest in Mosaic! We use this technical assessment to achieve two things:
1. Allow you to showcase your technical skills.
2. Give you a sense of some of the types of problems we are currently working on here at Mosaic.

We will be scheduling a follow up interview with Pranav Ramkrishnan (pranav@mosaic.us) to discuss this exercise and your work. Our only request is that you **_submit your work by the end of the business day before your interview._**

We hope that you enjoy working through this problem, and hope this exercise provides you with a glimpse of how we are trying to interweave software engineering concepts into home building.  If at any time you have questions, please do not hesitate to email Max at max@mosaic.us.

## Expectations

We hope that this exercise takes no more than **_90 minutes_**. We want to be respectful of your time, so if you end up working on this project for more than 90 minutes, we encourage you to capture your ideas in a way that you can discuss them with us during this meeting. 

Your approach and design is more important than the actual outcome of your solution. In that vein, during the interview, we expect you to justify your technical decisions (including alternate considerations you chose not to pursue), explain how you think about the usability and performance of your code, and finally, explain how you would go about testing your code. All that being said, we strongly recommend that you submit something that is runnable.

Most of our codebase is written in Javascript, but we are language agnostic for the purposes of this interview. However, if you do end up producing executable code, we ask that you provide instructions for installing dependencies (e.g. `yarn`) and running your code (e.g. `yarn start`) on at least one of the examples so that we can reproduce your results.

## Problem

We’ve developed an internal data model to represent a typical single family home. You can find an example of this model [here](https://github.com/mosaic-builders/Rooms-Tech-Assessment/tree/master/example1).

As you might expect, a typical house consists of `walls`, `doors`, and `windows`. We also have an entity to represent the two endpoints of a wall – we call these entities `corners`. Importantly, `corners` can be shared by multiple walls. We’ve provided more detailed descriptions of each entity below. For the purposes of this exercise, you should think of this model as a graph, with `corners` representing nodes, and `walls` representing edges between nodes. 

The problem we would like you to attempt is to find _all enclosed rooms in a model_. More specifically, we will define a room as having walls on all sides. You can look at the [example model and output](https://github.com/mosaic-builders/Rooms-Tech-Assessment/tree/master/example1) to get a better understanding.

There are two approaches solving this problem. We request that for this assignment **_you pick one of the following options:_**
1. <ins> Option A (algorithm-focused) </ins>: Implement a method that finds all enclosed rooms, as described above, when given an input XML model.

2. <ins> Option B (front-end-focused) </ins>: Implement a web-based tool that can i) render a 2D representation of the  XML model, and ii) then allow a user to specify the enclosed rooms manually via an interaction with the 2D representation.

For both options, we are looking for a list of rooms for this input [model](https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model.xml).

## Useful Details:
We’ve included definitions and explanations that might be helpful [here](https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model-api.md). We've also visualized this model for you in this [PDF] (https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model.pdf)

## Assumptions:

If you choose to implement <ins>Option A</ins> you should assume that:
- The graph of `corners` and `walls` is an undirected graph. In other words, you can traverse from `startCorner` ⇔ `endCorner`.
- Interior walls do not partition rooms

If you choose to implement <ins>Option B</ins>:  you can ignore `doors`, and only render `corners` and `walls`.

For either option, the order of corners for a room does not matter.

## Logistics:
1. Download this repository.
2. Look through the example model and solution in the [`example1` folder](https://github.com/mosaic-builders/Rooms-Tech-Assessment/tree/master/example1) to familiarize yourself with the problem.
3. Implement your solution.
4. When you’re done, ZIP your source code and email it to Max (max@mosaic.us) and Pranav (pranav@mosaic.us).
