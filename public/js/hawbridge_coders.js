var toggle_hideable = function() {
  elements=document.getElementsByClassName('hideable');
  for(i in elements){ 
    this_element = elements[i];
    if (this_element.style.display === 'block' || this_element.style.display === '') {
      this_element.style.display = 'none';
    } else {
      this_element.style.display = 'block';
    }
}

window.onload = function(e) {
  toggle_hideable();
}
