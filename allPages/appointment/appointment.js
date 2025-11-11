const supabaseApi = supabase.createClient('https://ubdfphgftdztmmfqoxmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZGZwaGdmdGR6dG1tZnFveG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNzgwMDMsImV4cCI6MjA3Nzc1NDAwM30.SxvGOhgEIOTDXNajche0unZy4FfHFocaZVOW3lYh4H0')

const userEmail = localStorage.getItem('userEmail');
const sessionName = localStorage.getItem('userName');

let stopFunctionFlg = true;

// LogOut Query/Function____________________________
const logOutUser = async () => {
    const { error } = await supabaseApi.auth.signOut()
    if (error) {
        return
    }
    else {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        stopFunctionFlg = false;
        Swal.fire({
            title: "SignOut Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            window.location.reload()
            window.location.href = '/allPages/auth/login/login.html';
        }, 1500);
    }
}

const loginBtn = document.getElementById('loginBtn');

// Initially check that User is loggedin or not_____________________________

const isUserLoggedIn = async () => {
    const { data: { session }, error } = await supabaseApi.auth.getSession()

    if (!stopFunctionFlg) {
        return
    }

    if (session === null) {
        Swal.fire({
            title: "User isn't log in",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
        });
        setTimeout(() => {
            window.location.href = '/allPages/auth/login/login.html';
        }, 1000);
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        return
    }

    // After checking that session is not empty create a signout button______________________________
    loginBtn.innerHTML = `<a href="#" class="navLinks lastLink" id="signout">Signout <svg class="portal"></svg></a>`
    const signoutBtn = document.getElementById('signout');
    signoutBtn.addEventListener('click', async e => {
        e.preventDefault()
        await logOutUser()
    })

}

isUserLoggedIn()

// Auth End's'___________________________________________________




{// Stop the default behavior of <form>____________________________________
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        appoint()
    })
}



// Set Name Input value dynamically_____________________________________________
document.getElementById('name').value = sessionName;


// Set a Authenticated email of user dynamically direct from session_______________
const email = document.getElementById('email');
email.value = userEmail;
email.disabled = true;

// Drop Downs_________________________________________
const doctors = document.getElementById('doctors');
const date = document.getElementById('date');
const timing = document.getElementById('timing');

// Drop Downs 1st Value Remove______________________________
const Val1 = document.querySelectorAll('.val0');
const optArr = [doctors, date, timing];
optArr.forEach((optionsValue, i) => {
    if (optionsValue[i] !== 0) {
        Val1[i].style.display = "none";
    }
})


// Real Work Start's____________________________________________________
const appoint = () => {
    const nameFromDom = document.getElementById('name').value;
    if (!nameFromDom.trim()) {
        return alert("Input Can't be Empty")
    }
    const userName = (nameFromDom !== sessionName) ? nameFromDom : sessionName;
    console.log(userName);
    console.log(email.value);
}

// Array with the same index no. which is show in options for find the exact (Date & Time)______
const docNamesArr = [];

// Retrieve a session from supabase and set the values on DropDowns_____
const retrieve = async () => {
    const { data, error } = await supabaseApi
        .from('DoctorsData')
        .select('Data')

    if (error) {
        console.log(error.message)
        return
    }

    let Data = data[0].Data;

    // Run forEach loop on Data for set the names of doctors in the html <options> tag_____________ 
    Data.forEach((docs, index) => {
        const { Doctor: { Name } } = docs
        docNamesArr.push(Name);
        doctors.innerHTML += `<option value="${index}">${Name}</option>`;

        // Disable the date & time drop downs before doctor selection_____________________
        date.disabled = true;
        timing.disabled = true;
    });

    doctors.addEventListener('change', event => {

        // console.log(docNamesArr);
        
        // Reset the values of (Date & Time) drop downs on every Name change____________________
        const dateTimeDDowns = [date, timing];
        dateTimeDDowns.forEach(dDowns => dDowns.options.length = 0)
        const selectedDoctor = event.target.value

        const { Doctor: { Days, Timings } } = Data[selectedDoctor]

        console.log(`
            Name = ${docNamesArr[selectedDoctor]}
            Days = ${Days}
            Timings = ${Timings}
            `);


        date.disabled = false;
        timing.disabled = false;

        Days.forEach(days => {
            date.innerHTML += `<option value="${days}">${days}</option>`
        })

        Timings.forEach(timings => {
            timing.innerHTML += `<option value="${timings}">${timings}</option>`
        })

    })

}

retrieve()

const doctorsData = [
    {
        "Doctor": {
            "Name": ["Dr. Ali"],
            "Days": [
                "Monoday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "Timings": ["8:00AM - 1:00PM", "1:00PM - 5:30PM"]
        }
    },
    {
        "Doctor": {
            "Name": ["Dr. Ayesha"],
            "Days": [
                "Monoday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "Timings": ["8:00AM - 1:00PM", "1:00PM - 5:30PM"]
        }
    },
    {
        "Doctor": {
            "Name": ["Dr. Ahmed"],
            "Days": [
                "Monoday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "Timings": ["8:00AM - 1:00PM", "1:00PM - 5:30PM"]
        }
    },
    {
        "Doctor": {
            "Name": ["Dr. Rehan"],
            "Days": [
                "Monoday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "Timings": ["8:00AM - 1:00PM", "1:00PM - 5:30PM"]
        }
    },
    {
        "Doctor": {
            "Name": ["Dr. Sara"],
            "Days": [
                "Saturday",
                "Sunday"
            ],
            "Timings": ["9:30AM - 1:00PM", "1:00PM - 5:30PM"]
        }
    },
    {
        "Doctor": {
            "Name": ["Dr. Salman"],
            "Days": [
                "Saturday",
                "Sunday"
            ],
            "Timings": ["9:30AM - 1:00PM", "1:00PM - 5:30PM"]
        }
    }
]

{// Supabase Insert & Delete Query_______________________________

    const insert = async () => {
        const { error } = await supabaseApi
            .from('DoctorsData')
            .insert(
                {
                    id: 1,
                    Data: doctorsData
                }
            )

        if (error) {
            console.log(error.message)
            return
        }
    }
    // insert()


    const Delete = async () => {
        const response = await supabaseApi
            .from('DoctorsData')
            .delete()
            .eq('id', 1)
        console.log(response);

    }

    // Delete()
}