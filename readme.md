#Git Commands

git init
git status
git add filename or .
git commit -m "message"
git log

#Create a new repository on the command line

echo "# expensify" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:thewoodagency/expensify.git
git push -u origin master

#Push an existing repository from the command line

git remote add origin git@github.com:thewoodagency/expensify.git
git push -u origin master


#when you have just modified files
git commit -a - m "message"

#when you add new files
git add .
git commit -m "message"
