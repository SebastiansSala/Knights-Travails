export function renderDom(){
    const gridContainer = document.getElementById('grid');
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            gridContainer.innerHTML += `<div class='bg-white border-2 border-slate-950 gap-2'></div>`;
        }
    }
}