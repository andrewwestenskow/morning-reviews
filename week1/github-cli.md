# Week 1, Day 1 Review - Github, CLI, Environment

## Git & CLI review Kahoot!

[Link](https://create.kahoot.it/share/git-cli-review/98817ab0-c116-4576-806b-650db777a752)

> This covers the following:
>
> - What is a directory?
> - Creating files via command line
> - Don't use rm -rf
> - What is git?
> - Commands for using git

## Practice navigating the command line and using git

1. Open the terminal and find your current directory
   1. `pwd`
2. Navigate to your devmountain folder
   1. `cd devmountain`
3. Make a new directory called 'git-review'
   1. `mkdir git-review`
4. Navigate to that folder and create an `index.html` file.
   1. `cd git-review`
   2. `touch index.html`
      > You could choose to make a typo here to review the `rm` command as well.
5. Initialize git in that directory
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
