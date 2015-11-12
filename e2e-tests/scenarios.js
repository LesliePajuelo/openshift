'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /table when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/table");
  });


  describe('table', function() {

    beforeEach(function() {
      browser.get('index.html#/table');
    });


    it('should render table when user navigates to /table', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('Map', function() {

    beforeEach(function() {
      browser.get('index.html#/Map');
    });


    it('should render Map when user navigates to /Map', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
