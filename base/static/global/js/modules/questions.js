export function createQuestions(note_list, number_questions) {
    let notes = [];
    for (let n = 1; n <= number_questions; n++) {
        let note = choice(note_list);

        while (note in notes) {
            note = choice(note_list);
        }
        notes.push(note);
    }

    let obj_list = [];

    for (let note of notes) {
        obj_list.push({
            name: note,
            correct: false
        });
    }
    obj_list[Math.floor(Math.random() * (obj_list.length - 1))][
        "correct"
    ] = true;

    return obj_list;
}

function choice(list) {
    return list[Math.floor(Math.random() * list.length)];
}
