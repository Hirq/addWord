export const theme = {
  grey100: 'hsl(0, 0%, 96%)',
  grey200: 'hsl(0, 0%, 90%)',
  grey300: 'hsl(0, 0%, 70%)',
  black: 'hsl(0, 0%, 0%)',
  light: 300,
  bold: 600,
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    s: '1.6rem',
    m: '2.1rem',
    l: '2.4rem',
    xl: '4rem',
  },
}

export const lightTheme = {
  ...theme,
  body: 'hsl(175, 68%, 82%)',
  bodyExtra: 'hsl(175, 54%, 72%)',
  text: 'hsl(254, 12%, 9%)',
  leftBar: 'hsl(207, 81%, 33%)',
  topBar: 'hsl(207, 81%, 33%)',
  colorButton: 'orange',
  activeIconColor: 'orange',
  colorButtonSecondary: 'white',
  colorBorder: '#FFF',
}

export const darkTheme = {
  ...theme,
  body: 'hsl(175, 47%, 14%)',
  bodyExtra: 'hsl(177, 100%, 12%)',
  text: 'hsl(175, 69%, 85%)',
  leftBar: 'hsl(175, 34%, 28%)', 
  topBar: 'hsl(175, 34%, 28%)',
  colorButton: 'hsl(100, 20%, 80%)',
  activeIconColor: 'hsl(100, 20%, 80%)',
  colorButtonSecondary: 'white',
  colorBorder: '#6B8096',
  colorButtonThird: 'hsl(105, 34%, 28%)',


  gradient: 'linear-gradient(#091236, #1E215D)', // czy potrzebne to nam?
}

