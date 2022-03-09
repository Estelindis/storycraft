# StoryCraft - Project Portfolio 2 - JavaScript
## by Siobhán Mooney

### [Click here to view the site.](https://estelindis.github.io/storycraft/)
### [Click here to view the repository.](https://github.com/Estelindis/storycraft)

# Table of Contents:
1. [About the project](#about-the-project)
    1. [User Goals](#user-goals)
    2. [Owner Goals](#owner-goals)
2. [Website structure](#website-structure)
    1. [Landing Page and Story Content](#landing-page-and-story-content)
3. [Wireframes](#wireframes)
    1. [Mobile](#mobile)
    2. [Desktop](#desktop)
	3. [Narrative](#narrative)
4. [Design](#design)
    1. [Colours](#colours)
    2. [Typography](#typography)
    3. [Imagery](#icons-and-images)
    4. [Future Development](#future-development)
5. [Testing](#testing)
    1. [HTML Validator](#html-validator)
    2. [Jigsaw CSS Validator](#jigsaw-css-validator)
    3. [JS Hint](#js-hint)
    4. [Lighthouse Accessibility (DevTools)](#lighthouse-accessibility-devtools)
    5. [Manual testing](#manual-testing)
6. [Bugs and fixes](#bugs-and-fixes)
7. [Deployment](#deployment)
    1. [GitHub Pages](#github-pages)
    2. [Forking Repository](#forking-the-github-repository)
    3. [Cloning the project](#cloning-the-project)
8. [Used technologies and credits](#used-technologies-and-credits)
    1. [Languages](#languages)
    2. [Content](#content)
    3. [Media](#media)
    4. [Other technologies](#other-technologies)
    5. [Credits](#credits)

# About the project
StoryCraft is designed to be a shortform narrative game in which the user can make meaningful choices. 

## User Goals
- Experience a full story, from beginning to end, in a short amount of time.
- Encounter choices that are not merely cosmetic but have different characteristics and lead to different results. 
- Navigate easily through a clear, readable website.

## Owner Goals
- Present a short narrative that balances genuine story branching with the need to avoid scope creep.
- Provide a clear user interface that does not obstruct the story experience.

# Website structure
The website is presented as a single page, the content of which changes as the user advances through the story.  As all content should be displayed on a single screen at all times, without the need to scroll, a navbar proper is not needed.  However, a hamburger icon with dropdown menu is provided to clarify how to play the game and what controls can be used, in case such information is not apparent to the user.

## Landing Page and Story Content
- The user may find it jarring to be immediately confronted with story content and choices, without any explanation of what the site is and what users can do there.  As such, on loading the site, the user immediately encounters a brief description of the site and is invited to begin a story by pressing the Start button.  The user will not see this invitation again unless they reload the page.  
- Once the Start button is pressed, the user will exclusively experience story content (unless they reload the site or consult the menu).  Story content consists of some establishing text and a number of choices which may be taken to advance the story.  Eventually, the user's choices lead to an ending being locked in.  Once this occurs, the "choices" are reduced to one.  By selecting this sole remaining "choice," the user reaches one of the story's five endings.  The user may then begin again from the start.  Additionally, the option to begin again is always present at the bottom of the page.  

![Landing page on multiple devices.](/assets/image-readme/landing-responsive.jpg) 
![Story content on multiple devices.](/assets/image-readme/story-responsive.jpg)

# Wireframes
The site was prototyped in GIMP using the initially chosen colour palette and background image.  While some elements changed as the project developed and its scope was altered, several aspects of the initial design persisted to the final product.  Both mobile and desktop wireframes show a portrait feature that did not make the final version of the site, as scope was reduced to achieve minimum viable product within the associated timeframe.

## Mobile
- The mobile version of the site was wireframed first.  Working with a small gameplay area made it clear that each story element should be relatively short, so that all story content could be displayed on small devices without scrolling.  This visual restriction supported the narrative aim of offering a story experience that can be read relatively quickly and easily.

![Initial mock-up of the mobile site.](/assets/image-readme/wireframe-mobile.jpg)

## Desktop
- The desktop version of the site has a larger area for story content.  However, with the amount of story content remaining the same, it becomes clear that allowing the gameplay area to stretch to almost full desktop width offers no additional utility.  By limiting the width of the gameplay area on larger screens, some aesthetic utility is gained as more of the background image is allowed to appear.

![Initial mock-up of the desktop site.](/assets/image-readme/wireframe-desk.jpg)

## Narrative
- As well as the usual wireframing, the particulars of a narrative game called for "wireframing" the story.  This was done in several stages, with the first narrative wireframe including barebones versions of three stories and the beginning of a proposed fourth story.  However, due to time limitations, only one story was ultimately written in full and implemented in the live site (this is represented in yellow in the narrative wireframe image).  Narrative wireframing took place in Flamewind Conversation Editor 2.0, a standalone version of the conversation editor from Bioware's Aurora Toolset.

![Initial mock-up of the desktop site.](/assets/image-readme/wireframe-story.jpg)

- The single story implemented in the live site was elaborated from the wireframe in the conversation editor of Bioware's Aurora Toolset, a tool designed to easily create and track narrative content.  Giving each story node a number in the Aurora Toolset allowed the content to be transferred easily to the storyNodes variable in script.js, with each story number in the toolset tracking directly to a story id in the variable.  In the image below, story nodes are shown in red, choices in blue, and links in grey.  (Links are used to channel a branch of a story back towards existing content, to prevent the story growing exponentially every time choices are offered.)  In this image, each choice has an associated character, so that readers of this readme can understand where the links lead.  These characters were not used in script.js and exist solely for documentation purposes.  

![Initial mock-up of the desktop site.](/assets/image-readme/aurora-cropped.jpg)

# Design
## Colours
- A minimalist colour scheme of dark grey backgrounds and very light grey text was chosen for the website.  These colours offer a level of contrast that ensures readability.  
- In the website as initially imagined, the background image (and user portrait, a feature not ultimately implemented) would change based on choices made by the user.  The changing images would use a wide range of different colours, but the main gameplay area would stay dark grey, a neutral colour that would not clash with the other elements.

## Typography
- [Fondamento](https://fonts.google.com/specimen/Fondamento): this clear, clean calligraphic font is used to make the site logo in the upper left corner stand out.
- [Dosis](https://fonts.google.com/specimen/Dosis): this rounded sans-serif font, chosen for readability, is used in all content apart from the site logo.

## Icons and images
- The source for the arrow in the dropdown menu is [Font Awesome](https://fontawesome.com/).  The arrow is used to delineate between menu items and the instructions that display when menu items are clicked.
- When looking at the [background image](https://www.artbreeder.com/i?k=98efc5ffe0b7a2bad327cfea50bf) as a whole, one sees a landscape.  However, inspecting particular details shows artistic elements of chaos that evoke the central experience conveyed in the story.  

## Future Development
- A future version of the site could include planned visual elements that were cut due to time constraints, such as portraits that age when the story time-skips and backgrounds that change as the story develops.  The aging portraits would be suitable for the sole implemented story, while most of the backgrounds would be more suited to the proposed additional stories which are currently only wireframed.  See the images below for a range of this proposed content.  

![Portraits that age with the story.](/assets/image-readme/portraits-start-and-old.jpg)

![Backgrounds that change with the story.](/assets/image-readme/backgrounds.jpg)

# Testing
## [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Festelindis.github.io%2Fstorycraft%2F)
No errors were returned when passing through the official W3C validator. 

![HTML results.](/assets/image-readme/html-checker.jpg)

## [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Festelindis.github.io%2Fstorycraft%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#warnings)
No errors were returned when passing through the official Jigsaw validator. 

![HTML results.](/assets/image-readme/css-validator.jpg)

## [JS Hint](https://jshint.com/)
Only metrics were returned when passing through JS Hint. 

![JSHint results.](/assets/image-readme/js-hint.jpg)

## [Lighthouse Accessibility (DevTools)](https://developers.google.com/web/tools/lighthouse/)
Running the site through Lighthouse, checking both mobile and desktop versions, resulted in the following reports:

![Mobile Lighthouse report.](/assets/image-readme/lighthouse-mobile.jpg)
![Desktop Lighthouse report.](/assets/image-readme/lighthouse-desktop.jpg)

## Manual testing
- I tested that the site works in different browsers: Edge, Chrome, Firefox.
- Via Chrome DevTools, I tested the responsiveness of the site across a range of screen sizes, from phone to tablet to desktop. 

# Bugs and fixes
## Solved bugs
- The dropdown menu caused persistent issues, preventing choices from being selected even when it was not dropped down.  This bug was caused by a misunderstood adaptation of the tutorial followed to create this content.  Once it was understood that the inactive menu needed to be both opaque and moved to the side of the page, this bug was fixed.

## Deployment

### GitHub Pages

The steps to deploy via GitHub pages:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Estelindis/storycraft).
2. Click the "Settings" option at the top of the repository.
3. Click the "Pages" option on the left-hand menu, located near the bottom.
4. Within the "Source" tab Select the drop-down titled "None".
5. Select the branch named "main" (it is sometimes named "Master").
6. Click "Save".
7. You will be prompted with a URL to your site, which is now deployed.

### Forking the GitHub Repository

By forking the GitHub repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository.  Follow these steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Estelindis/storycraft) that you want to fork.
2. In the upper right of the repository, click the "Fork" button.
3. A copy of the repository will now be available within your repositories.

This copy of the code can be edited without affecting the original code.

## Cloning the Project.

To make a local clone of the project, follow these steps:

1. Log into your GitHub account.
2. Navigate to the [Repository](https://github.com/Estelindis/storycraft).
3. In the upper section of the repository, click the dropdown named "Code".
4. Copy the SHH address.
5. Open GitBash.
6. Navigate to the correct directory.
7. Create a new directory named "storycraft".
8. CD into "storycraft".
9. Enter "git clone SSH_ADDRESS".
10. GitBash will clone the repository into this directory.
11. Enter "code ." which will open VS CODE.

# Used technologies and credits
## Languages
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Content
- Code to show and move between story nodes is adapted from a [tutorial by YouTube user Web Dev Simplified](https://www.youtube.com/watch?v=R1S_NhKkvGA).
- The hamburger icon and dropdown menu are adapted from a [tutorial by YouTube user codefoxx](https://www.youtube.com/watch?v=flItyHiDm7E).
- The [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) browser extension was used to quickly and clearly identify which styling elements were causing overflow.
- Narrative wireframing was done in [Flamewind Conversation Editor 2.0](https://neverwintervault.org/project/nwnee/other/tool/flamewind-conversation-editor-20).  However, due to encountering some bugs in Flamewind, story development moved to the [Bioware Aurora Toolset](https://en.wikipedia.org/wiki/BioWare#Aurora_Engine) when writing the full version of the story.

## Media 
- The background image was generated by [0kellyo](https://www.artbreeder.com/0kellyo) on [Artbreeder](https://www.artbreeder.com/i?k=98efc5ffe0b7a2bad327cfea50bf).
- Image compression was done via [Tiny PNG](https://tinypng.com/).
- Image editing, including site prototyping, was performed using [GIMP](https://www.gimp.org/) 2.10.24.
- The arrow used in the menu comes from [FontAwesome](https://fontawesome.com/).
- Fonts used throughout the website are imported from [Google Fonts](https://fonts.google.com/).
- Colours were chosen and checked for contrast on [Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23d0d0d0%0D%0A%233d3d3d%0D%0A%23222222&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp).

## Other technologies
- [GitHub](https://github.com/) provided a repository for the website.

## Credits
- [Code Institute Slack](https://slack.com/) Fellow members of the Code Institute on Slack provided an invaluable database of information and community of support.  I am particularly grateful to the msletb-nov-2021 cohort, our facilitator Kasia, and my mentor Darío.