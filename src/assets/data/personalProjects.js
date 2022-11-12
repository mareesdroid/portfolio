const personalProject = [
  {
    id: 1,
    title: "J2EE Master",
    tech_stack: "Spring Boot, Hibernate, MySQL",
    description:
      "This project is built on Spring Boot framework with data layer as hibernate. For JDBC connection used MySQL, for sending and receiving data events used JMS, Web layer structure built on MVC Framework, Objects are instantiated of spring beans, for project documentation go through the notes I made on the GitHub repo.",
    link: "https://github.com/mareesdroid/Spring-Master",
    img: require("../images/spring_master.jpg"),
    technologies: [
      "J2EE",
      "SpringBoot 2.2.4",
      "Java 7",
      "maven 3.6",
      "tomcat 8.0",
      "netbeans",
    ],
  },
  {
    id: 2,
    title: "Alexa Skill Build",
    tech_stack: "ECMAScript 2018, Shell, DynamoDB",
    description:
      "This project is built on AWS Lambda, for project documentation go through the notes I made on the GitHub repo.",
    link: "https://github.com/mareesdroid/Amazon_Alexa_Dialog_Skill",
    img: require("../images/alexa_marees.jpg"),
    technologies: [
      "ask-sdk 2.7.0",
      "ask-sdk-core 2.6.0",
      "ask-sdk-dynamodb-persistence-adapter 2.7.0",
      "ask-sdk-model 1.18.0",
      "aws-sdk 2.550.0",
    ],
  },
  {
    id: 3,
    title: "Pick Money Game",
    tech_stack: "Android",
    description:
      "The player must choose the money bag over the desert full of snakes, for each increasing level I change the difficulty by increasing the snakes count & making the money bag smaller. This game is built using relative layout, so the view never overlap each other.",
    link: "https://github.com/mareesdroid/Pick-Money-Game",
    img: require("../images/kaargo.jpg"),
    technologies: [
      'androidx.appcompat:appcompat:1.0.0',
    'androidx.constraintlayout:constraintlayout:1.1.3',
    'com.google.android.material:material:1.0.0',
    'androidx.cardview:cardview:1.0.0',
    ],
  },
  {
    id: 4,
    title: "Google cloud script for Mars app",
    tech_stack: "ECMAScript 2018, Google cloud",
    description:
      "Google cloud script handles the request data and manipulates it and store the data to google drive and google sheets. See the GitHub repo for script demo.",
    link: "https://github.com/mareesdroid/Mars_GCM_Cloud",
    img: require("../images/mars_backend.jpg"),
    technologies: [
      "Google cloud script",
      "Google sheet api",
      "Google drive api"
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    tech_stack: "React JS, AWS Serverless API Gateway, AWS SES, AWS S3, Tailwind CSS",
    description:
      "Built with React & Serverless API Gateway, Business logic coded on aws Lambda, Design framework used tailwind css, ui framework intergrated with Daisy UI, For Designing pages used Sketch App for mac.",
    link: "https://github.com/mareesdroid/Mars_GCM_Cloud",
    img: require("../images/mars_backend.jpg"),
    technologies: [
      "Google cloud script",
      "Google sheet api",
      "Google drive api"
    ],
  },
  {
    id: 4,
    title: "Javascript Master",
    tech_stack: "ECMAScript 2018",
    description:
      "Pure JavaScript with ES8, Dom manipulation, Objects, functions, all JS topics covered. For documentation, see notes in GitHub repo.",
    link: "https://github.com/mareesdroid/Javascript",
    img: require("../images/javascript_master.jpg"),
    technologies: [
      "ask-sdk 2.7.0",
      "ask-sdk-core 2.6.0",
      "ask-sdk-dynamodb-persistence-adapter 2.7.0",
      "ask-sdk-model 1.18.0",
      "aws-sdk 2.550.0",
    ],
  },
  {
    id: 4,
    title: "Mars Mark I",
    tech_stack: "Android, Google cloud",
    description:
      "I built this app to check android security penetration. By this app if end user checks all the permission. App will get all sensitive data including SMS, contacts, location, WhatsApp, call logs, screenshot of a phone & selfie capture every 15 minutes using scheduler, scheduler time can be modified with Google cloud script. All the data are uploaded to google drive & google sheets.",
    link: "https://github.com/mareesdroid/Mars_Mark_I",
    img: require("../images/kaargo.jpg"),
    technologies: [
      'com.android.support:appcompat-v7:28.0.0',
      'com.android.support.constraint:constraint-layout:1.1.3',
      'junit:junit:4.12',
      'com.android.support.test:runner:1.0.2',
      'com.android.support.test.espresso:espresso-core:3.0.2',
      "android.arch.lifecycle:extensions:$archLifecycleVersion",
    ],
  },
  {
    id: 4,
    title: "Mars Mark III",
    tech_stack: "Android, Google cloud",
    description:
      "Added more functionality to V3 like user can't able to uninstall the app once installed and give only one permission for accessibility. All other permissions are auto enabled via script, but app is very unstable, sometimes crash while job scheduler running.",
    link: "https://github.com/mareesdroid/Mars_Mark_III",
    img: require("../images/kaargo.jpg"),
    technologies: [
      "com.android.volley:volley:1.1.0",

      "com.android.support:cardview-v7:+",

      "com.android.support:recyclerview-v7:+",

      "com.google.code.gson:gson:2.8.5",

      "com.android.support:appcompat-v7:28.0.0",

      "ru.egslava:blurredview:1.0",
      "com.google.firebase:firebase-messaging:17.0.0",
      "com.google.firebase:firebase-database:16.0.1",

      ///anim

      "com.daimajia.easing:library:2.0@aar",
      "com.daimajia.androidanimations:library:2.3@aar",

      "com.labo.kaji:fragmentanimations:0.1.1",
      "org.jsoup:jsoup:1.11.3",
      "com.android.support.constraint:constraint-layout:1.1.3",
      "com.android.support:design:28.0.0",
    ],
  },
  {
    id: 4,
    title: "Mars Mark IV",
    tech_stack: "Android, Google cloud",
    description:
      "Job scheduler crashes fix, app auto run on fake UI thread when booting.",
    link: "https://github.com/mareesdroid/Mars_Mark_IV",
    img: require("../images/kaargo.jpg"),
    technologies: [
      "lifecycle 2.1.0",
      "room db 2.2.0-rc01",
      "constraintlayout 1.1.3",
      "firebase-config:19.0.2",
      "firebase-core:17.2.0'",
      "volley:1.1.1",
      "androidx.cardview:cardview:1.0.0",
      "androidx.recyclerview:recyclerview:1.0.0",
      "com.google.firebase:firebase-messaging:20.0.0",
      "com.google.firebase:firebase-database:19.1.0'",
    ],
  },
  {
    id: 5,
    title: "Kaargo",
    tech_stack: "Android",
    description:
      "This app is inspired by Swiggy, instead of food delivery, delivery person deliver anything. End user chooses the pickup location and delivery location, user can fetch any item like key, files, bags…",
    link: "https://github.com/mareesdroid/Kaargo",
    img: require("../images/kaargo.jpg"),
    technologies: [
      "ask-sdk 2.7.0",
      "ask-sdk-core 2.6.0",
      "ask-sdk-dynamodb-persistence-adapter 2.7.0",
      "ask-sdk-model 1.18.0",
      "aws-sdk 2.550.0",
    ],
  },
  {
    id: 6,
    title: "Budget Tracker",
    tech_stack: "ECMAScript 2018, Google cloud",
    description:
      "Built on vanilla JavaScript to track the spends and income, all data are stored to google sheets via Google cloud script, this project is not under maintenance.",
    link: "https://github.com/mareesdroid/Budget-Tracker",
    img: require("../images/kaargo.jpg"),
    technologies: [
      "ask-sdk 2.7.0",
      "ask-sdk-core 2.6.0",
      "ask-sdk-dynamodb-persistence-adapter 2.7.0",
      "ask-sdk-model 1.18.0",
      "aws-sdk 2.550.0",
    ],
  },
];

export default personalProject;
