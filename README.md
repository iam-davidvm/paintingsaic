# Paintings from AIC

<p>I am following this Udemy course about web development and finished the Section about AJAX and APIs. To get some practice I searched for an open API to play with. And decided to use the API from the Art Institute of Chicago.</p>
<p>For this website I have to do 2 calls. One for getting an ID based on keywords from a user. A second to get the image of the painting and some extra information.</p>


## Links

- [Live](<https://www.hetlabovandavid.be/paintingsaic/> "Live View")

## Screenshots

### Result after searching for "Git"

![API](/screenshot/homepage.png "API")


## Built With

![HTML](https://img.shields.io/badge/-HTML-orange "HTML")

![CSS](https://img.shields.io/badge/-CSS-blue "CSS")

![JavaScript](https://img.shields.io/badge/-JavaScript-yellow "JavaScript")


## Sources

- [API documentation](<https://api.artic.edu/docs/#quick-start> "API documentation")

I followed along this post to make the frame of the painting and tweaked it a little bit:

- [the new code article](<http://thenewcode.com/721/Sophisticated-Image-Matting-Effects-With-CSS> "the new code article")


## What I have learned

- I got a better understanding of fetch

- Reading API documentation

- I learned more about how I can use box-shadow

- How to get the value of an input element inside a form (form.elements.{name}.value)


## Things I may change in the future

- I limited the amount of characters a user can type in the search box. But I didn't implement a message to let the user know why he can't type more.

- Because it is a practice project, there isn't much explanation about the website itself. Adding some kind of intro is needed.

- The API responses with an array of multiple elements. The result always shows the first element of the array. It can be more interesting to show a random one of the particular array.


## Conclusion

> It was a small project to try and work with an API without looking back at the course notes which worked well. 