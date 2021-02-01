import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const lists = await db.collection('lists').get();
    const listsData = lists.docs.map(list => list.data());

    if (listsData.some(list => list.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('lists').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}
