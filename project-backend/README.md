

# Setup


### Start local MySQL server

#### Create Database
```bash
mysql -u user -p
CREATE DATABASE {name}
```

---

### Create `.env` file in root directory

#### add: 
```env
DATABASE_URL="mysql://username:password@localhost:3306/db_name?schema=public"
```
> use your **username**, **password** and **db_name**
           
           
---

### Install dependencies

```
npm install
```

---

### Seed Database
- ##### Resets database
- ##### Seeds database with test data
```
npm run seed
```

---

### Run Development Server

```
npm run dev
```

---

<br>

## END POINTS

<br>

`GET /movies`

---

`GET /movie:id`

---

`POST /movie/title`
- _`req.body`_:
    ```json
    {
      "title" : "movie title"
    }
    ```

---

`POST /movie`
- _`req.body`_:
    ```json
    {
      "title" : "Some Movie" - required,
      "description" : "Some movie about some stuff.",
      "release" : 1947,
      "duration" : "120 min"
    }
    ```

---

`DELETE /movie:id`

---

`PUT /movie/:id`
- _`req.body`_:
    ```json
    {
      "title" : "Some Movie",
      "description" : "Some movie about some stuff.",
      "release" : 1947,
      "duration" : "120 min",
      "likes": 0,
      "dislikes": 47
    }
    ```
    > request body must contain at least on of the fields above

---

`PATCH /movie/like/:id`

---

`PATCH /movie/dislike/:id`

---
