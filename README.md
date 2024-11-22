##To Run the Project:
`npx json-server --watch db.json --port 3000`
`ng serve`

##Implemented Features:
✅ Product List
✅ Shopping Cart
✅ Filter Form

# Shopping Cart

## To Run the Project:

`npx json-server --watch db.json --port 3000`
`ng serve`

## Implemented Features:

- ✅ Product List
- ✅ Shopping Cart
- ✅ Filter Form
- ✅ Basic UI
- ✅ Modal Window with Product Details
- ✅ All data flows through NgRx

## Partially Implemented Features:

- ⚠️ Infinite Scroll
- ⚠️ Filtering

## Challenges Faced:

- The main challenges were related to JSON Server. Filtering and sending the necessary parameters in the request were successfully implemented, but the server has limited functionality. Unfortunately, there wasn’t enough time to fully explore this issue.

- There were difficulties with the form. A delay was added to prevent the form from being triggered every time the user types something in the search field, but I didn’t want to implement search only by pressing a button.

- Due to server limitations, the search works only for full name matches. The generated data contains too many similar words in the description, and if partial search across all fields is implemented, the search result would almost always be the same as a simple query without parameters. Also price filtering works only for one price range

## Areas for Improvement:

- 🎨 Design
- 🔁 Create more reusable components (product card, label, etc.)
- ⏳ Add loaders
- ⚠️ Handle errors during requests using NgRx and display them via snackbar
- ⚠️ Better organize file structure and interfaces/types
- 🔄 Fully implement infinite scroll and filtering functionality
- 🔍 Refactor search logic and add input clearing functionality

✅ Basic UI
✅ Modal Window with Product Details
✅ All data flows through NgRx

##Partially Implemented Features:
⚠️ Infinite Scroll
⚠️ Filtering

##Challenges Faced:
The main challenges were related to JSON Server. Filtering and sending the necessary parameters in the request were successfully implemented, but the server has limited functionality. Unfortunately, there wasn’t enough time to fully explore this issue.

There were difficulties with the form. A delay was added to prevent the form from being triggered every time the user types something in the search field, but I didn’t want to implement search only by pressing a button.

Due to server limitations, the search works only for full name matches. The generated data contains too many similar words in the description, and if partial search across all fields is implemented, the search result would almost always be the same as a simple query without parameters. Also price filtering works only for one price range

##Areas for Improvement:
🎨 Design
🔁 Create more reusable components (product card, label, etc.)
⏳ Add loaders
⚠️ Handle errors during requests using NgRx and display them via snackbar
⚠️ Better organize file structure and interfaces/types
🔄 Fully implement infinite scroll and filtering functionality
🔍 Refactor search logic and add input clearing functionality
