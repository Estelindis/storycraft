const storyNode = document.getElementById('story');
const choiceArray = document.getElementById('choice-box');

function newStory() {
    showStoryNode('story03node01');
}

function showStoryNode(storyNodeList) {
    const storyNode = storyNodes.find(storyNode => storyNode.id === storyNodeIndex)

}

function makeChoice(choice) {

}

const storyNodes = [
    {
        id: 1,
        ref: 'story03node01',
        story: 'Some people go through life swimming upstream.  Fighting the force of the current.  Not me.  I let it carry me along.  I can\'t say the river\'s always taken me where I wanted, but it never tired me out.  If I haven\'t been happy, at least I\'ve been content.  Lately, though, something\'s different.  I see glimpses of strange things in the corner of my eye.  Whenever I turn to look at them, they\'re gone.  Something just isn\'t right.',
        choices: [
            {
                choice: 'Why look at all?  I ignore the strangeness.',
                nextStoryNode: 2,
                nextRef: 'story03node02a'
            },
            {
                choice: 'Carefully, I examine the odd phenomena.',
                nextStoryNode: 'story03node02b',
                nextRef: 3
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
        story: 'When I try to look at the anomaly quickly, it vanishes.  So I try slowly.  Unfocusing my eyes a little, I let my vision drift, moving casually towards the shifting light and colours.  It looks like... a curtain.  Flickering at the edge of my sight.  Billowing in the wind, even though the air around me is utterly still.  When I try to make out more detail, it vanishes.  So my days pass, trying to see more of the strangeness, but not so much that it flees from my fight.  One day I see a vase.  Then a fork.  Then, for the barest moment, a diamond ring on a shadowed hand.  The jewel flashes like the sun and is gone.  As my vision adjusts, I begin to hear a song.  So familiar, yet I can\'t place where I last heard it.  I turn to find the singer, but no-one\'s there.  I\'m completely alone.',
        choices: [
            {
                choice: 'I must be losing my mind.  I try to start ignoring the strangeness.',
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