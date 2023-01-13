import CartSrvice from '../services/cart.service'

const cartSrvice = new CartSrvice()

class CartController {

    async getByUserId(req, res) {
        const cart = await cartSrvice.getByUserId(req.query)
        cart ? res.json(cart) : res.status(404).json({ message: "no found" })
    }

    async create(req, res) {
        const cart = await cartSrvice.create(req.body)
        cart ? res.json(cart) : res.status(404).json({ message: "no found" })
    }

    async createCartItem(req, res) {
        const cart = await cartSrvice.createCartItem(req.body)
        cart ? res.json(cart) : res.status(404).json({ message: "no found" })
    }

    async updateQuantity(req, res) {
        const cart = await cartSrvice.updateQuantity(req.body)
        cart ? res.json(cart) : res.status(404).json({ message: "no found" })
    }

    async deleteCartItem(req, res) {
        const cart = await cartSrvice.deleteCartItem(req.body)
        cart ? res.json(cart) : res.status(404).json({ message: "no found" })
    }

};

export default CartController