wordleSolver 1.0 (9 March 2022)
Created by Dan Balint

HOW TO USE

Play your first Word in Wordle.  Then switch to this app and enter the results.  You can click anywhere on the page and start typing.  Click each tile to cycle through the colors.  Then hit enter to filter the remaining five letter words.

FUTURE DEVELOPMENT

1. FUNCTIONALITY
    a. The app should suggest a word from the remaining list that is the result of an algorithm which determines the word that would eliminate the most remaining words.

2. APPEARANCE / ANIMATION
    a. The app should be tri-fold.  In the left/top pane should be the entry area, the right/bottom pane should be the remaining words list, and in the center should be Wyrtle the Turtle suggesting a new word.
    b. The boxes should animate in the same way they do in Wordle on letter entry, and when an invalid word is entered.
    c. The letters should be capitalized on entry like in Wordle

3. VALIDATION
    a. The app should not accept numbers or symbols.
    b. The app should not accept invalid words.
    c. Recent words should be deducted from the list of possible words, and some number of them should be set to a second "back up" matrix of words as a last resort.
    d. The list of possible words should be restored each time enter is pressed before then being processed through the submitted clues.  This will prevent errors where the user changed previously entered clues.
    e. Submission should only be accepted when a complete word (ie an entire row) has been filled and colorized.

4. PERFORMANCE
    a. Currently, the JS is slow, and I don't know why.  If you type quickly enough, you can get ahead of the advancement script, leaving blank boxes behind.

5. OTHER
    a. The app should not throw an error to the console when typing after the last box in the last row.
