import {FC} from "react";
import {OrdersList} from "@/4-widgets/ordersList/ui/OrdersList.tsx";

export const OrdersPage: FC = () => {
    return (
        <div style={{width:'100%', height:'100vh'}}>
            <OrdersList/>
        </div>
    );
};