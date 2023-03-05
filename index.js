let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)



let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)



function newImage(url, left, bottom)
{
let element = document.createElement('img')
element.src = url
element.style.position = 'fixed'
element.style.left = `${left}px`
element.style.bottom = `${bottom}px`
document.body.append(element)
}

newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425) 




function newItem(url, left, bottom)
{
let element = document.createElement('img')
element.src = url
element.position = 'fixed'
element.left = `${left}px`
element.bottom = `${bottom}px`
document.body.append(element)

element.addEventListener('dblclick', function(){
    element.remove()
})

}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)