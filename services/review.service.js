import Review from '../models/Review.js'

class ReviewSrvice {

    async get(props) {
        try {
            return props.limit
                ?
                await Review.find({ productId: props.productId }).limit(props.limit)
                :
                await Review.find({ productId: props.productId })
        }
        catch {
            return
        }
    }

    async create(props) {
        try {
            return await Review.create({ ...props }) 
        }
        catch {
            return
        }
    }
}

export default ReviewSrvice