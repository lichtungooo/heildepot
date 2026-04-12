const API = '/api'

function getToken() {
  return localStorage.getItem('heildepot_token')
}

function headers(extra = {}) {
  const h = { 'Content-Type': 'application/json', ...extra }
  const token = getToken()
  if (token) h['Authorization'] = `Bearer ${token}`
  return h
}

async function request(path, opts = {}) {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)
    const res = await fetch(`${API}${path}`, { ...opts, headers: headers(opts.headers), signal: controller.signal })
    clearTimeout(timeout)
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Fehler')
    return data
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('Server nicht erreichbar. Bitte versuche es gleich nochmal.')
    throw err
  }
}

// ─── AUTH ─────────────────────────────────────────────────
export async function apiRegister(email, passwort) {
  const data = await request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, passwort }),
  })
  if (data.token) localStorage.setItem('heildepot_token', data.token)
  return data
}

export async function apiLogin(email, passwort) {
  const data = await request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, passwort }),
  })
  if (data.token) localStorage.setItem('heildepot_token', data.token)
  return data
}

export function apiLogout() {
  localStorage.removeItem('heildepot_token')
}

export async function apiGetProfile() {
  return request('/auth/me')
}

export async function apiUpdateProfile(profile) {
  return request('/auth/me', {
    method: 'PUT',
    body: JSON.stringify(profile),
  })
}

// ─── ANFRAGEN ────────────────────────────────────────────
export async function apiSendAnfrage(anfrage) {
  return request('/anfragen', {
    method: 'POST',
    body: JSON.stringify(anfrage),
  })
}

export async function apiGetAnfragen() {
  return request('/anfragen')
}

// ─── BLOG ────────────────────────────────────────────────
export async function apiGetBlog() {
  return request('/blog')
}

export async function apiGetBlogPost(slug) {
  return request(`/blog/${slug}`)
}

// ─── CHECK ───────────────────────────────────────────────
export function isLoggedIn() {
  return !!getToken()
}
