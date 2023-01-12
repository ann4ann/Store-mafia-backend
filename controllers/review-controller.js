import ReviewSrvice from '../services/review.service'

const reviewSrvice = new ReviewSrvice()

class ReviewController {

    async get(req, res) {
        const reviews = await reviewSrvice.get(req.query)
        reviews ? res.json(reviews) : res.status(404).json({ message: "no found" })
    }

    async post(req, res) {
        const review = await reviewSrvice.create(req.body)
        review ? res.json(review) : res.status(404).json({ message: "no found" })
    }

};

export default ReviewController