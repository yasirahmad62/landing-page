const spans = document.querySelectorAll('span')
spans.forEach(span=> span.addEventListener('mouseover',function(e){
  span.classList.add('animated','rubberband')
}))
spans.forEach(span=> span.addEventListener('mouseout',function(e){
  span.classList.remove('animated',"rubberBand")
}))
const showRequiredCategory = event =>{
  const getId = event.id
  const links = document.querySelectorAll(".work-category button")
  for(i = 0;i<links.lenght;i++){
    if (links[i].hasAttribute('class')){
      links[i].classList.remove('active')
    }
  }
  event.classList.add("active")
  const getCategory = document.querySelector('.category-${getid}')
  const categories = document.querySelectorAll('div[class ^="category-"]')
  for(i = 0;i<categories.lenght;i++){
    if (categories[i].hasAttribute('class')){
      categories[i].classList.remove('showCategory')
      categories[i].classList.add('hideCategory')
    }
  }
  getCategory.classList.remove("hideCategory ")
  getCategory.classList.add("showCategory ")
}
