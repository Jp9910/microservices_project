# Sistema web de E-Commerce em microsserviços

### Passos para executar a aplicação localmente
- Baixar o `Docker` (https://docs.docker.com/engine/install/) e o `docker-compose` (https://docs.docker.com/compose/install/)
- Executar o comando `docker-compose -f docker-compose-no-env-files.yaml up -d`

(Pode levar alguns minutos caso seja a primeira vez pois muitas imagens serão baixadas)

### Usar a aplicação
Acessar `localhost:5173` em um navegador.

### Configurar os dashboards do Grafana:
- Acessar `localhost:9091` e entrar com o usuário `admin` e senha `admin`. Pode pular a troca de senha em seguida.

- Adicionar fonte de dados:
    No menu lateral, ir em Data Sources. No canto superior direito, clicar em `Add New Data Source`, selecionar `Prometheus`, e no campo Connection, digitar `http://prometheus-auth:9090`, em seguida rolar para baixo e clicar em `Save & Test`.

    No menu lateral, ir em Data Sources. No canto superior direito, clicar em `Add New Data Source`, selecionar `Loki`, e no campo Connection, digitar `http://loki-auth:3100`, em seguida rolar para baixo e clicar em `Save & Test`.

- Importar dashboard:
    No menu lateral, ir em `Dashboards`. No canto superior direito, Clicar no botão `New > Import`. Colar o conteúdo do arquivo `grafana/dashboard-template-another-instance.json` na caixa de texto `import via dashboard JSON model` e clicar em `Load`. Selecionar a fonte de dados Prometheus (configurada no passo acima) e em seguida clicar em `Import`.

- Ver dashboard: Clicar em `Dashboards` no menu lateral e em seguida selecionar o dashboard importando no passo anterior `dashboard-api-auth-prometheus`

#### Atualizar submódulos do repositório principal
Um submódulo é apenas um ponteiro para um commit específico em outro repositório, visualizado como uma pasta. A partir da pasta raiz deste projeto, pode-se navegar para a pasta correspondente ao submódulo e buscar as alterações mais recentes com o `git pull` ou mesmo commitar novas alterações. Em seguida, volta-se para a raiz deste projeto e usa-se `git add <pasta_correspondente_ao_submodulo>` e `git commit -m "<mensagem>"`, assim atualizando a referência do submódulo para o commit mais novo.