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

    let choiceNumber = 0;

    storyNode.choices.forEach(choice =>{
            let choiceParagraph = document.createElement('p');
            choiceNumber++;
            choiceParagraph.innerText = `${choiceNumber}: ${choice.choice}`;
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
        story: 'Life continues as always.  Never anything worth describing, for better or worse.  No triumph.  No suffering.  Only the knowledge that tomorrow will be the same as yesterday.  Sometimes anomalies flash at the edge of my vision, but I pay them no heed.  Then, one day, I hear a snatch of a song.  So familiar, yet I can\'t place where I heard it.  I turn to find the singer, but I see no one.',
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
        story: 'When I look at the anomaly quickly, it vanishes.  So I look slowly.  Unfocusing my eyes, I let my vision drift, moving casually towards the anomaly.  It looks like a curtain, flickering at the edge of my sight.  Billowing in the wind, though the air around me is utterly still.  When I try to make out more detail, it fades away.  \r\n In the following days, I try to see more.  One day I glimpse a vase.  Then a fork.  Then, for a moment, a gold ring on a shadowed hand.  It flashes like the sun and is gone.  As my vision adjusts, I begin to hear a song.  So familiar, yet I can\'t place where I heard it.  I turn to find the singer, but I see no one.',
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
        story: 'The question is worth asking.  But how to answer it?  If I\'m broken, can I self-diagnose?  Can I make sense of things that make no sense at all?',
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
        story: 'The song is simple, almost child-like.  Verse and chorus have so little variation that one might call it boring.  Yet there\'s something comforting about it.  Like a warm drink on a cold night.',
        choices: [
            {
                choice: 'I listen more.',
                nextStoryNode: 18
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
    },
    {
        id: 16,
        story: 'Before long, the new voice fades away.  I live my remaining time in silence.  \r\n Eventually, I slow and lose focus.  When the end approaches, it feels just as unsurprising as everything that\'s happened in my life.  Or... almost everything.  \r\n When my final day comes, I die as I lived.  Why should I regret anything?',
        choices: [
            {
                choice: 'The end.  Begin again?',
                nextStoryNode: 1
            }
        ]
    },
    {
        id: 17,
        story: 'The song is simple, almost child-like.  Verse and chorus have little variation that one might call it boring.  Yet there\'s something comforting about it.  Like a warm drink on a cold night.',
        choices: [
            {
                choice: 'I go back to ignoring the song.',
                nextStoryNode: 13
            },
            {
                choice: 'I listen more.',
                nextStoryNode: 18
            }
        ]
    },
    {
        id: 18,
        story: 'No matter how often I listen to the words, I can\'t make them out their meaning.  They sound right, like I should know what they\'re saying.  But I don\'t.  Instead, I listen to the voice itself.  To the accent, the precise lilt and cadence.  To the emotion.  And I find tears on my face.  From this voice, I know one thing: I am loved.',
        choices: [
            {
                choice: 'I keep listening.',
                nextStoryNode: 20
            },
            {
                choice: 'I stop listening.',
                nextStoryNode: 19
            }
        ]
    },
    {
        id: 19,
        story: 'Having truly heard the voice, it\'s not easy to stop.  No matter what I do, the song seems to worm its way into every moment.  The strange sights become constant too.  Always, at the edge of my vision, there\'s movement that vanishes when I look.  I may be losing my mind. \r\n Above all, I cannot escape the emotion I hear in the song.  Sometimes fondness.  Sometimes sorrow.  But always love.  Can I face it?',
        choices: [
            {
                choice: 'I try to sleep as much as possible.',
                nextStoryNode: 21
            },
            {
                choice: 'I give myself over to the song.',
                nextStoryNode: 20
            }
        ]
    },
    {
        id: 20,
        story: 'The words themselves never mattered.  It was always the feeling within them.  How long has this voice sung to me, reaching out to my loneliness?  How long has this singer been at my side, unseen?  \r\n The more I listen, the more a matching feeling rises within me.  A love.  A need.  But what will I do with it?',
        choices: [
            {
                choice: 'I sing the song.',
                nextStoryNode: 24
            },
            {
                choice: 'I fear my feelings.',
                nextStoryNode: 25
            }
        ]
    },
    {
        id: 21,
        story: 'Awake, I can\'t shut out the song.  But all senses vanish in slumber.  I do whatever I can to stay asleep.  No measure is too drastic.  \r\n My health declines.  The odd times I awake, I can see how frail I\'ve become.  Yet somehow, as little as I eat and drink, it seems to be enough.',
        choices: [
            {
                choice: 'I try returning to normal.',
                nextStoryNode: 22
            },
            {
                choice: 'I sleep as much as I can.',
                nextStoryNode: 23
            }
        ]
    },
    {
        id: 22,
        story: 'I\'m not sure how long I spent mostly sleeping.  The experience took its toll on my body.  But with time and effort, I slowly return to normal - or whatever passes for normal now.  When I do, I hear the song again.  In a different voice.',
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
        id: 23,
        story: 'After a time - who knows how long - the boundary between sleeping and waking breaks down.  When I dream, I see myself as I used to be.  When I wake, everything seems so alien that I can barely believe I\'m still myself.  Did the world change, or did I?  \r\n Still, I cling to an approximation of life.  And the song fades at last.  In time, so do I.',
        choices: [
            {
                choice: 'The end.  Begin again?',
                nextStoryNode: 1
            }
        ]
    },
    {
        id: 24,
        story: 'As ever, the words elude me.  But the melody does not.  I raise my voice in a wordless chorus, joining the one who sings to me.  \r\n It\'s not easy.  My voice is seldom used.  I can\'t quite keep the beat.  Yet the singer responds, slowing the song to match my tempo.  We sing as one.  \r\n The world shifts around me, moving to the rhythm of the song.  Sight becomes sound, and all is the song.  Everything comes together.',
        choices: [
            {
                choice: 'Music carries me onwards.',
                nextStoryNode: 30
            }
        ]
    },
    {
        id: 25,
        story: 'For as long as I can recall, I\'ve been lonely.  When I try to call names and faces to mind, they slip away.  Can I really reach out to the singer, not knowing what may happen?  Life as it is may be solitary - and prone to profound strangeness - but it\'s safe.  \r\n Still... is safety all there is?',
        choices: [
            {
                choice: 'I sing the song.',
                nextStoryNode: 24
            },
            {
                choice: 'I just keep listening.',
                nextStoryNode: 26
            },
            {
                choice: 'I seek refuge in sleep.',
                nextStoryNode: 21
            }
        ]
    },
    {
        id: 26,
        story: 'Life as I know it isn\'t so bad.  And the song is a kind of company.  As I move through life, the song moves with me.  Ever-present.  \r\n Years pass.  Then decades.  One day, suddenly, the song stops.  It\'s been with me so long, I notice its absence at once.',
        choices: [
            {
                choice: 'I sing the song.',
                nextStoryNode: 28
            },
            {
                choice: 'I stay silent.',
                nextStoryNode: 27
            }
        ]
    },
    {
        id: 27,
        story: 'I carry on, alone, in a world without music.  Until, one day, I hear the song in a different voice.',
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
        id: 28,
        story: 'As ever, the words elude me.  But the melody does not.  I raise my voice in an echo of the one who sang to me for so long.  \r\n The world shifts around me, moving to the rhythm of the song.  Sight becomes sound, and all is the song.  Everything comes together.',
        choices: [
            {
                choice: 'Music carries me onwards.',
                nextStoryNode: 29
            }
        ]
    },
    {
        id: 29,
        story: 'Slowly, my senses return.  I open my eyes.  I\'m in hospital.  \r\n Beside me, slumped in a visitor\'s chair, is the one I know better than anyone else.  Aged by decades, yet time could never make a stranger of this most precious person.  The singer of the song.  \r\n When I reach out, my hands look old too.  I touch the singer\'s face.  And our eyes meet for a final time.',
        choices: [
            {
                choice: 'The end.  Begin again?',
                nextStoryNode: 1
            }
        ]
    },
    {
        id: 30,
        story: 'Slowly, my senses return.  I open my eyes.  I\'m in hospital.  \r\n Beside me, holding my hand, is the one I know better than anyone else.  A few years older, yet time could never make a stranger of this most precious person.  The singer of the song.  \r\n Tears run down the singer\'s face.  Arms open to embrace me.  The song pauses.  But life begins.',
        choices: [
            {
                choice: 'The end.  Take another path?',
                nextStoryNode: 1
            }
        ]
    }
];

newStory();