{// Svg's Section__________________

    {// Svg's Start's__________________________________________

        const phoneSvg = document.getElementById('phoneSvg');
        const mailSvg = document.getElementById('mailSvg');
        const locationSvg = document.getElementById('locationSvg');

        // Phone Svg_________________________________________
        fetch('Logo_Icons/icons/sect1Svgs/mobile-phone.svg')
            .then(res => res.text())
            .then(data => {
                phoneSvg.innerHTML = data;
            });

        // Mail Svg_________________________________________
        fetch('Logo_Icons/icons/sect1Svgs/mail.svg')
            .then(res => res.text())
            .then(data => {
                mailSvg.innerHTML = data;
            });

        // Location Svg_________________________________________
        fetch('Logo_Icons/icons/sect1Svgs/location.svg')
            .then(res => res.text())
            .then(data => {
                locationSvg.innerHTML = data;
            });

    }


    { // About Cards Svg Start's

        const treatment = document.getElementById('treatment');
        const starOfLife = document.getElementById('starOfLife');
        const heartRate = document.getElementById('heartRate');
        const stethoscope = document.getElementById('stethoscope');

        // Treatment Svg_____________________________
        fetch("Logo_Icons/icons/aboutSectSvgs/caduceus.svg")
            .then(res => res.text())
            .then(data => treatment.innerHTML = data)

        // Star of Life Svg_____________________________
        fetch("Logo_Icons/icons/aboutSectSvgs/round-star-of-life.svg")
            .then(res => res.text())
            .then(data => starOfLife.innerHTML = data)

        // Heart Svg_____________________________
        fetch("Logo_Icons/icons/aboutSectSvgs/heart-rate.svg")
            .then(res => res.text())
            .then(data => heartRate.innerHTML = data)

        // Stethoscope Svg_____________________________
        fetch("Logo_Icons/icons/aboutSectSvgs/stethoscope.svg")
            .then(res => res.text())
            .then(data => stethoscope.innerHTML = data)

    }

}