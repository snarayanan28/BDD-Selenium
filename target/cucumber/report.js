$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 988116,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 106147410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 3597435,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 488927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 284118,
  "status": "passed"
});
formatter.after({
  "duration": 49452,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with \u003cUsername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 40,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 41,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 42,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 43,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "user4",
        "pass4"
      ],
      "line": 44,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 203408,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user1 and password pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 78844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 34
    },
    {
      "val": "pass1",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 173084,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 180548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 129696,
  "status": "passed"
});
formatter.after({
  "duration": 40122,
  "status": "passed"
});
formatter.before({
  "duration": 79310,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user2 and password pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 184747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 34
    },
    {
      "val": "pass2",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 141359,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 60182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 243530,
  "status": "passed"
});
formatter.after({
  "duration": 69980,
  "status": "passed"
});
formatter.before({
  "duration": 77911,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user3 and password pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 88642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 34
    },
    {
      "val": "pass3",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 160954,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 222070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 871017,
  "status": "passed"
});
formatter.after({
  "duration": 180548,
  "status": "passed"
});
formatter.before({
  "duration": 176350,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login in to application with user4 and password pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 125498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4",
      "offset": 34
    },
    {
      "val": "pass4",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 155356,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 62982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 88642,
  "status": "passed"
});
formatter.after({
  "duration": 41055,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for Vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User searched for Cucumber Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 7546520318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3373997421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "MyStepDefinitions.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 35558664,
  "status": "passed"
});
formatter.after({
  "duration": 347559940,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User searched for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify selected \u003cName\u003e items are displayed in Check out page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 17,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 18,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 19,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User searched for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify selected Brinjal items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 5996748733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3320828543,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 200332451,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 249344055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 128763,
  "status": "passed"
});
formatter.after({
  "duration": 306408015,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User searched for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify selected Beetroot items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 6237443737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3540330362,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 226677559,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 227537845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 3014735,
  "status": "passed"
});
formatter.after({
  "duration": 235296753,
  "status": "passed"
});
});