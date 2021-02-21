export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      res.json({hello: 'world', method: req.method, listVisibleId: req.query.id, body: req.body});
      break;
    case 'PUT':
      json({hello: 'world', method: req.method, listVisibleId: req.query.id, body: req.body});
      break;
    case 'GET':
      json({hello: 'world', method: req.method, listVisibleId: req.query.id});
      break;
    case 'DELETE':
      json({hello: 'world', method: req.method, listVisibleId: req.query.id});
      break;
    default:
      res.status(500).end();
  }
}
