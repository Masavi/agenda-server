# agenda-server
Job scheduler server written with Node and Agenda

### Requirements

Install the dependencies and start the server using `npm start`.

Also, you need to add a `.env` file containing:

```sh
MONGO_URI='mongodb+srv://blablaConnectionString'
JOB_TYPES='create-fudge'
```

You can also use the next syntax for multiple jobs:

```sh
JOB_TYPES='create-fudge,update-fudge'
```
