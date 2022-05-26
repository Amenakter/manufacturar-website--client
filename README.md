# Project name : TOOLS MANUFACTURAL WEBSITE
 this is live website link:https:https://tools-menufacturer-website.web.app/
 ## Project Discription

 * This is a Tools manufactural wev site .
 * This Project explor how to menufature a tools or parts of divice.
 * this project have section.
 * some section are protected. some are open. 
 * you can see a purchase button and the `purchase' page will be a private/protected route.
 * purchase page youc order product.
 * purchase page has a userQuentity button .You can increament r decreament quentity
 * On the Purchase page, users will be able to change the order quantity (increase/decrease) in an input field. The initial value of the quantity will be the minimum order quantity. However, the user won't be able to reduce the quantity below the minimum order quantity mentioned on the tool/part. Also, the order quantity can not be higher than the available quantity. You will display an error and disable the purchase button in both cases.
 * you can log in email or google
 * If a user is logged in, they will see another option on the header is called Dashboard. Inside the dashboard, a user (not an admin) will see options like My Orders, Add A Review, My Profile options on the side nav. This is the time to implement a nested route. Based on your website idea, you can change the name of these menu items. The My Profile link will be open for everyone. This means every user will be able to see my profile link and update their profile.
 
* On My Orders page, the logged-in user will see only their orders. If the user wants, they should be able to cancel (canceling is just deleting the order) any order that is not paid yet. Ask for a confirmation message before canceling an order. Do not use browser default confirm. Instead, use a good-looking modal. Please note users will not see the cancel option for any paid order.
* 

* On the Add A Review page, users should be able to add a review. A review will contain ratings ( a number 1 to 5 and a description). That review will appear on the home page reviews section. Right now, you will see every review on the home page. There is no limit on the number of reviews or the order of the review.

* If an admin logs in, they will not see the options that a user sees except My Profile. This means an admin will not see my orders and add a review link. Instead, an admin will see My Profile, Manage All Orders, Add A Product, Make Admin, Manage Products. Based on your website idea, you can change the name of these menu names. Manage products will be described in the bonus section.

* An Admin should be able to make another user an admin. If an admin wants, they will be able to add a product on the add a product page. After adding the product, this product will appear on the home page. Please note, to add an image for a new product; you can just upload the image directly to the image hosting sites like imgbb, etc using API. Alternatively, you can have an input field to add the link to the image.

* meaningful 404 page (not found page). Add a meaningful image on the 404 page.
* Implement the basic version of the jwt token. Upon login, you will create a jwt token and store it on the client-side, and for the necessary pages, you will send the token with the call and verify the user. Implementing 401 and 403 is optional. Ensure you have implemented jwt token and create token and store it on the client-side for both email/password-based authentication and social login.

* on the Manage Products page, an admin can delete any products. Please make sure there is a confirmation. After deleting that product will not appear on the home page. Use a meaningful and good-looking confirmation modal. Avoid using browser default confirm.


## framework uses this project
* React bootstrap
* React router dom
* firebase hook
* Firebase 
* react toastify
* react hook Form





