import { Router } from 'express'
import schema from '../database/modulDB.js'
const router = Router()

router.get('/', (req, res) => {
	res.redirect('index')
})

router.get('/index', (req, res) => {
	res.render('index', {
		name: ''
	})
})
router.get('/profile', (req, res) => {
	res.render('404')
})
// -
// -
// -

// sign up router -----------------------------------------------
router.get('/signUp', (req, res) => {
	res.render('sign/signUp.ejs', { error: false })
})
// sign up post router ------------------------------------------
router.post('/create', async (req, res, next) => {
	const resolt = new schema({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})
	try {
		await resolt.save()
	} catch (e) {
		res.render('sign/signUp.ejs', {
			error: Object.keys(e.errors)[0] || 'well done'
		})
	}
	next()
})
// sign in router -----------------------------------------------
router.get('/signIn', (req, res) => {
	res.render('sign/signIn.ejs', { err: false })
})
//sign in post router -------------------------------------------
router.post('/enter', (req, res) => {
	schema.findOne(req.body, (err, docs) => {
		if (docs)
			res.render('index', {
				name: docs.name
			})
		else {
			res.render('sign/signIn.ejs', { err: true })
		}
	})
})

export default router
