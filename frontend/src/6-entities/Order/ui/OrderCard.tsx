import {FC} from "react";
import {Card} from "antd";
import {OrderI} from "@/6-entities/Order/types";
import {RURub} from "@/7-shared/utils/vormaters.ts";

interface Props extends OrderI{

}

export const OrderCard:FC<Props> = (props) => {
    return (
        <Card style={{ width: "100%"}}>
            <div>
                <div>
                    <div>
                        {props.addressFrom.city}
                    </div>
                    <div>
                        {props.addressFrom.district}
                    </div>
                </div>
                <div>
                    <div>
                        {props.addressTo.city}
                    </div>
                    <div>
                        {props.addressTo.district}
                    </div>
                </div>
                <div>
                    Расстояние: {props.distance} км
                </div>
                <div style={{display:"flex", flexDirection:'row'}}>
                    <div>{props.description.cargoType}</div>
                    <div style={{marginLeft:'auto'}}>{props.cargoLoadingDate.toDateString()}</div>
                </div>
                <div style={{display:"flex", flexDirection:'row'}}>
                    <div>{props.description.weight} т. / {props.description.volume} м3</div>
                    <div style={{marginLeft:'auto'}}>{props.cargoLoadingDate.toDateString()}</div>
                </div>
                <div>
                    {RURub.format(props.price)}
                </div>
                <div>
                    ГСМ: {RURub.format(props.gsm)}
                </div>
            </div>
        </Card>
    );
};