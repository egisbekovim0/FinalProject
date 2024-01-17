import Order from "../models/Order.js";


export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        return res.status(200).json({ orders });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const addOrder = async (req, res, next) => {
    const { user, status, order_date } = req.body;

    try {
        const order = new Order({
            user,
            status,
            order_date
        });

        await order.save();

        return res.status(200).json({ order });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const updateOrder = async (req, res, next) => {
    const { status, order_date } = req.body;
    const orderId = req.params.id;

    try {
        const order = await Order.findByIdAndUpdate(orderId, {
            status,
            order_date
        });

        return res.status(200).json({ order });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const getOrderById = async (req, res, next) => {
    const orderId = req.params.id;

    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json({ order });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const deleteOrder = async (req, res, next) => {
    const orderId = req.params.id;

    try {
        const order = await Order.findByIdAndDelete(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json({ message: "Successfully deleted" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getOrderByUserId = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const order = await Order.find(userId);
        if (!order) {
            return res.status(404).json({ message: "User exercise not found" });
        }
        return res.status(200).json({ order });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
