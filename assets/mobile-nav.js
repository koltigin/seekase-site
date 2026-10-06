document.addEventListener('click', (event) => {
  const link = event.target.closest('.mobile-nav-links a')
  if (!link) return

  link.closest('.mobile-nav')?.removeAttribute('open')
})
