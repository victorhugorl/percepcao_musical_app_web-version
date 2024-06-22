

def make_object_songs(notes, number_of_questions=4):
    import random
    import json

   
    list_of_lists = []
    
    for i in range(0 , number_of_questions):
        note_list = []
        for n in range(1,5):
            print('range 1, 5')
            print('note list:',note_list)
            note = random.choice(notes)
            note_list
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
      
        list_of_lists.append(obj_list)

   # aqui é só uma gambiarra
    dados = json.dumps(list_of_lists, indent=2, ensure_ascii=False)
    

    print(dados)
    return dados


