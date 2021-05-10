## Inspiration

We went on Naviance and it takes 5 hours to load. As juniors entering the college admissions process, we began to narrow down our search on the colleges that we want to apply for. From talking to our peers, we realized that many have been struggling to search for colleges as there are so many options available to them. We wanted to create a site that is easy for all students to access with information including admissions rate, SAT/ACT score, tuition, and the top five programs at each school to help guide students in their search. Finding out more about colleges is very important during this journey and we hope to help others like ourselves with their process! 

# CollegeSearch

winner!

Link: https://collegesearch.gtsb.io/

Video demo: https://www.youtube.com/watch?v=NN05vCwTEVc

GitHub repo: https://github.com/Snowton/college-admin-api-site

Presentation (Slides): https://docs.google.com/presentation/d/1Y8eQemvNSja95Ium_J-QC037YkYrG9mzEjvPOgmucF0/edit?usp=sharing

Devpost link: https://devpost.com/software/college-search?ref_content=my-projects-tab&ref_feature=my_projects

#### here is the devpost description

## What it does

It gets you results on any college within 3 seconds! The college search function allows students to look up any keywords relating to colleges. If students would like to search for colleges in specific states (i.e. "New Jersey") they can easily search for colleges residing in New Jersey by typing it into the search bar.  Likewise, if they are searching for a specific school, they can type that as well and the information corresponding to the school would appear underneath. The site is an easy way for students to access all necessary information to help with their decision-making and find what colleges might suit them best! 

## How we built it

This app is built with Gatsby on React.js. We also used Github to collaborate and used CSS to add styles to the site and used a college API to obtain the necessary information. Bootstrap allowed us to add the colleges into cards for aesthetic purposes. 

## Challenges we ran into

Styling in React can be a pain because there are a lot of differences between react styling and vanilla html styling. For example, we use "className" instead of class, and inline styles are done using objects, not a string. We had to learn how to add the styles within and search for proper syntax for it to function. 

As for the functionality, it was hard getting the elements to render at the right time, because "fetch" is an asynchronous function, so it would often get us the results much after we updated the div. We solved this by fetching the information in the parent element, so we render the child element whenever we get new information, not when we get a new query.

## Accomplishments that we're proud of

We're proud of being able to understand some JSON from the API! We are proud of learning the new syntax and being able to create a site that functions properly. We also learned how to better work together as a team through a virtual environment and collaborate on the project together. 

## What we learned

We learned a lot about styling in React and being able to connect the different functions together. We also learned more about syntax in order to have the functions working properly as it was different from the normal html/css that we are used to. 

## What's next for College Search

We can add more fields to give a wider variety of information to the user. This will not affect the display time because we already fetch all the information from the API. We have logged it in console if anyone is interested to check.
