/**
 * PROMISE catch() && finally
 * Please, make sure to read the "06-Promise-catch-&-finally.md" file in exercise-info folder before you start!
 * Create a handlePromise() function handlePromise that follows the requirements:
 * * Has a name of 'handlePromise'
 * * Returns a promise set with a constructor, that:
 * * * Rejects with a message of 'REJECTED!'
 * * * Catches the rejection reason and logs it
 * * * Finally logs a message of 'This promise is finished!'
 * Example: export const handlePromise = () => {
 *            return <Your promise constructor>
 *              .catch(<Your code>)
 *              .finally(<Your code>)
 *          }
 */

// Function that returns a promise which rejects and handles the rejection and finally logs a message
export const handlePromise = () => {
  return new Promise((resolve, reject) => {
    reject('REJECTED!');
  })
  .catch((reason) => {
    console.log('Rejection reason:', reason);
  })
  .finally(() => {
    console.log('This promise is finished!');
  });
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function