import { 
  getMyEscrowPiButton_Mock,
  getPayWithEscrowPiButton_Mock, 
  getPayWithEscrowPiLogic_Mock
} from "../../src/controller/escrowComponentsController";

describe("getPayWithEscrowPiButton_Mock", () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should return 200 with buttonImageUrl, invocationId, and message", async () => {
    
    await getPayWithEscrowPiButton_Mock(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();

    const jsonResponse = (res.json as jest.Mock).mock.calls[0][0];
    expect(jsonResponse).toHaveProperty("buttonImageUrl", "/paywithescrowpi_button.png");
    expect(jsonResponse).toHaveProperty("invocationId");
    expect(jsonResponse.invocationId).toMatch(/^payInv_/);
    expect(jsonResponse).toHaveProperty(
      "message",
      "Mock 'Pay With EscrowPi' button generated successfully"
    );
  });
});

describe("getPayWithEscrowPiLogic_Mock", () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = {
      body: {
        invocationId: "payInv_abc123",
        buyerId: "user_buyer123",
        sellerId: "user_seller123",
        amount: 50,
        orderId: "order_123",
      }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should return 200 with escrow payload on valid input", async () => {
    await getPayWithEscrowPiLogic_Mock(req, res);

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: "'Pay with EscrowPi' transaction completed successfully.",
        escrowPayload: expect.objectContaining({
          escrowId: expect.any(String),
          buyerId: "user_buyer123",
          sellerId: "user_seller123",
          orderId: "order_123",
          amountBreakdown: expect.objectContaining({
            paymentAmount: 50,
            payerStake: 2.5,
            gasFees: 0.02,
            escrowServiceCharge: 0.5,
          }),
          totalAmount: 53.02,
          createdAt: expect.any(String),
        }),
      })
    );
  });
});

describe("getMyEscrowPiButton_Mock", () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should return 200 with buttonImageUrl, invocationId, and message", async () => {
    
    await getMyEscrowPiButton_Mock(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();

    const jsonResponse = (res.json as jest.Mock).mock.calls[0][0];
    expect(jsonResponse).toHaveProperty("buttonImageUrl", "/myescrowpi_button.png");
    expect(jsonResponse).toHaveProperty("invocationId");
    expect(jsonResponse.invocationId).toMatch(/^payInv_/);
    expect(jsonResponse).toHaveProperty(
      "message",
      "Mock 'My EscrowPi' button generated successfully"
    );
  });
});
