# LUME — Convites que ganham vida

Site institucional da marca LUME, feito em Python com Flask.

## Como rodar

1. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

2. Rode o servidor:
   ```
   python app.py
   ```

3. Abra o navegador em: http://localhost:5000

## Estrutura

```
lume/
├── app.py                 # Servidor Flask e rotas
├── requirements.txt
├── templates/
│   └── index.html         # Página única com todas as seções
└── static/
    ├── css/style.css      # Estilo (paleta, tipografia, animações)
    └── js/main.js          # Menu mobile + animações de rolagem
```

## Seções incluídas

- Início (hero com o brilho animado da marca)
- Sobre a marca
- Portfólio
- Serviços (com preços de exemplo)
- Contato (formulário funcional, envia para o terminal — pronto para conectar a e-mail/banco de dados depois)

## Próximos passos sugeridos

- Trocar os textos e preços de exemplo pelos reais
- Substituir os cartões de portfólio por fotos/vídeos reais dos convites
- Conectar o formulário de contato a um envio de e-mail (ex: Flask-Mail) ou a uma planilha/banco de dados
- Publicar em um serviço como Render, Railway ou PythonAnywhere
