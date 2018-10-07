export function buildError (message, status) {
  const err = new Error(message)
  err.status = status
  return err
}

export function addToResponse (res, data, target) {
  if (res) {
    res.data = {
      ...res.data,
      [target]: data,
    }
    return res
  }
  throw buildError('Response object not valid', 500)
}

export function nextAndReturn (next) {
  return function (data) {
    if (next) {
      next()
    }
    return data
  }
}
