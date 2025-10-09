import { Request, Response } from "express";

export const getPayWithEscrowPiButton_Mock = async (req: Request, res: Response) => {
  try {
    // Mock invocation ID (random unique token)
    const mockInvocationId = `payInv_${Math.random().toString(36).substring(2, 10)}`;

    res.status(200).json({
      buttonImageUrl: "https://cdn.escrowpi.com/buttons/pay-with-escrowpi.png",
      invocationId: mockInvocationId,
      message: "Mock 'Pay With EscrowPi' button generated successfully",
    });
  } catch (error) {
    console.error("Error generating mock [Pay With EscrowPi] button:", error);
    res.status(500).json({ message: "Failed to generate mock [Pay With EscrowPi] button" });
  }
};
