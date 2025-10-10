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
