const CatchAsync = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((e) => {
    console.log("Promise error", e);
    next(e);
  });
};

export default CatchAsync;
