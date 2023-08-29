export const menu = [
    {
        id: 1 ,
        title : "main",
        listItems:[
            {
                id : 1 , 
                title : "Homepage",
                url : "/",
                icon : "home.svg"
            },
            {
                id : 2 , 
                title : "Profile",
                url : "/users/1",
                icon : "user.svg"
            },
        ],
    },
    {
        id: 2 ,
        title : "lists",
        listItems:[
            {
                id : 2 , 
                title : "Users",
                url : "/users",
                icon : "user.svg"
            },
            {
                id : 2 , 
                title : "Products",
                url : "/products",
                icon : "product.svg"
            },
        ],
    },
    {
        id: 3 ,
        title : "lists",
        listItems:[
            {
                id : 2 , 
                title : "Users",
                url : "/users",
                icon : "user.svg"
            },
            {
                id : 2 , 
                title : "Products",
                url : "/products",
                icon : "product.svg"
            },
        ],
    },
    {
        id: 4 ,
        title : "lists",
        listItems:[
            {
                id : 2 , 
                title : "Users",
                url : "/users",
                icon : "user.svg"
            },
            {
                id : 2 , 
                title : "Products",
                url : "/products",
                icon : "product.svg"
            },
        ],
    },
]

export const topDealers =[
    {
        id: 1 ,
        username: "mahdi6062",
        icon : "https://avatars.githubusercontent.com/u/95579094?v=4" ,
        mail: "amiralmasi021@gmail.com",
        amount:3.555,
    },
    {
        id: 2 ,
        username: "mahdi6062",
        icon : "https://avatars.githubusercontent.com/u/95579094?v=4" ,
        mail: "amiralmasi021@gmail.com",
        amount:3.555,
    },
    {
        id: 3 ,
        username: "mahdi6062",
        icon : "https://avatars.githubusercontent.com/u/95579094?v=4" ,
        mail: "amiralmasi021@gmail.com",
        amount:3.555,
    },
    {
        id: 4 ,
        username: "mahdi6062",
        icon : "https://avatars.githubusercontent.com/u/95579094?v=4" ,
        mail: "amiralmasi021@gmail.com",
        amount:3.555,
    },
    {
        id: 5 ,
        username: "mahdi6062",
        icon : "https://avatars.githubusercontent.com/u/95579094?v=4" ,
        mail: "amiralmasi021@gmail.com",
        amount:3.555,
    },
    {
        id: 6 ,
        username: "mahdi6062",
        icon : "https://avatars.githubusercontent.com/u/95579094?v=4" ,
        mail: "amiralmasi021@gmail.com",
        amount:3.555,
    },
    {
        id: 7 ,
        username: "mahdi6062",
        icon : "https://avatars.githubusercontent.com/u/95579094?v=4" ,
        mail: "amiralmasi021@gmail.com",
        amount:3.555,
    },
]

export const chartBoxUser = {
    color: "#8884d8",
    icon:"/userIcon.svg",
    title:"Total Users",
    number: "11.238",
    dataKey: "users",
    percentage:45,
    chartData: [
        { name : "Sun" , users:400},
        { name : "Mon" , users:600},
        { name : "Tue" , users:500},
        { name : "Wed" , users:700},
        { name : "Thu" , users:400},
        { name : "Fri" , users:500},
        { name : "Sat" , users:450},     
    ]
}

export const chartBoxConversion = {
    color: "gold",     
    icon:"/conversionIcon.svg",     
    title:"Total conversion",     
    number: "2.6",     
    dataKey: "conversion",     
    percentage:15,     
    chartData: [     
        { name : "Sun" , conversion:400},     
        { name : "Mon" , conversion:600},     
        { name : "Tue" , conversion:500},     
        { name : "Wed" , conversion:700},     
        { name : "Thu" , conversion:400},     
        { name : "Fri" , conversion:500},     
        { name : "Sat" , conversion:450},     
    ]     
}

export const chartBoxRevenue = {
    color: "teal",
    icon:"/revenueIcon.svg",
    title:"Total Revenue",
    number: "$58.555",
    dataKey: "revenue",
    percentage:-15,
    chartData: [
        { name : "Sun" , revenue:90},
        { name : "Mon" , revenue:600},
        { name : "Tue" , revenue:500},
        { name : "Wed" , revenue:70},
        { name : "Thu" , revenue:460},
        { name : "Fri" , revenue:500},
        { name : "Sat" , revenue:450},
    ]
}
export const chartBoxProduct = {
    color: "gold",
    icon:"/conversionIcon.svg",
    title:"Total Ratio",
    number: 45,
    dataKey: "product",
    percentage:-25,
    chartData: [
        { name : "Sun" , product:400},
        { name : "Mon" , product:600},
        { name : "Tue" , product:500},
        { name : "Wed" , product:40},
        { name : "Thu" , product:800},
        { name : "Fri" , product:550},
        { name : "Sat" , product:450},
    ]
}