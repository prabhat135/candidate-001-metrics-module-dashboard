export default function handler(req, res) {
  res.status(200).json({
    ticketsSold: 350,
    revenueCents: 35000,
    avgBoostPerUser: 5
  });
}