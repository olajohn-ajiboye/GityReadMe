/* eslint-env mocha */
/* global cy */

const visit = () => cy.visit ('/');
const user = () => cy.visit ('/olajohn-ajiboye');
const readMe = () => cy.visit ('/olajohn-ajiboye/erply-vue-shop');

// Test HomePage
describe ('GithubRepoDemo Homepage Tests', () => {
  beforeEach (visit);
  it ('loads app,Header should contain "Github Demo Project"', () => {
    cy.get ('.navbar-brand').should ('contain', 'Github Demo Project');
  });
  it ('Navbar should not have the "back" icon', () => {
    cy.get ('.navbar-brand').should ('not.contain', 'back');
  });
  it ('SearchBar should be visible', () => {
    cy.get ('.search').should ('be.visible');
  });
  it ('Input field should have class search', () => {
    //Enusre it looks the way it should look (that is beautiful 😊)
    cy.get ('input').should ('have.class', 'search');
  });
  it ('SearchBar should contain correct entered value', () => {
    cy.get ('.search').type ('olajohn').should ('have.value', 'olajohn');
  });
  it ('Should navigate to Projects on KeyUp.Enter', () => {
    // On enter username, it should go the correct link with username's repos
    cy.get ('.search').type ('olajohn-ajiboye{enter}');
    cy.url ().should ('contain', 'olajohn-ajiboye');
  });
});

// Test user repo page
describe ('RepoList Page', () => {
  beforeEach (user);
  it ('Header should contain "Username Github"', () => {
    // header should contain the username entered in search bar
    cy.get ('.navbar > :nth-child(1)').should ('contain', 'ola');
  });
  it ('Back button should be visible on Project list page', () => {
    cy.get ('.back').should ('be.visible');
  });
  it ('Back button  should go back to Homepage onClick', () => {
    cy.get ('.back').click ();
    cy.url ().should ('not.contain', 'ola');
  });
  it ('Repo List should be visible', () => {
    cy.get ('li').should ('be.visible');
  });
  it ('Project list length should be greater or equal to 0', () => {
    cy.get ('li').should ('have.length.gte', '0'); //should return repo list of user
  });
  it ('Each List of Project should contain a clickable Link', () => {
    cy
      .get ('a.router-link-active')
      .should ('be.visible')
      .should ('have.length.gte', '0');
  });
});

//Readme Page
describe ('Rendered ReadMe page', () => {
  beforeEach (readMe);
  it ('Header should contain "Username Github"', () => {
    cy.get ('.navbar > :nth-child(1)').should ('contain', 'ola');
  });
  it ('Back button  should go back to RepoList onClick', () => {
    cy.get ('.back').click ();
    cy.url ().should ('not.contain', 'crux-ports');
  });
  it ('Back button should be visible on Project list page', () => {
    cy.get ('.back').should ('be.visible');
  });
  it ('Page should contain "ReadMe info"', () => {
    cy.get ('.read-me').should ('contain', 'README info');
  });
});
