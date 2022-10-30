interface ILink {
    name:string,
    path:string,
    id:number | string
}
export const menuHeaderLinks:ILink[] = [
    {
        name:'Ceramics',
        path:'/ceramics',
        id:1
    },
    {
        name:'Tables',
        path:'/tables',
        id:2
    },
    {
        name:'Chairs',
        path:'/chairs',
        id:3
    },
    {
        name:'Crockery',
        path:'/crockery',
        id:4
    },
    {
        name:'Tableware',
        path:'/tableware',
        id:5
    },
    {
        name:'Cutlery',
        path:'/cutlery',
        id:6
    },
]

export const menuFooterSaleLinks:ILink[] = [
    {
        name:'New arrivals',
        path:'/new arrivals',
        id:1
    },
    {
        name:'Best sellerss',
        path:'/best sellers',
        id:2
    },
    {
        name:'Recently viewed',
        path:'/recently viewed',
        id:3
    },
    {
        name:'Popular this week',
        path:'/popular this week',
        id:4
    },
    {
        name:'All products',
        path:'/all products',
        id:5
    }
]

export const menuFooterCompanyLinks:ILink[] = [
    {
        name:'About us',
        path:'/about us',
        id:1
    },
    {
        name:'Vacancies',
        path:'/vacancies',
        id:2
    },
    {
        name:'Contact us',
        path:'/contact us',
        id:3
    },
    {
        name:'Privacy',
        path:'/privacy',
        id:4
    },
    {
        name:'Returns policy',
        path:'/returns policy',
        id:5
    }
]