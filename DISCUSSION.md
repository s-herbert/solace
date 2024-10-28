Hello!

Firstly, thank you for the challenge. This was cool.

There are _many_ things I'd want to change or add but I have reached time.

## Advocate Data fetch

I think the most glaring this is, fetching ALL of the advocates to be displayed at once is quite ridiculous, given the assumption:
"Assume we have a database of hundreds of thousands of advocates we need to search through."

I would definitely have implemented some pagination within the db fetch. As is typical for a table like that, we would have a "items per page" dropdown and a page navigator at the bottom or top of the table.

With that implemented, it would make sense to move the entire search/filter operation to the DB side, have it debounced so as to not overload DB calls. 

A cache layer between the DB (e.g. redis) would likely be a performance improvement for querying common terms.

My error handling was quick and dirty, but ideally we'd have a component/label on the front end that is updated if something fails over the network.


## Filtering

Ideally, we'd have an initial search which calls the db, and then a filtering option (like what's already implemented) to further filter the results client-side, with highlighting and such.

Also, it would be nice to make these comma-separated. It currently operates on the entire input string.

Having a filter for YOE, like "Minimum Years of Experience" drop down would be nice.

I am not searching phone numbers as they are a `number` and, of course I can convert this to a string, but given the "hundreds of thousands" assumption, I did not feel comfortable doing string conversions here. If we had pagination, I would, as there'd be less operations.


## Styles

Not my strong suit at all! Granted, give me a design to follow and I can make it happen, but blank-slate design is not my best.

Obviously this could be improved to make it prettier, but I did try to clean it up, and make it more presentable.
Further things i might add:

-alternating color between each result row
-icons for collapse/expand
-formatting for phone number (I really want to implement this real quick!)


## Client performance

I could probably add some memoization to the results table - especially filteredAdvocates, as this only needs to re-render if the list changes. 

Debouncing, which I mentioned before, isn't an issue with our small dataset but could be as the list increases. I'd definitely add it if we were calling the DB with search terms.


## Architecture

I generally like to abstract out my http calls, like the initial fetch.
The Components/ folder I created for the sake of this challenge, but I'd conform to whatever pattern the team uses.

## Misc notes
There's obviously a lot more that could be done, but I did what I could given the timeline.
P.S. For what its worth, I probably couldve implemented a few of the above during the time it took to write this out! Haha



