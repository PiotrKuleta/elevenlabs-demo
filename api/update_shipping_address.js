export default function handler(req, res) {
  const { order_id, address } = req.body || {};
  if (!order_id || !address) {
    return res.status(400).json({ error: "order_id and address required" });
  }
  return res.status(200).json({
    status: "updated",
    order_id,
    address: address
  });
}
