# Split_Pay
# Split Pay App

## Project Description
This app helps users split a restaurant bill evenly among participants, including a 10% tip option, making group dining payments simple and efficient.

## User Story

As A user dining with friends at a restaurant,
I WANT to split the total bill evenly among the group
SO THAT I can easily determine how much each person owes, including a 10% tip if required

## Acceptance Criteria

GIVEN a split payment app
- WHEN I load the app, 
I am presented with the landing page containing a form with placeholders and inputs for item Name, item total and participants.
- WHEN I try to submit a form without an item name, total, or participants,
I am presented with a message to complete the form.
- WHEN I hover over the "Add Value" or the "Add Person" button,
THEN the button colour changes to a lighter grey
- WHEN I click the "Add Value" button
THEN the entered item and total populate the row underneath the button as a card with an 'X' button to remove it.
- WHEN I click the "Add Person" button,
THEN the name populates the row underneath the button as a card with an 'X' button to remove it.
- WHEN I hover over the name card or the item:price card,
THEN the card colour changes to a lighter grey.
- WHEN I hover over the "Calculate" or "Confirm" button,
THEN the button colour change to a darker blue.
- WHEN I click the "Calculate" button,
THEN the item's data is stored to localStorage and I am presented with a confirmation modal with a title, and a list of item names and their prices.
- WHEN I click the "Cancel" button,
THEN the modal closes.
- WHEN I click the "Confirm" button,
I am redirected to the final split payment page with a total breakdown.
- WHEN I view the page,
I am presented the total price of all items, a list of each item and its prive and a list participant names with their equal split.


**This project is graded based on the following criteria:**

If a project submission is marked as “0”, it is considered incomplete, examples include the following:
A repository that has no code
A repository that includes a unique name but nothing else
A repository that includes only a README file but nothing else
A repository that only includes starter code

Technical Acceptance Criteria: 25%
Application uses client-side storage to store persistent data.
Application uses a CSS framework.
Application must include at least one modal instead of native browser alert, confirm, or prompt functionality.
Application is interactive (accepts and responds to user input).

Concept 10%
Application should be a unique and novel idea.
Your group should clearly and concisely articulate your project idea.

Deployment: 20%
Application deployed at live URL and loads with no errors.
Application GitHub URL submitted.

Repository Quality: 10%
Repository has a unique name.
Repository follows best practices for file structure and naming conventions.
Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
Repository contains multiple descriptive commit messages.
Repository contains a quality README file with description, screenshot, and link to deployed application.

Application Quality: 15%
Application user experience is intuitive and easy to navigate.
Application user interface style is clean and polished.
Application is responsive.

Presentation 10%
Your group should present using a slide deck.
Every group member should speak during the presentation.
Your presentation should follow the Project Presentation TemplateLinks to an external site..

Collaboration 10%
There are no major disparities in the number of GitHub contributions between group members.

TODO: 
Workflow
Images
Collaborators