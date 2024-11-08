export const createTest = async (req, res) => {
  try {
    const data = await req.body;

    res.json({ data });
  } catch (error) {
    res.json({ error: error.message });
  }
};
