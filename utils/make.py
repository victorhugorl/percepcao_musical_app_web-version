
notes = ['A','B','C','D','E','F','G', 'A#','C#','D#','F#','G#']

def make_object_songs(number_of_questions=4):
    import random
    import json

   
    list_of_lists = []
    note_list = []
    for i in range(0 , number_of_questions):
        print(i)
        for n in range(1,5):
            print('range 1, 5')
            note = random.choice(notes)

            while (note in note_list):
                print(' não era para eu demorar muito')
                print(note, note_list)
                note = random.choice(notes)
            
            note_list.append(note)


        obj_list = []
        for note in note_list:
            obj_list.append({
                'name': note,
                'correct': False,
            })

    # escolhendo uma nota para ser a verdadeira
            obj_list[random.randint(0,len(obj_list)-1)]['correct'] = True 
      
        list_of_lists.append(obj_list)
   # aqui é só uma gambiarra
    dados = json.dumps(obj_list, indent=2, ensure_ascii=False)

    print(dados)
    return dados


