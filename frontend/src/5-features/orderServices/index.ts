import {getOrders} from "@/mock";
import {OrderI} from "@/6-entities/Order/types";

export class OrderServices{
    static async getOrdersList():Promise<OrderI[]>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(getOrders());
            }, 2000)
        })
    }
}