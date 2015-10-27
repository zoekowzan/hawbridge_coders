# hawbridge_coders

This is the base website for the Hawbridge Coding Club.  It will be the foundation for learning to develop a simple web application to be run on [heroku](https://www.heroku.com/home).

Table Of Contents
=================

#### Getting Started
* [Creating a Github Account](#creating-a-github-account)
* [Fork this Repository](#fork-this-repository)
* [Creating a Heroku Account and Free Application](#creating-a-heroku-account-and-free-application)
* [Linking Heroku and Github](#linking-heroku-and-github)

#### Working with Github
* [Using the Github Web Interface](#using-the-github-web-interface)
* [Managing your Github Repository with Branches](#managing-your-github-repository-with-branches)
* [Weekly Pull Requests](#weekly-pull-requests)
* [How Not to Break the Build](#how-not-to-break-the-build)

Creating a Github Account
=========================
  Using your browser, navigate to [Github](https://github.com)
Create an account. You should use a typical username for yourself (maybe reuse your gmail or facebook username), and a very strong password (10 characters, letters, numbers, spaces, dashes, special characters). You will need to supply an email address, and you will need to be able to login to this email to confirm the account.

  You might use this account for a very long time, so make it something that represents you as a person. If you want, you can add a a profile picture/avatar as well. If you already have an account that you can login with, skip this step.

Fork this Repository
====================

  Using your browser, make sure you are logged into Github and viewing [dmlond/hawbridge_coders](https://github.com/dmlond/hawbridge_coders). Click the 'Fork' button. This makes a copy of hawbridge_coders repository, with any branches that I have created, owned and managed by your account. I can never revoke your fork, nor make any changes to your copy of the code, except through the mechanism of a pull-request which you can deny.  Note, this repository is Licensed with the [GPL Version 2 Open Source License](https://opensource.org/licenses/gpl-2.0.php).  All forks of this repository must also be licensed with the GPL Version 2 license, and refer back to the original dmlond/hawbidge_coders.

Creating a Heroku Account and Free Application
==============================================

  Using your browser, navigate to [heroku](https://id.heroku.com/login). Click Sign Up.  You can choose any username that you want, but you should probably reuse your github username to make things easy (but use a different password unless your github password is very strong).  You will need to supply an email address, and you will need to be able to login to this email to confirm the account. You will also be required to register a text messaging capable phone, and it will send you a confirmation text message.

  Once you login, you will be presented with the Heroku 'Dashboard'. To create your first 'Application' click on the 'Personal Applications' link on the left, then click the '+' button on the top right. Chose 'Create new app'. Name it with your username appended to '-hawbridge-coders' (e.g. mine is called dmlond-hawbridge-coders).

  You can create and destroy applications all you want, and you can create multiple applications, so dont worry if you dont like this name. It is just to make it easier to standardize the way we all navigate to your sight when it is live.

Linking Heroku and Github
=========================

  There are tons of documentation pages on heroku.  [Github Heroku Integration](https://devcenter.heroku.com/articles/github-integration) is one that will teach you how to link your github account with your heroku account.  This makes it so that you can automatically launch the code from your github repository to make it live on a heroku URL address.  You should link your hawbridge-coders application with the 'master' branch of your github repository to start with, but you can always change this to a different branch, or turn off automatic deploy and use the 'deploy' dashboard to manually deploy any of your other branches at any time.

  Once you link the account and set up the auto deploy to deploy the master branch of your hawbridge_coders Github repository, heroku will attempt to build the code into a running application.  You can monitor the 'build' process using the heroku dashboard for the application.  Click the 'Activities' tab.  It will show all activities, including builds.  You should see an activity with 'Build Succeeded', and a subsequent activity 'Deployed'.  If you see this, you can navigate to the 'Settings' tab of the heroku dashboard for your hawbridge-coders application, and scroll down to the 'Domains' setting. Copy the 'Heroku Domain' and paste it into another browser tab and hit enter. It should look something like the original [dmlond-hawbridge-coders](http://dmlond-hawbridge-coders.herokuapp.com). See notes about this [Application](/TheApplication.md) for details of what the application provides.  This may change from week to week as new versions of the hawbridge-coders application are created.

Using the Github Web Interface
==============================

  Github is not just a code repository. It also allows editing of items stored in your repository, and easy management of branches. You can write an entire website using the Github web interface alone. When you click on a file in the repo browser, it will display a summary header with information about the file (number of lines, and size in bytes) and a list of actions available to you to perform on the file (if you are not logged in to github, you may not see all of these actions). It will then display the file, either with syntax highlighting if it is one of many supported programming languages, or in [Github Markdown](https://help.github.com/articles/markdown-basics/).  

* `Raw`: Allows you to view the file in its plain text form (without syntax highlighting or markdown formatting). This also provides you with a link that you can use to download a copy of just one file without cloning the entire repository.
* `Blame`: Shows you information about Github users that have changed your file. Unless you use the settings to invite other Github users to edit your repository, you will most likely only see your account and dmlond in the list of 'committers'.
* `History`: Shows you a list of all commits made to change that file.  You can click each 'commit' to see how the file changed using a ['Diff' syntax](https://github.com/blog/1932-syntax-highlighted-diffs).
* Tv Screen: If you have installed Github Desktop (see below) and cloned this repository, this will launch Github Desktop and open this file for viewing on your local machine.
* Pencil: This will allow you to make changes to the content of the file using your browser, just as if it is a text editor that is installed on your machine.
* Trashcan: This allows you to remove the file from your repo with a commit. The file is not permenantly gone. If you (or anywone else) looks at the history of the repository, you can find the file in any commit previous to the 'commit' where you deleted the file. This is a powerful feature of git. If you really want a file back, you can use Github to revive the file and commit it back to the repository. Note, **IF YOU EVER STORE SENSITIVE INFORMATION** in a file, deleting the file with this feature will not prevent other users from finding that information.  You should **NEVER** store sensitive information in your github repository.

  If you are using your own computer, you may want to investigate installing the [Github Desktop](https://desktop.github.com/) application, and a text editor designed for programmers, such as [atom](https://atom.io) or [sublime](http://www.sublimetext.com/). We will attempt to use the Github browser interface in this class.

Managing your Github Repository with Branches
=============================================

Git organizes your code repository into distinct 'branches'. A git repository always starts with a single 'branch' called 'master'. You can create as many branches as you want. In these branches, you can make small changes to your code, and submit the changes just to that branch, and test them out. If they work, you can come back to the master branch and 'merge' just these changes.  Or you can create a totally new branch called 'develop' where you write your code, and work with this branch (branch from and merging to this branch) until you are satisfied with it overall, and merge the 'develop' branch to 'master'. These are just 2 of the ways that programmers manage their code using git and GitHub.

The `master` branch, and all `version-` branches (e.g. version-1.0) of dmlond/hawbridge_coders are [designed to build and deploy successfully on heroku](#weekly-pull-requests). For this reason, it important to keep your master branch and `version-` branches in sync with their counterparts in dmlond/hawbridge_coders. Since branching in github is really easy, and you can create as many branches as you want, you should use branches to try new things out. You can change your heroku app to auto deploy a different branch at any time. With autodeploy set up on a branch, each time you commit changes to the branch, an attempt is made to build and deploy the application to heroku automatically.  If the build is successful, the new changes will be made 'live'.  If the [build breaks](#how-not-to-break-the-build) you will need to figure out what changes you made that broke it (GitHub history can be very helpful here). Here is a typical workflow that you can use to try things out on your own:

* Create a branch (some developers name branches for trying things out starting with 'try_', followed by something that they are tryig, e.g. 'try_change_variable'). At the top of your Github page, find the 'Branch' button (it lists the branch that you are currently viewing, most likely 'master'), and click it. In the field that says 'find or create a new branch' type something. If there is already a branch named with what you are typing, it will suggest it to you, and you can click that branch to view the state of the repository at that branch. If what you are typing does not exist, it will suggest that you 'Create branch: ... from master'. You can create branches from any branch, so if you want to start from `version-1.0` and work out from there, choose `version-1.0` first, then click the 'Branch' button again and type something new and choose 'Create branch: ... from version-1.0'. Create a new branch 'try_change_index' from master.
* Edit [views/index.erb](/views/index.erb). Change 'Hawbridge Coders' to something else. Scroll to the bottom and type something in the 'Commit changes' form. Click 'Commit changes'.
* Open the heroku dashboard, choose your hawbridge-coders app, and navigate to 'deploy'. Scroll down to the bottom, where it says 'Deploy a GitHub branch', and click the list box. You should see your new branch in the list. Click that to deploy that branch and make it live, provided you didn't [break the build](#how-not-to-break-the-build).

Weekly Pull Requests
====================
Each week, I will submit pull requests to your repository with changes from dmlond/hawbridge_coders that I have made to add new features, branches, or edit the instructions and documentation. You should login to your Github hawbridge_coders account, and click on the `Pull requests` link on the right hand menu. Here you will see any open pull requests that I (or others, possibly) have created to suggest changes that you should make to your fork of the code (you can also see closed pull requests by clicking on 'closed' at the top). Click on the pull request, and it will give you information about the pull request, including how it would change your repository. It will give you the option of merging the changes that I have made into your repository.  You can then Confirm these merged changes. This will change your branch. You can also ignore pull requests by closing them without merging them, if you are not interested in the changes that they would provide to your code.

If I make a pull request to you, I will also create a new `version-` branch in my own repository. You should shift-click the link to 'dmlond/hawbridge_coders' that is under your repository name at the top of the page to open dmlond/hawbridge_coders in another browser tab, and then click 'Branches' to see the branches that I have created. You can synchronize these to your repository, and keep them in sync, by doing the following in the tab with your fork of the repository:

* Click 'Branches'
* type the `version-` exactly as it appears in dmlond/hawbridge_coders
* click 'Create branch: version- from 'master'

If I see that you have synced my version branches, I will create pull requests to suggest changes to your version branch from my version branch to help keep them in sync.

The dmlond/master and all dmlond `version-` branches are designed to build and deploy successfully. If you have not changed your fork master, or version- branches, these should continue to build successfully for you as well.

How Not to Break the Build
==========================
 The safest file for you to change is [views/index.erb](/views/index.erb). This is a special HTML file that can allow ruby code to be inserted into it using a 'templating' syntax called [ERB](http://www.stuartellis.eu/articles/erb/). There really isnt anything you can do to this file that will prevent heroku from successfully building and deploying your application, and only a few things that you can do with bad ruby syntax in the template to cause the application not to load when you view it in your browser.
  The next file that you can change is [hello.rb](/hello.rb). This is a ruby script. It is easier to write bad ruby code which can cause the site not to load when you visit it in your browser. You should work through the Sinatra tutorials mentioned in the [Application Documentation](/TheApplication.md) before you edit this file.
  The final file that you can change is [config.ru](/config.ru). Again, you should read about sinatra and ruby before you edit this file.
  You should **NOT** change the Gemfile. If you have read about ruby and its [Bundler gem management system](http://bundler.io/), and if you can: 
  * clone the repository to your machine with ruby and bundler installed
  * run bundle on the application, which updates Gemfile.lock
  * commit and push these changes back to your repository

you can change the Gemfile. No one ever edits Gemfile.lock, it is generated by bundler when you run bundle on your application. Because the Gemfile and Gemfile lock files are designed to be 'in sync', you cannot successfully deploy an application to heroku unless you have done this process on your machine (which I will have done for each master and `version-` branch). If you dont want to break the build, do not edit these files.
