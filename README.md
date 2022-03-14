# IONIC COMPONENTS APP

This is a template app to test all ionic components that are available, is based on Fernando Herrera's course [ionic 6+: Create IOS, Android applications and PWAs with Angular](https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/).

## Prerequisites

- Nodejs installed
- Ionic CLI installed
- Android Studio installed

## Setup

1. Fork and clone this repo.
2. Install the dependencies.

    ```shell
    npm install
    ```

The Ionic-components is just like any other Ionic Angular app. See [the docs](https://ionicframework.com/docs/) to learn what you can do.

- `ionic build` to build web assets
- `ionic serve` to run web version in your browser
- `ionic cap sync`
- `ionic cap run <platform>` (also w/ livereload: just add `-l --external --host=YOUR_IP` flags)

You can also opt-out of the Ionic CLI and use npm scripts the scripts defined by me:

- `npm run pre`: "ionic build && ionic capacitor add android && ionic capacitor copy android",
- `npm run dev`: "ionic capacitor run android -l --host=192.168.100.8",
- `npm run preprod`: "ionic build && ionic capacitor copy android && npx cap sync android && npx cap open android",
- `npm run prod`: "ionic capacitor build android"




