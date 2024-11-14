// export const createTest = async (req, res) => {
//   try {
//     const { name, lastName } = await req.body;

//     res.json({ name, lastName });
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// };

export async function createTest(req, res) {
  try {
    const { name, lastName } = await req.body;

    res.json({ name, lastName });
  } catch (error) {
    res.json({ error: error.message });
  }
}
