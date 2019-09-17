If you are new to static generations, there is no time to waste. SSG (Static Site Generation) tools are here to stay. Let's mention three popular tools and then let's focus on Montpesites.

First released in 2008 by Tom Preston-Werner, the co-founder of GitHub, Jekyll arguably popularised the concept of static sites and remains probably the most widely used static site generator. With Jekyll, you’ll typically work with content in Markdown, a lightweight markup language designed for text formatting.

Another popuar example is Hexo. Haxo is powered by Node.js and aimed at blogging. While the JavaScript implementation shouldn’t in theory make too much difference to how you work with it, since you’ll be using with markup and templating languages, it can make installation and configuration more familiar for JavaScript developers. If you’re already using npm and git then it’s extremely simple to get up and running.

Like Hexo, Gatsby is powered by Node.js and so will be more familiar territory for experienced JavaScript developers. However, several things set it apart from other similar tools.

### Presenting Montpesites

Montpesites is an SSG Tool being developed by [misitioba](https://misitioba.com).
We want to support the [Framasoft](https://framasoft.org/fr/) initiative called "Dégooglisez votre Internet" providing a self-hosted tool that can work in a decentralized way. 

#### Free

Montpesites is free software. Server instances within the federation could opt-in to charge for their services but the idea is to remain free for all.

#### Decentralized

In Montpesites, each test endpoint is an independent server owned by a community. Each instance inside the federated network, allow developers to compile their website and provides a test link. The same goes for the deployment. Each server could be used to deploy your website to free hosting such as gitlab pages (or better, community owned gitlab instances).

### An SSG tool with GUI

The first thing you need to know about Montpesites is it has a graphical interface. Here is an sketch.
To access to this GUI, you need to sign-in in one the available instances.

![](https://i.imgur.com/Tu4kdXh.jpg)

### BUILD

The main concept for the build phase is that every content is page. Articles, Product details and of course, static pages.
You can code using the web editor

![](https://i.imgur.com/G5j05mT.jpg)

### TEST

The main concept for the test phase is that you can add multiple test endpoints, from the available instances inside the federated network. Each test endpoint can grab your website code from a public git repository, compile the sources and provide you with a preview link

![](https://i.imgur.com/4Xv8sCh.jpg)

### Deploy

Deploy is more of the same. You can connect the instance were you are currently working to a free hosting such as gitlab pages or a custom ftp and deploy the static files.


### Conclusion

Montpesites could become a real developer's alternative to wordpress or more complex SSG tools.

Let's see how development goes in the next months. Stay tuned.

