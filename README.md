# Code exercise

My submission for Crewman Four coding excercise written in Typescript.

## Running the solution

Install required packages

```bash
$ npm install
```

You can run the script using the `start` run-script

```bash
$ npm start -- ./examples/example_1_input.json ./output.json
```

Or you can run the compiled script directly with

```bash
$ npm run prestart
$ node dist/bundle.js ./examples/example_1_input.json ./output.json
```

## Problem
Suppose you have an application where users create lists of tasks to be completed, where all tasks are ordered.

There can be 0 or more tasks in a list, and tasks can be nested to an arbitrary depth. For example:
* Grocery shopping
    - Pickup milk
    - Pickup bread
* Go for a walk
* Send mail

Since the database backing the application stores tasks independently each task must be stored along
 with the IDs of its previous, next and parent tasks (where necessary).
The previous example could therefore be stored as:

[**Code block 1**]
```json
[
  {
    "description": "Grocery shopping",
    "ID": 1,
    "nextID": 4
  },
  {
    "description": "Pickup milk",
    "ID": 2,
    "nextID": 3,
    "parentID": 1
  },
  {
    "description": "Pickup bread",
    "ID": 3,
    "previousID": 2,
    "parentID": 1
  },
  {
    "description": "Go for a walk",
    "ID": 4,
    "previousID": 1,
    "nextID": 5
  },
  {
    "description": "Send mail",
    "ID": 5,
    "previousID": 4
  }
]
```

This format allows the application to fetch tasks from the database and re-order them to be correctly displayed to the user.
To correctly be displayed to the user the tasks must be ordered into a hierarchical data structure.
Using the previous example again the ordered tasks would be represented by the following JSON:

[**Code block 2**]
```js
[
  {
    "task": {
      "description": "Grocery shopping",
      "ID": 1,
      "nextID": 4
    },
    "subTasks": [
      {
        "task": {
          "description": "Pickup milk",
          "ID": 2,
          "nextID": 3,
          "parentID": 1
        },
        "subTasks": []
      },
      {
        "task": {
          "description": "Pickup bread",
          "ID": 3,
          "previousID": 2,
          "parentID": 1
        },
        "subTasks": []
      }
    ]
  },
  {
    "task": {
      "description": "Go for a walk",
      "ID": 4,
      "previousID": 1,
      "nextID": 5
    },
    "subTasks": []
  },
  {
    "task": {
      "description": "Send mail",
      "ID": 5,
      "previousID": 4
    },
    "subTasks": []
  }
]
```

## Task
Write a program that reads in a JSON blob representing tasks as they are stored in the database 
and writes the JSON representation of the ordered tasks to another JSON file.

This program should be runnable from the command line (after compilation if necessary) and take two arguments:

1. File path of input JSON (a flat list of tasks as shown above in `Code block 1`); and
2. File path where the structured output will be written to (as shown above in `Code block 2`).

For example:
```bash
$ node solution.js ./examples/example_1_input.json ./answer.json
``` 
 
### Deliverables
1. Solution source code;
2. Instructions (`README.md` preferred) for how to compile and run your solution; and
3. Any artifacts such as test cases or extra examples deemed relevant.

These artifacts should be submitted either via:

1. Email of a zip file containing all necessary code;
2. Link to shared folder in cloud storage service (Dropbox / Google Drive / etc.); or
3. Link to github/gitlab repo (if private and on github please invite `loughlin@crewmanfour.com`).

### Constraints
#### Programming language
Suggested programming languages include:
* JavaScript / TypeScript;
* Python (2/3);
* Java;
* Kotlin;
* Scala;
* Clojure;
* F#;
* Rust;
* Swift;
* OCaml; or
* Haskell;

If you are not familiar with any of these languages feel free to BYO, however a more thorough explanation of the solution as well as compilation and running instructions will be necessary. 

#### Environment
Your solution will be tested within a Linux or MacOS environment, so please ensure some degree of cross platform compatibility if working outside of these OSs.
