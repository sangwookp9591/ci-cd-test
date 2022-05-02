const express = require("express");
const router = express.Router();
//yarm 방식이라서 들여쓰기가 중요하다.
/**
 * @openapi
 * /api/name:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     parameters:
 *       - name: name
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *        descrption: Returns a mysteriois string
 */
router.get("/name", (req, res, next) => {
  const name = req.query.name || "없습니다..";
  res.json({ message: `나의 이름은 ${name}` });
});

/**
 * @openapi
 * /api/test:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     parameters:
 *       - test: test
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *        descrption: Returns a mysteriois string
 */
router.get("/test", (req, res, next) => {
  const test = req.query.test || "없습니다..";
  res.json({ message: `${test} ...` });
});

module.exports = router;
