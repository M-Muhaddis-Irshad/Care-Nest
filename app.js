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

    // Logo_Icons/icons/sect1Svgs/mobile-phone.svg

    // Mail Svg_________________________________________
    fetch('Logo_Icons/icons/sect1Svgs/mail.svg')
        .then(res => res.text())
        .then(data => {
            mailSvg.innerHTML = data;
        });

    // Logo_Icons/icons/sect1Svgs/mail.svg

    // Location Svg_________________________________________
    fetch('Logo_Icons/icons/sect1Svgs/location.svg')
        .then(res => res.text())
        .then(data => {
            locationSvg.innerHTML = data;
        });

    // Logo_Icons/icons/sect1Svgs/location.svg

}