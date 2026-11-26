const CUSTOMERS = {
  "10000001": { postcode: "94107", email: "homer@example.com" },
  "10000002": { postcode: "10001", email: "president@example.com" }
};

export default function handler(req, res) {
  const { account_number , postcode } = req.body || {};
  if (!account_number || !postcode) {
    return res.status(400).json({ error: "account_number and postcode required" });
  }
  const customer = CUSTOMERS[account_number ];
  const verified = customer && customer.postcode === String(postcode);
  return res.status(200).json({ verified: Boolean(verified), account_number });
}
