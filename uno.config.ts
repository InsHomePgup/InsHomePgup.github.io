import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  // Icon classes below only ever appear in Markdown frontmatter data, not literal
  // template text, so Uno's static scanner can't discover them on its own.
  safelist: ['i-ri-basketball-line', 'i-ri-run-line', 'i-ri-swim-line'],
})
