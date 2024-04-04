import {FC} from "react";
import {getOrders} from "@/mock";
import {Col, Row} from "antd";
import {OrderCard} from "@/6-entities/Order";

export const OrdersPage: FC = () => {
    const orders = getOrders();
    return (
        <>
            {orders.map((item) => (
                <Row justify="center">
                    <Col span={12}>
                        <OrderCard {...item}/>
                    </Col>
                </Row>
            ))}
        </>
    );
};