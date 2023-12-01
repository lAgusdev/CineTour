document.addEventListener("DOMContentLoaded", function () {
  const toggleInputs = document.querySelectorAll('input[type="checkbox"][id^="toggle"]');
  const toggleLabels = document.querySelectorAll('label[for^="toggle"]');
  const publicaciones = document.querySelectorAll(".publicaciones");
  
  toggleInputs.forEach((toggleInput, index) => {
      toggleInput.addEventListener("change", function () {
          const isChecked = toggleInput.checked;
          toggleLabels[index].classList.toggle("peer-checked:bg-gray-500", isChecked);
          toggleLabels[index].classList.toggle("peer-checked:before:translate-x-full", isChecked);
          document.body.style.backgroundColor = isChecked ? '#1C1C1C' : '';
          document.body.style.color = isChecked ? '#fff' : '';

          publicaciones.forEach((publicacion) => {
              publicacion.style.backgroundColor = isChecked ? '#141414' : '';
          });
      });
  });

  const menuCheckboxInput = document.getElementById("menuCheckbox");
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.display = 'none';
  
  menuCheckboxInput.addEventListener("change", function () {
      if (menuCheckboxInput.checked) {
          mobileMenu.style.display = 'block';
      } else {
          mobileMenu.style.display = 'none';
      }
  });

  window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
          mobileMenu.style.display = 'none';
          menuCheckboxInput.checked = false;
      }
  });
});