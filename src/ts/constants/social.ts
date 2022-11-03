interface ISocial {
    id:number | string
    name:string,
    src:string,
    url:string
}
export const socialLinks:ISocial[] = [
    {
        id:1,
        name:'facebook',
        src:'/assets/img/social/facebook.svg',
        url:'https://faceboo.com'
    },
    {
        id:2,
        name:'instagram',
        src:'/assets/img/social/instagram.svg',
        url:'https://instagram.com'
    },
    {
        id:3,
        name:'linkedin',
        src:'/assets/img/social/linkedin.svg',
        url:' https://www.linkedin.com'
    },
    {
        id:4,
        name:'pinterest',
        src:'/assets/img/social/pinterest.svg',
        url:'https://ru.pinterest.com'
    },
    {
        id:5,
        name:'skype',
        src:'/assets/img/social/skype.svg',
        url:'https://web.skype.com/ru'
    },
    {
        id:6,
        name:'twitter',
        src:'/assets/img/social/twitter.svg',
        url:'http://www.twitter.com'
    }
]