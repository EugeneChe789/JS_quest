
/*
На вход принимается набор карточек в несортированном порядке.
Возвращается отсортированный набор.

Ограничения решения:
1) набор обязательно должен быть непрерывным - не допускаются разрывы с по пунктам отправления и прибытия 
2) набор НЕ может быть замкнутым - конечная точка пребывания должна отличаться от исходной точки отправления 
3) существет 3 обязательных параметра, которые указываются в определённом порядке(см. ниже)

Входные данные:
пример:
    Card   = new Card(  p_from = 'Moscow'    // место отправления - обязательный параметр 
                      , p_to = 'Minsk'       // место назначения - обязательный параметр 
                      , p_tranp_type = 'train' // тип транспорта - обязательный параметр 

                      // далее идут доп атрибуты, которые могут меняться и быть произвольными :
                      , p_item_1 = 'Seat'   // название доп параметра 
                      , p_value_1 = '7'     // значение доп. параметра 
                      , p_item_2 = 'Полка'
                      , p_value_2 = 'сверху'
                      //, ... 
                    ),

Выходные данные:
список мест отправлений и прибытий, упорядоченные, с доп атрибутами
*/ 



// создаём Класс объектов - билет 
class Card{

    constructor(p_from = '',       // Место отправления  
                p_to = '',         // Место назначения 
                p_tranp_type = '', // Тип транспортного средства

                // доп параметры, куда можно положить любые значения парно: имя элемента + значение элемента:
                p_item_1 = '',    // имя элемента 1
                p_value_1 = '',   // значение элемента 1
                p_item_2 = '',    // ... 
                p_value_2 = '',
                p_item_3 = '',
                p_value_3 = '',
                p_item_4 = '',
                p_value_4 = '',
                p_item_5 = '',
                p_value_5 = '',
                p_item_6 = '',
                p_value_6 = '',
                p_item_7 = '',
                p_value_7 = ''
                // ... можно расширять при необходимости ...                   
                ){
                    this.p_from = p_from, 
                    this.p_to = p_to,
                    this.p_transp_type = p_tranp_type,
                    this.p_item_1 = p_item_1,
                    this.p_value_1 = p_value_1,
                    this.p_item_2 = p_item_2,
                    this.p_value_2 = p_value_2,
                    this.p_item_3 = p_item_3,
                    this.p_value_3 = p_value_3,
                    this.p_item_4 = p_item_4,
                    this.p_value_4 = p_value_4,
                    this.p_item_5 = p_item_5,
                    this.p_value_5 = p_value_5,
                    this.p_item_6 = p_item_6,
                    this.p_value_6 = p_value_6,
                    this.p_item_7 = p_item_7,
                    this.p_value_7 = p_value_7
                }
                Get_str(){
                    return `Take ${this.p_transp_type} from ${this.p_from} to ${this.p_to}. ${this.p_item_1} ${this.p_value_1} 
                    ${this.p_item_2} ${this.p_value_2} ${this.p_item_3} ${this.p_value_3} ${this.p_item_4} ${this.p_value_4} 
                    ${this.p_item_5} ${this.p_value_5} ${this.p_item_6} ${this.p_value_6} ${this.p_item_7} ${this.p_value_7}
                    ` 
                }
}


function Get_res(p_card = [{}]){
  var arr_int = [];
  let v_left; 
  let v_right; 

  console.log('UNSORT:');
  p_card.forEach((item, index) => 
                 {console.log(p_card[index].Get_str())}
                )

    for(let ob in p_card){
      v_left  = 0; 
      v_right = 0; 
      for(let ob_int in p_card){

         if(p_card[ob].p_to == p_card[ob_int].p_from ){
          v_right = 1;             
         }
         else if(p_card[ob].p_from == p_card[ob_int].p_to ){
          v_left = 1;
         }
      }
      
        // первый(начальный) элемент в цепочке 
        if(v_right == 1 && v_left == 0){
          arr_int[0] = p_card[ob];
          p_card.splice(ob,1); // удаляем элемент из массива 
          break;
        }
    }

    while(p_card.length > 0){
      var v_break = p_card.length;
      for(let ob in p_card){
          if(p_card[ob].p_from == arr_int[arr_int.length-1].p_to){
            arr_int.push(p_card[ob]);
            p_card.splice(ob,1); // удаляем элемент из массива 
          }
        }
        if(v_break == p_card.length) break;   // заглушка от зациливания - значит цепочка нарушена и нужный элемент никогда не найдётся 
      }

  console.log('SORT:');
  arr_int.forEach((item, index) => {console.log(arr_int[index].Get_str())});
};

// --------------------------------------------------------------------------------------------------------------------------------------
// создаём тестовый набор 
let 
    Card_5 = new Card(  p_from = 'Moscow'
                      , p_to = 'Minsk'
                      , p_tranp_type = 'train'
                      , p_item_1 = 'Seat'
                      , p_value_1 = '7'
                      , p_item_2 = 'Полка'
                      , p_value_2 = 'сверху'
                    ),
    Card_1 = new Card(  p_from = 'Minsk'
                      , p_to = 'Barselona'
                      , p_tranp_type = 'flight'
                      , p_item_1 = 'Seat'
                      , p_value_1 = '18'
                    )
    Card_4 = new Card(  p_from = 'Barselona'
                      , p_to = 'Milan'
                      , p_tranp_type = 'flight'
                      , p_item_1 = 'Seat'
                      , p_value_1 = '45'
                      , p_item_2 = 'Место'
                      , p_value_2 = 'у прохода'
                    )
    Card_2 = new Card(  p_from = 'Milan'
                      , p_to = 'Sidney'
                      , p_tranp_type = 'flight'
                      , p_item_1 = 'Seat'
                      , p_value_1 = '32'
                      , p_item_2 = 'погода в Сиднее'
                      , p_value_2 = '+32 тепло...'
                    )
    Card_3 = new Card(  p_from = 'Sidney'
                      , p_to = 'Berlin'
                      , p_tranp_type = 'flight'
                      , p_item_1 = 'Seat'
                      , p_value_1 = '22'
                    )
                    ;

// вызываем функцию для тестового набора 
Get_res([Card_1, Card_2, Card_3, Card_4, Card_5]);
