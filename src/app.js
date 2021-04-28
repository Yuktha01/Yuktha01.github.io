const tweetyButton =document.getElementById('tweety')
const navList= document.getElementById('nav-list')


function toggleButton()
{
    navList.classList.toggle('show')
}


tweetyButton.addEventListener('click',toggleButton)