var prompts = [
    "You dip your chips in sauce? I dip mine in ________.",
    "Frazer really likes ________.",
    "Gareth really likes ________.",
    "Chloe really likes _____________.",
    "Ivan really likes __________.",
    "Schools all around the country have now banned _______.",
    "A brand new “position”, the ____________.",
    "Introducing the new high school ________ club.",
    "The real reason why the substitute teacher left.",
    "Nine out of ten students agreed that there needs to be more _________ in the learning environment.",
    "What left this stain on my couch?",
    "Money can't buy me love, but it can buy me _________.",
    "Bought a huge 70-inch 4k TV, I can finally watch ________ now.",
    "I never leave the house without ______.",
    "In order to be hip with the kids, (card reader) is actively engaged in ________.",
    "Life would be better without ______.",
    "I'm not like other girls, I'm __________.",
    "What is in (card reader's) wardrobe?",
    "When my kitchen gets upgraded, what it really needs is ______.",
    "Define: Bruh Moment.",
    "1,2,3,4, what's behind that bloody door?",
    "New from Hot Wheels, the _____-mobile",
    "When I saw your mum, it reminded me of ________.",
    "I have varied tastes, I really enjoy eating ________.",
    "What is the green emergency exit man running from",
    "___? That's not going to fit.",
    "Frosted Flakes; They're ___!",
    "Honey, did you really think it was a good idea to give the kids ___ for Christmas?",
    "I find your lack of ___ disturbing.",
    "It was all fun and games until ___.",
    "____.com",
    "What do you stock up on in case of a zombie apocalypse?",
    "This one time, I stuck my ______ in my ______.",
    "The greatest rap battle in history! _____ vs. _____",
    "That's enough _____ for today.",
    "What's my specialty?",
    "I'm up shit creek without ___.",
    "Why can't I just be ______?",
    "Wow! Look! It's _____ on that _____. ",
    "_________, approved for under 18s.",
    "Bill Nye, The _____ Guy!",
    "You. Me. ____. Now.",
    "111, what's your emergency?",
    "This workplace has been 1 day without ____.",
    "Damn kids and their _____.",
    "On a scale from ____ to ____, how would you rate your pain?",
    "Instructions Unclear. ____ stuck in ____.",
    "I want _____ on my desk by 5, or you're fired!",
    "I couldn't find ____, so I had to use _____ instead.",
    "16 people. 39 days of ___. One Survivor.",
    "All classes today are cancelled due to ___.",
    "If you like _____, you'll love _____.",
    "But muuuum! I don't want ___ for dinner again!",
    "FOR SALE: ____. Only used once.",
    "Good news is, I'm ____. Bad news is, I'm ____.",
    "Home is where ___ is.",
    "Oh shit! I just got ____.",
    "The bathroom was out of toilet paper, so I used ____ on my ass instead.",
    "____ is where my life started going wrong.",
    "<a href='https://ngtgyu.hdert.com/'>This is</a> (card reader's) favorite website _______."

]

// Define another list which will hold the prompts
var activePrompts = []

function newPrompt() {
    // set activePrompts to prompts if active prompts is empty
    // this will happen for the first prompt, and if the user cycles through every prompt
    if (activePrompts.length == 0) {
        activePrompts = [...prompts];
    }
    var randomNumber = Math.floor(Math.random() * (activePrompts.length));
    document.getElementById('cardDisplay').innerHTML = activePrompts[randomNumber];
    // remove the prompt that was just displayed from activePrompts
    // this will make sure the user doesn't get the same prompt twice in a while
    activePrompts.splice((randomNumber), 1);
}

newPrompt();
