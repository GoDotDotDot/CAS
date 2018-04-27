exports.serializeErrorData = (err) => {
  return {error: true, status: false, message: err}
}

exports.serializeSuccessData = (data) => {
  return {data, status: true, error: false}
}
