import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /api/escrow/create:
 *   post:
 *     summary: Create a mock escrow transaction
 *     description: Simulates creating an escrow payment between buyer and seller.
 *     responses:
 *       200:
 *         description: Mock escrow created successfully
 */
router.post("/create", (req, res) => {
  res.json({
    message: "Mock escrow created successfully",
    escrowId: "ESCROW123",
    status: "pending",
  });
});

export default router;