## Angular ESPN-MOCKUP


http://gregwrightbjj.github.io/ESPN-MOCKUP/public/

### Description

Let's bring together our use of Angular so far and make something cool. During week 1, John asked when we'd be creating something slick like ESPN's landing page; well.. here we are.

### Details

I've created a service that provides data for the "SC Topics", carousel, and right-side headlines components for the ESPN.com landing page; it's available to cross-origin AJAX requests and lives at the following URLs:

* http://tiy-espn-info.herokuapp.com/espn/carousel
* http://tiy-espn-info.herokuapp.com/espn/highlights
* http://tiy-espn-info.herokuapp.com/espn/topics

### Normal Mode

Using that data (with `$http`), create Angular components that replicate the highlighted regions of the ESPN.com landing page. Pay very close attention to layout and font sizes; the page should resemble exactly the real site (and we're all sports fans here, so y'all should be comfortable with what that looks like) with no overflowing text.

You should create reusable components with separate angular controllers; the data should come in via factories so it can be testable.

All of the necessary data should be provided in the API and should be reasonably self-documenting. Ask if you have specific questions. The `glyph` fields correspond to images at the following URLs:

* `live`: http://assets.espn.go.com/i/ls.gif
* `insider`: http://a.espncdn.com/icons/in.gif
* `video`: http://assets.espn.go.com/icons/watch_headlines.png

As an added bonus, this gives you a reason to stare at the ESPN.com homepage during the first two rounds of the NCAA tournament, which you'd probably be doing this weekend anyway :)

(PS [Let's go Friars](http://xfinity.comcast.net/slideshow/sports-creepcollemascots/))
