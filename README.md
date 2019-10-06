# The New York Times MongoScraper
In this assignment, you'll create a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

# How it works:
## Back-End:
* Website setup to scrape the local section of New York Times website
* Using Cheerio, New York Times site is scraped
* Using Mongodb and Mongoose, select data(properties) from what is scraped stored into database
* Scraped info displayed rendered onto page
  * Header, url, summary displayed depending on id

## Front-End:
* User can click on link displayed to view article
* user can add comment in the text area below article section and once submit buitton is clicked, commment is rendered onto page
* user can add more comments to a specific article or delete past comments
## 

# Technologies Used:
* Node.js
* Express.js
* MongoDB
* Mongoose
* Cheerio
* JQuery

What I would like to have added to the hw would have been a "saved articles" page so it would display on a seperate page. The page automatically scrapes NYTimes when the page is loaded.


![home page](https://github.com/DanTheWebDevMan/mongoScraper/blob/master/images/img1.jpg)


![Comment added](https://github.com/DanTheWebDevMan/mongoScraper/blob/master/images/img2.jpg)


![comment rendered](https://github.com/DanTheWebDevMan/mongoScraper/blob/master/images/img3.jpg)


![comment deleted](https://github.com/DanTheWebDevMan/mongoScraper/blob/master/images/img4.jpg)


![Mongodb with scraped data](https://github.com/DanTheWebDevMan/mongoScraper/blob/master/images/img.4.jpg)

