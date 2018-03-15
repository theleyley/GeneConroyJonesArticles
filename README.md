# PracticeTab

Please read through the Initial setup, Gulp task and Known Bugs thoroughly to troubleshoot known issues.

## Dependencies
- Angular 1.6.2
- Bootstrap 3.7

## Initial Setup
After you've cloned the repository, run the following commands to get started.
```
cd <project folder>/root
npm install
```
## Gulp task + server
Make sure you're in the `/root/` folder when running gulp commands
```
gulp server
```
`gulp server` will transpile your code and inject it into your `/dist` folder. 

Your server will run on `localhost:8000`

This project includes `livereload` and will inject updates on save.

## Known Bug

The first time you run `gulp server`, you will receive a `GET` error in your browser. This is fine. Simply make a change in a file in the `client` folder and save to re-transpile your code. You'll notice this will render the page in your browser now and every time thereafter.