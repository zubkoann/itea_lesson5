/*
  Задание: Модуль создания плейлиста, используя паттерн Обсервер.

  У вас есть данные о исполнителях и песнях. Задание делится на три модуля:
    1. Список исполнителей и песен (Находится слева) - отуда можно включить
    песню в исполнение иди добавить в плейлист.
    Если песня уже есть в плейлисте, дважды добавить её нельзя.

    2. Плейлист (Находится справа) - список выбраных песен, песню можно удалить,
    или запустить в исполнение. Внизу списка должен выводиться блок, в котором
    пишет суммарное время проигрывания всех песен в плейлисте.

    3. Отображает песню которая проигрывается.

    4. + Бонус: Сделать прогресс пар того как проигрывается песня
    с возможностью его остановки.
*/
import {
    Observer,
    Observable
} from "../application/observer/Observer";

const ObserverPlayList = () => {
    const MusicList = [
        {
            title: 'Rammstain',
            songs: [
                {
                    id: 1,
                    name: 'Du Hast',
                    time: [3, 12]
                },
                {
                    id: 2,
                    name: 'Ich Will',
                    time: [5, 1]
                },
                {
                    id: 3,
                    name: 'Mutter',
                    time: [4, 15]
                },
                {
                    id: 4,
                    name: 'Ich tu dir weh',
                    time: [5, 13]
                },
                {
                    id: 5,
                    name: 'Rammstain',
                    time: [3, 64]
                }
            ]
        },
        {
            title: 'System of a Down',
            songs: [
                {
                    id: 6,
                    name: 'Toxicity',
                    time: [4, 22]
                },
                {
                    id: 7,
                    name: 'Sugar',
                    time: [2, 44]
                },
                {
                    id: 8,
                    name: 'Lonely Day',
                    time: [3, 19]
                },
                {
                    id: 9,
                    name: 'Lost in Hollywood',
                    time: [5, 9]
                },
                {
                    id: 10,
                    name: 'Chop Suey!',
                    time: [2, 57]
                }
            ]
        },
        {
            title: 'Green Day',
            songs: [
                {
                    id: 11,
                    name: '21 Guns',
                    time: [4, 16]
                },
                {
                    id: 12,
                    name: 'Boulevard of broken dreams!',
                    time: [6, 37]
                },
                {
                    id: 13,
                    name: 'Basket Case!',
                    time: [3, 21]
                },
                {
                    id: 14,
                    name: 'Know Your Enemy',
                    time: [4, 11]
                }
            ]
        },
        {
            title: 'Linkin Park',
            songs: [
                {
                    id: 15,
                    name: 'Numb',
                    time: [3, 11]
                },
                {
                    id: 16,
                    name: 'New Divide',
                    time: [4, 41]
                },
                {
                    id: 17,
                    name: 'Breaking the Habit',
                    time: [4, 1]
                },
                {
                    id: 18,
                    name: 'Faint',
                    time: [3, 29]
                }
            ]
        }
    ]
    const MusicBox = () => {
        const MusicBox = document.getElementById('musicBox');
        MusicList.map(Artist => {
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            div.innerHTML += `<h4>${Artist.title}</h4>`;
            Artist.songs.map(song => {
                let li = document.createElement('li');
                li.innerHTML = `<a class="_addbtn" data-id=${song.id} href="#">${song.name} время ${song.time.join(':')}</a>`;
                ul.appendChild(li);
                let addbtn = li.querySelector('._addbtn');
                addbtn.addEventListener('click', (e) => {
                    let id = e.target.dataset.id;
                    observable.sendMessage(id);
                });
            })
            div.appendChild(ul)
            MusicBox.appendChild(div)
        });
    }
    MusicBox()

    let observable = new Observable();
    let addPlayList = new Observer(function (id) {
        MusicList.forEach(Artist => {
            let mysong = Artist.songs.filter(item => +item.id === +id);
            if (mysong.length > 0) {
                let newobjsong = {title: Artist.title};
                newobjsong = Object.assign(
                    newobjsong,
                    mysong[0]
                )
                let flag = PlayList.filter(Song => Song.id == mysong[0].id);
                if (flag.length > 0) {
                    alert('Песня уже есть в плэйлисте')
                } else {
                    PlayList.push(newobjsong);
                }
            }
        });
        renderPlaylist();
    })
    let addPlayyer = new Observer(function (id) {
        MusicList.forEach(Artist => {
            let mysong = Artist.songs.filter(item => Number(item.id) === Number(id));
            if (mysong.length > 0) {
                let player = document.getElementById('player');
                let timer = document.getElementById('timer');
                player.innerHTML = `<h4>   ${Artist.title} <br> ${mysong[0].name}</h4>`
                timer.innerHTML = mysong[0].time.join(':');
            }
        });
    })
    let clearinterval = new Observer(function (id) {
        clearInterval(interval);
        pause=false;
    })
    observable.addObserver(addPlayList);
    observable.addObserver(addPlayyer);
    observable.addObserver(clearinterval);
    let PlayList = [];

    function renderPlaylist() {
        let playList = document.getElementById('playList');
        let message;
        if (PlayList.length === 0) {
            message = 'У вас в плэйлисте пусто';
        } else {
            message = `У вас в плэйлисте ${PlayList.length} песен`;
        }
        playList.innerHTML = `<h2>${message}</h2><ul></ul>`;

        let ul = playList.querySelector('ul');
        PlayList.map(Artist => {
            let li = document.createElement('li');
            li.innerHTML = `<a class="playbtn" data-id=${Artist.id} href="#">${Artist.title} - ${Artist.name} - ${Artist.time.join(':')} </a>`;
            ul.appendChild(li);
            let playbtn = li.querySelector('.playbtn');
            playbtn.addEventListener('click', (e) => {
                let id = e.target.dataset.id;
                console.log(id);
                observablePlaylist.sendMessage(id);
            });
        });
    }
    let observablePlaylist = new Observable();
    observablePlaylist.addObserver(addPlayyer);
    observablePlaylist.addObserver(clearinterval);



    let interval = null;
    let pause = false;
    let observableTimer = new Observable();
    let addTimer = new Observer(function (time) {
        let timeArr = time.split(':');
        let timer = document.getElementById('timer');
        if (!pause) {
            interval = setInterval(count, 1000);
            pause = true;
        }else{
            pause=false;
            clearInterval(interval);
        }
        function count() {
            timeArr[1]--;
            if (timeArr[1] == -1) {
                timeArr[0]--;
                timeArr[1] = 59;
            }
            let [minutes, seconds] = timeArr;
            if (seconds == 0 && minutes == 0) {
                clearInterval(interval);
            }
            if (seconds < 10) {
                timer.innerHTML = minutes + ": " + "0" + seconds + " ";
            } else {
                timer.innerHTML = minutes + ": " + seconds + " ";
            }
        }
    })
    observableTimer.addObserver(addTimer);
    let playbtn = document.querySelector('.playbtn');
    playbtn.addEventListener('click', function () {
        let time = document.getElementById('timer').innerHTML;
        observableTimer.sendMessage(time);
    })
}

export default ObserverPlayList;
