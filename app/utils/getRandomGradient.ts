const gradients = [
  ['#433CA2', '#4A73C0'],
  ['#EA40EC', '#763DFB'],
  ['#FE8055', '#ED27A2'],
  ['#FFD53E', '#FF810A'],
  ['#7BAAF9', '#2255EA'],
  ['#569E0C', '#72B00E'],
  ['#5F5D64', '#343237'],
  ['#31F3F6', '#0BCCCE'],
  ['#FF4270', '#FE0040'],
  ['#F641AE', '#C11B80'],
  ['#D74339', '#B9271D'],
  ['#FFBE01', '#FE5A00']
]

export const getRandomGradient = () => {
  const min = 0
  const max = gradients.length - 1

  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  return gradients[randomNumber]
}
