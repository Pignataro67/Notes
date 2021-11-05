const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
  notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')

  const notes = []

  notesText.forEach(note => notes.push(note.value))

  localStorage.setItem('notes', JSON.stringify(notes))
}

