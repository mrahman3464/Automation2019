$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("simpleFormDemo.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to verify the  Single and Two Input field functionalities in Simple Form Demo Page",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--single-and-two-input-field-functionalities-in-simple-form-demo-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4577034465,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Author:mohdmhaque@gmail.com"
    },
    {
      "line": 4,
      "value": "#Date:09/16/2019"
    }
  ],
  "line": 6,
  "name": "Verify Single and Double Input Field Functionalities",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--single-and-two-input-field-functionalities-in-simple-form-demo-page;verify-single-and-double-input-field-functionalities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Navigate to SeleniumEasy Test Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Click on Input Forms hyperlink tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Click on  Simple form Demo Hyperlink Test",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enter a message in the Enter message text box",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Click on Show Message Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Validate the Message is been displayed in the Your Message section",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Enter a integer value in the Enter a text box",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Enter 2nd integer value in the Enter b text box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on the Get Total button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Validate the Total of a and b being displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Navigate_to_SeleniumEasy_Test_Home_Page()"
});
formatter.result({
  "duration": 4255053754,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Input_Forms_hyperlink_tab()"
});
formatter.result({
  "duration": 77555837,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Simple_form_Demo_Hyperlink_Test()"
});
formatter.result({
  "duration": 706229654,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Enter_a_message_in_the_Enter_message_text_box()"
});
formatter.result({
  "duration": 407235729,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Show_Message_Button()"
});
formatter.result({
  "duration": 78178532,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Validate_the_Message_is_been_displayed_in_the_Your_Message_section()"
});
formatter.result({
  "duration": 30998543,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Enter_a_integer_value_in_the_Enter_a_text_box()"
});
formatter.result({
  "duration": 71506101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "SimpleFormDemoStepDef.user_Enter_nd_integer_value_in_the_Enter_b_text_box(int)"
});
formatter.result({
  "duration": 80337863,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_the_Get_Total_button()"
});
formatter.result({
  "duration": 123304614,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Validate_the_Total_of_a_and_b_being_displayed_correctly()"
});
formatter.result({
  "duration": 52122577,
  "status": "passed"
});
formatter.after({
  "duration": 2156304968,
  "status": "passed"
});
});