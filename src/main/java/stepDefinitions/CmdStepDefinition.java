package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CmdStepDefinition {

	@Given("^This is step one$")
	public void this_is_step_one()  {
	    
	    System.out.println("********** STEP 1 **********");
	}

	@When("^This is step two$")
	public void this_is_step_two()  {
		 System.out.println("********** STEP 2 **********");
	    
	}

	@Then("^This is step three$")
	public void this_is_step_three()  {
		 System.out.println("********** STEP 3 **********");
	    
	}

	
}
