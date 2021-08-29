$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFios_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate TechFios Login Page Functionality",
  "description": "",
  "id": "validate-techfios-login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 28,
  "name": "",
  "description": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated)",
  "id": "validate-techfios-login-page-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-page-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "validate-techfios-login-page-functionality;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 36,
      "id": "validate-techfios-login-page-functionality;;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc1234"
      ],
      "line": 37,
      "id": "validate-techfios-login-page-functionality;;;3"
    },
    {
      "cells": [
        "demo1@techfios.com",
        "abc123"
      ],
      "line": 38,
      "id": "validate-techfios-login-page-functionality;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3106985100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 459060500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated)",
  "id": "validate-techfios-login-page-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 27,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "StepDefs.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 146698600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_the_log_in_button()"
});
formatter.result({
  "duration": 3270053600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 37618000,
  "status": "passed"
});
formatter.after({
  "duration": 649776400,
  "status": "passed"
});
formatter.before({
  "duration": 2124752400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 390503800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated)",
  "id": "validate-techfios-login-page-functionality;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 27,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User enters the \"demo@techfios.com\" and \"abc1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc1234",
      "offset": 41
    }
  ],
  "location": "StepDefs.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 140491300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_the_log_in_button()"
});
formatter.result({
  "duration": 2899590700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 37853300,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.StepDefs.user_should_be_able_to_see_the_DashBoard_Page(StepDefs.java:65)\r\n\tat ✽.Then User should be able to see the DashBoard Page(features/TechFios_Login.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 675350700,
  "status": "passed"
});
formatter.before({
  "duration": 1991957500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 402204200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "User should be able to login with valid credentials (Keeping Variables and Placeholders separated)",
  "id": "validate-techfios-login-page-functionality;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 27,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User enters the \"demo1@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should be able to see the DashBoard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 42
    }
  ],
  "location": "StepDefs.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 147428400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_the_log_in_button()"
});
formatter.result({
  "duration": 2833881400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 35200300,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.StepDefs.user_should_be_able_to_see_the_DashBoard_Page(StepDefs.java:65)\r\n\tat ✽.Then User should be able to see the DashBoard Page(features/TechFios_Login.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 640079600,
  "status": "passed"
});
});