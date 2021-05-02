import pkg from 'mongoose'
const { Schema: s, model: m } = pkg
const schema = new s({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: Number, required: true }
})
export default m('db', schema)
