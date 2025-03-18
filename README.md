# E-Commerce com microsserviçosdock

### Passos para executar a aplicação localmente
- Baixar o `Docker` e o `docker-compose`
- Executar o comando `docker-compose -f docker-compose-no-env-files.yaml up`

(Pode levar alguns minutos caso seja a primeira vez pois muitas imagens serão baixadas)

### Usar a aplicação
Acessar `localhost:80` em um navegador.

### Configurar Grafana:
- Adicionar fonte de dados:
    No menu lateral, ir em Data Sources. No canto superior direito, clicar em Add New Data Source, selecionar Prometheus, e no campo Connection, digitar `http://prometheus-auth:9090`, em seguida rolar para baixo e clicar em Save & Test
- Importar dashboard:
    No menu lateral, ir em Dashboards. No canto superior direito, Clicar no botão New > Import. Colar o conteúdo do arquivo `grafana/dashboard-template-another-instance.json` na caixa de texto `import via dashboard JSON model` e clicar em Load e em seguida em Import

#### Atualizar submódulos
Um submódulo é apenas um ponteiro para um commit específico em outro repositório, visualizado como uma pasta. A partir da pasta raiz deste projeto, pode-se navegar para a pasta correspondente ao submódulo e buscar as alterações mais recentes com o `git pull` ou mesmo commitar novas alterações. Em seguida, volta-se para a raiz deste projeto e usa-se `git add <pasta_correspondente_ao_submodulo>` e `git commit -m "<mensagem>"`, assim atualizando a referência do submódulo para o commit mais novo.