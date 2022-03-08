# StoryCraft - Project Portfolio 2 - JavaScript
## by Siobhán Mooney

### [Click here to view the site.](https://estelindis.github.io/storycraft/)
### [Click here to view the repository.](https://github.com/Estelindis/storycraft)

# Table of Contents:
1. [About the project](#about-the-project)
    1. [User Goals](#user-goals)
    2. [Owner Goals](#owner-goals)
2. [Website structure](#website-structure)
    1. [Landing Page](#landing-page-and-story-content)
3. [Wireframes](#wireframes)
    1. [Mobile](#mobile)
    2. [Desktop](#desktop)
	3. [Narrative](#narrative)

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
The website is presented as a single page, the content of which changes as the user advances through the story.  As all content should be displayed on a single screen at all times, without the need to scroll, a navbar proper is not needed.  However, a hamburger menu is provided to clarify how to play the game and what controls can be used, in case such information is not apparent to the user.

## Landing Page and Story Content
- The user may find it jarring to be immediately confronted with story content and choices, without any explanation of what the site is and what users can do there.  As such, on loading the site, the user immediately encounters a brief description of the site and is invited to begin a story by pressing the Start button.  The user will not see this invitation again unless they reload the page.  
- Once the Start button is pressed, the user will exclusively experience story content (unless they reload the site or consult the menu).  Story content consists of some establishing text and a number of choices which may be taken to advance the story.  Eventually, a series of choices leads to an ending being locked in.  Once this occurs, the "choices" are reduced to one.  By selecting this sole remaining "choice," the user reaches one of the story's four endings.  The user may then begin again from the start.  Additionally, the option to begin again is always present at the bottom of the page.  

![Landing page on multiple devices.](/assets/image-readme/landing-responsive.jpg) 
![Story content on multiple devices.](/assets/image-readme/story-responsive.jpg)

# Wireframes
The site was prototyped in GIMP using the initially chosen colour palette and background image.  While some elements changed as the project developed and its scope was altered, several aspects of the initial design persisted to the final product.  Both mobile and desktop wireframes show a portrait feature that did not make the final version of the site, as scope was reduced to achieve minimum viable product within the associated timeframe.

## Mobile
- The mobile version of the site was wireframed first.  Working with a small gameplay area made it clear that each story element should be relatively short, so that all story content could be displayed on small devices without scrolling.  This visual restriction supported the narrative aim of offering a story experience that can be read relatively quickly and easily.

![Initial mock-up of the mobile site.](/assets/image-readme/wireframe-mobile.jpg)

## Desktop
- The desktop version of the site has a larger area for story content.  However, keeping the amount of story content the same as what was established in the mobile wireframe, it becomes clear that allowing the gameplay area to stretch to almost full desktop width offers no additional utility.  By limiting the width of the gameplay area on larger screens, some aesthetic utility is gained as more of the background image is allowed to appear.

![Initial mock-up of the desktop site.](/assets/image-readme/wireframe-desk.jpg)

## Narrative
- As well as the usual wireframing, the particulars of a narrative game called for "wireframing" the story.  This was done in several stages, with the first narrative wireframe including barebones versions of three stories and the beginning of a proposed fourth story.  However, due to time limitations, only one story was ultimately written in full and implemented in the live site.  Narrative wireframing took place in Flamewind Conversation Editor 2.0, a standalone version of the conversation editor from Bioware's Aurora Toolset.

![Initial mock-up of the desktop site.](/assets/image-readme/wireframe-story.jpg)




## Features

-   Responsive on all device sizes

-   Interactive elements

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the logo, resizing images and editing photos for the website.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/)

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.
    -   A white gap can be seen to the right of the footer and navigation bar as a result.
-   On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

# Used technologies and credits
## Languages
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Content
- Code to show and move between story nodes is adapted from a [tutorial by YouTube user Web Dev Simplified](https://www.youtube.com/watch?v=R1S_NhKkvGA).
- The hamburger menu is adapted from a [tutorial by YouTube user codefoxx](https://www.youtube.com/watch?v=flItyHiDm7E).
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