export default function loggingMiddleware (req, res, next) {
  console.log('body:', req.body)
  next()
}
