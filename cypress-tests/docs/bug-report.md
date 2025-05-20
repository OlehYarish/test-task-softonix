# Bug Report

---

**Title:** "Order can be completed without adding any items to cart"

---

**Steps to Reproduce:**
1. Go to https://www.saucedemo.com/
2. Login with valid credentials (e.g. standard_user / secret_sauce)
3. Do not add any items to the cart
4. Click on the cart icon (it will be empty)
5. Click on the "Checkout" button
6. Fill in personal information (First Name, Last Name, Zip Code)
7. Click Continue
8. Click Finish

---

**Observed Result:**  
User is redirected to the confirmation page and sees "Thank you for your order" message, despite no items being ordered.

---

**Expected Result:**  
The system should prevent users from proceeding to checkout or completing an order if the cart is empty. A message should indicate: “Your cart is empty. Please add items before checking out.”

---

**Environment:**
- OS: Windows 10
- Browser: Google Chrome 124
- URL: https://www.saucedemo.com/
- User: standard_user

---

**Severity:** High  
**Priority:** Critical – impacts order validation logic
