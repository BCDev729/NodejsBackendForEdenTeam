exports.sendError = (req, res, statusCode, message, err) => {
  res.status(statusCode || 500).json({
    success: false,
    message: message || err.message,
  });
};