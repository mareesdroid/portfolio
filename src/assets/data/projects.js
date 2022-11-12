const projects = [
  {
    id: 1,
    title: "MEVR Diamond",
    role: "Frontend, Backend",
    link: "https://mevrdiamond.osiztechnologies.in",
    image: require("../images/mevr.jpg"),
    modules: {
      Frontend: [
        "Wallet Connect",
        "Redux setup",
        "Helpers setup",
        "Ethers contract integration",
      ],
      Backend: ["All modules"],
    },
    tech_stack: "ReactJS, NodeJS, MongoDB",
    description:
      "MEVR Diamond is play to earn game, user can log in with Metamask, Chain wallet or any crypto wallet. User can deposit Meta verse token to play the game, on winning of each level user get points, on completing the game user can withdraw their diamond tokens based on points. Leaderboard reward treasure will be generated each day for top players.",
    technologies: [
      "@walletconnect/web3-provider 1.7.8",
      "@binance-chain/bsc-connector 1.0.0",
      "ethers 5.6.9",
      "react 18.2.0",
      "ethers 5.6.9",
      "reactstrap 8.10.0",
      "redux 4.2.0",
      "socket.io-client 2.3.0",
      "aws-sdk 2.1202.0",
      "crypto-js 4.1.1",
      "express 4.17.1",
      "helmet 4.1.0",
      "mongodb 4.1.3",
      "multer 1.4.3",
      "node-schedule 2.1.0",
      "nodemailer 6.3.1",
      "redis 3.1.2",
    ],
  },
  {
    id: 2,
    title: "NFT Moon Metaverse",
    link: "https://moonmetaverse.space",
    tech_stack: "ReactJS, NodeJS, MongoDB",
    image: require("../images/moon.jpg"),
    role: "Frontend, Backend",
    modules: {
      frontend: ["All modules"],
      backend: ["Web3 contract integraion", "staking data aggregation"],
    },
    description:
      "NFT Moon Metaverse is the futuristic Create2Earn multi blockchain universe. It will be inhabited by self-driven and creative people craving for boundless opportunities. Users can connect wallet with Metamask or any crypto wallet to login, and can stake their Moon tokens, user can choose to stake plans based on plans they will get reward of more moon tokens.",
    technologies: [
      "@walletconnect/web3-provider 1.7.3",
      "ethers 5.5.4",
      "react 17.0.2",
      "reactstrap 8.10.0",
      "redux 4.0.5",
      "web3modal 1.9.5",
      "cloudinary 1.28.1",
      "crypto-js 4.1.1",
      "express 4.17.2",
      "mongoose 6.2.0",
      "multer 1.4.4",
      "nodemailer 6.7.2",
      "socket.io 4.4.1",
    ],
  },
  {
    id: 3,
    title: "Gaming Akhada",
    link: "https://gamingakhada.com",
    tech_stack: "ReactJS, NodeJS, MongoDB",
    image: require("../images/akhada.jpg"),
    role: "Frontend",
    description:
      "Gaming Akhada is an application platform where BGMI, COD, free fire gamers register their spots in match, and they are rewarded by prizes and rewards.",
    modules: {
      Frontend: ["Chatbot, Realtime chat with firebase, Social login, UPI Payment, Deposit with upi, Course(Next version update), Multi video upload with progress"],
      "Admin panel": ["Add players", "Approve withdraw requests"],
    },
    technologies: [
      "@ckeditor/ckeditor5-react 3.0.2",
      "@react-firebase/database 0.3.11",
      "axios 0.24.0",
      "crypto-js 4.0.0",
      "firebase 8.2.4",
      "react 16.13.1",
      "react-dropzone 11.0.1",
      "react-player 2.8.1",
      "reactstrap 8.10.0",
      "redux 4.0.5",
      "socket.io-client 3.1.1",
      "swiper 6.5.9",
    ],
  },
  {
    id: 4,
    title: "HUT Money",
    tech_stack: "ReactJS, NodeJS, MongoDB",
    link: "https://hut.money",
    role: "Frontend",
    image: require("../images/hut-money.jpg"),
    description:
      "Humanity Utility Token: User can deposit, withdraw their currency by spend currency of USDT or ETH (or) BNB (or) BTC and get another currency. HUT Token will be provided based on pre-sale round and more transactions you make.",
    modules: {
      Frontend: ["All modules"],
      "Admin panel": ["Dashboard charts", "2FA", "Whitelist Ip"],
      Backend: ["Coin integration"],
    },
    technologies: [
      "@mui/icons-material 5.6.0",
      "@mui/material 5.6.0",
      "crypto-js 4.1.1",
      "react 17.0.2",
      "react-chartjs-2 4.1.0",
      "react-google-recaptcha-v3 1.9.7",
      "react-redux 7.2.6",
      "@binance-chain/javascript-sdk 4.2.0",
      "aws-sdk 2.989.0",
      "cloudinary 1.25.1",
      "express 4.17.1",
      "helmet 4.6.0",
      "multer 1.4.4",
      "node-cron 3.0.0",
      "nodemailer 6.6.0",
      "socket.io 4.0.0",
      "web3 1.5.1",
    ],
  },
  {
    id: 5,
    title: "X-PET Game",
    link: "https://xpetgame.osiztechnologies.in/",
    tech_stack: "ReactJS, NodeJS, MongoDB",
    role: "frontend",
    image: require("../images/x-pet.jpg"),
    description:
      "X-PET is a blockchain game on Ethereum, allows players to purchase, collect, breed and sell virtual pets. This game is inspired by Crypto kitties. Available pets are: Horse, Cat, Dog. — Project in demo stage waiting for client confirmation to go live.",
    modules: {
      Frontend: ["All modules"],
      "Admin panel": ["Dashboard", "2FA", "Whitelist IP"],
      Backend: ["Coin integration"],
    },
    technologies: [
      "@walletconnect/web3-provider 1.7.0",
      "@web3-react/core 6.1.9",
      "react 17.0.2",
      "react-redux 7.2.5",
      "reactstrap 9.0.0-8",
      "recharts 2.1.8",
      "aws-sdk 2.1014.0",
      "bcryptjs 2.4.3",
      "express 4.17.1",
      "express-rate-limit 5.0.0",
      "helmet 4.1.0",
      "mongodb 4.1.3",
      "multer 1.4.3",
      "node-schedule 2.1.0",
      "nodemailer 6.3.1",
      "redis 3.1.2",
      "web3 1.6.1",
    ],
  },
  {
    id: 6,
    title: "People Element",
    link: "https://peopleelement.net/",
    tech_stack: "ReactJS, NodeJS, MongoDB",
    image: require("../images/pe.jpg"),
    role: "Frontend, Backend",
    modules: {
      "Frontend & Backend": [
        "survey form",
        "survey templates",
        "profile management",
        "dashboard",
      ],
    },
    description:
      "Employee feedback management by assigning surveys to employee and shows the survey feedbacks to client on widgets and reports. Clients can assign multiple/filter employees based on demographics. Anonymous surveys for employee confidential.",
    technologies: [
      "ReactJs 16.13.1",
      "Redux 4.0.5",
      "Mongoose 5.9.14",
      "NodeJs 12.6",
      "Material UI 4.10.1",
      "Exceljs 4.1.1",
      "Jwt-simple 0.5.6",
      "Nodemon 2.0.4",
      "Cryptr 6.0.2",
      "Axios 0.19.2",
      "Lodash 4.17.20",
      "Redux-thunk 2.3.0",
    ],
    link: "https://peopleelement.net/",
  },
  {
    id: 7,
    title: "Vaagana - Take Care of your Car",
    link: "https://play.google.com/store/apps/details?id=com.vaagana.client&hl=en_IN",
    tech_stack: "Android, Embedded System, NodeJs, MongoDB",
    image: require("../images/vaagana_client.jpg"),
    role: "Frontend, Backend",
    modules: {
      "Frontend & Backend": ["All modules"],
    },
    description:
      "Reads Vehicle status via OBD-II Device through Bluetooth/Wi-Fi and view live status to the Android Smartphone. User Can add multiple vehicle, Car Information are populated using VIN audit API, Trouble Codes are sent to our registered Vaagana Mechanic, starts as soon as it detects the OBD Controller, displays: Oil Level, Fuel Level, Battery Condition, MPG for the current Trip. The app requires a Bluetooth OBD2 ELM327 compatible adapter to work. The adapter is small and plugs into the diagnostics socket on the car, which gives your phone access.",
    technologies: [
      "Native Android - Java",
      "Android Studio 3.6.1",
      "Gradle 5.6.4",
    ],
  },
  {
    id: 8,
    title: "Vaagana Mechanic",
    link: "https://vaaganamechanic.app/",

    tech_stack: "ReactJS, NodeJS, MongoDB",
    image: require("../images/vaagana_mechanic.jpg"),
    role: "Backend",
    modules: {
      "Frontend & Backend": ["All modules"],
    },
    description:
      "View Trouble codes of customer vehicles, Used to troubleshoot vehicle during service, Generate Billing to the customer",
    technologies: ["Vanilla Javascript ES6", "Jquery 3.3"],
  },
  {
    id: 9,
    title: "Find Your Car",
    link: "https://play.google.com/store/apps/details?id=com.bbs.app.find.car&hl=en_IN",
    tech_stack: "Android, PHP",
    image: require("../images/findyour_car.jpg"),
    role: "Frontend",
    modules: {
      frontend: ["All modules"],
    },
    description:
      "At FindYourCarApp you can make a decision on your next car using a variety of information that is present in our app. We are collecting all the information about the dealers cars to make your buying process as easy as possible. The app is designed to keep the entire search process as simple as possible. We have reduced the hops that are needed to contact a dealer. Save your favourite car, compare different model to make an informed decision before buying a car.",
    technologies: [
      "Native Android - Java",
      "Android Studio 3.6.1",
      "Gradle 5.6.4",
      "com.android.support:appcompat-v7:28.0.0",
      "com.android.support:design:28.0.0",
      "com.android.support.constraint:constraint-layout:1.1.3",
      "com.android.support:cardview-v7:28.0",
      "com.android.support:recyclerview-v7:28.0",
      "com.squareup.picasso:picasso:2.4.0",  
      "com.android.volley:volley:1.1.0",
      "com.google.android.gms:play-services-maps:11.4.2",
      "com.google.android.gms:play-services-location:11.4.2",
      "com.android.support:support-compat:28.0.0",
      "com.github.bumptech.glide:glide:3.7.0",
    ],
  },

  // {
  //     "title": "Texas Arms",
  //     "tech_stack":"Pure Javascript ES8, PHP",
  //     image: require('../images/texas_arms.jpg'),
  //     "role": "frontend",
  //     "modules": {
  //         "frontend" : [
  //             "all modules"
  //         ]
  //     },
  //     "description": "Search guns with Voice interaction(using web speech API)",
  //     "technologies": [
  //         "Vanilla Javascript ES8",
  //         "Jquery 3.4",
  //         "VSCode"
  //     ],
  //     "link":null
  // },
  // {
  //     "title": "TenderCuts for SPA",
  //     "tech_stack": "ReactJS, NodeJS, MongoDB",
  //     image: require('../images/tender_cuts.jpg'),
  //     "role": "frontend, backend",
  //     "modules": {
  //         "frontend & backend" : [
  //             "all modules"
  //         ]
  //     },
  //     "description":"Customer: Customer can choose meat by category, Search through meat varieties, All UPI payments and Paytm wallet Transaction are supported Admin: Admin manage inventory of the meat availability, Manage vendors, View All Delivered/Pending Orders Vendor: Update stock availability to the admin",
  //     "technologies": [
  //         "ReactJs 16.13.1",
  //         "Redux 4.0.5",
  //         "Mongoose 5.8.11",
  //         "NodeJs 12.6",
  //         "Express 4.17.1",
  //         "Passport 0.4.1",
  //         "Body-parser 1.19.0",
  //         "Nodemon 2.0.2",
  //         "Stripe 8.17.0",
  //         "Bcrypt 4.07",
  //         "Cors 2.85",
  //         "Jspdf 1.5.3",
  //         "Axios 0.19.2",
  //         "Redux-thunk 2.3.0",
  //         "Materialize-css 1.0.0",
  //         "VSCode",
  //         "Robo 3T"
  //     ]
  // },
  // {
  //     "title": "KPMC Tasker(Admin)",
  //     "tech_stack": "ReactJS, NodeJS, MongoDB",
  //     image: require('../images/kpmc_tasker.jpg'),
  //     "role": "frontend, backend",
  //     "modules": {
  //         "frontend & backend" : [
  //             "all modules"
  //         ]
  //     },
  //     "description":"Assign new stock/other tasks, Drop tasks, Monitor Employees expenses, Monitor Employee Location, View Stock Audit progress of each employee",
  //     "technologies": [
  //         "ReactJs 16.13.1",
  //         "Redux 4.0.5",
  //         "Mongoose 5.8.11",
  //         "NodeJs 12.6",
  //         "Express 4.17.1",
  //         "Body-parser 1.19.0",
  //         "Nodemon 2.0.2",
  //         "Cors 2.85",
  //         "Axios 0.19.2",
  //         "Redux-thunk 2.3.0",
  //         "Materialize-css 1.0.0",
  //         "VSCode",
  //         "Robo 3T"
  //     ]
  // },
  // {
  //     "title": "KPMC Expense Tracker",
  //     "tech_stack": "ReactJS, NodeJS, MongoDB",
  //     image: require('../images/kpmc_expense.jpg'),
  //     "role": "frontend, backend",
  //     "modules": {
  //         "frontend & backend" : [
  //             "all modules"
  //         ]
  //     },
  //     "description":"Inventory Employee Update there daily expenses in expense tracker app, all the expenses are stored on server, Employee can view expense by monthly/weekly/etc. by categories like transport/food/stationery/etc.",
  //     "technologies": [
  //         "Native Android - Java",
  //         "Android Studio 3.6.3",
  //         "Gradle 5.6.4"
  //     ]
  // },
  // {
  //     "title": "KPMC Stock Audit",
  //     "tech_stack": "ReactJS, NodeJS, MongoDB",
  //     image: require('../images/kpmc_stock.jpg'),
  //     "role": "frontend, backend",
  //     "modules": {
  //         "frontend & backend" : [
  //             "all modules"
  //         ]
  //     },
  //     "description":"Helps in auditing the stocks between server and the vendors, To notify stocks before Expiry date",
  //     "technologies": [
  //         "Native Android - Java",
  //         "Android Studio 3.6.3",
  //         "Gradle 5.6.4"
  //     ]
  // },
];

export default projects;
