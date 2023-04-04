export const tabs = [
    { label: "Groups You Manage", key: 1 },
    { label: "Other Signal Groups", key: 2 }
]

export const wallet = [
    {coin: "BTC", percentage: "36.77%", color: "#FF8B00"},
    {coin: "USDT", percentage: "36.77%", color: "#0019F8"},
    {coin: "Others", percentage: "36.77%", color: "#D00BF0"},
    {coin: "BNB", percentage: "36.77%", color: "#00B6FF"},
]

export const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 150, 200, 50, 150],
        backgroundColor: ['#FF8B00', '#0019F8', '#D00BF0', '#FFFFFF', '#00B6FF'],
        hoverBackgroundColor: ['#FF8B00', '#0019F8', '#D00BF0', '#FFFFFF', '#00B6FF'],
        borderWidth: 0,
        cutout: '90%',
      },
    ]
  }
export const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "right"
    },
  }