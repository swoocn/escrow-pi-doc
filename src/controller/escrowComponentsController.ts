import { Request, Response } from "express";

export const getPayWithEscrowPiButton_Mock = async (req: Request, res: Response) => {
  // Mock invocation ID (random unique token)
  const mockInvocationId = `payInv_${Math.random().toString(36).substring(2, 10)}`;

  res.status(200).json({
    buttonImageUrl: "/paywithescrowpi_button.png",
    invocationId: mockInvocationId,
    message: "Mock 'Pay With EscrowPi' button generated successfully",
  });
};

export const getPayWithEscrowPiLogic_Mock = async (req: Request, res: Response) => {
  try {
    const { invocationId, buyerId, sellerId, amount, orderId } = req.body;
    
    if (!invocationId || !buyerId || !sellerId || !amount || !orderId) {
      return res.status(400).json({
        success: false,
        message: "Missing one or more required fields"
      });
    }

    // Simple mock validation: invocationId must start with 'payInv_'
    if (!invocationId.startsWith("payInv_")) {
      return res.status(400).json({
        success: false,
        message: "Invalid invocationId format",
      });
    }

    // Mock breakdown
    const payerStake = Number((amount * 0.05).toFixed(2)); // 5% stake
    const gasFees = 0.02; // flat gas fee
    const escrowServiceCharge = Number((amount * 0.01).toFixed(2)); // 1% service charge
    const totalAmount = Number((amount + payerStake + gasFees + escrowServiceCharge).toFixed(2));

    const escrowPayload = {
      escrowId: `escrow_${Math.random().toString(36).substring(2, 10)}`,
      buyerId,
      sellerId,
      orderId,
      amountBreakdown: {
        paymentAmount: amount,
        payerStake,
        gasFees,
        escrowServiceCharge
      },
      totalAmount,
      createdAt: new Date().toISOString(),
    };

    // Simulate short processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return res.status(200).json({
      success: true,
      message: "'Pay with EscrowPi' transaction completed successfully.",
      escrowPayload,
    });

  } catch (error: any) {
    console.error("Error in getPayWithEscrowPiButton_Logic:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error occurred during EscrowPi logic simulation.",
    });
  }
};

export const getMyEscrowPiButton_Mock = async (req: Request, res: Response) => {
  // Mock invocation ID (random unique token)
  const mockInvocationId = `payInv_${Math.random().toString(36).substring(2, 10)}`;

  res.status(200).json({
    buttonImageUrl: "/myescrowpi_button.png",
    invocationId: mockInvocationId,
    message: "Mock 'My EscrowPi' button generated successfully",
  });
};

export const getReceiveWithEscrowPiButton_Mock = async (req: Request, res: Response) => {
  // Mock invocation ID (random unique token)
  const mockInvocationId = `payInv_${Math.random().toString(36).substring(2, 10)}`;

  res.status(200).json({
    buttonImageUrl: "/receivewithescrowpi_button.png",
    invocationId: mockInvocationId,
    message: "Mock 'Receive with EscrowPi' button generated successfully",
  });
};