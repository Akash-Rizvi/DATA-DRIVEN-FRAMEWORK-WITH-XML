@End2End 
Feature: Validate TechFios Login Page Functionality 

Background: 
	Given User is on the TechFios Login Page 
	
@Scenario1 
Scenario: 
	User should be able to log in with valid credentials (Making Variables work as Placeholders 
	When User enters the username as "demo@techfios.com " 
	When User enters the password as "abc123" 
	And User clicks on the log in button 
	Then User should be able to see the DashBoard Page 
	
	
	
@Scenario2 
Scenario: 
	User should be able to log in with valid credentials (Making Variables work as Placeholders 
	When User enters the username as "demo@techfios.com " 
	When User enters the password as "abc1234" 
	And User clicks on the log in button 
	Then User should be able to see the DashBoard Page 
	
	
	
@Scenario3 
Scenario Outline: 
	User should be able to login with valid credentials (Keeping Variables and Placeholders separated) 
	When User enters the "<username>" and "<password>" 
	And User clicks on the log in button 
	Then User should be able to see the DashBoard Page 
	
	Examples: 
		|username|password|
		|demo@techfios.com|abc123|
		|demo@techfios.com|abc1234|
		|demo1@techfios.com|abc123|
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
