# drag-Drop-app
Drag and Drop with Local Storage This project demonstrates a simple drag-and-drop interface with persistent data storage using localStorage. Users can add items to boxes, drag items between boxes, and delete items. The state of the boxes is saved in localStorage, ensuring that the data persists across page reloads.


Drag and Drop with Local Storage
This project demonstrates a simple drag-and-drop interface with persistent data storage using localStorage. Users can add items to boxes, drag items between boxes, and delete items. The state of the boxes is saved in localStorage, ensuring that the data persists across page reloads.

# Features
Add Items: Enter text in the input field and click "Add" to create a new draggable item.
Drag and Drop: Drag items between different boxes.
Delete Items: Click the "x" next to any item to delete it.
Persistent Storage: The state of the boxes is saved in localStorage, preserving the items even after the page is reloaded.
Usage
Add an Item:

Type text into the input field.
Click the "Add" button to create a new item in the first box.
Drag and Drop:

Drag any item to move it between boxes.
Delete an Item:

Click the "x" next to any item to remove it.
Code Explanation
HTML Structure:

Three boxes (<div class="box">) for holding draggable items.
An input field and a button for adding new items.
JavaScript Functions:

dragItem(): Adds drag-and-drop functionality and handles item deletion.
saveBoxes(): Saves the current state of the boxes to localStorage.
loadBoxes(): Loads the saved state from localStorage when the page is loaded.
