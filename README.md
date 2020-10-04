# Google-Cloud-Function

Trabalho de criação de functions no google cloud salvando uma collection no firestore e depois recuperando esse dado com um filtro.

## Endpoint criado para salvar os carros

https://us-central1-cloud-286400.cloudfunctions.net/saveCars

Para facilitar a utilização da function os dados do carro e passado via query exemplo:

https://us-central1-cloud-286400.cloudfunctions.net/saveCars?&plaque=12345&color=Vermelho&price=105000.00&carModel=Chevrolet&brand=Cruze

## Endpoint criado para listar o carro pela placa

Passar o numero da placa via query

https://us-central1-cloud-286400.cloudfunctions.net/getCars?plaque=1234

## Descrição do trabalho

Joãozinho está fazendo uma coleção de dados de todos os carros que ele já viu. Para guardar esses dados ele quer salvar no datastore/firestore os carros com seus atributos placa, cor, preço, modelo e marca para isso você deverá implementar uma google cloud function, em qualquer linguagem que seja possível, que receba uma requisição http com os atributos mencionados e salve no datastore. Faça uma outra function que seja capaz de mostrar os dados de um veículo recebendo a placa como parâmetro. O trabalho deve ser comitado no git (github, gitlab) deve ter um readme.md mostrando o endpoint que deve ser usado para enviar os dados e para ler os dados, bem como um print do resultado da chamada da function, um mostrando o dado persistido no DataStore e outro print demonstrando a function que busca os dados. Pode ser em trio.
