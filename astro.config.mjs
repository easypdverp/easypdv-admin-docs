// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Helper to generate sidebar items for a version
function versionSidebar(version) {
  return [
    { label: 'Introducao', autogenerate: { directory: `${version}/introducao` } },
    { label: 'Dashboard', autogenerate: { directory: `${version}/dashboard` } },
    { label: 'Cadastros', autogenerate: { directory: `${version}/cadastros` } },
    { label: 'Vendas', autogenerate: { directory: `${version}/vendas` } },
    { label: 'Suprimentos', autogenerate: { directory: `${version}/suprimentos` } },
    { label: 'Financeiro', autogenerate: { directory: `${version}/financeiro` } },
    { label: 'Espaco Gestor', autogenerate: { directory: `${version}/espaco-gestor` } },
    { label: 'Espaco Contador', autogenerate: { directory: `${version}/espaco-contador` } },
    { label: 'Gerenciador de Arquivos', autogenerate: { directory: `${version}/gerenciador-de-arquivos` } },
    { label: 'Notificacoes', autogenerate: { directory: `${version}/notificacoes` } },
    { label: 'Preferencias', autogenerate: { directory: `${version}/preferencias` } },
    { label: 'Relatorios', autogenerate: { directory: `${version}/relatorios` } },
    { label: 'FAQ', autogenerate: { directory: `${version}/faq` } },
    { label: 'Versionamento', autogenerate: { directory: `${version}/versionamento` } },
  ];
}

export default defineConfig({
  integrations: [
    starlight({
      title: 'Despensinha ERP - Docs',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Portugues',
          lang: 'pt-BR',
        },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Despensinha' }],
      components: {
        Header: './src/components/Header.astro',
      },
      sidebar: [
        {
          label: 'latest',
          collapsed: true,
          items: versionSidebar('latest'),
        },
        {
          label: 'v1-27-1',
          collapsed: true,
          items: versionSidebar('v1-27-1'),
        },
                {
          label: 'v1-27-2',
          collapsed: true,
          items: versionSidebar('v1-27-2'),
        },
        // SNAPSHOT_INSERT_ABOVE
      ],
    }),
  ],
});
