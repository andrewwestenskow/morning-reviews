# Week 1, Day 1 Review - Github, CLI, Environment

## Lecture Notes and Slides

- Notes: https://github.com/WLH-17/orientation-day
- Slides: https://slides.com/matias_perez/lehi-web-immersive-orientation/#/

## Important Concepts to Review

1. Review the difference between Git and GitHub
- Ask the students if anyone has a background where they had to file a lot of paperwork
- Then using that example, talk about how it doesn't make sense to keep all the files in one folder stacked on your desk and how it makes more sense to file / organize them using labels so you know exactly where each of those files are at
- Next talk about how this relates to Git and how the file cabinet is like GitHub 

2. Kahoot! Review of Git & CLI concepts(https://create.kahoot.it/share/git-cli-review/98817ab0-c116-4576-806b-650db777a752)

> This covers the following:
>
> - What is a directory?
> - Creating files via command line
> - Don't use rm -rf
> - What is git?
> - Commands for using git

3. Other Git & CLI concepts: pwd, ls, clear, mv, rm, tab-key, up-arrow, down-arrow, "./", "../"

> Terminal command definitions:
>
> - `pwd` - Present Working Directory
> - `ls` - List Script
> - `cd` - Current Directory
> - `./` - Inside the Current Directory
> - `../` - Step Out One Level Outside of the Current Directory
> - `clear` - Clears the Terminal
> - `mkdir` - Make a New Directory in the Current Directory
> - `touch` - Make a New File in the Current Directory
> - `mv` - Move a File to a New Folder Location & Renaming Files
> - `rm` - Remove / Delete a File
> - `rm -rf` - Remove / Delete a Folder and All It's Contents
> - `tab-key` - Used for Auto-Filling or Searching File Names
> - `up-arrow` - Toggles Through the Most Recent Commands Entered in the Terminal History - Newest to Oldest
> - `down-arrow` - Toggles Through the Most Recent Commands Entered in the Terminal History - Oldest to Newest


4. Create a New Repository / Fork and Clone a Repository from GitHub
> - `Create` a Repo
> - `Initialize` Git in a Project
> - `Add` Files to Git to Be Staged for Commitment
> - `Commit` Files to Save Changes in Git
> - `Push` Updated Saved Git File to GitHub

5. Fork and Clone an Existing Repository
> - `Fork` a Repo
> - `Clone` a Repo
> - `Add` Files to Git to Be Staged for Commitment
> - `Commit` Files to Save Changes in Git
> - `Push` Updated Saved Git File to GitHub

6. Review article about "loop" patterns between clients and servers in context of "front-end" and "back-end"


## Review (Practice navigating the command line and using git)

1. Open the terminal and find your current directory
   1. `pwd`
2. Navigate to your devmountain folder
   1. `cd devmountain`
3. Make a new directory called 'git-review'
   1. `mkdir git-review`
   2. `ls`
4. Navigate to that folder and create an `index.html` file.
   1. `cd git-review`
   2. `touch index.html`
      > You could choose to make a typo here to review the `rm` command as well.
   3. Navigate into that file `cd index.html`, `pwd`, navigate out of that file `cd ..`
5. Initialize git in that directory (at the root of your project)
   1. `git init`
6. Go to github.com and create a new repo.
7. Link your new directory to your new github repo.
   1. `git remote add origin [url]`
8. Open vsCode from that location
   1. `code .`
9. Make changes, then add, commit, and push those changes.
   1. Change the index.html file
      > You can choose to use this time as well to set up autosaving.
   2. `git add .`
   3. `git commit -m "message"`
   4. `git push -u origin master`
10. Practice forking and cloning an existing repo
    1. You can use [this repo](https://github.com/andrewwestenskow/forking-practice) or make your own.
    2. Open the repo and instruct the students to click fork.
       > Take this opportunity to review what forking means
    3. Navigate to your devmountain folder and clone the repo `git clone [url]`
    4. Make changes to the markdown file and then push them to github
       1. `git add .`
       2. `git commit -m "message"`
       3. `git push`
    5. Check your version of the repo on github. You should see your commit message and your changes to the file.
       > If you are using my repo, take this time to show that you do not have `invisible.js` because it is included in the `.gitignore` file

   ## Extra Content (Time Permitting)
   - Preview HTML / CSS I Content
   - Extension Suggestions:
   
   > Chrome Extensions 
   > - Video Speed Controller
   > - Eye Dropper
   > - WhatFont

   > VSCode Extensions:
   > - Auto Close Tag
   > - Auto Rename Tag
   > - AutoFileName
   > - Bracket Pair Colorizer or Rainbow Brackets
   > - GitLens
   > - Markdown Preview GitHub Styling
   > - Open in Browser
   > - Path Intellisense
   > - Themes

   > Settings
   > - AutoSave - onFocusChange or afterDelay
   > - Word Wrap - on 