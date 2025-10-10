import { Router } from "express";
import { 
  getPayWithEscrowPiButton_Mock,
  getPayWithEscrowPiLogic_Mock,
} from "../controller/escrowComponentsController";

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
 *       <p align="left">
 *         <img src="/paywithescrowpi_button.png" alt="Pay With EscrowPi Button" width="250"/>
 *       </p>
 *       
 *         The response includes:
 *         + `buttonImageUrl` - a URL to the branded button image.
 *         + `invocationId` - a temporary, unique token that would normally authorize the button to invoke EscrowPi transaction logic.
 * 
 *       ⚠️ **Note:** This is a mock endpoint. The returned `invocationId` is for demonstration purposes only and does not trigger real payments.
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
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 buttonImageUrl:
 *                   type: string
 *                   example: https://cdn.escrowpi.com/buttons/pay-with-escrowpi.png
 *                 invocationId:
 *                   type: string
 *                   example: payInv_abcd123
 *                 message:
 *                   type: string
 *                   example: "'Pay With EscrowPi' button generated successfully"
 *       500:
 *         description: Internal server error 
 */
router.get("/pay-button", getPayWithEscrowPiButton_Mock);

/**
 * @swagger
 * /api/escrow-components/pay-button:
 *   post:
 *     summary: Activate 'Pay With EscrowPi' escrow processing logic. 
 *     tags: [Escrow Components]
 *     description: >
 *       This endpoint activates the escrow process for the 'Pay With EscrowPi' button. 
 *       It executes the escrow transaction and returns an escrow payload in the response.
 * 
 *         ⚠️ **Note:** This is a *mock* endpoint. It does not currently perform real Pi payments or interact with the Pi Blockchain.
 * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               invocationId:
 *                 type: string
 *                 description: The unique button invocation token received from the 'Pay With EscrowPi' GET endpoint.
 *                 example: payInv_abc123
 *               buyerId:
 *                 type: string
 *                 description: Unique identifier for the buyer initiating the transaction.
 *                 example: user_buyer123
 *               sellerId:
 *                 type: string
 *                 description: Unique identifier for the seller receiving the payment.
 *                 example: user_seller123
 *               orderId:
 *                 type: string
 *                 description: Reference to the order associated with this transaction.
 *                 example: order_123
 *               amount:
 *                 type: number
 *                 description: Amount of Pi to be transferred in the escrow transaction.
 *                 example: 50
 *     responses:
 *       200:
 *         description: Successful response | Returns escrow transaction payload
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "'Pay with EscrowPi' transaction completed successfully"
 *                 escrowPayload:
 *                   type: object
 *                   properties:
 *                     escrowId:
 *                       type: string
 *                       example: escrow_abc123
 *                     escrowPayload:
 *                       type: object
 *                       properties:
 *                         escrowId:
 *                           type: string
 *                           example: escrow_123
 *                         buyerId:
 *                           type: string
 *                           example: user_buyer123
 *                         sellerId:
 *                           type: string
 *                           example: user_seller123
 *                         orderId:
 *                           type: string
 *                           example: order_123
 *                         amountBreakdown:
 *                           type: object
 *                           properties:
 *                             paymentAmount:
 *                               type: number
 *                               example: 50
 *                             payerStake:
 *                               type: number
 *                               example: 2.5
 *                             gasFees:
 *                               type: number
 *                               example: 0.01
 *                             escrowServiceCharge:
 *                               type: number
 *                               example: 0.5
 *                         totalAmount:
 *                           type: number
 *                           example: 53.01
 *                         createdAt:
 *                           type: string
 *                           example: 2025-10-10T14:00:00.000Z
 *       400:
 *         description: Bad request | Missing or invalid fields
 *       500:
 *         description: Internal server error     
 */
router.post("/pay-button", getPayWithEscrowPiLogic_Mock);

export default router;