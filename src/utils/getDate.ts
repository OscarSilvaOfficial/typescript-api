function getDate() {
  return new Date().toISOString().split('T').splice(0, 1).toString()
}

export default getDate