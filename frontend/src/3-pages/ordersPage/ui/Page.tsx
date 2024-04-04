import {FC} from "react";
import {getOrders} from "@/mock";
import {OrderCard} from "@/6-entities/Order";
import styles from './style.module.css'

export const OrdersPage: FC = () => {
    const orders = getOrders();
    return (
        <div className={styles.gridContainer}>
            {orders.map((item) => (
                <OrderCard {...item}/>
            ))}
        </div>
    );
};