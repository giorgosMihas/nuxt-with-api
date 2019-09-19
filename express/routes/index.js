// express/routes/index.js sample
const {Router} = require('express')
const router = Router()

router.get('/api/greet', (req, res) => {
  res.send('hello world!')
})

router.get('/api', (req, res) => {
  res.send('API ROOT')
})

router.get('/api/users', (req, res) => {
  res.json([
	{
		username: "geo",
		password: "1234"
	},
	{
		username: "mary",
		password: "asdasd3"
	},
	{
		username: "nick",
		password: "nuxtjs"
	}
  ])
})

module.exports = router