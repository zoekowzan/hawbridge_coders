# hawbridge_coders

This is the base website for the Hawbridge Coding Club.  It will be the foundation for learning to develop a simple web application to be run on [heroku](https://www.heroku.com/home).

### Creating a Github Account

Using your browser, navigate to [Github](https://github.com)
Create an acccount. You should use a typical username for yourself (maybe reuse your gmail or facebook username), and a very strong password (10 characters, letters, numbers, spaces, dashes, special characters). You will need to supply an email address, and you will need to be able to login to this email to confirm the account.

You might use this account for a very long time, so make it something that represents you as a person. If you want, you can add a a profile picture/avatar as well. If you already have an account that you can login with, skip this step.

### Fork this Repository

Using your browser, make sure you are viewing [dmlond/hawbridge_coders](https://github.com/dmlond/hawbridge_coders)
Select the version-1.0 branch.  Click the 'Fork' button. This makes a copy of hawbridge_coders owned and managed by your account. dmlond can never revoke your fork, nor can dmlond make any changes to your copy of the code, except through the mechanism of a pull-request which you can deny.  Note, this repository is Licensed with the [GPL Version 2 Open Source License](https://opensource.org/licenses/gpl-2.0.php).  All forks of this repository must also be licensed with the GPL Version 2 license, and refer back to the original dmlond/hawbidge_coders.

### Creating a Heroku Account and Free Application

Using your browser, navigate to [heroku](https://id.heroku.com/login). Click Sign Up.  You can choose any username that you want, but you should probably reuse your github username to make things easy (but use a different password unless your github password is very strong).  You will need to supply an email address, and you will need to be able to login to this email to confirm the account. You will also be required to register a text messaging capable phone, and it will send you a confirmation text message.

Once you login, you will be presented with the Heroku 'Dashboard'. To create your first 'Application' click on the 'Personal Applications' link on the left, then click the '+' button on the top right. Chose 'Create new app'. Name it with your username appended to '-hawbridge-coders' (e.g. mine is called dmlond-hawbridge-coders).

You can create and destroy applications all you want, and you can create multiple applications, so dont worry if you dont like this name. It is just to make it easier to standardize the way we all navigate to your sight when it is live.

### Linking Heroku and Github

There are tons of documentation pages on heroku.  [Github Heroku Integration](https://devcenter.heroku.com/articles/github-integration) is one that will teach you how to link your github account with your heroku account.  This makes it so that you can automatically launch the code from your github repository to make it live on a heroku address.  You should link your hawbridge-coders application with the 'master' branch of your github repository to start with, but you can always change this to a different branch or repository, or turn off automatic deploy and use the dashboard to manually deploy any of your other branches, or even repositories.

Once you link the account and set up the auto deploy to deploy the master branch of your hawbridge_coders Github repository, heroku will attempt to build the code into a running application.  You can monitor the 'build' process using the heroku dashboard for the application.  Click the 'Activities' tab.  It will show all activities, including builds.  You should see an activity with 'Build Succeeded', and a subsequent activity 'Deployed'.  If you see this, you can navigate to the 'Settings' tab of the heroku dashboard for your hawbridge-coders application, and scroll down to the 'Domains' setting. Copy the 'Heroku Domain' and paste it into another browser tab and hit enter. It should look something like the original [dmlond-hawbridge-coders](http://dmlond-hawbridge-coders.herokuapp.com).  You can also append ['/hello'](http://dmlond-hawbridge-coders.herokuapp.com/hello) and ['/goodbye'](http://dmlond-hawbridge-coders.herokuapp.com/goodbye) to your url to get differnt pages that are made available by the app.

### Using the Github Web Interface

Github is not just a code repository. It also allows editing of items stored in your repository, and easy management of branches. You can write an entire website using the Github web interface alone.  If you are using your own computer, you may want to investigate installing the [Github Desktop](https://desktop.github.com/) application, and a text editor designed for programmers, such as [atom](https://atom.io) or [sublime](http://www.sublimetext.com/). We will attempt to use the Github browser interface in this class.

### Managing your Github Repository

Git organizes your code repository into distinct 'branches'. A git repository always starts with a single 'branch' called 'master'. You can create as many branches as you want. In these branches, you can make small changes to your code, and submit the changes just to that branch, and test them out. If they work, you can come back to the master branch and 'merge' just these changes.  Or you can create a totally new branch called 'develop' where you write your code, and work with this branch (branch from and merging to this branch) until you are satisfied with it overall, and merge the 'develop' branch to 'master'. These are just 2 of the ways the programmers manage their code using git and GitHub.

The original version-1.0 branch of dmlond/hawbridge_coders is designed to build successfully. Each week, you will be pulling changes from dmlond/hawbridge_coders that are also designed to build successfully, from a different version branch. This is why it is important to keep your master branch in sync with a dmlond/hawbridge_coders version branch. Since branching in github is really easy, and you can create as many branches as you want. You can change your heroku app to auto deploy a different branch at any time. With autodeploy set up on a branch, each time you push changes to the branch, an attempt is made to build and deploy the application to heroku automatically.  If the build is successful, the new changes will be made 'live'.  If the build 'breaks' you will need to figure out what changes you made that broke it (GitHub can be very helpful here). So, if you want to try something out, first create a branch (some developers name branches for trying things out starting with 'try_', and name known stable versions for deployment starting with 'version' and a number), then set the application to autodeploy that branch. Alternatively, you can keep the 'autodeploy' set to master, but manually deploy another branch to test things out.
