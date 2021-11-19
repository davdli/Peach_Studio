import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { getOrders } from "../redux/orders";

const OrderHistory = (props) => {
    const user = useSelector((state) => state.auth);
    const orders = useSelector((state) => state.orders)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders(props.match.params.id));
    }, [user]);

    return (
        <div>
            {
                (!orders.length) ? <h4>No orders have been placed yet :(</h4> :
                    <div>
                        <div className="">
                            <h3>Order History</h3>
                            <Link to="/profile">← Back To Profile</Link>
                            <div className="" >
                                <div className="">
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th> Order Number</th>
                                                    <th>Purchased On</th>
                                                    <th>Order Details </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order, index) => {
                                                    return (
                                                        <tr key={order.id}>
                                                            <td>
                                                                {index + 1}
                                                            </td>
                                                            <td>
                                                                {Date(order.updatedAt)}
                                                            </td>
                                                            <td>
                                                                <Link to="/profile/:id">View More</Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

            <Footer></Footer>
        </div>

    )

}

export default OrderHistory;
