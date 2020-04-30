$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/cmdFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Project execution",
  "description": "",
  "id": "project-execution",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Project execution via command prompt",
  "description": "",
  "id": "project-execution;project-execution-via-command-prompt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "This is step one",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "This is step two",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "This is step three",
  "keyword": "Then "
});
formatter.match({
  "location": "CmdStepDefinition.this_is_step_one()"
});
formatter.result({
  "duration": 75611700,
  "status": "passed"
});
formatter.match({
  "location": "CmdStepDefinition.this_is_step_two()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "location": "CmdStepDefinition.this_is_step_three()"
});
formatter.result({
  "duration": 93300,
  "status": "passed"
});
});