## Solution

This is the solution to the code used in my React fundamentals clinc from today!

Remember, it is super important for you to have a good understanding of how data is passed around in
React. Without this, you will have difficulty understanding the more advanced concepts, especially
the difference between state and props.

Remember also to follow the various parts of creating individualized `handleClick` functions for
components. If you try to pass down the `handleClick` with the id argument when you are passing down
props, the function will execute right away (becuase you are invoking it). This will then update the state, re-render the page, and enter you into infinite loop chaos in Chrome. Also, you need to bind
 these functions that you pass down and are setting the state so the function as access to the right `this`.

More than anything, compare this code to the code you wrote and try see where you could improve!
It takes a little bit of getting used to get React data flow down right, but once you do, you 
can do really cool things!

## Setup Instructions

Note:
You'll need to run the following commands to get started!

`npm install`
`bundle install`

Then in order to get the application up and running you have to open up two
tabs and run `ruby server.rb` in one and `webpack --watch` in the other!
