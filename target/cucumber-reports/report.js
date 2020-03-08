$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google_features/google.feature");
formatter.feature({
  "name": "Google feature verification",
  "description": "  Agile Story: User Stories, acceptance criteria\n  Basically we can pass here any additional information related to this feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Google title verification after searching a term",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@miniRegression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on google page",
  "keyword": "When "
});
formatter.match({
  "location": "Google_StepsDefs.user_is_on_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types wooden spoon into th search box",
  "keyword": "And "
});
formatter.match({
  "location": "Google_StepsDefs.user_types_wooden_spoon_into_th_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to search button",
  "keyword": "And "
});
formatter.match({
  "location": "Google_StepsDefs.user_clicks_to_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see wooden spoon in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepsDefs.user_should_see_wooden_spoon_in_the_title()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/smartbear_features/smartBearLogin.feature");
formatter.feature({
  "name": "Smartbear login feature verifications",
  "description": "  Agile Story: When user is on the login page of SmartBear app user should\n  be able to login using correct test data\n  A/C:\n  1- Only authenticated user should be able to login\n  Link: http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\n  Authenticated test data:\n  Username: Test\n  Password: tester\n  2- User should see \"Welcome, Tester!\" displayed when logged in.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying login with using authenticated data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sm"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearLogin_StepsDefs.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to enter correct username",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearLogin_StepsDefs.user_should_be_able_to_enter_correct_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to enter correct password",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearLogin_StepsDefs.user_should_be_able_to_enter_correct_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearLogin_StepsDefs.user_should_be_able_to_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Welcome, Tester! displayed when logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearLogin_StepsDefs.userShouldSeeWelcomeTesterDisplayedWhenLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});