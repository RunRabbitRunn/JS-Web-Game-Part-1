
function newImage(url, left, bottom)
{
let element = document.createElement('img')
element.src = url
element.style.position = 'fixed'
element.style.left = `${left}px`
element.style.bottom = `${bottom}px`
document.body.append(element)
return element 
}
newImage( 'assets/pine-tree.png', 450, 200)
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425) 



function newItem(url, left, bottom)
{
let element = newImage(url, left, bottom)
element.addEventListener('dblclick', function(){
    element.remove()
})

}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)