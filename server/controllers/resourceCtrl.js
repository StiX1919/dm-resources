const demoResources = [
  {
    id: 1,
    topic: "react",
    link: "someLink.com",
    title: "Cool React Resource",
    description: "Really cool react resource for doing cool things"
  },
  {
    id: 2,
    topic: "redux",
    link: "otherLink.com",
    title: "Cool Redux Resource",
    description: "Really cool redux resource for doing cool things"
  }
];

const getResources = (req, res) => {
  res.status(200).json(demoResources);
};

module.exports = {
  getResources
};
