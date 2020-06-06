# Count Words

## The problem

Implement a function that returns an object with words as keys and occurencies
`countWords(string, n)` as values for each word longer than n.

## The solution

1. Do not handle non string parameter
1. From a text that can be of any shape (single, multiline)
1. Separate all words
1. Filter them by length
1. Initialise or increment the count key in the final object

## Install and run

```bash
npm install @dashdashzako/word-count
```

```js
import countWords from 'count-words';

const theText = 'Hello, World!';

console.log(JSON.stringify(theText));

// { hello: 1, world: 1 }
```
