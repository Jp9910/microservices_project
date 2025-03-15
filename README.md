# E-Commerce com microsserviçosdock

### Passos para executar a aplicação localmente
- Baixar o `Docker` e o `docker-compose`
- Executar o comando `docker-compose -f docker-compose-no-env-files.yaml up` 

### 

Pode levar alguns minutos caso seja a primeira vez pois muitas imagens serão baixadas

### Usar a aplicação
Acessar `localhost:80` em um navegador.

#### Atualizar submódulos
Um submódulo é apenas um ponteiro para um commit específico em outro repositório, visualizado como uma pasta. A partir da pasta raiz deste projeto, pode-se navegar para a pasta correspondente ao submódulo e buscar as alterações mais recentes com o `git pull` ou mesmo commitar novas alterações. Em seguida, volta-se para a raiz deste projeto e usa-se `git add <pasta_correspondente_ao_submodulo>` e `git commit -m "<mensagem>"`, assim atualizando a referência do submódulo para o commit mais novo.