# ExpressJS Starter Template
Quick starter template on using ExpressJS

## Getting started
To use this template, you should have the following installed on your computer or server.

- NodeJS and NPM (latest version is recommended)
- Docker and Docker compose (optional if you want to use it in a docker container)

### Installing and running the server
Run these commands to install the packages and run the server.

```bash
npm install # install the needed packages
npm start # start the server
```

If you want, you may run the server in development mode. This can done using the command below.

```bash
npm run dev # starts the server using nodemon
```

> [!NOTE]
>
> Nodemon can be used if you are running the server in a development environment. This can be useful if you are making a change to your server without having to rerun the server every time you change something in any part of the code. If you need more information on what nodemon can be used for, check the documentation website [here](https://nodemon.io/) to learn more. I don't recommend that you use this mode for your production build.

## Questions you might have regarding this template

> Q: The server port in the app.js file is in use. What can I do to fix this?
>
> A: If the port included in the app.js is in use by another program, you may change it to one that is free and open. You may change it by editing the `PORT` variable in your environment file. Ensure that you have created it as `.env` in the root directory. Below is an example on how it will look like.
> ```
> PORT=9000
> ```

> Q: I want to use HTML files with this. What can I do to make this happen?
>
> A: Just add any HTML files into the `public` folder. Make sure that you have created the public folder within the root directory. You can also add other static files such as a style sheet or a JavaScript file if you want.

> Q: Can I use view engines with this?
>
> A: Yes you can. View engines such as EJS or HBS are the best ones out there but you may use other engines if you want. Make sure you create the `views` folder in the root directory and then add all of your template files there. You should also import them into the `server.cjs` file so that the server knows you are requesting a page that is using a template engine, otherwise it won't work at all!

> Q: Where do I find some reference on using ExpressJS?
>
> A: [expressjs.com](https://expressjs.com/)

> Q: How can I add routes like a about page to my server?
>
> A: To add a route, here's an route example that you can use.
> ```javascript
> app.get('/about', function(req, res) {
>   res.send('This is your about page!')
> })
> ```
> There's a file included with this template that you can use to organize your routes.

> Q: Is there other types of responses included with Express like JSON that I can use?
>
> A: Yes there is. If you wanted to have your route responded as a JSON, here's a route example that might help you out. Check the documentation site for more response types if you want to learn more about them.
> ```javascript
> app.get('/json', function(req, res) {
>   res.json({"status": 200, "message": "Hello world! This is a JSON response!"})
> })
> ```

> Q: Can I use a database server such as SQLite or MySQL with this?
>
> A: Yes you can. You can use any database server with it, as long if their is an npm package for what ever you're using. I recommend using [sequelize](https://sequelize.org/) because it's very easy to setup and can use any database server it's compatible with. When you setup your database connection settings, make sure you have them set in your environment file so that other users won't be able to hack into your database server and change what you have in it. Note that the environment file is ignored when pushing your changes, so you shouldn't have to worry about it being public to anyone who looks at your source code.

## Questions or issues
If have any questions or want to file an issue on something about this template, please do so using the GitHub issue system. Note that I might not respond in time, so you should wait till I'm available to help you out. You can also fork this template and create a pull request with your own custom changes.

## To-do
- [ ] Add instructions for using docker with this
- [ ] Add the files needed for using docker with this
