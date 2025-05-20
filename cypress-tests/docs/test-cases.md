## UI Test Cases

---

### Test Case: Successful Login
**Description:** Verify user is redirected to product page on valid login.  
**Preconditions:** User is registered.  
**Steps:**
1. Go to login page.
2. Enter valid credentials.
3. Click login.  
**Expected Result:** Redirect to inventory page.

---

### Test Case: Invalid Login
**Description:** Error displayed for incorrect credentials.  
**Preconditions:** None.  
**Steps:**
1. Go to login page.
2. Enter invalid credentials.
3. Click login.  
**Expected Result:** Error message shown.

---

### Test Case: Password Input Masking
**Description:** Password input should be masked.  
**Preconditions:** None.  
**Steps:**
1. Go to login page.
2. Check password input field type.  
**Expected Result:** Password input should have type `password`.

---

### Test Case: Complete Purchase Flow
**Description:** Ensure user can complete the purchase.  
**Preconditions:** User is logged in.  
**Steps:**
1. Login as valid user.
2. Add item to cart.
3. Go to cart.
4. Proceed to checkout.
5. Fill form.
6. Complete purchase.  
**Expected Result:** Thank you message appears confirming order.

---

## API Test Cases

---

### Test Case: Create Post (POST)
**Description:** Successfully create a new post.  
**Preconditions:** None.  
**Steps:**
1. Send POST request with title, body, userId.  
**Expected Result:** 201 Created with ID returned.

---

### Test Case: Get All Posts (GET)
**Description:** Retrieve a list of posts.  
**Preconditions:** None.  
**Steps:**
1. Send GET request to `/posts`.  
**Expected Result:** 200 OK with an array of post objects.

---

### Test Case: Get Non-existent Post (GET)
**Description:** Handle request to non-existent post ID.  
**Preconditions:** Post with that ID doesn't exist.  
**Steps:**
1. Send GET to `/posts/999999`.  
**Expected Result:** 404 Not Found or empty object depending on API behavior.

---

### Test Case: Update Post (PUT)
**Description:** Update an existing post.  
**Preconditions:** Post with ID exists.  
**Steps:**
1. Send PUT request with new data.  
**Expected Result:** 200 OK with updated post object.

---

### Test Case: Delete Post (DELETE)
**Description:** Delete a post.  
**Preconditions:** Post exists.  
**Steps:**
1. Send DELETE to `/posts/1`.  
**Expected Result:** 200 OK or 204 No Content.

---

### Test Case: Delete Non-existent Post (DELETE)
**Description:** Handle deletion of post that doesn't exist.  
**Preconditions:** Post with ID doesn't exist.  
**Steps:**
1. Send DELETE to `/posts/999999`.  
**Expected Result:** 200 OK (JSONPlaceholder returns 200 even if post didn't exist).
