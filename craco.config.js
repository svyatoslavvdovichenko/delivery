const CracoLessPlugin = require ("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              "@primary-color": "#b7b292",
              "@border-radius-base": "15px",
              "@border-radius-sm": "15px",
              "@table-footer-bg": "#203f40",
              "@table-header-bg": "#203f40",
              "@table-body-selected-sort-bg": "#fff0",
              "@modal-header-bg": "#203f40",
              "@modal-footer-bg": "#203f40",
              "@modal-content-bg": "#203f40",
              "@component-background": "#226f72",  
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
