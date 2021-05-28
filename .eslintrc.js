module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: { sourceType: "module" },
      plugins: ["@typescript-eslint", "import"],
      rules: {
        //  エイリアス設定を許可
        "import/no-unresolved": "off",

        //  指定したNode.jsのバージョンでサポートされていない構文を使おうとすると警告します
        "node/no-unsupported-features/es-syntax": "off",

        //  クラスの名重複を拒否
        "no-dupe-class-members": "error",

        //  宣言はしているが利用していない不要な変数を拒否 引数はOK
        "no-unused-vars": ["error", { args: "none" }],
        "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],

        //  配列はリテラル文法で作成を強制
        "no-array-constructor": "error",
        "@typescript-eslint/no-array-constructor": "error",

        //  同じプロパティのgetとsetは連続しての記述を強制
        "@typescript-eslint/adjacent-overload-signatures": "error",

        //  requireの拒否
        "@typescript-eslint/no-var-requires": "error",

        //  console.log()等を許可
        "no-console": "off",

        //  if 文の条件を満たすために絶対に真にならない if 文
        "no-dupe-else-if": "error",

        //  import 文で作成した変数への代入
        "no-import-assign": "error",

        //  setter内でのリターン
        "no-setter-return": "error"
      },
      globals: {
        console: false,
        process: false,
        Buffer: false,
        setTimeout: false,
        Promise: false,
        __dirname: false,
        Reflect: false,
        FileReader: false,
        ArrayBuffer: false,
        FormData: false,
        document: false,
        window: false,
        localStorage: false,
        location: false,
        URLSearchParams: false,
        ENV: true
      },
      env: {
        browser: true,
        es2020: true,
        node: true
      },
      settings: {
        "import/resolver": {
          node: { extensions: [".ts", ".tsx", ".js", ".jsx", ".json"] },
          webpack: {
            config: "./webpack/webpack.config.base.js",
            extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"]
          }
        },
        node: {
          tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
        }
      }
    }
  ]
};
