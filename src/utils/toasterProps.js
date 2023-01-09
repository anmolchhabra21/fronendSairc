export default function toasterProps (opts = {}) {
  return {
    position: opts.position || 'top-right',
    autoClose: opts.autoClose || 2000,
    hideProgressBar: opts.hideProgressBar || false,
    closeOnClick: opts.closeOnClick || true,
    pauseOnHover: opts.pauseOnHover || true,
    draggable: opts.draggable || true,
    progress: opts.progress || undefined
  }
}
