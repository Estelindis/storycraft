/*jshint esversion: 6 */

let storyElement = document.getElementById('story');
let choiceElements = document.getElementById('choice-box');

function newStory() {
    showStoryNode(1);
}

function showStoryNode(storyNodeList) {
    let storyNode = storyNodes.find(storyNode => storyNode.id === storyNodeList);
    storyElement.innerText = storyNode.story;
    while (choiceElements.firstChild) {
        choiceElements.removeChild(choiceElements.firstChild);
    }

    storyNode.choices.forEach(choice =>{
            let choiceParagraph = document.createElement('p');
            choiceParagraph.innerText = choice.choice;
            choiceParagraph.classList.add('choice');
            choiceParagraph.addEventListener('click', () => makeChoice(choice));
            choiceElements.appendChild(choiceParagraph);       
    });
}

function makeChoice(choice) {
    let nextStory = choice.nextStoryNode;
    showStoryNode(nextStory);
}

const storyNodes = [
    {
        id: 1,
        ref: 'story03node01',
        story: 'Some people go through life swimming upstream.  Fighting the force of the current.  Not me.  I let it carry me along.  I can\'t say the river\'s always taken me where I wanted, but it never hurt me.  If I haven\'t been happy, at least I\'ve been content.  Lately, though, something\'s different.  I see glimpses of strange things in the corner of my eye.  Whenever look at them, they vanish.  Something just isn\'t right.',
        choices: [
            {
                choice: 'Why look at all?  I ignore the strangeness.',
                nextStoryNode: 2,
                nextRef: 'story03node02a'
            },
            {
                choice: 'Carefully, I examine the odd phenomena.',
                nextStoryNode: 3, 
                nextRef: 'story03node02b'
            }
        ]
    },
    {
        id: 2,
        ref: 'story03node02a',
        story: 'Life continues as always.  Never anything worth describing, for better or worse.  No triumph.  No suffering.  Only the knowledge that tomorrow will be the same as yesterday.  Sometimes anomalies flash at the edge of my vision, but I pay them no heed.  Then, one day, I hear a snatch of a song.  So familiar, yet I can\'t place where I last heard it.  I turn to find the singer, but no-one\'s there.  I\'m completely alone.',
        choices: [
            {
                choice: 'I ignore the song as well.',
                nextStoryNode: 'story03node03a'
            },
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 'story03node03b'
            }
        ]
    },
    {
        id: 3,
        ref: 'story03node02b',
        story: 'When I look at the anomaly quickly, it vanishes.  So I look slowly.  Unfocusing my eyes, I let my vision drift, moving casually towards the anomaly.  It looks like... a curtain.  Flickering at the edge of my sight.  Billowing in the wind, though the air around me is utterly still.  When I try to make out more detail, it fades away.  \r\n And so my days pass, trying to see more of the strangeness, but not so much that it flees from my sight.  One day I see a vase.  Then a fork.  Then, for the barest moment, a diamond ring on a shadowed hand.  The jewel flashes like the sun and is gone.  As my vision adjusts, I begin to hear a song.  So familiar, yet I can\'t place where I last heard it.  I turn to find the singer, but no-one\'s there.  I\'m completely alone.',
        choices: [
            {
                choice: 'I try to ignore all anomalies.',
                nextStoryNode: 'story03node03c'
            },
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 'story03node03b'
            }
        ]
    }
];

newStory();