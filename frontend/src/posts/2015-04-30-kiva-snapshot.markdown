---
layout: post
title: Kiva Snapshot
date: 2015-04-30 19:40:50 +1000
comments: true
categories:
  - projects
  - ruby
  - build people
---

I started a small group of microfinance loaners. I've been building a mini site to give us a better picture of what we've achieved, and what we'd like to do next. Part of my [year of projects](/blog/2015/01/08/welcome-to-2015/).

# Build People

As a well-off, young male white guy living in one of the richest countries in the world, I have _no idea_ what poverty feels like. To be honest, I hope I never have to. I was raised to understand that all "my" money? It's not really mine - I'm just a steward of it. And as someone to whom [much has been given][2], I want to give a good account of what I have.

I believe in charitable giving - giving without expecting to receive in return. I believe that international aid is, [to a point][1], a good thing - and something that both citizens and governments alike should get behind. But not every solution fits every problem, especially at the smaller scale.

## Big Differences in Small Packages

I really liked the concept of microfinance from the first time I heard about it. Much of the world has limited access to banking  & credit infrastructure, so anything that gives these people more options is a good thing in my book. But there's a gap between the people looking to borrow money and those (like us) who have it. Enter sites like [Kiva][3]. Here's part of what they have to say about microfinance:

> Microfinance is the supply of loans, savings, and other basic financial services to the poor. [(http://cgap.org)](http://cgap.org)
>
> As these financial services usually involve small amounts of money - small loans, small savings, etc. - the term "microfinance" helps to differentiate these services from those which formal banks provide.
>
> Why are they small? Someone who doesn't have a lot of money isn't likely to want or be able to take out a $50,000 loan, or be able to open a savings account with an opening balance of $1,000.

If you want to know more, their [introductory article on microfinance][4] is a really great place to start. Go read it now, I'll wait.

Kiva does a great job of bridging the gap between those looking to lend money and those who want to borrow it. There are plenty of micro financing groups on the ground around the world, but they often face similar problems, just at a slightly higher scale. Kiva is a clearing house that makes finding projects to fund simple. By combining loans as small as 25USD together, they're able to connect a large pool of lenders to a large pool of borrowers, without requiring a single lender to fund an entire loan themselves.

## About my group

At the start of 2014, I asked around and found 9 friends willing to start a small microfinance group, using Kiva as our source of loans. I didn't want this group to be at the expense of other causes we were _already_ supporting, so I deliberately set the bar low.

The rules are simple:

1. Every month, each member contributes 5USD, so every month there is at least 50USD to loan.
2. All funds from repaid loans should be re-loaned as soon as possible.
3. Each month, one member gets to fund a loan using all the money available in our Kiva account.
4. Even though these are loans, not donations, we will not "take the money back". If and when the group winds up, the funds will be donated to a charity we agree on.

After just over a year in operation, the results so far have been good! In the 17 months since we started, we've put in (17 x 50 = 850USD), but we've loaned out 1250USD! This means that nearly half our money has been loaned twice, and this will only get faster over time.

# Build software

<aside><a href="http://github.com/anicholson/kiva_snapshot">View source code at Github</a></aside>

Kiva [has a pretty nice API][5], which lets you pull all sorts of interesting info out about public information (loans, field partners, etc) as well as your own personal information (loans you've funded, your available balance…)

While Kiva shows some pretty cool stats itself, I wanted to show other things, like which person funded which loan. We're also curious about how quickly money cycles round, so I'll be building some insights about that too. 

### Screenshots

<img title="Graphs showing progress over time" src="/images/kiva_snapshot_graph.png">

<img title="Some of our recent loans" src="/images/kiva_snapshot_loans.png">

<img title="A tool to help me pull API data out" src="/images/kiva_snapshot_api_query.png">


### Frontend Stack

- [AngularJS](http://angularjs.org)
- [Highcharts](http://highcharts.com/)
- [Bower](http://bower.io)
- [Highlight.JS](http://highlightjs.org/)
- [Bourbon](http://bourbon.io)
- [Neat](http://neat.bourbon.io)

### Backend Stack
- [JRuby 1.7.19](http://jruby.org/)
- [Sinatra](http://sinatrarb.com/)
- [ActiveRecord 4.2](https://github.com/rails/rails/tree/4-2-stable/activerecord)
- [Postgres 9.3](http://postgresql.org)


[1]: https://www.youtube.com/watch?v=inClCwsVwjY
[2]: http://www.esvbible.org/Luke%2012%3A48/
[3]: https://kiva.org/
[4]: http://www.kiva.org/about/microfinance
[5]: http://build.kiva.org/api