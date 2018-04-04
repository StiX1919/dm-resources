const getResources = (req, res) => {
  req.app
    .get("db")
    .getResources()
    .then(response => {console.log('RESPONSE', response); res.status(200).json(response)})
    .catch(err => res.status(500).json(err));
};

const addResource = (req, res) => {
  const { title, description, date_added, link, topic } = req.body;
  req.app
    .get("db")
    .addResource([title, description, link, topic, date_added])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
};

const getTopics = (req, res) => {
  req.app
    .get("db")
    .getTopics()
    .then(response => {console.log('TOPICS', response); res.status(200).json(response)})
    .catch(err => res.status(500).json(err));
}

module.exports = {
  getResources,
  addResource,
  getTopics
};
