function Observable(){
  // Создаем список подписаных обьектов
  const observers = [];
  // Оповещение всех подписчиков о сообщении
  this.sendMessage = function( msg ){
      observers.map( ( obs ) => {
        obs.notify(msg);
      });
  };
  // Добавим наблюдателя
  this.addObserver = function( observer ){
    observers.push( observer );
  };
}

// Сам наблюдатель:
function Observer( behavior ){
  // Делаем функцию, что бы через callback можно
  // было использовать различные функции внутри
  this.notify = function( msg ){
    behavior( msg );
  };
}



export { Observable, Observer };
