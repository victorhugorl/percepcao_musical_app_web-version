


def make_object_songs():
    import random
    #import json

   
    notes = ['A','B','C','D','E','F','G', 'A#','C#','D#','F#','G#']

    note_list = []
    
    for n in range(1,5):
        note = random.choice(notes)

        while (note in note_list):
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
    
   # aqui é só uma gambiarra
   # dados = json.dumps(obj_list, indent=2, ensure_ascii=False)

    return obj_list


