export default function handler(req, res) {
  res.status(200).json({
    boostSales: 120,
    premiumSales: 45,
    conversionRate: 7.5
  });
}