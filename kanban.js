const pasteCard = (card) => {
    const swimlanes = document.querySelectorAll('.swimlane');
    const randomSwimlane = Math.floor(Math.random() * swimlanes.length); 
    swimlanes[randomSwimlane].appendChild(card);
}


const createCard = (index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card Input';
    cardElement.innerText = ` ${index}`; 
    cardElement.draggable = 'true';


    cardElement.addEventListener('dragstart', (e) => {
        e.target.id = 'dragged';
    });

    cardElement.addEventListener('dragend', (e) => {
        e.target.id = ''; 
    });

    pasteCard(cardElement);
}

const addEventListenerToSwimlanes = () => {
    const swimlanes = document.querySelectorAll('.swimlane');
    for (let i = 0; i < swimlanes.length; i++) {
        swimlanes[i].addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        swimlanes[i].addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedCard = document.querySelector('#dragged');
            draggedCard.parentNode.removeChild(draggedCard);
            e.currentTarget.appendChild(draggedCard);
        });
    }
}

const addCard = () => {
    const input = document.getElementById('cardInput');
    const text = input.value.trim();

    if (text) {
        createCard(text);
        input.value = '';
    } else {
        alert("Please enter your work");
    }
}

const btn = document.getElementById('btn'); 
btn.addEventListener('click', clear); 

function clear() {
    //console.log("clear");
    
    const swimlane = btn.closest('.swimlane');
    
    const cards = swimlane.querySelectorAll('.Input'); 
    cards.forEach(card => card.remove()); 
}


addEventListenerToSwimlanes();