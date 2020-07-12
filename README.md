# firestore-beer
firestore-beer is a small tallying web-app that is designed to keep track of beer consumption. It is primarily meant for our own dormitory so that everyone knows who has to get the new crate. We use it as a webpage inside our [Home Assistant](https://github.com/home-assistant) app.

firestore-beer uses Google's Cloud Firestore as the database. Values are incremented and decremented atomatically to solve [the issue of concurrent writes](https://firebase.googleblog.com/2019/03/increment-server-side-cloud-firestore.html). Updates to the counter happen in real time, even from external devices.
