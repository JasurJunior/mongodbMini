import mongoose from 'mongoose'

async function connectFun() {
	try {
		await mongoose.connect(
			'mongodb+srv://Jasur:1234@cluster0.nyfri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true
			}
		)
		console.log('db connected')
	} catch (e) {
		console.log(e)
	}
}
export default connectFun
