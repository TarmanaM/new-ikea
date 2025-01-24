function test( input){
    console.log("test :" + input);
}
const container = document.querySelector('.img-con');
const img = container.querySelector('img');

let isDragging = false;
let startX, startY;
let imgX = 0, imgY = 0;

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - imgX;
  startY = e.clientY - imgY;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const x = e.clientX - startX;
  const y = e.clientY - startY;

  // Update posisi gambar
  imgX = x;
  imgY = y;

  img.style.transform = `translate(${imgX}px, ${imgY}px)`;
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});
