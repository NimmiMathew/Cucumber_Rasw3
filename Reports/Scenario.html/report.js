$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User enters Invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters Invalid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters Invalid password  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "Home page should not be displayed \"\u003cexpected_title\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected_title"
      ]
    },
    {
      "cells": [
        "99485",
        "Star",
        "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!"
      ]
    },
    {
      "cells": [
        "9845338329",
        "Bucks11",
        "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!"
      ]
    },
    {
      "cells": [
        "abc11",
        "Starbucks",
        "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!"
      ]
    },
    {
      "cells": [
        "9916443899",
        "Starbucks@33",
        "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User enters Invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid username \"99485\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid password  \"Star\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User enters Invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid username \"9845338329\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid password  \"Bucks11\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User enters Invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid username \"abc11\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid password  \"Starbucks\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User enters Invalid credentials to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid username \"9916443899\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Invalid password  \"Starbucks@33\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_enters_Invalid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should not be displayed \"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books \u0026 More. Best Offers!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.Steps.home_page_should_not_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});