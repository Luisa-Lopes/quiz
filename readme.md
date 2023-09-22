# QUIZ

    O objetivo deste desafio é construir um site de Quiz, através do uso do HTML, CSS e Javascript.
    Esse Quiz deve possuir 3 tipos temas que são: artes e entretenimento, mundo e sociedade. Um arquivo do tipo JSON 
    com as perguntas será disponibilizado para ser utilizado no projeto. A partir disso, o site deve ter uma tela 
    inicial com um botão para começar o Quiz e em seguida deve ser apresentado ao usuário as 3 opções de temas e aguardar 
    sua escolha. Em seguida deve-se apresentaras perguntas referentes a temática que o usuário escolheu, em que deverá ser 
    disponibilizado um total de 10 perguntas, e cada uma vale 10 pontos. Na tela da pergunta deve-se apresentar a pergunta, 
    quantos pontos o jogador já possui, e o número da pergunta que ele está respondendo atualmente (ex.: questão 6 de 10). 
    Por fim, é necessário fazer uma tela de fim de jogo, em que é apresentado o total de pontos que o usuário obteve, a frase 
    “fim” ou “fim de jogo” e um botão para jogar novamente.
Para isso, o site deverá conter as seguintes funções:
1. Consumir um arquivo JSON: conectJson()
2. O função/event para começar o Quiz: start()
3. O função/event para escolher o tema do Quis: theme()
4. A função para criar a questão: createQuest()
5. A função que escolhe um número aleatório: chooseNum()
6. O função/event para alternativa escolhida está correta: answer()
7. A função que se o jogo acabou por erro de alternativo ou se acertou todas: end()
    
    Obs: event se refere ao método addEventListener() que anexa um manipulador de eventos ao elemento especificado, no caso `<button></button>`.

    Link addEventListerner: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

## conectJson()
    Essa função deverá ter uma função fetch() que irá receber os dados do arquivo `data.json` 
    que possui um formato de array de objetos.
## start()
    Esta função/event deverá começar o quiz e aparecer a opções de tema. Os temas são
        1. Artes e Entretenimento: artistas, cinema, televisão.
        2. Mundo: história geral, geografia geral, turismo e região. 
        3. Sociedade: personalidades, costumes.
## theme()
    Esta função/event deverá começar o quiz com o tema selecionado.
## createQuest(tema)
    Esta função vai chamar a chooseNum(tema) que retornará um número aleatório de acordo 
    com o tema. Este número selecionará uma determinada questão do arquivo JSON e mostrará 
    no site a pergunta e as opções. 
## chooseNum(tamanho, tema)
    Essa função será responsável por gerar e retornar um número aleatório entre 1 e o 
    parâmetro tamanho, que servirá para escolher a pergunta que será apresentada. Em seguida 
    ela deve registrar o número escolhido para que a pergunta não seja repetida, e com isso, 
    verificar se o número gerado aleatoriamente já foi utilizado anteriormente.
    As perguntas de cada tema estão agrupadas num intervalo de 15 em 15, então essa diferenciação 
    deve ser feita utilizando o parâmetro tema.
## answer()
    A função alternativa será responsável por checar a alternativa que o usuário escolheu, uma vez 
    feito isso, deve-se checar se alternativa escolhida é a correta, se sim o jogador prossegue para a 
    próxima pergunta, caso não seja deve-se declarar o fim do jogo.
## fim()
    Essa função declara o fim do jogo e exibe a opção de jogar novamente, caso o jogador tenha acertado 
    todas as perguntas, exibe uma mensagem de “parabéns, você acertou todas as perguntas”, caso contrário 
    exibe a mensagem “Fim”.
* O arquivo JSON
    
    O arquivo será disponibilizado e nele contará uma lista de 45 objetos e cada um com atributos: id, tema,
  pergunta, 1, 2, 3, correta. Os números 1,2,3 simbolizada as alternativas.
    Os objetos com id de 0 a 14 fazem parte do tema mundo, de 15 a 29 do tema artes e entretenimento e por fim de 30 a 44, sociedade.
