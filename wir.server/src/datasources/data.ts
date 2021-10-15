const libs = [
  {
    name: "LIB1",
    version: "1.2.4.3"
  },
  {
    name: "LIB2",
    version: "2.2.4.3"
  },
  {
    name: "LIB3",
    version: "3.2.4.3"
  },{
    name: "LIB4",
    version: "4.2.4.3"
  },{
    name: "LIB5",
    version: "5.2.4.3"
  },
];

const data = {
 messages: [
    {
      color: "teal",
      colorIsRunning: "green",
      iconIsRunning: "mdi-power",
      icon: "mdi-widgets",
      iconTag: "mdi-tag",
      name: "APP1",
      new: 5,
      version: "6.7.0.0",
      title: "",
      exceprt: "New deals available, Join Today",
      libraries: libs
    },
    {
      color: "purple",
      colorIsRunning: "red",
      iconIsRunning: "mdi-power",
      icon: "mdi-widgets",
      iconTag: "mdi-tag",
      name: "APP2",
      "new": 21,
      version: "4.3.0.1",
      title: "",
      exceprt: "New deals available, Join Today",
      libraries: libs
    },
    {
      color: "blue",
      colorIsRunning: "red",
      iconIsRunning: "mdi-power",
      icon: "mdi-widgets",
      iconTag: "mdi-tag",
      name: "APP3",
      "new": 4,
      version: "2.6.0.5",
      title: "",
      exceprt: "New deals available, Join Today",
      libraries: libs
    },
    {
      color: "green",
      colorIsRunning: "green",
      iconIsRunning: "mdi-power",
      icon: "mdi-widgets",
      iconTag: "mdi-tag",
      name: "APP4",
      "new": 9,
      version: "1.0.0.21" ,
      title: "",
      exceprt: "New deals available, Join Today",
      libraries: libs
    }
  ],
  environment: process.env.ENVIRONMENT 
}


export default data;