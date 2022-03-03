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
        story: 'Some people go through life swimming upstream.  Fighting the force of the current.  Not me.  I let it carry me along.  I can\'t say the river\'s always taken me where I wanted, but it never hurt me.  If I haven\'t been happy, at least I\'ve been content.  Lately, though, something\'s different.  I see glimpses of strange things in the corner of my eye.  Whenever look at them, they vanish.  Something just isn\'t right.',
        choices: [
            {
                choice: 'Why look at all?  I ignore the strangeness.',
                nextStoryNode: 2
            },
            {
                choice: 'Carefully, I examine the strangeness.',
                nextStoryNode: 3
            }
        ]
    },
    {
        id: 2,
        story: 'Life continues as always.  Never anything worth describing, for better or worse.  No triumph.  No suffering.  Only the knowledge that tomorrow will be the same as yesterday.  Sometimes anomalies flash at the edge of my vision, but I pay them no heed.  Then, one day, I hear a snatch of a song.  So familiar, yet I can\'t place where I heard it.  I turn to find the singer, but no-one\'s here.  I\'m completely alone.',
        choices: [
            {
                choice: 'Am I losing my mind?',
                nextStoryNode: 5
            },
            {
                choice: 'I ignore the song as well.',
                nextStoryNode: 4
            },
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 10
            }
        ]
    },
    {
        id: 3,
        story: 'When I look at the anomaly quickly, it vanishes.  So I look slowly.  Unfocusing my eyes, I let my vision drift, moving casually towards the anomaly.  It looks like... a curtain.  Flickering at the edge of my sight.  Billowing in the wind, though the air around me is utterly still.  When I try to make out more detail, it fades away.  \r\n And so my days pass, trying to see more of the strangeness, but not so much that it flees from my sight.  One day I see a vase.  Then a fork.  Then, for the barest moment, a diamond ring on a shadowed hand.  The jewel flashes like the sun and is gone.  As my vision adjusts, I begin to hear a song.  So familiar, yet I can\'t place where I heard it.  I turn to find the singer, but no-one\'s here.  I\'m completely alone.',
        choices: [
            {
                choice: 'Am I losing my mind?',
                nextStoryNode: 5
            },
            {
                choice: 'I try to ignore all anomalies.',
                nextStoryNode: 4
            },
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 10
            }
        ]
    },
    {
        id: 4,
        story: 'Life continues as always - mostly.  Little worth describing, except for that strange song.  The visual anomalies I can ignore.  But the song persists.  Already familiar when I first heard it, it becomes more so.  Frustratingly, I can\'t quite understand the words.  They sound like half-remembered syllables that should make perfect sense but don\'t.',
        choices: [
            {
                choice: 'Am I losing my mind?',
                nextStoryNode: 5
            },
            {
                choice: 'I try to block out the song.',
                nextStoryNode: 9
            },
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 10
            }
        ]
    },
    {
        id: 5,
        story: 'The question is worth asking.  But how to answer it?  If I\'m broken, can I self-diagnose?  Can I make sense of sounds and sights that make no sense at all?',
        choices: [
            {
                choice: 'I try to work it out logically.',
                nextStoryNode: 6
            },
            {
                choice: 'Forget logic.  How do I feel?',
                nextStoryNode: 7
            },
            {
                choice: 'Forget I asked; ignore the question.',
                nextStoryNode: 8
            }
        ]
    },
    {
        id: 6,
        story: 'Either there\'s something wrong with me, or something wrong with the world.  I can\'t know which.  But I need to pay attention to the strange signals I\'m getting.  I won\'t find answers by ignoring the evidence.  Still, part of me fears what I might find out.',
        choices: [
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 10
            },
            {
                choice: 'I try to block out the song.',
                nextStoryNode: 9
            }
        ]
    },
    {
        id: 7,
        story: 'I feel... alone.  I can\'t remember my last meaningful interaction.  When have I confessed my deepest fears to someone or received a hug?  I can\'t remember, yet I can\'t accept that no such thing ever happened.  Whatever else the song is, at least it\'s the voice of another person.  I need that voice.  But... can I accept what it has to say?',
        choices: [
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 10
            },
            {
                choice: 'I try to block out the song.',
                nextStoryNode: 9
            }
        ]
    },
    {
        id: 8,
        story: 'So what now?  Do I try to make out more about the maddening, evasive song?  Or do I try to block it out forever?',
        choices: [
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 10
            },
            {
                choice: 'I try to block out the song.',
                nextStoryNode: 9
            }
        ]
    },
    {
        id: 9,
        story: 'I put my fingers in my ears, but it\'s no use.  The song isn\'t coming from beyond.  It\'s within me.',
        choices: [
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 10
            },
            {
                choice: 'I try to ignore it nonetheless.',
                nextStoryNode: 12
            }
        ]
    },
    {
        id: 10,
        story: 'The song is simple, almost child-like.  Verse and chorus go back and forth with so little variation that one might call it boring.  Yet there\'s something comforting about it.  Like a warm drink on a cold night.',
        choices: [
            {
                choice: 'I listen more.',
                nextStoryNode: 16
            },
            {
                choice: 'I try to block out the song.',
                nextStoryNode: 11
            }
        ]
    },
    {
        id: 11,
        story: 'I put my fingers in my ears, but it\'s no use.  The song isn\'t coming from beyond.  It\'s within me.',
        choices: [
            {
                choice: 'I try to ignore it nonetheless.',
                nextStoryNode: 12
            },
            {
                choice: 'I listen more.',
                nextStoryNode: 18
            }
        ]
    },
    {
        id: 12,
        story: 'The song exists.  I hear it almost always.  But I don\'t have to listen.  I push it to the background and move on with my life.  It\'s not always easy.  Sometimes, I find myself listening in spite of myself, and sadness threatens to overcome me.  But I don\'t have to let it master me.',
        choices: [
            {
                choice: 'I keep ignoring the song.',
                nextStoryNode: 13
            },
            {
                choice: 'I close my eyes and listen.',
                nextStoryNode: 17
            }
        ]
    },
    {
        id: 13,
        story: 'The world moves on, and I move with it.  Years pass.  Then decades.  When I look back at my life, I can say I lived.  Nothing more, nothing less.  If I haven\'t done anything remarkable, does it matter?  \r\n I can\'t quite say when I stopped hearing the song.  When I notice the silence, in my heart I know the song had been gone for years.  But one day, to my surprise, I hear it again.  In a different voice.',
        choices: [
            {
                choice: 'I listen to the new voice.',
                nextStoryNode: 14
            },
            {
                choice: 'I ignore the new voice.',
                nextStoryNode: 16
            }
        ]
    },
    {
        id: 14,
        story: 'As I listen to the cadence of this voice, I realise: it\'s one I don\'t know.  And I did know the old voice.  Knew it better than any other.  How could I have failed to notice that?  How could it have become clear only by contrast?  \r\n The world shifts and distorts around me.  Colours invert.  Sight becomes sound.  Everything falls apart.',
        choices: [
            {
                choice: 'Chaos carries me onwards.',
                nextStoryNode: 15
            }
        ]
    },
    {
        id: 15,
        story: 'Slowly, my senses return.  I open my eyes.  I\'m in hospital.  On my bedside table is a ring.  I know with sudden clarity who it belongs to.  \r\n The nurse in front of me is singing the song, in a low voice.  When she turns and sees me awake, she screams.  \r\n I cover my face with my aged, wrinked hands.  And I weep.',
        choices: [
            {
                choice: 'The end.  Begin again?',
                nextStoryNode: 1
            }
        ]
    }
];

newStory();