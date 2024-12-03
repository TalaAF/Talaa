


const toggleIcon = document.getElementById('toggle-dark-mode');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChElEQVR4nO2ZS2sUQRDHGzFxFUEUIx7UL5GLh4Wxihg8iI9g/Do5mui38BEhRwm71eYwaMCLIe7mYOILPHvQOOlaQcGWGvMYR6Lz6HlsmD8ULDPT3fXb6umprlaqUaNGlcoQPjOEL9WwizVaMTXs4gakZqpdRDZp8pT1vVZZIHZlfGRzsX1SuYYwGpg19INOe6xokKDTHmPCV6zh6+eliRPKlWznyhHW2AudIlhLA2MIlo2G5+kgYG37D+hJZDI7nmCAdbPonXU6QHwMgtdFjFE4TGkQ+4Y+wwIQl/SRdermh9HYM4SD+KB2YXp00IXbhnCeNW4YAiP2+zfOyz15JtpmS18+Ywi/SZ+lQew67HutwPdOR69xF6YMwYedlWo/Mxrfs8ab0bbSl3UQ3VyyMzOHmPDu/wD+MoI5aavqItZ4LzXErsGsqoO4C1PZIXYigzcqhbAL06Pb8z0XiLxX8QWgVMkKlDsae3ZLVSVD8NgdCDysEuStw4hsOHPM+t5xo/HjP+bycvR51hg4BAmy+pEeJJbFVgaik2fTiWQI3jgEWVdViTU+cghyvzKQA7P82pXxEaPx3dB/EEWSxeaDwJ/8FK6pOoizZL57dkfVRTZM42EudSQ0zFaexlvfO2yfXD0WvSZZbJJ3JswIupeuR9tK2ce6rpgk3LevssZP8V2dOCMrkOROYYGCcEtMCgpM8EDuxR2WDyATfil1qxurdqxKZPL2GcKHBTksp/hQZMmmjLpZaXWnoGgYeaml7psl9GlPrII/YKBvX1w8qlxpQJPnDeGPUovYGvqG8Dt3vHPKpQZLExdKPVbwvZaMqeqirCC1UwNSNx2YiJiUJ1aNGjVShegXnKzGiKYA4XcAAAAASUVORK5CYII=";  
} else {
    body.classList.remove('dark-mode');
    toggleIcon.src = "icons/icons8-moon-60.png";
}

toggleIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChElEQVR4nO2ZS2sUQRDHGzFxFUEUIx7UL5GLh4Wxihg8iI9g/Do5mui38BEhRwm71eYwaMCLIe7mYOILPHvQOOlaQcGWGvMYR6Lz6HlsmD8ULDPT3fXb6umprlaqUaNGlcoQPjOEL9WwizVaMTXs4gakZqpdRDZp8pT1vVZZIHZlfGRzsX1SuYYwGpg19INOe6xokKDTHmPCV6zh6+eliRPKlWznyhHW2AudIlhLA2MIlo2G5+kgYG37D+hJZDI7nmCAdbPonXU6QHwMgtdFjFE4TGkQ+4Y+wwIQl/SRdermh9HYM4SD+KB2YXp00IXbhnCeNW4YAiP2+zfOyz15JtpmS18+Ywi/SZ+lQew67HutwPdOR69xF6YMwYedlWo/Mxrfs8ab0bbSl3UQ3VyyMzOHmPDu/wD+MoI5aavqItZ4LzXErsGsqoO4C1PZIXYigzcqhbAL06Pb8z0XiLxX8QWgVMkKlDsae3ZLVSVD8NgdCDysEuStw4hsOHPM+t5xo/HjP+bycvR51hg4BAmy+pEeJJbFVgaik2fTiWQI3jgEWVdViTU+cghyvzKQA7P82pXxEaPx3dB/EEWSxeaDwJ/8FK6pOoizZL57dkfVRTZM42EudSQ0zFaexlvfO2yfXD0WvSZZbJJ3JswIupeuR9tK2ce6rpgk3LevssZP8V2dOCMrkOROYYGCcEtMCgpM8EDuxR2WDyATfil1qxurdqxKZPL2GcKHBTksp/hQZMmmjLpZaXWnoGgYeaml7psl9GlPrII/YKBvX1w8qlxpQJPnDeGPUovYGvqG8Dt3vHPKpQZLExdKPVbwvZaMqeqirCC1UwNSNx2YiJiUJ1aNGjVShegXnKzGiKYA4XcAAAAASUVORK5CYII=";  
    } else {
        localStorage.setItem('theme', 'light');
        toggleIcon.src = "icons/icons8-moon-60.png"; 
    }
});
