# GOT Battles DB

------

[Demo]: https://got-battle-gyan.herokuapp.com/	"Demo"

*please wait for few moments before searching because server was in sleep state*  

## Samples

<img src="https://res.cloudinary.com/gyan0621/image/upload/v1590172108/others/Screenshot_49.png" alt="Auto Complete with click and enter selection" style="zoom:60%;" />

------

<img src="https://res.cloudinary.com/gyan0621/image/upload/v1590172108/others/Screenshot_47.png" style="zoom:60%;" />

#### Responsive

------



| <img src="https://res.cloudinary.com/gyan0621/image/upload/v1590172109/others/Screenshot_20200522-200817.jpg" style="zoom:50%;" /> | <img src="https://res.cloudinary.com/gyan0621/image/upload/v1590172108/others/Screenshot_20200522-200555.jpg" style="zoom:50%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

### Frontend Docs

`reduxStore.js`

- handle creation of store and mixing of reducers

`src/reducers`

- #### AutoCompleteReducer

  - Reducer to handle Autocomplete related actions 

- #### presentReducer

  - Reducer to handle battle data filtering and fetching 

`src/components`

- #### *AutoCompleteComponent*

  - ##### AutoCompleteLocal

    - Fetch all locations at once to the reducer then uses that data to process all user alto complete request. ***Fast but old data.***

  - ##### AutoCompleteServer

    - For every change in search box action to fetch similar location is done that updates reducers filtered list with result from the server. ***Slower but consistent***

- #### presentComponent

  - Uses the filtered battle list from presentation reducer to present.

- #### cardDetails

  - Just a card component to present details

- #### headerComponent

  - A header 

`src/actions`

- #### AutoCompleteActions

  - Actions related to autocomplete

- #### presentActions

- #### types.js

  - type of actions

`src/fetchActions`

- All network calls using axios exposed as functions

------

## Backend Docs

server/server.js : entry point

**All api routes starts with `/api/battle/`**

#### Routes

- `/` : returns all battle data

- `/populate` : to populate data from csv to database
- `/list` : get all locations where battle happned
- `/count` : get number of battle happned
- `/search?location=xyz&king=xyz&type=xyz`
  - any combination of query will give matching battles
- `/locStartsWith?initials=xyz`
  - returns all locations that starts with xyz

























































































