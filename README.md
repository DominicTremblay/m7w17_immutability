# State Management and Immutable Update Patterns

## Agenda

* State Recap
* Immutability in React
* Stale State
* Duplicating Arrays and Objects
* Updating the state with the spread operator
* useReducer

## State Recap

- Data-driven UI => UI state is going to be rendered based on the current state. Any change happens to the state, the UI will update automatically

- Single source of truth => centralize the data management => flow of information more predicatable. Consistent accross the application.



## Immutability 

- immutable data that can't be changed

- any updates => creation a new structure

- it makes the update process more efficient => updating the state

- React will look at the references, not the values

## Stale State

- a stale state will lead to stale UI => UI won't change

1. updating the state is async

2. mutating the state directly


## Duplicating Arrays and Objects


## Updating the state with the spread operator


## useReducer

As our React becomes larger and more complex, managing state with useReducer will allow to more efficiently manage that complexity.

* useReducer is declarative
* clearer separation of concerns
* can be more easily tested, no side effects
* centralize the state management

