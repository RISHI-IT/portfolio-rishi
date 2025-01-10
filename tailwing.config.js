tailwind.config={
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit,minmax(200px,1fr))'
            },
            fontFamily:{
                Outfit:["Outfit", "serif"],
                Ovo:["Ovo","serif"]
            },
            colors:{
                lightHover:'#fcf4ff',
                darkHover:'#2a004a',
                darkTheme:'#11001F',
            },
            boxShadow:{
                'black':'4px_4px_0_#000',
                'white':'4px_4px_0_#fff',
            },
            backgroundImage:{
                'dark-violet':'linear-gradient(to right,#1a002b,#330055,#1a002b)',
                'light-violet':'linear-gradient(to right,#ffffff,#ffe5d4,#cce7ff)',
            }
        }
        },
        darkMode:'selector'
}