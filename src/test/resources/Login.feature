Feature: Login
@Regression
Scenario: User enters Valid credentials to login

Given User is on login page
When User enters valid username "9916443899"
And User enters valid password  "Starbucks@33"
And User clicks on login button
Then Home page should be displayed "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"

@Smoke @ft
Scenario Outline: User enters Invalid credentials to login

Given User is on login page
When User enters Invalid username "<username>"
And User enters Invalid password  "<password>"
And User clicks on login button
Then Home page should not be displayed "<expected_title>"

Examples:
| username | password | expected_title |
| 99485 | Star | Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers! |
| 9845338329 | Bucks11 | Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers! |
| abc11 | Starbucks | Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers! |
| 9916443899 | Starbucks@33 | Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers! |


@Sanity

Scenario: Order should be placed successfully

When User selects payment mode

| mode |
| Credit card |
| Debit card|
| COD |

Then Order is placed