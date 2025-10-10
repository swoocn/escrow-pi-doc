import { getPayWithEscrowPiButton_Mock } from "../../src/controller/escrowComponentsController";

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
