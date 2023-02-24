[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10237337&assignment_repo_type=AssignmentRepo)

# FED Javascript 1 - Course Assignment

Netlify: https://cocktails-andrea.netlify.app
API: https://www.thecocktaildb.com/api.php

## Report

For this assignment, I have written a code that retrieves data from an API and showcases it on a webpage. The Api I have chosen contains the data on drinks and cocktails.
I have created a index-page, detail-page, and contact-page.

In the index-page, I have listed a image, name and if the drink is non-alcoholic. I have also created a search bar so that users can search for spesific ingredients or names, and created a checkbox if the user only wants non-alcoholic drinks. I also made a dropdown so its possible to sort the drinks. the page also showing how many results you get.
It was a bit hard to find the right way to display correct results when filtering checkbox (Show non alcoholic) was clicked. I think I managed to do it in a good way, even though it makes a new request to the API. The same goes for sort function. I also had to find some code for sorting array from the internet because I could not get it to work with just .sort() from the earlier lessons.

In the detail-page i have listed a image, name, ingredients and instructions.

In the contact page I have a contact form.
I have not added subject to my form, but added Message instead. It felt wrong having a contact form with no way to add the message to the receiver. Validation rules are the same as subject would have. It is not clear for me when to write my own validation rules for form and when to use built-in validation. I could not make them both to work at the same time, so I only used my custom made validation in this assignment.

I assume that the users of this cocktail site will be young people, and therefore I am trying to make a more vibrant design. For example the rotated navigation button on the left and using bright colors.

Working with the API was OK, it had good enough documentation but I managed to understand what the endpoints contained by visiting them in the browser.

This assignment was very challenging, but I have learned a lot from it.

I also had started on my own before this repo was ready. I did not want to copy paste my code into this repos premade html, css and js files, so I just moved my main branch over from private github. I had help doing this.

## Getting Started

Run project with "Open with live server" in Visual Studio Code.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] End-user can see a list of items of the home page.
- [x] When the End-user clicks on an item in the list they are navigated to the details page.
- [x] End-user can view atleast three properties of an item in a list.
- [x] End-user can view atleast three properties of an item on the details page.
- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] End-user can view the title of the item on the browser tab for a details page.
- [x] End-user can view validation message when they input an incorrect name.
- [x] End-user can view validation message when they input an incorrect subject that is less than 10 characters.
- [x] End-user can view validation message when they input an incorrect Email address.
- [x] End-user can view a validation message when they input an incorrect physical address that is less than 25 characters long.

## End-user success criteria (Optional - 100%)

- [x] End-user can search for a specific item.
- [x] End-user can filter the list.
- [x] End-user can sort list by;
  - [x] Name ascending order
  - [x] Name descending order
- [x] Confirmation modal after customer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [x] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [x] End-user can experience pleasant animations.
  - [x] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [x] End-user can view a custom favicon.
- [x] CSS uses variables
- [x] Code is dry - There are no repeating functions, variables.

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
  - [x] A name,
  - [x] A placeholder,
  - [ ] A aria-describedby,
  - [x] Required
- [x] All images have an alt tag;
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [ ] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [ ] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.
