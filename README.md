![image](https://github.com/KipeTBest/smth_strange/assets/90268471/938f5560-e850-482e-be7b-75de831585f6)Я использовал WebStrom, там все и настраивал через NodeJS. npm --version у меня 9.2.0

Скачиваем. Затем пропысываем npm install - установит все зависимости (ну или можно руками: npm install express)

Затем пишем запускаем build.sh, deploy.sh.

Включить все: docker-compose up -d
Выключить все: docker-compose down

Наше приложение работает по localhost:3000
grafana находится на localhost:3001

Затем, как все заработало, заходим в браузер к grafana. Там вводим admin (логин и пароль), нам предложат поменять пароль, меняем его.
Слева будут вкладки. Нам нужно COnnections -> Data Sources -> Add new Data Source -> loki

Настраиваем loki:
название: loki
url: http://loki:3100
Нажимаем Save & Test

После увидим плашку, что все окей.

Слева снова находим Dashboards -> add new dashboard -> выбираем loki -> вписываем команду {job="varlogs"} -> run query -> меняем изображение на таблицу -> сохраняем

Вот такой результат должен получиться:![image](https://github.com/KipeTBest/smth_strange/assets/90268471/2de56911-28d1-497e-bc3e-702f86a0fe4b)
