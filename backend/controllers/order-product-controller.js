import OrderProduct from "../models/Order-product.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";


export const getAllOrderProducts = async (req, res, next) => {
    try {
        const orderProducts = await OrderProduct.find();
        return res.status(200).json({ orderProducts });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const addOrderProduct = async (req, res, next) => {
    const { order, product, quantity } = req.body;

    try {
        const existingOrder = await Order.findById(order);
        const existingProduct = await Product.findById(product);

        if (!existingOrder || !existingProduct) {
            return res.status(400).json({ message: "Unable to find order or product by this id" });
        }

        const orderProduct = new OrderProduct({
            order,
            product,
            quantity,
        });

        await orderProduct.save();

        return res.status(200).json({ orderProduct });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const updateOrderProduct = async (req, res, next) => {
    const { quantity } = req.body;
    const orderProductId = req.params.id;

    try {
        const orderProduct = await OrderProduct.findByIdAndUpdate(orderProductId, {
            quantity,
        });

        return res.status(200).json({ orderProduct });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const getOrderProductById = async (req, res, next) => {
    const orderProductId = req.params.id;

    try {
        const orderProduct = await OrderProduct.findById(orderProductId);
        if (!orderProduct) {
            return res.status(404).json({ message: "Order product not found" });
        }
        return res.status(200).json({ orderProduct });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteOrderProduct = async (req, res, next) => {
    const orderProductId = req.params.id;

    try {
        const orderProduct = await OrderProduct.findByIdAndDelete(orderProductId);
        if (!orderProduct) {
            return res.status(404).json({ message: "Order product not found" });
        }

        const order = await Order.findById(orderProduct.order);
        order.order_products.pull(orderProduct);
        await order.save();

        return res.status(200).json({ message: "Successfully deleted" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
