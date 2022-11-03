interface ICard {
        id:number,
        name:string,
        src:string,
        title:string,
        desc:string
    }
export const featuresCards:ICard[] = [
    {
        id:1,
        name:'delivery',
        src:"assets/img/features/Delivery.svg",
        title:'Made by true artisans',
        desc:'Order before 3pm and get your order the next day as standard'
    },
    {
        id:2,
        name:'delivery',
        src:"assets/img/features/Checkmark.svg",
        title:'Next day as standard',
        desc:'Handmade crafted goods made with real passion and craftmanship'
    },
    {
        id:3,
        name:'purchase',
        src:"assets/img/features/Purchase.svg",
        title:'Unbeatable prices',
        desc:'For our materials and quality you won’t find better prices anywhere'
    },
    {
        id:4,
        name:'delivery',
        src:"assets/img/features/Sprout.svg",
        title:'Recycled packaging',
        desc:'We use 100% recycled to ensure our footprint is more manageable'
    },
]