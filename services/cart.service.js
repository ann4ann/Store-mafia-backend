import Cart from '../models/Cart.js'

class CartSrvice {

    async getByUserId(props) {
        try {
            return await Cart.findOne({ userId: props.userId })
        }
        catch {
            return
        }
    }

    async create(props) {
        try {
            return await Cart.create({
                userId: props.userId,
                items: []
            })
        }
        catch {
            return
        }
    }

    async createCartItem(props) {

        try {
            const cartItem = await Cart.findOneAndDelete({ userId: props.userId })
            const checkItem = cartItem.items.find(elem => elem.productId === props.productId)

            if (checkItem) {
                try {
                    const cartItemItems = await cartItem.items.map(elem => {
                        if (elem.productId === props.productId) {
                            return { ...elem, quantity: elem.quantity + 1 }
                        }
                        return elem
                    })
                    return await Cart.create({
                        userId: cartItem.userId,
                        items: [...cartItemItems]
                    })
                }
                catch (e) {
                    console.log(e)
                    return
                }

            }

            return await Cart.create({
                userId: cartItem.userId,
                items: [
                    ...cartItem.items,
                    {
                        productId: props.productId,
                        quantity: 1,
                        price: props.price
                    }
                ]
            })
        }
        catch {
            return
        }
    }

    async updateQuantity(props) {

        try {
            const cartItem = await Cart.findOneAndDelete({ userId: props.userId })
            const cartItemItems = cartItem.items.map(elem => {
                if (elem.productId === props.productId) {
                    return {...elem, quantity: props.quantity}
                }
                return elem
            } )

            return await Cart.create({
                userId: cartItem.userId,
                items: [...cartItemItems]
            })
        }
        catch {
            return
        }
    }

    async deleteCartItem(props) {
        try {
            const cartItem = await Cart.findOneAndDelete({ userId: props.userId })
            const cartItemItems = cartItem.items.filter(elem => elem.productId !== props.productId)

            return await Cart.create({
                userId: cartItem.userId,
                items: [...cartItemItems]
            })
        }
        catch {
            return
        }
    }
}

export default CartSrvice