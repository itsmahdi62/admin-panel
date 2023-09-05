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
    color: "#aa47b5",
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

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData : [
        {
            name: "Sun",
            visit:4000,
        },
        {
            name: "Mon",
            visit:1000,
        },
        {
            name: "Tue",
            visit:4000,
        },
        {
            name: "Wed",
            visit:3000,
        },
        {
            name: "Thu",
            visit:5000,
        },
        {
            name: "Fri",
            visit:4500,
        },
        {
            name: "Sat",
            visit:4500,
        },
    ]
}

export const barChartBoxRevenue = {
    title: "Total Profit",
    color: "#FF8042",
    dataKey: "profit",
    chartData : [
        {
            name: "Sun",
            profit:4000,
        },
        {
            name: "Mon",
            profit:1000,
        },
        {
            name: "Tue",
            profit:4000,
        },
        {
            name: "Wed",
            profit:3000,
        },
        {
            name: "Thu",
            profit:5000,
        },
        {
            name: "Fri",
            profit:4500,
        },
        {
            name: "Sat",
            profit:4500,
        },
    ]
}

export const usersDeatails = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,status:true , email:"amiralmasi021@gmai"},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,status:true , email:"amiralmasi021@gmai"},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email:"amiralmasi021@gmai" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,status:true , email:"amiralmasi021@gmai"},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , email:"amiralmasi021@gmai" },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,emai:"amiralmasi021@gmail.com" , phone:"09391395538" , verified :true},
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,emai:"amiralmasi021@gmail.com" , phone:"09391395538" , verified :true},
  ];

  export const productsRow = [
    {
        id:1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0P1nfqEPoSUg5MlECyxswxu5XwZSGG3WEfEdYFE&s",
        title: "headphone",
        color:"black",
        producer:"sony",
        price:"$37.22",
        createdAt:"01.08.2023",
    },
    {
        id:2,
        img:"https://storage1.torob.com/backend-api/base/images/So/ud/Soudx5u3cKw9WKKZ.jpg",
        title: "headphone",
        color:"black",
        producer:"samsung",
        price:"$37.22",
        createdAt:"01.08.2023",
    },
    {
        id:3,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLT3ref_VW_34FR+watch-44-alum-midnight-nc-se_VW_34FR_WF_CO?wid=2000&hei=2000&fmt=png-alpha&.v=1683237043713",
        title: "headphone",
        color:"black",
        producer:"apple",
        price:"$37.22",
        createdAt:"01.08.2023",
        inStock: true,
    },
  ]