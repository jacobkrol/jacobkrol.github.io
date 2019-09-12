# Jacob Krol: Resume and Information Page

Welcome to my GitHub! This is the host repository of my main webpage, [jacobkrol.github.io](https://jacobkrol.github.io/). This isn't my profile, but I'd like to share how my webpage got to be what it is today.

### Learning JavaScript

Tasked with creating a physics engine to manipulate disks in a plane for my [Efficiency of Planar Disk Packings](https://github.com/jacobkrol/Planar-Disk-Packing/) project in Spring 2018, I turned to canvas objects using JavaScript. I learned they could be a way to quickly make visuals for my code, and I took off. Using YouTube, Lynda.com, and print references, I was able to turn lots of trial-and-error into a new coding language for my repertoire. By the end of the project, I had created an array of [fun, interactive tools](https://github.com/jacobkrol/Planar-Disk-Packing/Spring%202018/JS%20Tools) to visualize parts of our problem.

Sure, there were plenty of mistakes. I needed to learn ES 6 notation for `let` and `const` declarations, and more importantly, why to avoid keeping so many variables in the global scope.

<details><summary>Expand if you dare</summary>

Actual copy-paste from the global scope of my `GPE for Data Collection 1.js` program...

```javascript
var circles = [];
var points = [];
var density;
var loops = 0;
var densityWait = 50;
var slider1, slider2;
var generating = false;
var radius;
var altRadius = 0;
var showCircles = true;
var overShow, clickingShow, overHide, clickingHide, overClear, clickingClear = false;
var overFix, overSettle, overNatural, overFreeze, overAll, overIntersect = false;
var overPendFreeze, overRelease, clickingRelease, pendFreeze = false;
var airSetting = "natural";
var updateSetting = "all";
var circleSize1 = 0; var circleSize2 = 0;
var numIntersections = 0;
var apxNumIntersections = 0;
var palette = new function() {
    this.width = 775;
    this.height = 775;
    this.area = this.width * this.height;
}
var t0, t1, time, sum;
var timerUpdate = 100;
var ticks;
var timeEstimate;

//MAKE ALL NEW BUTTONS HERE **************************
var buttons = []
```
</details>

The only direction left was upwards.

### Adding HTML and CSS

Once I was on my way with JavaScript, I added lessons from similar sources as JS to my schedule in order to pick up HTML and CSS. These, just like JavaScript and any language, have seen a great improvement over time as I have solified the foundation I set with them. I will cover those self-critiques and improvements in later sections.

### First Design

With basic HTML, CSS, and JavaScript, I was able to create my very first resume website, coded from the very bottom.

![Screenshot unable to load](https://raw.githubusercontent.com/jacobkrol/jacobkrol.github.io/master/non-webpage/first-design.png)

### First Redesign

While revising my code, my skills improved, and I was able to better and better notice glaring mistakes like missing cross-browser compatibility, mobile-support, and misalignment galore. 

<details><summary>Expand if you dare</summary>

```css
.content-indent {
    margin-left: 20px;
    margin-right: -20px;
}

/* ... */

#MCL-Description {
    margin: 0 -30px 0 30px;
}
```
</details>

This inspired me to start all over again. I created blank files and got to work on a more modern, responsive, and responsible design. I may very well redesign my webpage more times, but this was a crucial step in the process of understanding that sometimes coding with an older version of yourself is slower than coding all alone with your new skillset.

### The Big Realization

There was a crucial moment in my web development career when I came across a random comment on a programming message board. In generic terms, it stated that a strictly-HTML webpage, like those used way back when, is never broken. Here, "broken" refers to a webpage which does not format, appear, or load correctly in particular environments. This is to say, a bare bones HTML page is cross-browser compatible, requires no dependencies, and flows on any sized screen. It's only when CSS and JS are added that suddenly issues arise. Essentially...

> Browsers don't break webpages. Developers break webpages.

Although I was upset that I couldn't blame all of my problems on old versions of Internet Explorer anymore, it helped my web development career massively. I began...

- writing out my entire HTML structure before introducing CSS and `<div>` elements
- checking the effect my CSS had on my projects one line at a time
- taking ownership of misaligned content
- reducing my dependency on JavaScript and jQuery to style my sheets when CSS seemed too complicated

I cannot trace the source of this message - even though I know it isn't a one-of-a-kind thought - but whoever and wherever you are out there, thank you.

### Sense of Pride

Now that I've completed my latest redesign, I will without a doubt continue to work on my webpage. I will update content, formatting, and may even perform an entire redesign in the future from the ground-up again. However, in August of 2019, I was able to carry a sense of pride in the work I had created from blank files on my laptop and a litte bit of inspiration just 18 months later.
