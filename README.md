# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
TestComponents
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 02
│  │  │  └─ 73b357177d09427eac60f9b8ebc394c09a47c1
│  │  ├─ 04
│  │  │  ├─ 2a5e1c82c6d7e9a3dcb7683b0f502d55ee65f5
│  │  │  └─ 9bd665f58c6074b2b250bda7807fe2d6c5bed6
│  │  ├─ 09
│  │  │  └─ 8dad1185004ab518e187af166632b0d90c0ea7
│  │  ├─ 0b
│  │  │  └─ d68fe98655cc1e51810ccfef252427e1a52b37
│  │  ├─ 0d
│  │  │  └─ 6babeddbdbc9d9ac5bd4d57004229d22dbd864
│  │  ├─ 10
│  │  │  └─ 1bd5a3b2a261002e13022184bb57eb2e1d6ab9
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 12
│  │  │  └─ 04df998d0ed5a1a3da59160cac78ee458c39c5
│  │  ├─ 15
│  │  │  ├─ 35eb9b8192efc0992daf0a0adc1d424660890d
│  │  │  └─ 8e0268a34311f5258d3f94f350dde3f286101f
│  │  ├─ 1a
│  │  │  └─ f4657f92f002c454d80e1ed16052bd853940c2
│  │  ├─ 29
│  │  │  └─ cb6d5a087700036dab7463dbccaea29da0be1b
│  │  ├─ 2b
│  │  │  └─ 10f94e0670e00502079b8c92259d99458b8284
│  │  ├─ 33
│  │  │  └─ a3a61f611e8ba3a0840d7d934dc265461db7e9
│  │  ├─ 36
│  │  │  └─ ce90871f7703c422c64e78ade4d08389f9475e
│  │  ├─ 37
│  │  │  └─ 914b18f2f5db86c31342ec07065b8e5d5d6f02
│  │  ├─ 3d
│  │  │  └─ 7150da80e43e3650342aa4758fa8b74e95d6d6
│  │  ├─ 42
│  │  │  └─ 72ab9c990a1680030bbfd5181d983a6b995751
│  │  ├─ 45
│  │  │  └─ 5a9d8601c94812a497d9685bdd023576a36830
│  │  ├─ 4b
│  │  │  └─ 2fc7c44b8043dd7e48b13b40a2fd9c86fc753a
│  │  ├─ 4c
│  │  │  └─ e341a50a7955bffc4ae09ab641b4df7c3974ec
│  │  ├─ 51
│  │  │  └─ 570900ce81202068c282568d3be15e14467cac
│  │  ├─ 53
│  │  │  └─ 0709bc1217efa55381695b81007deaababe82d
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 60
│  │  │  └─ d38740cf61398259bb7f326e38aa2df6807c91
│  │  ├─ 61
│  │  │  └─ 19ad9a8faaa5073a454f67b50fb98a25972fd2
│  │  ├─ 63
│  │  │  └─ ccb4bd891a276559e9feccb4e1464bea213a59
│  │  ├─ 65
│  │  │  └─ d126ced9a2cf292e18e7e26c806539c539b0ce
│  │  ├─ 67
│  │  │  └─ 56e63aebcb8e8b7d504721f2cfc7d222f955cb
│  │  ├─ 68
│  │  │  └─ 3ac90a36cceeaba2f85e4639e1b027f20eec8e
│  │  ├─ 69
│  │  │  └─ ac0074d7b4478169dbe5b26e3ae6290ace0543
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 6f
│  │  │  └─ fe6feabdc17f715771b69fd7f33ec2c57e7c30
│  │  ├─ 80
│  │  │  ├─ 97a370777a782bbe52082a338584d04e62e796
│  │  │  └─ c71d0f520ec6c1e084fc76927813492c06f605
│  │  ├─ 8f
│  │  │  └─ 79b08cdf28f568a9bfc9d2fee39bd85d4831e3
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 95
│  │  │  └─ deb38a88de416671e20ebc28dcd397d6910331
│  │  ├─ 97
│  │  │  └─ ede7ee6f2d37bd2d76e60c0b6a447bee718b05
│  │  ├─ a3
│  │  │  └─ 288830e348df3b7d0fae3a5694c68aaa19877c
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ 1a1b93bb64ebb533f82b9503435798d13527a1
│  │  ├─ a7
│  │  │  ├─ 49629df9ef3b4e20b86ab1a2482040df3ce8dd
│  │  │  └─ fc6fbf23de2a53e36754bc4a2c306d0291d7b2
│  │  ├─ af
│  │  │  └─ e48ac750194a747f5665300d14049f72011a33
│  │  ├─ b5
│  │  │  └─ e79ec3772b5bcee371f7938428af28a48524c8
│  │  ├─ b9
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ bb
│  │  │  └─ c1118ba68148642da6bb7f00038386dc7ee2f4
│  │  ├─ bd
│  │  │  └─ 995f46d0d2e678543e283caf0c988b5e336c29
│  │  ├─ c3
│  │  │  └─ 3be6ec52c42dfef1313b1e572e872a98cea20f
│  │  ├─ c8
│  │  │  └─ 06ddf023e87c6e426392d0bc03cd9798a7402f
│  │  ├─ c9
│  │  │  └─ 1f4f33544e4716ad39653971c5c75fb42d3e12
│  │  ├─ cf
│  │  │  └─ ba6817aeb60fe5eac1f632b703b18da0ec8759
│  │  ├─ d3
│  │  │  └─ 41e8263e403615dadaa6ffc5fb7604837357f8
│  │  ├─ d4
│  │  │  └─ ac39a0ced924068b7625735c9bccac7b17f45d
│  │  ├─ d6
│  │  │  └─ c953795300e4256c76542d6bb0fe06f08b5ad6
│  │  ├─ d9
│  │  │  └─ a70528a3a15f66ba3f044d2df7dfd4ab13ba41
│  │  ├─ dc
│  │  │  └─ 91dc76370b78ec277e634f8615b67ca55a5145
│  │  ├─ df
│  │  │  └─ e0770424b2a19faf507a501ebfc23be8f54e7b
│  │  ├─ e1
│  │  │  └─ 17483013908f611e2515ac7d9cc3d1dfe0b7b1
│  │  ├─ e4
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e5
│  │  │  └─ cd249a2d3adb58bd4c557405c9c1c0a4c340ee
│  │  ├─ e7
│  │  │  ├─ 45ce640e02f460465bae87225b6971ce291e9c
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ef
│  │  │  └─ 04aa307bf9185030405e90fd82ea00e30d4302
│  │  ├─ f5
│  │  │  └─ 2f35fa3bb08d51a3f5344ea390c1e65c78edb9
│  │  ├─ f7
│  │  │  └─ a06817f85ac11ea56b5f1f478ffc2b76a6651f
│  │  ├─ f8
│  │  │  └─ 0b294bb5d87e89b394003840b4d5a7bd2e0d23
│  │  ├─ fe
│  │  │  └─ 85233ba39cc4d1cdc80d4251ec49d49af7c19c
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitattributes
├─ .gitignore
├─ .npmignore
├─ .storybook
│  ├─ main.ts
│  └─ preview.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ componentes
│  │  ├─ index.ts
│  │  └─ TestComponent
│  │     └─ TestComponent.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ stories
│  │  ├─ assets
│  │  │  ├─ accessibility.png
│  │  │  ├─ accessibility.svg
│  │  │  ├─ addon-library.png
│  │  │  ├─ assets.png
│  │  │  ├─ avif-test-image.avif
│  │  │  ├─ context.png
│  │  │  ├─ discord.svg
│  │  │  ├─ docs.png
│  │  │  ├─ figma-plugin.png
│  │  │  ├─ github.svg
│  │  │  ├─ share.png
│  │  │  ├─ styling.png
│  │  │  ├─ testing.png
│  │  │  ├─ theming.png
│  │  │  ├─ tutorials.svg
│  │  │  └─ youtube.svg
│  │  ├─ button.css
│  │  ├─ Button.stories.ts
│  │  ├─ Button.tsx
│  │  ├─ Configure.mdx
│  │  ├─ header.css
│  │  ├─ Header.stories.ts
│  │  ├─ Header.tsx
│  │  ├─ page.css
│  │  ├─ Page.stories.ts
│  │  └─ Page.tsx
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```