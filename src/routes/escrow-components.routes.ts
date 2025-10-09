import { Router } from "express";

import { getPayWithEscrowPiButton_Mock } from "../controller/escrowComponentsController";

/**
 * @swagger
 * tags:
 *   name: Escrow Components
 *   description: EscrowPi UI Components and Widgets.
 */
const router = Router();

/**
 * @swagger
 * /api/escrow-components/pay-button:
 *   get:
 *     summary: Get a 'Pay With EscrowPi' button with a unique invocation token
 *     tags: [Escrow Components]
 *     description: >
 *       This endpoint returns the "Pay With EscrowPi" button that developer apps can display in their UI.
 *       
 *         The response includes:
 *         + `buttonImageUrl` - a URL to the branded button image.
 *         + `invocationId` - a temporary, unique token that would normally authorize the button to invoke EscrowPi transaction logic.
 * 
 *       **Note:** This is a mock endpoint. The returned `invocationId` is for demonstration purposes only and does not trigger real payments.
 * 
 *         Frontend developers can use this to:
 *         + Render a sample button in their app.
 *         + Test integration with EscrowPi logic endpoints; mock flow.
 *         + Document the expected shape of a real EscrowPi button API response.
 * 
 *       When the real API is implemented, this `invocationId` would be validated and used to authorize the actual Pay with EscrowPi transaction. 
 *     responses:
 *       200:
 *         description: Successful response | Returns a button image URL and a mock invocation token
 *         content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               buttonImageUrl:
 *                 type: string
 *                 example: https://cdn.escrowpi.com/buttons/pay-with-escrowpi.png
 *               invocationId:
 *                 type: string
 *                 example: payInv_abcd1234
 *               message:
 *                 type: string
 *                 example: Mock 'Pay With EscrowPi' button generated successfully
 */
router.get("/pay-button", getPayWithEscrowPiButton_Mock);

export default router;