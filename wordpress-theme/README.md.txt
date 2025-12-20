# Tema WordPress - Clínica Levin

Tema WordPress moderno e elegante para a Clínica Levin, desenvolvido com foco em performance, acessibilidade e SEO.

## 📦 Instalação

1. Renomeie todos os arquivos `.txt` para suas extensões corretas (remova `.txt`)
2. Coloque a pasta `clinica-levin` em `wp-content/themes/`
3. Ative o tema no painel WordPress

## 📁 Estrutura de Arquivos

```
clinica-levin/
├── style.css              # Estilos principais + metadados do tema
├── functions.php          # Funções do tema
├── index.php              # Template principal
├── header.php             # Cabeçalho
├── footer.php             # Rodapé
├── front-page.php         # Página inicial
├── page.php               # Template de página genérica
├── page-sobre.php         # Template: Página Sobre
├── page-servicos.php      # Template: Página Serviços
├── page-produtos.php      # Template: Página Produtos
├── single.php             # Post individual
├── single-servico.php     # Serviço individual
├── archive.php            # Listagem de posts
├── 404.php                # Página de erro
└── assets/
    ├── js/
    │   └── main.js        # JavaScript principal
    └── images/            # Imagens do tema
        ├── hero-doctor.jpg
        ├── about-clinic.jpg
        └── ...
```

## 🎨 Personalização

### Customizer (Aparência > Personalizar)

- **Seção Hero**: Título, subtítulo e imagem
- **Informações de Contato**: Telefone, e-mail, endereço, WhatsApp
- **Redes Sociais**: Instagram, Facebook, YouTube, LinkedIn

### Custom Post Types

O tema registra os seguintes tipos de conteúdo:

1. **Serviços** (`servico`)
   - Campos personalizados: `service_features` (lista de benefícios)
   
2. **Produtos** (`produto`)
   - Campos personalizados: `product_url`, `product_discount`
   
3. **Depoimentos** (`depoimento`)

### Menus

- **Menu Principal** (primary)
- **Menu Rodapé** (footer)

### Widgets

- Sidebar
- Footer 1, 2 e 3

## 🔧 Configurações Recomendadas

### Páginas a Criar

1. **Início** - Definir como página inicial estática
2. **Sobre** - Usar template "Página Sobre"
3. **Serviços** - Usar template "Página Serviços"
4. **Produtos** - Usar template "Página Produtos"
5. **Blog** - Definir como página de posts
6. **Contato**
7. **Política de Privacidade**
8. **Termos de Uso**

### Configurações > Leitura

- Página inicial: [Início]
- Página de posts: [Blog]

## 🖼️ Imagens

O tema define os seguintes tamanhos de imagem:

- `hero-image`: 1200x800px
- `service-card`: 600x400px
- `blog-card`: 400x250px

## 📱 Responsividade

O tema é totalmente responsivo com breakpoints em:
- 576px (mobile)
- 768px (tablet)
- 968px (desktop pequeno)
- 1200px (desktop)

## ⚡ Performance

- Carregamento assíncrono de fontes Google
- Lazy loading de imagens
- CSS otimizado com variáveis
- JavaScript modular

## 🔐 Segurança

- Sanitização de todos os inputs
- Escape de outputs
- Nonces para AJAX
- Sem acesso direto a arquivos PHP

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do site.

---

Desenvolvido com ❤️ para Clínica Levin
