# Cloudboost Starter Ionic
A CloudBoost Ionic Starter app (Boilerplate/Template)

This is a Ionic v1 Example using AngularJS v1.

## Setup
1. Please create a CloudBoost account first. Then create a CloudBoost application, here is how: https://tutorials.cloudboost.io/en/gettingstarted/yourfirstapp
2. Setup Ionic if you haven't done so already: http://ionicframework.com/docs/guide/installation.html
3. Clone this app: 
```bash
git clone https://github.com/blacksector/cloudboost-starter-ionic.git
cd cloudboost-starter-ionic
```
4. Please replace the CloudBoost keys in your `www/js/app.js` with your own keys:
```javascript
CB.CloudApp.init('wlqeripyptqz', 'c1b5748d-1e84-4f72-96d0-f90f0222beac');
```
5. Then run npm to install dependencies:
```bash
npm install
```
6. Run the browser version
```bash
ionic serve
```
### Deploying to device
If you want to deploy to Android or emulator:
```bash
ionic platform add android
ionic run
```

If you want to deploy to iOS:
```bash
ionic platform add ios
ionic run
```

### Contributing
Create a pull request, if we think it is necessary and important, we will merge it!

### License?
It is MIT, use it all you want no need to give back :)
