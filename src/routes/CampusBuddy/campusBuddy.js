import { ragAnswer } from "../../rag.js"; // ✅ Correct
import { Router } from "express"; // ✅ Correct import statement
const router = Router();
router.post('/', async (req, res) => {
    const question = req.body.question;
    if (!question) {
      return res.status(400).json({ error: 'Missing "question" in request body' });
    }
  
    try {
      const answer = await ragAnswer(question);
      res.json({ answer });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'RAG pipeline failed' });
    }
  });
  export default router;