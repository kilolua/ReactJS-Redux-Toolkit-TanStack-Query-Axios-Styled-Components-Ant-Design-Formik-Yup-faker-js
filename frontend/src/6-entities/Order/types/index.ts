export interface orderAddressI {
    district: string,
    city: string
}

export interface orderDescriptionI {
    cargoType: string
    volume: number
    weight: number
}

export interface OrderI {
    _id: string
    addressFrom: orderAddressI
    addressTo: orderAddressI
    cargoLoadingDate: Date
    distance: number
    intermediateDeliveryPointsCount: number
    orderNumber: string
    price: number
    gsm: number
    description:orderDescriptionI
}