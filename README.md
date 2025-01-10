# ExpressJS Starter Template
Quick starter template on using ExpressJS

## Getting started
To use this template, you should have the following installed on your computer or server.

- NodeJS and NPM (latest version is recommended)
- Docker and Docker compose (optional if you want to use it in a docker container)

### Installing and running
Run these commands to install the packages and run the server.

```bash
npm install # install the needed packages
npm start # start the server
```

If you want, you may run the server in development mode. This can done using the command below.

```bash
npm run dev # starts the server using nodemon
```

## FAQ

> Q: The server port in the app.js file is in use. What do I do to fix this?
>
> A: If the port included in the app.js is in use by another program, you may change it to one that is free and open. You may change it by editing the `PORT` variable in your environment file. Ensure that you have created it as `.env` in the root directory. Below is an example on how it will look like.
> ```
> PORT=9000
> ```

> Q: I want to use HTML files with this. What can I do to make this happen?
>
> A: Just add any HTML files into the `public` folder. This folder is located in the root directory of this template. You do not have to add the `static` route to the app.js file as it's already added for you.

> Q: Can I use view engines with this?
>
> A: Yes you can. View engines such as EJS or HBS are the best out there but you may other engines if you want.

> Q: Where do I find some reference on using ExpressJS?
>
> A: [expressjs.com](https://expressjs.com/)

> Q: How can I add routes like a about page to my server?
>
> A: To add a route, use the following code below. You may change it if you like.
> ```javascript
> app.get('/about', function(req, res) {
>   res.send('This is your about page!')
> })
> ```

## Questions or issues
If have any questions or want to file an issue on something about this template, please do so using the GitHub issue system. Note that I might not respond in time, so you should wait till I'm available to help you out.