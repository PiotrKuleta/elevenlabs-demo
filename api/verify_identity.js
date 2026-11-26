const CUSTOMERS = {
  "12345": { zip: "62701", email: "homer@example.com" },
  "67890": { zip: "20500", email: "president@example.com" }
};

export default function handler(req, res) {
  const { order_id, zip_code } = req.body || {};
  if (!order_id || !zip_code) {
    return res.status(400).json({ error: "order_id and zip_code required" });
  }
  const customer = CUSTOMERS[order_id];
  const verified = customer && customer.zip === String(zip_code);
  return res.status(200).json({ verified: Boolean(verified), order_id });
}
