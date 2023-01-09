const parseQuery = function (href) {
  if (!href) href = window.location.href
  const params = {}
  const url = new URL(href)
  for (const p of url.searchParams.entries()) {
    params[p[0]] = p[1]
  }

  return params
}

export { parseQuery }
