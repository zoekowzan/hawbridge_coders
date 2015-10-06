## The Hawbridge Coders Application

This application is written using the [Ruby](https://www.ruby-lang.org/en/) programming language ([code academy]). To further simplify things, it uses a special ruby 'gem' called [sinatra](http://www.sinatrarb.com/) ([tutorial]). This 'microframework' makes it easy to create simple web sites and applications by giving you the ability to write a small amount of code which instructs the framework to magically generate a bunch of HTML for you for a given 'page' on your site. 

While there are a couple of files in this repository that are critical for setting up the ruby-sinatra 'infrastructure', the entire website can be coded in a single file, for example [hello.rb](/hello.rb).

This creates 3 'pages' or 'endpoints' to our website. Each page is served from the same basic site, e.g. if you are serving your site on heroku at http://dmlond-hawbridge-coders.herokuapp.com, this would make 3 pages available for you to visit on this 'domain'

'/'
The root page, which can also be called the 'index' for the site. This is the page that is served when the domain is visited in the browser without any extra directories.

'/hello'
This page can be accessed at http://dmlond-hawbridge-coders.herokuapp.com/hello. We append '/hello' to the domain to get to this page.

'/goodbye'
Another page on the site.

You can edit this file, and either change what is 'returned' by each page definition, or add your own page definitions.  We will be learning about sinatra, so for now just stick to returning simple strings (words in single or double quotes). Also, you may want to create a separate branch to make changes and autodeploy the branch to heroku instead of master to keep this in sync with dmlond/master.

### Alternatives
There are a number of other ruby frameworks for ruby:

Microframeworks like Sinatra, mainly make it easy to serve a website. If you want to respond to user actions and store information, you will need to write the code to do this yourself.
* [cuba](http://cuba.is/)
* [camping](http://camping.io/)

Larger Frameworks do more things for you, such as providing ways to respond to user input, and store information.
* [rails](http://rubyonrails.org/)
* [volt](http://voltframework.com/)

If you prefer another programming language, you can try many others, and most of them have similar frameworks to help you create websites:

python
* [flask](http://flask.pocoo.org/) Microframework
* [django](https://www.djangoproject.com/) Larger Framework

[Node.js](https://nodejs.org/en/)

As usual, Google is your friend for finding all sorts of others, and finding tutorials for everything.

[code academy]: https://www.codecademy.com/tracks/ruby
[tutorial]: https://thesocietea.org/2015/05/building-a-simple-web-server-with-sinatra/
