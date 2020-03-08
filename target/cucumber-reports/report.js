$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Dzone.feature");
formatter.feature({
  "name": "Dzone header comparison",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Dzone header comparison",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dzone"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on first page we get header",
  "keyword": "When "
});
formatter.match({
  "location": "Dzone_steps.user_is_on_first_page_we_get_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on secod page we get header",
  "keyword": "When "
});
formatter.match({
  "location": "Dzone_steps.user_is_on_secod_page_we_get_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we compare headers",
  "keyword": "Then "
});
formatter.match({
  "location": "Dzone_steps.we_compare_headers()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Gradle vs. Maven]\u003e but was:\u003c[API Security Weekly: Issue #71]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat step_definitions.Dzone_steps.we_compare_headers(Dzone_steps.java:42)\n\tat ✽.we compare headers(src/test/resources/features/Dzone.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "test again",
  "keyword": "Then "
});
formatter.match({
  "location": "Dzone_steps.test_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
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