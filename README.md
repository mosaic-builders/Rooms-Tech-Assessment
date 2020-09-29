# Interview-Questions-Fall-2020

Thank you for your interest in Mosaic! We use this technical assessment to achieve two things:
1. Allow you to showcase your technical skills.
2. Give you a sense of some of the types of problems we are currently working on here at Mosaic.

We will be scheduling a follow up interview with Pranav Ramkrishnan (pranav@mosaic.us) to discuss this exercise and your work. Our only request is that you **_submit your work by the end of the business day before your interview._**

We hope that you enjoy working through this problem, and hope this exercise provides you with a glimpse of how we are trying to interweave software engineering concepts into home building.  If at any time you have questions, please do not hesitate to email Max at max@mosaic.us.

## Expectations

We hope that this exercise takes no more than **_90 minutes_**. We want to be respectful of your time, so if you end up working on this project for more than 90 minutes, we encourage you to capture your ideas in a way that you can discuss them with us during the follow-up. 

Your approach and design is more important than the actual outcome of your solution. In that vein, during the interview, we expect you to justify your technical decisions (including alternate considerations you chose not to pursue), explain how you think about the usability and performance of your code, and finally, explain how you would go about testing your code. All that being said, we strongly recommend that you submit something that is runnable.

Most of our codebase is written in Javascript, but we are language agnostic for the purposes of this interview. However, if you do end up producing executable code, we ask that you provide instructions for installing dependencies (e.g. `yarn`) and running your code (e.g. `yarn start`) on at least one of the examples so that we can reproduce your results.

## Problem

We’ve developed an internal data model to represent a typical single family home. You can find an example of this model [here.](https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model.xml)

As you might expect, a house’s floorplan consists of `walls`, `doors`, and `windows`. We also have an entity to represent the two endpoints of a wall – we call these entities `corners`. Importantly, `corners` can be shared by multiple walls. We’ve provided more detailed descriptions of each entity below. For the purposes of this exercise, you should think of this model as a graph, with `corners` representing nodes, and `walls` representing edges between nodes. We will omit doors and windows for the remainder of the exercise.

The problem we would like you to attempt is to find _all enclosed rooms in a model_.  You can look at the [example model and output](https://github.com/mosaic-builders/Rooms-Tech-Assessment/tree/master/example) to get a better understanding. The goal is to find all rooms in [this model](https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model.xml).

There are two approaches to solving this problem. We request that for this assignment **_you pick one of the following options:_**
1. <ins> Option A (algorithm-focused) </ins>: Implement a web-based tool that allows a user to specify the enclosed rooms manually via an interaction with a 2D representation of the model.

2. <ins> Option B (front-end-focused) </ins>: Implement a web-based tool that can i) render a 2D representation of the  XML model, and ii) then allow a user to specify the enclosed rooms manually via an interaction with the 2D representation.

For both options, we are looking for a list of rooms for this [input XML model](https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model.xml). We've visualized this model for you in this [PDF](https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model.pdf)

You can find an example with both the expected input and output [here](https://github.com/mosaic-builders/Rooms-Tech-Assessment/tree/master/example).

## Getting Started:
Here are a few more details in order to provide you with a place to start:

<ins>Option A:</ins> To simplify things, you may assume that our drafters create models by performing a virtual “walk” of the floorplan drawing, traversing walls of each room starting at a particular corner, and ensuring that all the rooms are connected. Thus, one can model floor plans as a directed graph and take advantage of the graph’s structure to find rooms algorithmically.

<ins>Option B:</ins> If you choose to go with Option B, we’ve created an optional [starter code kit](https://github.com/mosaic-builders/Rooms-Tech-Assessment/tree/master/optionB) that you can use to jumpstart your solution. Our starter kit provides you with (a) a React app that renders the model for you, and (b) a HTML5 Canvas rendering of the model. These code kits are completely optional, and you can use either of these. Please feel free to use them if you’d like! 


## Useful Details:
Here are some useful details that will help you understand the model better:

`Units`: In all models we create, the basic unit of distance is 1/16th of an inch. We represent this distance as an integer. In other words, x=16 represents 1 inch, x=256 represents 16 inches.

`Corners`: Entities that represent a particular position in the model located at (x, y) point with a unique id. Corners represent endpoints of a wall, and a given corner can be shared by multiple walls.

`Walls`: This entity represents a wall between two corners. A `<wall>` is the physical entity that actually gets framed on sight when we build homes. In our model, a `<wall>` entity has the following properties:

|  | Description  |
|-|-|
| `id` | Unique identifier for a wall, unique across a given model  |
| `startCorner` | Corner that is at the start of the wall |
| `endCorner` | Corner that is at the end of the wall  |
| `isExterior` | Denotes if this wall is an exterior or interior wall. "true" for exterior walls; "false" for interior walls |
| `label` | Name assigned to the wall |



## Logistics:
1. Download this repository.
2. Look through the example model and solution in the [`example` folder](https://github.com/mosaic-builders/Rooms-Tech-Assessment/tree/master/example) to familiarize yourself with the problem.
3. Implement your solution and apply it to [model.xml](https://github.com/mosaic-builders/Rooms-Tech-Assessment/blob/master/model.xml)
4. When you’re done, ZIP your source code and email it to Max (max@mosaic.us) and Pranav (pranav@mosaic.us). If you would like us to run your code, please also include instructions on how to install or setup, and execute your code. 

Thank you very much for your interest once again!
