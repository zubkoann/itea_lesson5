/*
  Задание:  Открыть файл task1.html в папке паблик и настроить светофоры в
            соответсвии с правилавми ниже:

  1. Написать кастомные события которые будут менять статус светофора:
  - start: включает зеленый свет
  - stop: включает красный свет
  - night: включает желтый свет, который моргает с интервалом в 1с.
  И зарегистрировать каждое через addEventListener на каждом из светофоров.

  2.  Сразу после загрузки на каждом светофоре вызывать событие night, для того,
      чтобы включить режим "нерегулируемого перекрестка" (моргающий желтый).

  3.  По клику на любой из светофоров нунжо включать на нем поочередно красный (не первый клик)
      или зеленый (на второй клик) цвет соотвественно.
      Действие нужно выполнить только диспатча событие зарегистрированое в пункте 1.

  4.  + Бонус: На кнопку "Start Night" повесить сброс всех светофоров с их текущего
      статуса, на мигающий желтые.
      Двойной, тройной и более клики на кнопку не должны вызывать повторную
      инициализацию инвервала.

*/
const customEvent = () => {

  let trafficLight = document.querySelectorAll('.trafficLight')
  let nightbtn = document.getElementById('Do')

  nightbtn.addEventListener('click', function () {
    let night = new CustomEvent("night", {
      detail: {
        color: 'night',
      }
    });
    document.dispatchEvent(night);
  })
  document.addEventListener('night', function (event) {
    trafficLight.forEach(el=>{
      el.classList.remove('active');
      let arr = el.getElementsByClassName('trafficLight__circle');
      arr[0].classList.remove('green');
      arr[1].classList.add(event.detail.color);
      arr[2].classList.remove('red');
    });
  })

  trafficLight.forEach( (el)=> {
    let arr = el.getElementsByClassName('trafficLight__circle');
    arr[1].classList.add('night');
    el.addEventListener('click', function () {
      let start = new CustomEvent("start", {
        detail: {
          color: 'green',
          id: this.id
        }
      });
      let stop = new CustomEvent("stop", {
        detail: {
          color: 'red',
          id: this.id
        }
      });
      el.dispatchEvent(start);
      el.dispatchEvent(stop);
    });
    el.addEventListener('start', function (event) {
      let {color, id} = event.detail;
      let el = document.getElementById(id);
      let arr = el.getElementsByClassName('trafficLight__circle');
      el.classList.toggle('active');
      if (el.classList.contains('active')) {
        arr[0].classList.add(color);
        arr[1].classList.remove('night');
        arr[2].classList.remove('red');
      }
    });
    el.addEventListener('stop', function (event) {
      let {color, id} = event.detail;
      let el = document.getElementById(id);
      let arr = el.getElementsByClassName('trafficLight__circle');
      if (!el.classList.contains('active')) {
        arr[2].classList.add(color);
        arr[1].classList.remove('night');
        arr[0].classList.remove('green');
      }
    });
  });
}

export default customEvent;
