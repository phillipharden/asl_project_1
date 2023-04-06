### Routing In Express

Awesome so we have our npm project setup and Express installed. Now let us go over what routing means. In the most simplistic term routing something means you are directing something to somewhere. 

In the context of frameworks a router connects incoming HTTP requests with functions/methods inside of your application. The router of any framework acts like an air traffic controller. They receive an incoming request from a plane and connect them with an available terminal and gate. Framework routers work the same way as our analogy. 

It is important that you know how HTTP verbs work because web frameworks such as Express use these verbs to direct incoming traffic to functions in your application. In the following video we are going to setup a simple route in Express for the home page of our project. 

[express basic route video](https://youtu.be/FiIXe5e8-9A)

### HTTP Verbs & Routing

Okay so let us step up our game and play around with a couple of different things we have learned from ASL this month. We are going to make two different routes. One will be a GET route and the other will be a POST route. The catch is we are going to make two different routes based on the same incoming URL path. 

This goes to show that HTTP verbs let our application know what the intention is behind a request. We can have two different routes on the same URL that behave completely different from each other based on the HTTP method that is passed into the incoming request. 


[express method routing video](https://youtu.be/LBhQilIT2Gk)


### Dynamic Route Parameters

Don't freeze up at the name just yet. Dynamic route parameters are a very important part of any modern day framework router. 

They allow us to generate routes based on a URL that can contain different values. Take for example an online retail store website. The url "/products/nike-shoes-large-white" in this case the URL contains some dynamic data. That dynamic data is equal to "nike-shoes-large-white." This part of our URL string is important because it will be used to load in the product by it's name "nike-shoes-large-white".

We can setup dynamic routes like this in Express by prefixing a part of the URL with a colon ":" followed by the name of the parameter you would like to assign to it so that you can reference it in your request object. Please take a look at how this is setup in the following video. 

[dynamic routing video](https://youtu.be/Sv1v9K1M_3w)