export const sendData = (req, res) => {
    const data = req.body;
    res.send(data);
};
export const getUser = (req, res) => {
  res.send(req.params);
};

export const searchUser = (req, res) => {
  res.send(req.query);
};

export const getProfile = (req, res) => {
  res.send(req.headers);
};