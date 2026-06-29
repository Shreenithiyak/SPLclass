export const registerUser = (req, res) => {
  const { name, age } = req.body;

  if (name === "Ravi") {
    return res.status(200).json({
      success: true,
      message: "Registration Successful",
    });
  }

  return res.status(400).json({
    success: false,
    message: "Invalid User",
  });
};

export const addStudent = (req, res) => {
  const { name, course, city } = req.body;

  res.status(201).json({
    success: true,
    data: {
      name,
      course,
      city,
    },
  });
};