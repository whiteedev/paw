let click = document.querySelector('#clicks')
var clicks = localStorage.getItem('clicks') || 0;

function incrementClick() {
    click.innerHTML = parseFloat(click.innerHTML) + 1
} 
    document.addEventListener("DOMContentLoaded", function(){ document.getElementById("clicks").innerHTML = localStorage.getItem('clicks') || 0; });
    function onClick() {
      clicks = +clicks + 1;
      document.getElementById("clicks").innerHTML = clicks;
      updateStorage(clicks);
    };

    function onReset() {
      if (confirm('Вы уверенны? Данные обнулятся!')) {
        clicks = 0;
        document.getElementById("clicks").innerHTML = clicks;
        updateStorage(clicks);
      }
    }

    function updateStorage(clicks) {
      localStorage.setItem('clicks', clicks);
    }
    </script>
