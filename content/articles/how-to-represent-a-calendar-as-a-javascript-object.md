---
title: How To Procedurally Generate A Calendar As A Javascript Object
date: "2021-09-21"
---

I was working on a calendar component and i stumbled upon this problem. Procedurally generating a calendar. There are many solutions to this but i think i found the simplest way.

A calendar is composed of three things: Years, months and days. These are all hierarchically structured. Years are composed of month and months are composed of days. There is a child, parent relation between them.

Because years are on top of hierarchy, lets think about them first. If we think of a calendar as an object, years are just keys.

```javascript
{
  2020:{},
  2021:{},
  2022:{}
}
```

Since months can be represented with numbers, they are just keys of years.

```javascript
{
  2021:{
    0:{},
    1:{},
    2:{},
    3:{},
   	//...
  	11:{}
  }
}
```

When it comes to days. They have two things going for them. Their date in the month and their day of the week. This time we have two values, so we are just going to use key-value pair.

```javascript
{
  2021:{
    0:{
      1:0,
      2:1,
   		//...
    },
    1:{
      1:3,
      2:4,
      3:5,
      //...
    },
    2:{},
    3:{},
   	//...
  	11:{}
  }
}
```

And this is it, we just represented a calendar as javascript object and using only numbers as well.

To generate the calendar we are going to use a handy method of the javascript date object: Date.setDate(). It sets day of the date and updates the month and year as well.

```javascript
const date = new Date();
//2021-09-21
date.setDate(24);
//2021-09-21
date.setDate(31);
//2021-10-01
```

So we can just call the function iterativelly to create a calendar.

```javascript
function extractDate(dateObject) {
  return {
    day: dateObject.getDate(),
    week: dateObject.getDay(),
    month: dateObject.getMonth(),
    year: dateObject.getFullYear(),
  };
}

function generateCalendar(from, length) {
  const dates = {};

  let currentDate = new Date(from);
  for (let i = 0; i < length; i++) {
    const { day, week, month, year } = extractDate(currentDate);
    if (!dates[year]) dates[year] = {};
    if (!dates[year][month]) dates[year][month] = {};
    dates[year][month][day] = week;
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
```

This function will now create calendar from whatever date we throw at it.
