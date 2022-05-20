

### Setup

---

#### Start local MySQL server

#### Create Database
```bash
mysql -u user -p
CREATE DATABASE {name}
```

---

#### Create `.env` file in root directory

#### add: 
```env
DATABASE_URL="mysql://root:yourpassword@localhost:3306/name?schema=public"
```

---

#### Install dependencies

```
npm install
```

---

#### Seed Database
- ##### Resets database
- ##### Seeds database with test data
```
npm run seed
```

---

#### Run Development Server

```
npm run dev
```
