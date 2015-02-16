Referral SaaSquatch Documentation
=============

[![Build Status](https://api.travis-ci.org/saasquatch/saasquatch-docs.png)](https://travis-ci.org/saasquatch/saasquatch-docs)

We decided to make the [Referral SaaSquatch documentation](http://docs.referralsaasquatch.com/) site an open source project so that we could get help from all of the lovely people out there. Contributing is easy because the documentation is either vanilla HTML or Markdown.


Contributing
-------------

The site is a simple [Metalsmith](http://www.metalsmith.io/) static site hosted on [Divshot](http://divshot.io).

To contribute:

 1. Clone this repo
 2. Add or edit an article in the `src` folder
 3. Run `npm install` followed by `node app.js` to run locally and verify your changes
 4. Submit a pull request to the `staging` branch.

We'll roll in changes once the [Travis CI build](https://travis-ci.org/saasquatch/saasquatch-docs) passes and someone finishes code review.


Pre-Release Checklist
-------------
 
 [x] Implement a 404 page
 [x] Implement redirects for moved pages


Wishlist
-------------

 [_] Get the LiveReload browser extension working
 [_] Support markdown fields in Yaml front-matter for e.g. RS-001 issue descriptions (custom swig tag?)
 [_] Look into Metalsmith-templates usage of `in-place` for easier mixed templates