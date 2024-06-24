/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    //dorost kardan font family
    fontFamily: {
      //esm delkhah
      // pizza: 'Roboto Mono, monospace',
      //ino harja bekhaym estefade konim :font-pizza
      sans: 'Roboto Mono, monospace',
      //vaghti sans mizanim yani b tor koli ru hame chi emal mishe
    },

    extend: {
      //ag bekhaym rangaye ghabli k dadim bemone bayad to extend bezanim
      //harjam bekhaym estefade konim masaln:bg-pizza
      // kolan az har chi bekhaym estefade konim tu inja hast:
      // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      //ma alan az screen estefade kardim tu barname vali momkene tu gooshi moshkel beshe pas az yechi modern tar estefade mikonim dvh
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
