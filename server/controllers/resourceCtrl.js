const getResources = (req, res) => {
  req.app
    .get("db")
    .getResources()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getResources
};
