export default function handler(req, res) {
  const { order_id, new_address } = req.body || {};
  if (!order_id || !new_address) {
    return res.status(400).json({ error: "order_id and new_address required" });
  }
  return res.status(200).json({
    status: "updated",
    order_id,
    shipping_address: new_address
  });
}
