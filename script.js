let showingFox1 = true;

setInterval(() => {
  document.getElementById('fox1').style.display = showingFox1 ? 'none' : 'block';
  document.getElementById('fox2').style.display = showingFox1 ? 'block' : 'none';
  showingFox1 = !showingFox1;
}, 1000);
