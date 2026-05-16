document.querySelectorAll('.row').forEach(row => {
  let isDown = false, startX, scrollLeft;
  row.addEventListener('mousedown', e => {
    isDown = true; row.style.cursor = 'grabbing';
    startX = e.pageX - row.offsetLeft; scrollLeft = row.scrollLeft;
  });
  row.addEventListener('mouseleave', () => { isDown = false; row.style.cursor = ''; });
  row.addEventListener('mouseup',    () => { isDown = false; row.style.cursor = ''; });
  row.addEventListener('mousemove',  e => {
    if (!isDown) return; e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    row.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
});
