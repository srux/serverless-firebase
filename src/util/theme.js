export default {
        palette: {
          primary: {
            main: '#00838f',
            light:'#339ba5',
            dark:'#005b64',
            contrastText:'#005b64'
          },
          secondary: {
            main: '#fdd835',
            light:'#fddf5d',
            dark:'#b19725',
            contrastText:'#339ba5'
          }
        },
        styles: {
          typography: {
            useNextVariants:true,
          },
            form: {
                textAlign: 'center',
                justifyContent: 'center',
            },
            logoicon: {
                margin: '1.5em auto 1.5em auto',
                borderRadius: '.5em'
            },
            pageTitle: {
                margin: '.5em auto .5em auto'
            },
            textField: {
                margin: '.5em auto .5em auto'
            },
            button: {
                marginTop: '1em',
                position: 'relative'
            },
            customError: {
                color: 'red',
                fontSize: '.8em',
                marginTop: '.7em'
            },
            progress: {
                position: 'absolute'
            }
          }
}