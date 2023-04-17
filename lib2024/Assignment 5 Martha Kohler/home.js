const menuToggle = document.getElementsByClassName('.menuToggle')[0];
const navigation = document.getElementsByClassName('.navigation')[0];

menuToggle.addEventListener('click', function() => {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');

  if(menuToggle.classlist.contains('active')) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  }  else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
}