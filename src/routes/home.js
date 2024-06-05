express = require('express');
const axios = require('axios')
router = express.Router()

router.get('/', (req, res) =>{

  let isActive = true;

  const users = [
    {
      id:1,
      name: "ryan",
      lastname: "perez"
    },
    {
      id:2,
      name: "joe",
      lastname: "mc millan"
    }
  ]

  res.render('index', {
    title: 'index page',
    isActive,
    users
  })
})

router.get('/about', (req, res) =>{
  const title = 'Acerca de'
  res.render('about', {title})
})

router.get("/posts", async (req, res) =>{
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  res.render("posts", {
    posts: response.data,
  });
});

router.get("/dashboard", (req, res) => {
  res.render('dashboard');
});

module.exports = router;