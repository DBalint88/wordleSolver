wordleSolver 1.1
Created by Dan Balint (Github DBalint88)

HOW TO USE

Play your first Word in Wordle.  Then switch to this app and enter the results.  You can click anywhere on the page and start typing.  Click each tile to cycle through the colors.  Then hit enter to filter the remaining five letter words.

VERSION HISTORY
1.1 (10 March 2022)
    Finished 1B: App now provides instructions.
    Finished 1D: App now reports remaining letter stats to the user in-app.
    Finished 2A: App is now tri-fold with a turtle in the middle.
    Finished 2C: Letters are now capitalized on entry.

1.0 (9 March 2022)


FUTURE DEVELOPMENT

1. FUNCTIONALITY
    [ ] a. The app should suggest a word from the remaining list that is the result   of an algorithm which determines the word that would eliminate the most remaining words.
    [X] b. Directions should be provided so new users know how to use the app.
    [ ] c. Needs to be formatted for mobile.
    [X] d. The app should report the letter stats it calculates with to the user, not just to the console.

2. APPEARANCE / ANIMATION
    [X] a. The app should be tri-fold.  In the left/top pane should be the entry area, the right/bottom pane should be the remaining words list, and in the center should be Wyrtle the Turtle suggesting a new word.
    [ ] b. The boxes should animate in the same way they do in Wordle on letter entry, and when an invalid word is entered.
    [X] c. The letters should be capitalized on entry like in Wordle

3. VALIDATION
    [ ] a. The app should not accept numbers or symbols.
    [ ] b. The app should not accept invalid words.
    [ ] c. Recent words should be deducted from the list of possible words, and some number of them should be set to a second "back up" matrix of words as a last resort.
    [ ] d. The list of possible words should be restored each time enter is pressed before then being processed through the submitted clues.  This will prevent errors where the user changed previously entered clues.
    [ ] e. Submission should only be accepted when a complete word (ie an entire row) has been filled and colorized.

4. PERFORMANCE
    [ ] a. Currently, the JS is slow, and I don't know why.  If you type quickly enough, you can get ahead of the advancement script, leaving blank boxes behind.

5. OTHER
    [ ] a. The app should not throw an error to the console when typing after the last box in the last row.
    [ ] b. The JS should be modularized for readability.
